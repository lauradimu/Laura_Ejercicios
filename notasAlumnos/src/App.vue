<script setup>
import { ref, computed } from 'vue';
import CalificaExamen from './components/calificacionExamen.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const minMedias = [70, 60, 50];

const evaluaciones = ref([
  {nombre: 'Primera evaluación', notas: [50,50,50]}, // ref() --> hace que la constante o variable sea reactiva y se inicialice con 70 por dejecto
  {nombre: 'Segunda evaluación', notas: [50,50,50]},
  {nombre: 'Tercera evaluación', notas: [50,50,50]}
])

function actualizarNota(valor, evalIndice, notaIndice) {
  evaluaciones.value[evalIndice].notas[notaIndice] = valor;
}

//Define el porcentaje de examenes aprovados que se verá reflejado en la barra de progreso.
function porcentajeAprobados(notas, minimo){
  let cantidadAprobadas = 0;
    for(let i=0; i < notas.length; i++){
      if(notas[i] >= minimo){
        cantidadAprobadas++;
      }
    }
    return (cantidadAprobadas/ notas.length) * 100;
  }

function mediaEvaluacion(notas){
  const resultado = notas.reduce((total, n) => total + n, 0);
  return resultado / 3;
}

function mediaTotal(){
  const resultado = evaluaciones.value.reduce((total, evaluacion) => 
  total + mediaEvaluacion(evaluacion.notas), 0);
  return resultado / 3;
}

function mensajeEvaluacion(notas, minimo){
  if (mediaEvaluacion(notas) >= minimo) {
    return 'Aprobado';
  } else {
    return 'Suspenso';
  }
}

function mensajeTotal(notas){
  if (mediaTotal(notas) >= 50) {
    return 'Aprobado'
  } else {
    return 'Suspenso'
  }
}

</script>

<template>

  <div class="position-relative d-flex justify-content-center align-items-center mb-3">
    <h1 class="mb-0 text-center">Calificación evaluaciones Inglés</h1>
    <div class="card position-absolute end-0 top-50 translate-middle-y">
      <div class="card-body">{{ mensajeTotal() }} {{ mediaTotal().toFixed(2) }}</div>
    </div>
  </div>

  <div class="cards">
    <div class="card" v-for="(evaluacion, ei) in evaluaciones" :key="ei">
      <div class="card-header">{{ evaluacion.nombre }}</div>
      <div class="card-body">
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
              :style="{ width: porcentajeAprobados(evaluacion.notas, minMedias[ei]) + '%' }"
              :aria-valuenow="porcentajeAprobados(evaluacion.notas, minMedias[ei] )"
              aria-valuemin="0"
              aria-valuemax="100">                
            </div>
          </div>
          <p v-if="evaluacion.notas.some(n => n > 100 || n < 0)">Error</p>
          <template v-else>
            <p>{{ mensajeEvaluacion(evaluacion.notas, minMedias[ei]) }}</p>
            <p>Media: {{ mediaEvaluacion(evaluacion.notas).toFixed(2) }}</p>
          </template>
        </blockquote>
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