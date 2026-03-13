import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ByteTech",
  description: "面向 AI 时代的计算机学习入口",
  lang: 'zh-CN',
  base: '/ops-scripts/',
  head: [
    ['link', { rel: 'icon', href: '/ops-scripts/favicon.ico' }],
    ['meta', { name: 'keywords', content: '计算机教程,编程学习,Java,C++,Git,AI,机器学习,深度学习,数据结构,算法' }],
    ['meta', { name: 'author', content: 'ByteTech' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: '🚀',
    siteTitle: 'ByteTech',
    search: { provider: 'local' },
    
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/计算机语言/java' },
      { text: '资源', link: '/专业技能/database' },
      { text: '关于', link: '/AI时代/algorithm' },
      { text: 'GitHub', link: 'https://github.com/clawopt/ops-scripts', icon: 'github' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawopt/ops-scripts' },
      { icon: 'twitter', link: 'https://twitter.com' },
      { icon: 'linkedin', link: 'https://linkedin.com' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 ByteTech. 保留所有权利.'
    },

    sidebar: [
      {
        text: '计算机语言',
        icon: '💻',
        collapsed: false,
        items: [
          { text: 'Java 入门', link: '/计算机语言/java' },
          { text: 'C++ 入门', link: '/计算机语言/cpp' }
        ]
      },
      {
        text: '开发工具',
        icon: '🔧',
        collapsed: false,
        items: [
          { text: 'Git 入门', link: '/开发工具/git' },
          { text: 'CMake 入门', link: '/开发工具/cmake' },
          { text: 'Make 入门', link: '/开发工具/make' }
        ]
      },
      {
        text: '专业技能',
        icon: '🛠️',
        collapsed: false,
        items: [
          { text: '数据库基础', link: '/专业技能/database' },
          { text: '存储技术', link: '/专业技能/storage' },
          { text: '大数据入门', link: '/专业技能/bigdata' }
        ]
      },
      {
        text: 'AI时代',
        icon: '🤖',
        collapsed: false,
        items: [
          { text: '数据结构与算法', link: '/AI时代/algorithm' },
          { text: '大模型入门', link: '/AI时代/llm' },
          { text: '深度学习基础', link: '/AI时代/deeplearning' }
        ]
      }
    ]
  }
})
