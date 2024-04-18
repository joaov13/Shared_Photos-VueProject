<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLogo from './components/icons/MainLogo.vue';
import Search from './components/small/Search.vue';
import NavigationLink from './components/small/NavigationLink.vue';
import ShareButton from './components/small/ShareButton.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const notIsALoginPage = computed(() => {
  return route.name !== 'login';
});

</script>

<template>
  <header v-if="notIsALoginPage">
    <RouterLink to="/"><MainLogo /></RouterLink>
    <span>Shared-Photos</span>
    <div class="header_container" >
      <Search text="Pesquisar"/>
      <NavigationLink :link="{ texto: 'Sobre', destino: '/about' }" />
      <ShareButton text="Compartilhar Foto"/>
      <NavigationLink :link="{ texto: 'Entrar', destino: '/login' }" />
      <NavigationLink :link="{ texto: 'Cadastrar', destino: '/cadastro' }" />
    </div>
  </header>

  <footer >
    <RouterLink to="/login"><MainLogo /></RouterLink>
    <span>Obrigado por acessar nosso site</span>
  </footer>
  <RouterView />
</template>

<style scoped>
  header{
    padding: 10px 0;
    gap: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header_container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;

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