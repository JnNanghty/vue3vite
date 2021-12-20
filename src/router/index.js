import {createRouter, createWebHistory} from "vue-router";


const routes = [
  {
    path: '/',
    component: () => import('../Layout/Layout.vue'),
    redirect: '/home',
    meta: {name: '首页', icon: ''},
    children: [
      {
        path: '/home',
        component: () => import('../view/Home/Index.vue'),
        meta: {name: '首页1', icon: ''},
        children: [
          {
            path: '/home',
            component: () => import('../view/Home/Index.vue'),
            meta: {name: '首页1', icon: ''}
          },
          {
            path: '/home2',
            component: () => import('../view/Home/Home.vue'),
            meta: {name: '首页2', icon: ''}
          }
        ]
      },
      {
        path: '/home2',
        component: () => import('../view/Home/Home.vue'),
        meta: {name: '首页2', icon: ''}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
