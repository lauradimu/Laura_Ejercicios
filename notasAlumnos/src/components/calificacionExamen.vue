<script setup>

const props = defineProps({

  nota: {
    type: Number,
    required: true
  },

  indice: {
    type: Number,
    required: true
  },

})

const emit = defineEmits(['actualizacionNota'])

function cambiarNota(event) {
  emit('actualizacionNota', Number(event.target.value), props.indice)
}

</script>

<template>
  <div class="card p-4 shadow-sm">
    <div class="mb-3">
      <input 
        :value="props.nota" 
        type="number" 
        min="0" 
        max="100" 
        step="0.1" 
        class="form-control"
        @input="cambiarNota"
      />
  
      <div v-if="nota < 0 || nota > 100 || isNaN(nota)" class="icono alert alert-danger mb-0" role="alert">
        ❌
      </div>
      <div v-else-if="nota < 50" class="icono alert alert-warning mb-0" role="alert">
        ⚠️
      </div>
      <div v-else-if="nota <= 90" class="icono alert alert-primary mb-0" role="alert">
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