import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
