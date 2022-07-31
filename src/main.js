import Vue from 'vue';
import App from './App.vue';

//引用createRouter，createStore
import { createRouter } from './router';

// 需要每次请求 放回一个vue实例(不用挂载app)
export function createApp(context) {
  const router = createRouter();
  const app = new Vue({
    router,
    context, // 用于和外的renderer交互
    render: (h) => h(App),
  });

  return { app, router };
}
