<template>
  <span class="error-msg">{{ text }}</span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
});
</script>

<style scoped>
.error-msg {
  font-weight: 700;
  color: rgb(239, 70, 101);
  background: rgba(0, 0, 0, 0.15);
  padding: 0 5px;
  border-radius: 3px;
}
</style>
