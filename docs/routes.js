const pythonSidebar = [{ text: 'Python版本 (discord.py)', link: '/python/' }]

const javaScriptSidebar = [
  {
    text: 'JavaSript版本 (discord.js)',
    children: [{ text: '入門', link: '/javascript/getting-started/' }],
  },
]

export default [...pythonSidebar, ...javaScriptSidebar]
