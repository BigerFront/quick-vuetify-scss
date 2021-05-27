import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const isDev = process.env.NODE_ENV === 'development';
const router = new VueRouter({
  mode: isDev ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes,
});

// 不重定向白名单
// const whiteList = ['/login', '/', '/home', '/error'];

router.beforeEach((to, from, next) => {
  // TODO handle authorization

  next();
});
export default router;
