<script setup>
import { register } from 'swiper/element/bundle';
import RouterButton from '../small/RouterButton.vue';

register();

defineProps({
  images: {
    type: Array,
    required: true
  },
  user:{
  type: Object,
  required: true,
  validator: (value) => {
    return value && value.texto && value.destino;
  }
  }
})

</script>

<template>
  
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
