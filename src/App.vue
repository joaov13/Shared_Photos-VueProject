<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLogo from './components/icons/MainLogo.vue';
import Search from './components/small/Search.vue';
import NavigationLink from './components/small/NavigationLink.vue';
import RouterButton from './components/small/RouterButton.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import data from './data.json';


const route = useRoute();
const header = data.header;

const notIsALoginPage = computed(() => {
  return route.name !== 'login';
});

</script>

<template>
  <header v-if="notIsALoginPage">
    <RouterLink to="/"><MainLogo /></RouterLink>
    <span>{{ header.titulo }}</span>
    <div class="header_container" >
      <NavigationLink :link="header.link_about" />
      <Search :text="header.texto_pesquisar"/>
      <RouterButton :link="header.link_compartilhar"/>
      <NavigationLink :link="header.link_login" />
      <NavigationLink :link="header.link_cadastrar" />
    </div>
  </header>

  <footer >
    <RouterLink to="/login"><MainLogo /></RouterLink>
    <span>{{ data.footer.texto }}</span>
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