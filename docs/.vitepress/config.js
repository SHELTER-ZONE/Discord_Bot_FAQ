import { defineConfig } from 'vitepress'
import routes from '../routes'

export default defineConfig({
  title: 'SHELTER ZONE - Discord Bot FAQ',
  description: 'Discord bot development FAQ',
  themeConfig: {
    sidebar: routes,
  }
})