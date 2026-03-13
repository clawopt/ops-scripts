import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ByteTech",
  description: "面向 AI 时代的计算机学习入口",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '计算机教程,编程学习,Java,C++,Git,AI,机器学习,深度学习,数据结构,算法' }],
    ['meta', { name: 'author', content: 'ByteTech' }],
  ],
  themeConfig: {
    logo: '💻',
    siteTitle: 'ByteTech',
    search: { provider: 'local' },
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 教程', link: '/计算机语言/java/' },
      { text: '⭐ GitHub', link: 'https://github.com/clawopt/ops-scripts' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawopt/ops-scripts' }
    ],

    footer: {
      message: 'MIT License',
      copyright: '© 2026 ByteTech. 迈向AI时代.'
    },

    sidebar: [
      {
        text: '💻 计算机语言',
        collapsed: false,
        items: [
          { text: 'Java 入门', link: '/计算机语言/java/' },
          { text: 'C++ 入门', link: '/计算机语言/cpp/' }
        ]
      },
      {
        text: '🔧 开发工具',
        collapsed: false,
        items: [
          { text: 'Git 入门', link: '/开发工具/git/' },
          { text: 'CMake 入门', link: '/开发工具/cmake/' },
          { text: 'Make 入门', link: '/开发工具/make/' }
        ]
      },
      {
        text: '🛠️ 专业技能',
        collapsed: false,
        items: [
          { text: '数据库基础', link: '/专业技能/database/' },
          { text: '存储技术', link: '/专业技能/storage/' },
          { text: '大数据入门', link: '/专业技能/bigdata/' }
        ]
      },
      {
        text: '🤖 AI时代',
        collapsed: false,
        items: [
          { text: '数据结构与算法', link: '/AI时代/algorithm/' },
          { text: '大模型入门', link: '/AI时代/llm/' },
          { text: '深度学习基础', link: '/AI时代/deeplearning/' }
        ]
      }
    ]
  }
})
