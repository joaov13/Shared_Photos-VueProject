<script setup>
import ExemploComponente from '@/components/ExemploComponente.vue';
import SliderBig from '@/components/medium/SliderBig.vue';
import data from '@/data.json';

const photos = [
  "blue.png",
  "cyan.png",
  "green.png",
  "light-blue.png",
  "light-pink.png",
  "pink.png",
  "purple.png",
  "red.png"
]
let user ={
  "texto": `@${data.user.username}`, 
  "destino": data.user.username
}
</script>

<template>
   <main>
    <ExemploComponente msg="Albuns"/>
    <SliderBig :images="photos" :user="user"></SliderBig>
    <SliderBig :images="photos" :user="user"></SliderBig>
  </main>
</template>
<style>
  main{
    padding: 20px;
  }
</style>

