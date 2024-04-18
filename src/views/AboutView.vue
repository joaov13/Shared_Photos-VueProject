<template>
  <div class="about-view">
    <h1>{{ data.view_about.projeto.titulo }}</h1>
    <p>{{ data.view_about.projeto.descricao }}</p>
    
    <h2>Integrantes:</h2>
    <ul>
      <li v-for="integrante in data.view_about.integrantes" :key="integrante.nome">
        <h3>{{ integrante.nome }}</h3>
        <p>Email: {{ integrante.email }}</p>
        <p>GitHub: <a :href="'https://github.com/' + integrante.github">{{ integrante.github }}</a></p>
        <p>LinkedIn: <a :href="'https://linkedin.com/in/' + integrante.linkedin">{{ integrante.linkedin }}</a></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import data from '@/data.json';
</script>

<style scoped>
  .about-view {
    padding: 20px;
  }
</style>
