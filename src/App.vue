<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLogo from './components/icons/MainLogo.vue';
import Search from './components/small/Search.vue';
import HeaderLinks from './components/small/HeaderLinks.vue';
import ShareButton from './components/small/ShareButton.vue';
</script>

<template>
  <header>
    <RouterLink to="/"><MainLogo /></RouterLink>
    <span>Shared-Photos</span>
    <Search text="Pesquisar"/>
    <HeaderLinks link1="Blog" link2="Sobre"/>
    <ShareButton text="Compartilhar Foto"/>
    <HeaderLinks link1="Entrar" link2="Cadastrar"/>
  </header>

  <footer>
    <RouterLink to="/"><MainLogo /></RouterLink>
    <span>Obrigado por acessar nosso site</span>
  </footer>
  <RouterView />
</template>

<style scoped>
  header {
    padding: 30px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
  }
  footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
    bottom: 0;
    position: fixed;
    text-align: center;    
  }

  @media (min-width: 1024px) {

  }
</style>