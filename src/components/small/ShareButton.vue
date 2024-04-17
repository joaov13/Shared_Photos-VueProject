<script setup>

  defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <button class="container_share">
    <span>{{ text }}</span>
  </button>
</template>

<style scoped>
  .container_share{
    display: flex;
    width: 170px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    color: #379237;
    background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box,
              linear-gradient(to right, #379237, #FF8B13) border-box;
    border-radius: 18px;
    border: 3px solid transparent;
    cursor: pointer;
  }


</style>
