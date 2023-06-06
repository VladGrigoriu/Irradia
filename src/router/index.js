import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const lazyLoad = (view) => { return () => import(`@/views/${view}.vue`) }

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: lazyLoad('Home')
    }
  ]
})

export default router
