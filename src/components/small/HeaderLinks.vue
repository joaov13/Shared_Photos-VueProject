<script setup>

defineProps({
  link1: {
    type: String,
    required: true
  },
  link2: {
    type: String,
    required: true
  }

})
</script>

<template>
  <div class="container">
    <nav>
        <RouterLink to="/">{{ link1 }}</RouterLink>
        <RouterLink to="/about">{{ link2 }}</RouterLink>
    </nav>
    
  </div>
</template>

<style scoped>
  .container{
    color: #379237; 
  }
  .container > nav{
    display: flex;
    align-items: center;
    gap: 20%;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

</style>
