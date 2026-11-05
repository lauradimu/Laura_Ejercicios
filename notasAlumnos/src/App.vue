<script setup>
import { ref, computed } from 'vue';
import CalificaExamen from './components/calificacionExamen.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const evaluaciones = ref([
  {nombre: 'Primera evaluación', notas: [70,70,70]}, // ref() --> hace que la constante o variable sea reactiva y se inicialice con 70 por dejecto
  {nombre: 'Segunda evaluación', notas: [70,70,70]},
  {nombre: 'Tercera evaluación', notas: [70,70,70]},
])

function actualizarNota(valor, evalIndice, notaIndice) {
  evaluaciones.value[evalIndice].notas[notaIndice] = valor
}

function media(notas){
  const resultado = notas.reduce((total, n) => total + n, 0)
  return resultado / 3
}

function mensaje(notas){
  if (media(notas) >= 50) {
    return 'Aprobado'
  } else {
    return 'Suspenso'
  }
}
</script>

<template>

  <h1>Calificación evaluaciones Inglés</h1>

  <div class="cards">
    <div class="card" v-for="(evaluacion, ei) in evaluaciones" :key="ei">
      <div class="card-header">{{ evaluacion.nombre }}</div>
      <div class="card-body">
        <!--<figure>-->
          <blockquote class="blockquote">
            <CalificaExamen
              v-for="(nota,ni) in evaluacion.notas"
              :key="ni"
              :nota="nota"
              @actualizacionNota="(valor) => actualizarNota(valor,ei,ni)"
            />
            <div class="progress" aria-label="Basic example">
              <div 
                class="progress-bar" 
                role="progressbar"
                :style="{ width: media(evaluacion.notas) + '%' }"
                :aria-valuenow="media(evaluacion.notas)"
                aria-valuemin="0"
                aria-valuemax="100">                
              </div>
            </div>
            <p v-if="evaluacion.notas.some(n => n > 100 || n < 0)">Error</p>
            <template v-else>
              <p>{{ mensaje(evaluacion.notas) }}</p>
              <p>Media: {{ media(evaluacion.notas) }}</p>
            </template>
          </blockquote>
        <!--</figure>-->
      </div>
    </div>
  </div>

</template>

<style scoped>
    .cards {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .cards > * {
      flex: 1 1 0;
      max-width: 300px;
    }
  </style>