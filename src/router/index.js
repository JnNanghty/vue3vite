import {createRouter, createWebHistory} from "vue-router";
import Layout from "../Layout/Layout.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/homeIndex',
    name: 'home',
    meta: {name: '首页', icon: '', hidden: false},
    children: [
      {
        path: 'homeIndex',
        name: 'homeIndex',
        component: () => import('../view/Home/Index.vue'),
        meta: {name: '首页1', icon: '', hidden: false}
      },
      {
        path: 'homeIndex2',
        name: 'homeIndex2',
        component: () => import('../view/Home/Home.vue'),
        meta: {name: '首页2', icon: '', hidden: false}
      }
    ]
  },
  {
    path: '/potion',
    component: Layout,
    name: 'potion',
    redirect: '/potion/potionIndex',
    meta: {name: '药水', icon: '', hidden: false},
    children: [
      {
        path: 'potionIndex',
        name: 'potionIndex',
        component: () => import('../view/Potion/Index.vue'),
        meta: {name: '药水1', icon: '', hidden: false},
        children: [
          {
            path: 'potionName',
            name: 'potionName',
            component: () => import('../view/Potion/Dali.vue'),
            meta: {name: '大力', icon: '', hidden: false}
          }
        ]
      },
      {
        path: 'potionCherry',
        name: 'potionCherry',
        component: () => import('../view/Potion/Cherry.vue'),
        meta: {name: '看看P', icon: ''}
      },
      {
        path: 'potionBeen',
        name: 'potionBeen',
        component: () => import('../view/Potion/Been.vue'),
        meta: {name: '看看事件', icon: ''}
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
