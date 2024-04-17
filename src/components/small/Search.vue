<script setup>

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <span>{{ text }}</span>
    <i class="pi pi-search"></i>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    width: 360px;
    height: 40px;
    justify-content: space-between;
    align-items: center;

    color: #1a451a;
    background-color: #0b1d0b;
    border-radius: 18px;
    padding: 0 15px;
  }

</style>
