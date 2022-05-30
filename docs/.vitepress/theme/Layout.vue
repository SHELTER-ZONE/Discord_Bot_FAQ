<template><Layout /></template>

<script setup>
import Layout from 'vitepress/dist/client/theme-default/Layout.vue'
import { onMounted, onUnmounted } from 'vue'

/* copy code button */
onMounted(() => {
  const observer = new MutationObserver(() => {
    document
      .querySelectorAll('div[class*=language-]:not(.add-copy)')
      .forEach((el) => {
        const copyButton = document.createElement('button')

        el.style.position = 'relative'

        copyButton.title = '複製程式'
        copyButton.classList.add('code-copy-button')
        copyButton.appendChild(document.createElement('span'))

        el.classList.add('add-copy')

        copyButton.onclick = () => {
          const text = el.innerText
          navigator?.clipboard.writeText(text).catch(() => {
            const textBox = document.createElement('textarea')
            document.body.appendChild(textBox)
            textBox.style.width = '0'
            textBox.style.height = '0'
            textBox.value = text
            textBox.select()
            document.execCommand('copy')
            textBox.remove()
          })
        }

        el.appendChild(copyButton)
      })
  })
  observer.observe(document.querySelector('html'), {
    subtree: true,
    childList: true,
    characterDataOldValue: true,
  })
  onUnmounted(() => observer.disconnect())
})
</script>

<style>
.code-copy-button {
  cursor: pointer;
  z-index: 1;
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
}
.code-copy-button:active {
  box-shadow: 0 0 10px #aaaaaa !important;
  background-color: #aaaaaa !important;
}
.code-copy-button:hover {
  box-shadow: 0 0 10px #949494;
  background-color: #949494;
}
.code-copy-button span {
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M15 37.95Q13.8 37.95 12.9 37.05Q12 36.15 12 34.95V6.95Q12 5.75 12.9 4.85Q13.8 3.95 15 3.95H37Q38.2 3.95 39.1 4.85Q40 5.75 40 6.95V34.95Q40 36.15 39.1 37.05Q38.2 37.95 37 37.95ZM15 34.95H37Q37 34.95 37 34.95Q37 34.95 37 34.95V6.95Q37 6.95 37 6.95Q37 6.95 37 6.95H15Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95ZM9 43.95Q7.8 43.95 6.9 43.05Q6 42.15 6 40.95V10.8H9V40.95Q9 40.95 9 40.95Q9 40.95 9 40.95H32.7V43.95ZM15 6.95Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95V6.95Q15 6.95 15 6.95Q15 6.95 15 6.95Z"/></svg>');
}
.code-copy-button:active span,
.code-copy-button:hover span {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="black"><path d="M15 37.95Q13.8 37.95 12.9 37.05Q12 36.15 12 34.95V6.95Q12 5.75 12.9 4.85Q13.8 3.95 15 3.95H37Q38.2 3.95 39.1 4.85Q40 5.75 40 6.95V34.95Q40 36.15 39.1 37.05Q38.2 37.95 37 37.95ZM15 34.95H37Q37 34.95 37 34.95Q37 34.95 37 34.95V6.95Q37 6.95 37 6.95Q37 6.95 37 6.95H15Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95ZM9 43.95Q7.8 43.95 6.9 43.05Q6 42.15 6 40.95V10.8H9V40.95Q9 40.95 9 40.95Q9 40.95 9 40.95H32.7V43.95ZM15 6.95Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95V6.95Q15 6.95 15 6.95Q15 6.95 15 6.95Z"/></svg>');
}
</style>
