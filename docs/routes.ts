import { DefaultTheme } from 'vitepress'

export type sidebarType = DefaultTheme.Config['sidebar']

const pythonSidebar: sidebarType = [
  { text: 'Python版本 (discord.py)', link: '/python/' },
]

const javaScriptSidebar: sidebarType = [
  {
    text: 'JavaSript版本 (discord.js)',
    children: [{ text: '入門', link: '/javascript/getting-started/' }],
  },
]

export default <sidebarType>[...pythonSidebar, ...javaScriptSidebar]
