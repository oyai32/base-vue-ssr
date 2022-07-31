// nodejs 服务器
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

// 获取绝对地址
const resolve = (dir) => require('path').resolve(__dirname, dir);

const serverBundle = require('../dist/server/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template: require('fs').readFileSync(
    '../public/index.template.html',
    'utf-8'
  ), // （可选）页面模板
  clientManifest, // （可选）客户端构建 manifest
});

// 中间件处理静态文件请求
app.use(express.static('../dist/client', { index: false }));

app.get('*', async (req, res) => {
  try {
    const context = { url: req.url, title: 'ssr' };
    const html = await renderer.renderToString(context);
    res.send(html);
  } catch (error) {
    res.status(500).send('error:' + error);
  }
});

app.listen(3000, () => {
  console.log('success');
});
