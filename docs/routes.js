const pythonSidebar = [{ text: 'Python版本 (discord.py)', link: '/python/' }]

const pycordSidebar = [
  {
    text: 'Pycord',
    children: [{ text: '入門', link: '/pycord/getting-started/' }],
  },
]

const javaScriptSidebar = [
  {
    text: 'JavaSript版本 (discord.js)',
    children: [{ text: '入門', link: '/javascript/getting-started/' }],
  },
]

export default [...pythonSidebar, ...javaScriptSidebar]
