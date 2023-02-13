import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'

import PostPlantDetail from '../views/PlantPostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil/:id',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/plant/:id/detail',
    name: 'detailpost',
    component: PostPlantDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
