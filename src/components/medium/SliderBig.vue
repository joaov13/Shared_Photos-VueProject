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
  <RouterButton :link="user"></RouterButton>
  <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true" navigation="true">
      <swiper-slide v-for="image in images">
        <img :src="`src/images/${image}`" height="300px">
      </swiper-slide>
  </swiper-container>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
