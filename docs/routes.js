const pythonSidebar = [{ text: 'Python版本 (discord.py)', link: '/python/' }]

const javaScriptSidebar = [
  {
    text: 'JavaSript版本 (discord.js)',
    children: [
      { text: '安裝與準備', link: '/javascript/preparations/' },
      { text: '入門', link: '/javascript/getting-started/' },
      { text: '事件', link: '/javascript/events/' },
      { text: '指令', link: '/javascript/commands/' },
      { text: '常見問題', link: '/javascript/problems/' },
      { text: '網關意圖', link: '/javascript/intents/' },
      { text: '安裝Node.js', link: '/javascript/installing-nodejs/' }
    ],
  },
]

export default [...pythonSidebar, ...javaScriptSidebar]
