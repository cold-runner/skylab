import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AchievementView from '@/views/AchievementView.vue'
import MemberView from '@/views/MemberView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: 'member',
      path: '/member',
      component: MemberView
    },
    {
      name: 'achievement',
      path: '/achievement',
      component: AchievementView
    }
  ]
})

export default router
