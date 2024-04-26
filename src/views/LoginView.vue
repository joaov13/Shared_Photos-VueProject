
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const redirectMessage = computed(() => router.currentRoute.value.query.redirectMessage || '');

const username = ref('');
const password = ref('');

const login = () => {
  // Aqui você pode adicionar lógica de autenticação, por exemplo, fazer uma requisição HTTP
  // para verificar as credenciais.

  // Simulando login bem-sucedido para demonstração
  const isValidLogin = true;

  if (isValidLogin) {
    // Define que o usuário está logado (por exemplo, usando localStorage ou Vuex)
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redireciona para a página principal
    router.push('/about');
  } else {
    alert('Credenciais inválidas. Tente novamente.');
  }
};
</script>


<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <p>{{ redirectMessage }}</p>
      <label for="username">Usuário:</label>
      <input type="text" id="username" v-model="username" required>

      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="password" required>

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>
