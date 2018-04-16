import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/EN',
      name: 'ENG Index',
      component: Index,
    },
    {
      path: '/CH',
      name: 'CH Index',
      component: Index,
    },
  ],
});
