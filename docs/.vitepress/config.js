import { defineConfig } from 'vitepress'
import routes from '../routes'

export default defineConfig({
  title: 'SHELTER ZONE - Discord Bot FAQ',
  description: 'Discord bot development FAQ',
  base: '/Discord_Bot_FAQ/',
  
  themeConfig: {
    sidebar: routes,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', target:'_blank', link: 'https://github.com/SHELTER-ZONE/Discord_Bot_FAQ' }
    ]
  }
})