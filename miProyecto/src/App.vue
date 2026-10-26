<script setup>

</script>

<template>
  <h1>Solucion a los ejercicios de VUE</h1> 
  <ul>
      <ul>
        <li> <!-- ul>li*3 -->
          <router-link to="/">Inicio</router-link>

        </li>
        <li>
          <router-link to="/">Vamos a interruptor</router-link>
        </li>
        <li>
          <router-link to="/">Vamos a examen</router-link>
        </li>
      </ul>
  </ul>
  <router-view />

</template>