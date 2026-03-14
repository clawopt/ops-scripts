import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "X AI教程",
  description: "让AI成为你的智能生产力",
  lang: 'zh-CN',
  base: '/ops-scripts/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/ops-scripts/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'AI教程,AI工具,AI赛道,AI案例,智能生产力' }],
    ['meta', { name: 'author', content: 'X AI教程' }],
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }],
  ],
  themeConfig: {
    logo: '🚀',
    siteTitle: 'X AI教程',
    search: { provider: 'local' },
    
    nav: [
      { text: '首页', link: '/' },
      { text: '热门赛道', link: '/tracks' },
      { text: '顶流工具', link: '/tools' },
      { text: '案例解析', link: '/cases' },
      { text: '最新博客', link: '/blog' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 X AI教程. 保留所有权利.'
    }
  }
})
