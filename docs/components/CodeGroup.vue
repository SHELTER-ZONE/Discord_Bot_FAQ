<template>
  <div class="code-group" ref="groupEl">
    <ul class="code-types">
      <li
        v-for="(_, index) in codeTabs"
        v-text="_.title"
        :key="index"
        :class="{ active: index === activeCodeTabIndex }"
        @click="changeCodeTab(index)"
      />
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const groupEl = ref<HTMLDivElement>()
const activeCodeTabIndex = ref<number>(-1)

let codeTabs = ref<{ title: string; el: Element }[]>([])

const changeCodeTab = (index: number) => (activeCodeTabIndex.value = index)
const activateCodeTab = (index: number) => {
  codeTabs.value.forEach((tab) => tab?.el.removeAttribute('active'))
  codeTabs.value[index]?.el.setAttribute('active', '')
}

onMounted(() => {
  codeTabs.value = [...groupEl.value.querySelectorAll('div[title]')].map(
    (el, index) => {
      if (el.hasAttribute('active')) changeCodeTab(index)
      return { title: el.getAttribute('title'), el }
    }
  )

  if (activeCodeTabIndex.value === -1 && codeTabs) activeCodeTabIndex.value = 0
  activateCodeTab(0)
})
watch(activeCodeTabIndex, (index) => activateCodeTab(index))
</script>

<style scoped>
.code-types {
  color: #ffffffe6;
  list-style: none;
  display: flex;

  margin-top: 0.85rem;
  margin-bottom: calc(-1.7rem - 10px);
  padding-bottom: calc(1.7rem - 6px);
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 6px;
  background-color: var(--code-bg-color);
}
.code-types li {
  padding: 5px;
  cursor: pointer;
  font-size: 0.85em;
  line-height: 1.4;
  color: #ffffffe6;
  font-weight: 600;
}
.code-types li.active {
  border-bottom: var(--c-brand) 1px solid;
}
.code-group >>> div[title]:not([active]) {
  display: none;
}
.code-group >>> div[title] [class*='language-'] pre {
  padding-top: 1rem;
}
</style>
