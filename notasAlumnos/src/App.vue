<script setup>
import { ref, computed } from 'vue';
import CalificaExamen from './components/calificacionExamen.vue'

const nota1=ref(70); // ref() --> hace que la constante o variable sea reactiva y se inicialice con 70 por dejecto
const nota2=ref(70);
const nota3=ref(70);

const notas = [nota1, nota2, nota3]

function actualizarNota(valor, indice) {
  notas[indice].value = valor
}

const mensaje = computed(() => {

  const califica = nota1.value >= 50 && nota2.value >= 50 && nota3.value >= 50
  if (califica){
    return 'Aprobado'
  }else{
    return 'Suspenso'
  }
  });
</script>

<template>

  <h1>Calificación evaluaciones Inglés</h1>

  <CalificaExamen :nota="nota1" :indice="0" @actualizacionNota="actualizarNota"/>
  <CalificaExamen :nota="nota2" :indice="1" @actualizacionNota="actualizarNota"/>
  <CalificaExamen :nota="nota3" :indice="2" @actualizacionNota="actualizarNota"/>

  {{ mensaje }}

</template>