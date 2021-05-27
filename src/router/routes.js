import AboutLayout from '../layouts/AboutLayout';

const aboutRoutes = [
  {
    path: '/',
    name: 'aboutLayout',
    component: AboutLayout,
    meta: {},
    children: [
      {
        path: 'about',
        alias: ['/', '/about'],
        component: () =>
          import(/* webpackChunkName: "about" */ '~Views/portal/Index.vue'),
        meta: {},
      },
    ],
  },
];

const rootRoutes = [];

const routes = [...aboutRoutes, ...rootRoutes];

export default routes;
