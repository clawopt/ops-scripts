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
      .VPDoc .aside { width: 300px !important; }
      .VPDoc .container { gap: 16px !important; }
      .VPDoc .content .content-container { max-width: none !important; width: auto !important; padding-left: 12px !important; padding-right: 12px !important; }
      .VPSidebar {
        margin-top: var(--vp-nav-height) !important;
      }
    `]
    ,
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
