import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/vitepress/',
  head: [
    ['link', { rel: 'icon', href: '/vitepress/images/siteLogo.png' }],
    ['link', { rel: 'stylesheet', href: '/vitepress//fonts/setup.css' }]
  ]
}) 
