const pythonSidebar = [{ text: 'Python版本 (discord.py)', link: '/python/' }]

const javaScriptSidebar = [
  {
    text: 'JavaSript版本 (discord.js)',
    children: [
      { text: '入門', link: '/javascript/getting-started/' },
      {
        text: '創建機器人',
        link: '/javascript/getting-started/create-bot/',
        children: [
          {
            text: '保存 TOKEN',
            link: '/javascript/getting-started/create-bot/',
          },
        ],
      },
    ],
  },
]

export default [...pythonSidebar, ...javaScriptSidebar]
