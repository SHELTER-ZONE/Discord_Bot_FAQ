<template>
  <div class="block" :class="{
    title: type === 'title'
  }">
  {{ content }}
  </div>
</template>

<script setup>

defineProps({
  type: {
    type: String,
  },
  content: {
    type: String, 
  }
})
</script>

<style scoped>
.title {
  background: skyblue;
  font-weight: 500;
}
</style>