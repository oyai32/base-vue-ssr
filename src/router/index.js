import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Item from '@/components/Item';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/item', component: Item },
      // { path: '/', component: () => import('@/components/Home.vue') },
      // { path: '/item/:id', component: () => import('@/components/Item.vue') }
    ],
  });
}
