import {createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: '/',
    component: () => import('../Layout/Layout.vue'),
    redirect: '/home',
    meta: {name: '首页', icon: '', hidden: false},
    children: [
      {
        path: '/home',
        component: () => import('../view/Home/Index.vue'),
        meta: {name: '首页1', icon: '', hidden: false}
      },
      {
        path: '/home2',
        component: () => import('../view/Home/Home.vue'),
        meta: {name: '首页2', icon: '', hidden: false}
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('../view/404.vue'),
    meta: {name: '404', icon: '', hidden: true}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
