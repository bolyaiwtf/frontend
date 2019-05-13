import Vue from 'vue';
import VueRouter from 'vue-router';

import 'components/Root';
import 'components/Loading';

import IndexPage from 'components/IndexPage';
import NotFoundPage from 'components/NotFoundPage';

Vue.use(VueRouter);

const AppRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
});

export default AppRouter;
