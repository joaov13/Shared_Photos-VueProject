<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  link: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && value.texto && value.destino;
    }
  }
});
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink :to="link.destino">{{ link.texto }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  .container{
    color: #379237; 
  }
  .container > nav{
    display: flex;
    align-items: center;
    gap: 20%;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

</style>
