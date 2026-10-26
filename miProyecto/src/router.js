import { createRouter, createWebHistory } from 'vue-router'
import Interruptor from './components/interruptorVisibilidad.vue'

const routes = [
  { path: '/', name: 'inicio', component: Interruptor },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

