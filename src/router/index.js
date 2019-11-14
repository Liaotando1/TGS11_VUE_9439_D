import Vue from 'vue';
import Router from 'vue-router';
const DashboardLayout = () =>
  import('../components/dashboardLayout.vue');

function loadView(view) {
  return () =>
    import(`../components/dashboardContents/${view}.vue`);
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        name: 'LayananController',
        path: '',
        component: loadView('layananController')
      }
    ]
  }
];
Vue.use(Router);
const router = new Router({ mode: 'history', routes: routes });
export default router;