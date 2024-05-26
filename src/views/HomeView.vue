<script setup>
import ExemploComponente from '@/components/ExemploComponente.vue';
import SliderBigImages from '@/components/medium/SliderBigImages.vue';
import SliderPosts from '@/components/medium/SliderPosts.vue';
import data from '@/data.json';

const { posts } = data;
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
    <div class="albuns_container">
      <ExemploComponente msg="Albuns"/>
      <SliderBigImages :images="photos" :user="user"></SliderBigImages>
      <SliderBigImages :images="photos" :user="user"></SliderBigImages>
      <SliderPosts :posts="posts"></SliderPosts>
    </div>

  </main>
</template>
<style>

  main{
    padding: 20px;
  }
</style>

