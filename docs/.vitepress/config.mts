import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'x-AI，迈向未来',
  description: '从Python到CUDA，从深度学习到大模型部署',
  lang: 'zh-CN',
  base: '/x-ai-web/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/x-ai-web/images/favicon.svg', type: 'image/svg+xml' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['style', {}, `
      .VPDoc .aside { display: block !important; }
      .VPDoc .aside { position: sticky; top: calc(var(--vp-nav-height) + 8px); height: calc(100vh - var(--vp-nav-height) - 16px); overflow: auto; }
      
      /* 统一顶部栏布局，防止搜索框在有侧边栏时右移 */
      .VPNavBar { padding: 0 24px !important; }
      .VPNavBar-title { width: auto !important; padding-right: 32px !important; }
      .VPNavBar-container { max-width: none !important; }
      
      /* 侧边栏样式优化 */
      .VPSidebar { 
        margin-top: var(--vp-nav-height) !important; 
        padding-top: 0 !important; /* 彻底移除顶部内边距 */
        background: var(--vp-c-bg) !important; 
        border-right: 1px solid var(--vp-c-divider) !important; 
      }
      .VPSidebar .curtain { display: none !important; }
      .VPSidebar-nav { padding-top: 8px !important; } /* 进一步减小侧边栏内容顶部间距 */
      
      /* 侧边栏分组标题间距优化 */
      .VPSidebarItem.level-0 { margin-top: 0 !important; padding-top: 0 !important; }
      .VPSidebarItem.level-0 .text { padding-top: 8px !important; padding-bottom: 8px !important; }
      
      .VPNav, .VPNavBar { border-bottom: none !important; box-shadow: none !important; }
      .VPLocalNav { display: none !important; }
      
      /* 首页和教程页面顶部栏底色统一 */
      .VPNav { background-color: var(--vp-c-bg) !important; }
    `],
    ['script', {}, `
      (function () {
        function updateSidebarWidth() {
          var texts = Array.from(document.querySelectorAll('.VPSidebar .text'));
          if (!texts.length) return;
          var max = 0;
          texts.forEach(function (el) {
            var w = el.scrollWidth || el.getBoundingClientRect().width;
            if (w > max) max = w;
          });
          var padding = 32;
          var minW = 110, maxW = 210;
          var width = Math.min(Math.max(minW, Math.ceil(max + padding)), maxW);
          document.documentElement.style.setProperty('--vp-sidebar-width', width + 'px');
        }
        function init() {
          updateSidebarWidth();
          window.addEventListener('resize', updateSidebarWidth);
          document.addEventListener('vitepress:afterRouteChange', updateSidebarWidth);
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
        } else {
          init();
        }
      })();
    `]
  ],
  themeConfig: {
    siteTitle: 'x-AI，迈向未来',
    search: { provider: 'local' },
    nav: [
      {
        text: 'AI 编程',
        items: [
          { text: 'OpenClaw', link: '/openclaw/' },
          { text: 'ClaudeCode', link: '/claude-code/' },
          { text: 'Cursor', link: '/cursor/' },
          { text: 'Trae', link: '/trae/' }
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'Python', link: '/python/00-why-python' },
          { text: 'NumPy', link: '/numpy/' },
          { text: 'Pandas', link: '/pandas/' },
          { text: 'Matplotlib', link: '/matplotlib/' }
        ]
      },
      {
        text: 'C++',
        items: [
          { text: 'C++', link: '/cpp/' },
          { text: 'Modern C++', link: '/modern-cpp/' },
          { text: 'CMake', link: '/cmake/' },
          { text: 'GDB', link: '/gdb/' }
        ]
      },
      {
        text: 'AI 数据库',
        items: [
          { text: 'PG Vector', link: '/pgvector/' },
          { text: 'DuckDB', link: '/duckdb/' },
          { text: 'LanceDB', link: '/lancedb/' },
          { text: 'Milvus', link: '/milvus/' },
          { text: 'Faiss', link: '/faiss/' },
          { text: 'Chroma', link: '/chroma/' }
        ]
      },
      {
        text: 'CUDA',
        items: [
          { text: 'CUDA C++', link: '/cuda/' },
          { text: 'CUDA CMake', link: '/cuda-cmake/' },
          { text: 'CUDA GDB', link: '/cuda-gdb/' }
        ]
      },
      {
        text: '机器学习',
        items: [
          { text: 'Scikit-learn', link: '/sklearn/' },
          { text: 'XGBoost', link: '/xgboost/' },
          { text: 'LightGBM', link: '/lightgbm/' }
        ]
      },
      {
        text: '深度学习',
        items: [
          { text: 'PyTorch', link: '/pytorch/' },
          { text: 'TensorFlow', link: '/tensorflow/' },
          { text: 'PyTorch Lightning', link: '/pytorch-lightning/' }
        ]
      },
      {
        text: 'LLM 训练',
        items: [
          { text: 'Transformers', link: '/transformers/' },
          { text: 'PEFT', link: '/peft/' },
          { text: 'DeepSpeed', link: '/deepspeed/' },
          { text: 'Unsloth', link: '/unsloth/' }
        ]
      },
      {
        text: 'LLM 推理',
        items: [
          { text: 'vLLM', link: '/vllm/' },
          { text: 'TensorRT-LLM', link: '/tensorrt-llm/' },
          { text: 'Ollama', link: '/ollama/' },
          { text: 'TensorRT', link: '/tensorrt/' }
        ]
      },
      {
        text: 'LLM 应用',
        items: [
          { text: 'LangChain', link: '/langchain/' },
          { text: 'LlamaIndex', link: '/llamaindex/' },
          { text: 'LangGraph', link: '/langgraph/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: '博客', link: '/blog/' }
    ],
    sidebar: {
      '/python/': [
        {
          text: 'Python 教程',
          collapsed: false,
          items: [
            { text: '字典与集合', link: '/python/14-set-dict' }
          ]
        }
      ]
    },
    outline: { level: [2, 6] }
  }
})
