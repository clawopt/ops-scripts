import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "x-AI教程",
  description: "让AI成为你的智能生产力",
  lang: 'zh-CN',
  base: '/x-ai-web/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/x-ai-web/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'keywords', content: 'AI教程,AI工具,AI赛道,AI案例,智能生产力' }],
    ['meta', { name: 'author', content: 'x-AI教程' }],
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }],
  ],
  themeConfig: {
    logo: 'X',
    siteTitle: 'x-AI教程',
    search: { provider: 'local' },
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '视频图像', 
        items: [
          { text: '剪映AI教程', link: 'https://ai-bot.cn/app/10296.html' },
          { text: '即梦AI教程', link: 'https://jimengai.com/' },
          { text: 'Midjourney教程', link: 'https://www.midjourney.com/' },
          { text: 'StableDiffusion教程', link: 'https://stability.ai/' },
          { text: 'Runway教程', link: 'https://runwayml.com/' }
        ]
      },
      { 
        text: '高效工具', 
        items: [
          { text: 'DeepSeek教程', link: 'https://www.deepseek.com/' },
          { text: 'OpenClaw教程', link: 'https://github.com/OpenClaw' },
          { text: 'Trae教程', link: 'https://www.trae.ai/' },
          { text: 'Cursor教程', link: 'https://cursor.sh/' },
          { text: 'ClaudeCode教程', link: 'https://claude.ai/' }
        ]
      },
      { 
        text: '商业落地', 
        items: [
          { text: '漫剧短剧', link: '/drama-comic' },
          { text: '直播带货', link: '/digital-human' },
          { text: '副业变现', link: '/side-business' }
        ]
      },
      { text: '最新博客', link: '/blog' }
    ],

    footer: {
      message: '探索 AI 时代的无限可能',
      copyright: '© 2026 x-AI教程. 保留所有权利.'
    },

    sidebar: {
      '/drama-comic/': [
        {
          text: '短剧漫剧教程',
          collapsed: false,
          items: [
            { 
              text: '工具介绍', 
              link: '/drama-comic/',
            },
            { 
              text: '学习教程', 
              link: '/drama-comic/tutorial',
              collapsed: true,
              items: [
                { text: '基础入门', link: '/drama-comic/tutorial#基础入门' },
                { text: '学习路径', link: '/drama-comic/tutorial#学习路径' },
                { text: '推荐学习资源', link: '/drama-comic/tutorial#推荐学习资源' },
                { text: '常见问题', link: '/drama-comic/tutorial#常见问题' }
              ]
            },
            { 
              text: '视频教程', 
              link: '/drama-comic/videos',
              collapsed: true,
              items: [
                { text: '入门视频', link: '/drama-comic/videos#入门视频' },
                { text: '进阶视频', link: '/drama-comic/videos#进阶视频' },
                { text: '实战案例', link: '/drama-comic/videos#实战案例' },
                { text: '工具专项教程', link: '/drama-comic/videos#工具专项教程' }
              ]
            },
            { 
              text: '实践项目', 
              link: '/drama-comic/projects',
              collapsed: true,
              items: [
                { text: '入门项目', link: '/drama-comic/projects#入门项目' },
                { text: '进阶项目', link: '/drama-comic/projects#进阶项目' },
                { text: '高级项目', link: '/drama-comic/projects#高级项目' },
                { text: '项目提交与反馈', link: '/drama-comic/projects#项目提交与反馈' }
              ]
            }
          ]
        }
      ]
    },

    outline: false
  }
})
