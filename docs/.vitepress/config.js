import { defineConfig } from 'vitepress'
import routes from '../routes'

export default defineConfig({
  title: 'SHELTER ZONE - Discord Bot FAQ',
  description: 'Discord bot development FAQ',
  base: '/Discord_Bot_FAQ/',

  themeConfig: {
    repo: 'SHELTER-ZONE/Discord_Bot_FAQ',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '更改此頁面',
    lastUpdated: '最近更新時間',

    sidebar: routes,
    nav: [{ text: 'Home', link: '/' }],
  },
  markdown: { lineNumbers: true },
})
