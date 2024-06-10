<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLogo from './components/icons/MainLogo.vue';
import NavigationLink from './components/small/NavigationLink.vue';
import RouterButton from './components/small/RouterButton.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import data from './data.json';
import {  useStore  } from 'vuex'


  const route = useRoute();
  const header = data.header;
  const store = useStore();


  const notIsALoginPage = computed(() => {
    return route.name !== 'login';
  });

  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    store.state.posts = json
  };

  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const json = await response.json();
    store.state.comments = json
  };
  
  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const json = await response.json();
    store.state.albums = json
  };

  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const json = await response.json();
    store.state.photos = json
  }
      
  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    store.state.todos = json
  }

  async function readAPIposts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    store.state.users = json
  }


</script>

<script>

</script>

<template>
  <header v-if="notIsALoginPage">
    <RouterLink to="/"><MainLogo /></RouterLink>
    <span>{{ header.titulo }}</span>
    <div class="header_container" >
      <NavigationLink :link="header.link_about" />
      <RouterButton :link="header.link_compartilhar"/>
      <NavigationLink :link="header.link_login" />
      <NavigationLink :link="header.link_cadastrar" />
    </div>
  </header>
  <RouterView />
  <footer >
    <RouterLink to="/login"><MainLogo /></RouterLink>
    <span>{{ data.footer.texto }}</span>
  </footer>
  
</template>

<style scoped>
  header{
    padding: 10px 0;
    gap: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #5f584e;
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
  }

  @media (min-width: 1024px) {

  }
</style>