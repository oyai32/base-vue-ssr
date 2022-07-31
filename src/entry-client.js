// entry-client.js
// 挂载激活 app

import { createApp } from './main'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})