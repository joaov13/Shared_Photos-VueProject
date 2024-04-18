<script setup>
import { useRouter } from 'vue-router';
defineProps({
  link: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && value.texto && value.destino;
    }
  }
});

const router = useRouter();

const navigateToRoute = () => {
  console.log(link.destino || 'aaaaaaaaa' )
  router.push(link.destino || '')
  };
</script>

<template>
  <button class="container_share" @click="navigateToRoute">{{ link.texto }}</button>
</template>

<style scoped>
  .container_share{
    display: flex;
    width: 170px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    color: #379237;
    background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box,
              linear-gradient(to right, #379237, #FF8B13) border-box;
    border-radius: 18px;
    border: 3px solid transparent;
    cursor: pointer;
  }


</style>
