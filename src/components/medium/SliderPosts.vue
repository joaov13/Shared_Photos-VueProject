<script setup>
import { register } from 'swiper/element/bundle';

register();

defineProps({
  posts: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post_container">
      <div class="post_content">
        <p class="post_title">{{ post.title }}</p>
        <div class="post_text">{{ post.body }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post_container {
  background-color: #379237;
  width: 500px;
  height: 500px;
  border-radius: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  overflow: hidden; 
}

.post_content {
  padding: 10px;
}

.post_text {
  max-height: 480px; 
  overflow-y: auto; 
}
</style>
