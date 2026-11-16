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
          <router-link to="/interruptor">Vamos a interruptor</router-link>
        </li>
        <li>
          <router-link to="/examen">Vamos a examen</router-link>
        </li>
        <li>
          <router-link to="/listaTareas">Vamos a lista de tareas</router-link>
        </li>
        <li>
          <router-link to="/tablaCatalogo">Vamos a catalogo</router-link>
        </li>
        <li>
          <router-link to="/gestorInvitados">Vamos a gestor de invitados</router-link>
        </li>
      </ul>
  </ul>
  <router-view />

</template>