import { createRouter, createWebHistory } from 'vue-router'
import Interruptor from './components/interruptorVisibilidad.vue'
import ListaTareas from './components/listaTareas.vue'
import TablaCatalogo from './components/tablaCatalogo.vue'
import GestorInvitados from './components/gestorInvitados.vue'

const routes = [

  { path: '/', name: 'inicio', component: Interruptor },
  { path: '/listaTareas', name: 'listaTareas', component: ListaTareas },  
  { path: '/tablaCatalogo', name: 'tablaCatalogo', component: TablaCatalogo },  
  { path: '/gestorInvitados', name: 'gestorInvitados', component: GestorInvitados }, 
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

