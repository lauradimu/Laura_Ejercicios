<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'

const props = defineProps({

  nota: {
    type: Number,
    required: true
  },
})

const emit = defineEmits(['actualizacionNota'])

function cambiarNota(event) {
  emit('actualizacionNota', Number(event.target.value))
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
    </div>
  </div>
</template>

<style scoped>
  .icono{
    width: 2em;
    display: inline-block;
  }
</style>