import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../views/Order.vue')
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('../views/Notification.vue')
    }
  ]
})

export default router
