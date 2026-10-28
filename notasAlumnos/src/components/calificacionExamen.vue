<script setup>
import { ref } from 'vue'

const nota = ref(7.5)
</script>

<template>
  <div class="card p-4 shadow-sm">
    <div class="mb-3">
    
      <input 
        id="notaInput"
        v-model.number="nota" 
        type="number" 
        min="0" 
        max="10" 
        step="0.1" 
        class="form-control"
      />
  
      <div v-if="nota < 0 || nota > 10 || isNaN(nota)" class="icono alert alert-danger mb-0" role="alert">
        ❌
      </div>
      <div v-else-if="nota < 5" class="icono alert alert-warning mb-0" role="alert">
        ⚠️
      </div>
      <div v-else-if="nota < 9" class="icono alert alert-primary mb-0" role="alert">
        ✅
      </div>
      <div v-else class="icono alert alert-success mb-0" role="alert">
        🌟
      </div>
    
    </div>

 
  </div>
</template>

<style scoped>
  .icono{
    width: 2em;
    display: inline-block;
  }
</style>