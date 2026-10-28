import Evaluacion1 from './components/evaluacion1.vue'

const routes = [

  { path: '/evaluacion1', name: 'evaluacion1', component: Evaluacion1 },
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})