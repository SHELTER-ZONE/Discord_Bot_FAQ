<template>
  <div class="block">
    <div class="decoration" :class="type"></div>
    <div class="body">
      <div class="title">{{title}}</div>
      <div  class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  type: {
    type: String,
  },
  title: {
    type: String, 
  }
})
</script>

<style scoped>
.block {
  background: rgba(0, 0, 0, .05);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
}
.decoration {
  width: 5px;
  height: auto;
  flex-shrink: 0;
}

.title {
  font-size: 20px;
  font-weight: 700;
  padding: 10px
}

.content {
  padding: 10px;
}

.danger {
  background: LightCoral;
}

.success {
  background: LightSeaGreen;
}

</style>