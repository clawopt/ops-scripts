import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "x-AI，迈向未来",
  description: "从Python到CUDA，从深度学习到大模型部署",
  lang: 'zh-CN',
  base: '/x-ai-web/',
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: './images/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'keywords', content: 'AI编程,深度学习,CUDA,PyTorch,大模型,LLM,机器学习' }],
    ['meta', { name: 'author', content: 'x-AI，迈向未来' }],
    ['script', { src: 'https://cdn.tailwindcss.com' }],
    ['script', { src: 'https://code.iconify.design/3/3.1.1/iconify.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' }],
    ['style', {}, `
      .vp-doc h1, .vp-doc h2, .vp-doc h3 {
        border: none !important;
        border-top: none !important;
        margin-top: 0.8em !important;
        margin-bottom: 0.4em !important;
        padding-top: 0 !important;
      }
      .VPSidebar * {
        border: none !important;
      }
      .VPDoc[data-v-39a288b8],
      .VPDoc,
      .vp-doc {
        padding-top: 0 !important;
      }
      .VPDoc .container {
        padding-top: 0 !important;
        margin-top: 0 !important;
      }
      .VPDoc .content {
        padding-top: 0 !important;
      }
      .vp-doc h1:first-child,
      .vp-doc h2:first-child {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
      .VPSidebar .group,
      .VPSidebar .group + .group,
      .VPSidebarItem.level-0,
      [data-v-b3fd67f8].level-0,
      [data-v-c40bc020].group {
        margin: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border-top: none !important;
      }
      .VPSidebar .items,
      .VPSidebar .container,
      .VPSidebar .content,
      .VPSidebar .nav {
        margin: 0 !important;
        padding: 0 !important;
      }
      .VPSidebarItem .item {
        display: flex !important;
        align-items: center !important;
        margin: 0 !important;
        padding: 0 12px !important;
        min-height: 24px !important;
      }
      .VPSidebarItem .text {
        line-height: 24px !important;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 14px !important;
      }
      .VPSidebarItem .caret {
        margin-left: auto !important;
      }
      .VPSidebarItem.level-0 {
        margin-bottom: 0 !important;
      }
      .VPSidebar .group::before,
      .VPSidebar .group::after {
        display: none !important;
        content: none !important;
      }
      .VPSidebar {
        border-right: 1px solid var(--vp-c-divider) !important;
      }
      .VPSidebarItem .caret {
        cursor: pointer !important;
      }
      .VPSidebarItem .item .caret-icon {
        display: block !important;
      }
      .vp-doc .header-anchor {
        display: inline-block !important;
        float: none !important;
        position: static !important;
        margin: 0 0.25em 0 0 !important;
        vertical-align: middle !important;
        text-decoration: none !important;
        opacity: 0.7;
      }
    `],
  ],
  themeConfig: {
    logo: 'AI',
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

    footer: {
      message: '从基础到前沿，掌握AI编程全栈技术',
      copyright: '© 2026 x-AI，迈向未来. 保留所有权利.'
    },

    sidebar: {
      '/python/': [
        {
          text: 'Python 教程',
          collapsed: false,
          items: [
            { text: '字典与集合', link: '/python/14-set-dict' }
          ]
        }
      ],
      '/numpy/': [
        {
          text: 'NumPy教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/numpy/' },
            { text: 'ndarray数组', link: '/numpy/ndarray' },
            { text: '向量化运算', link: '/numpy/vectorization' },
            { text: '广播机制', link: '/numpy/broadcasting' }
          ]
        }
      ],
      '/pandas/': [
        {
          text: 'Pandas教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/pandas/' },
            { text: 'DataFrame', link: '/pandas/dataframe' },
            { text: '数据清洗', link: '/pandas/cleaning' },
            { text: '数据分析', link: '/pandas/analysis' }
          ]
        }
      ],
      '/matplotlib/': [
        {
          text: 'Matplotlib教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/matplotlib/' },
            { text: '基础绑图', link: '/matplotlib/basic' },
            { text: '高级图表', link: '/matplotlib/advanced' }
          ]
        }
      ],
      '/cpp/': [
        {
          text: 'C++ 基础教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cpp/' },
            { text: '语法基础', link: '/cpp/syntax' },
            { text: '指针与引用', link: '/cpp/pointer' },
            { text: '面向对象', link: '/cpp/oop' }
          ]
        }
      ],
      '/modern-cpp/': [
        {
          text: '现代C++教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/modern-cpp/' },
            { text: '智能指针', link: '/modern-cpp/smart-pointer' },
            { text: 'Lambda表达式', link: '/modern-cpp/lambda' },
            { text: '移动语义', link: '/modern-cpp/move' }
          ]
        }
      ],
      '/cmake/': [
        {
          text: 'CMake教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cmake/' },
            { text: '基础配置', link: '/cmake/basic' },
            { text: '目标管理', link: '/cmake/target' },
            { text: 'CUDA支持', link: '/cmake/cuda' }
          ]
        }
      ],
      '/gdb/': [
        {
          text: 'GDB调试教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/gdb/' },
            { text: '断点调试', link: '/gdb/breakpoint' },
            { text: '变量查看', link: '/gdb/variable' },
            { text: 'Core Dump', link: '/gdb/coredump' }
          ]
        }
      ],
      '/cuda/': [
        {
          text: 'CUDA基础教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cuda/' },
            { text: '内核函数', link: '/cuda/kernel' },
            { text: '线程层次', link: '/cuda/thread' },
            { text: '内存模型', link: '/cuda/memory' }
          ]
        }
      ],
      '/cuda-memory/': [
        {
          text: 'CUDA内存优化',
          collapsed: false,
          items: [
            { text: '概述', link: '/cuda-memory/' },
            { text: '全局内存', link: '/cuda-memory/global' },
            { text: '共享内存', link: '/cuda-memory/shared' },
            { text: '统一内存', link: '/cuda-memory/unified' }
          ]
        }
      ],
      '/cublas/': [
        {
          text: 'cuBLAS教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cublas/' },
            { text: '矩阵运算', link: '/cublas/gemm' },
            { text: '批处理操作', link: '/cublas/batch' }
          ]
        }
      ],
      '/cudnn/': [
        {
          text: 'cuDNN教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cudnn/' },
            { text: '卷积操作', link: '/cudnn/convolution' },
            { text: '池化与归一化', link: '/cudnn/pooling' }
          ]
        }
      ],
      '/nccl/': [
        {
          text: 'NCCL教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/nccl/' },
            { text: '集合通信', link: '/nccl/collective' },
            { text: '多GPU通信', link: '/nccl/multi-gpu' }
          ]
        }
      ],
      '/polars/': [
        {
          text: 'Polars教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/polars/' },
            { text: 'DataFrame操作', link: '/polars/dataframe' },
            { text: '惰性执行', link: '/polars/lazy' }
          ]
        }
      ],
      '/pyspark/': [
        {
          text: 'PySpark教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/pyspark/' },
            { text: 'RDD操作', link: '/pyspark/rdd' },
            { text: 'DataFrame API', link: '/pyspark/dataframe' }
          ]
        }
      ],
      '/sklearn/': [
        {
          text: 'Scikit-learn教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/sklearn/' },
            { text: '预处理', link: '/sklearn/preprocessing' },
            { text: '模型训练', link: '/sklearn/model' },
            { text: '流水线', link: '/sklearn/pipeline' }
          ]
        }
      ],
      '/xgboost/': [
        {
          text: 'XGBoost教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/xgboost/' },
            { text: '分类与回归', link: '/xgboost/model' },
            { text: '调参优化', link: '/xgboost/tuning' }
          ]
        }
      ],
      '/lightgbm/': [
        {
          text: 'LightGBM教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/lightgbm/' },
            { text: '快速入门', link: '/lightgbm/quickstart' },
            { text: '参数调优', link: '/lightgbm/tuning' }
          ]
        }
      ],
      '/pytorch/': [
        {
          text: 'PyTorch教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/pytorch/' },
            { text: '张量操作', link: '/pytorch/tensor' },
            { text: '自动微分', link: '/pytorch/autograd' },
            { text: '神经网络', link: '/pytorch/nn' },
            { text: '数据加载', link: '/pytorch/dataloader' }
          ]
        }
      ],
      '/tensorflow/': [
        {
          text: 'TensorFlow教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/tensorflow/' },
            { text: 'Keras API', link: '/tensorflow/keras' },
            { text: '模型部署', link: '/tensorflow/deployment' }
          ]
        }
      ],
      '/pytorch-lightning/': [
        {
          text: 'PyTorch Lightning教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/pytorch-lightning/' },
            { text: 'LightningModule', link: '/pytorch-lightning/module' },
            { text: '分布式训练', link: '/pytorch-lightning/distributed' }
          ]
        }
      ],
      '/transformers/': [
        {
          text: 'Transformers教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/transformers/' },
            { text: '预训练模型', link: '/transformers/models' },
            { text: 'Tokenizer', link: '/transformers/tokenizer' },
            { text: 'Trainer', link: '/transformers/trainer' }
          ]
        }
      ],
      '/peft/': [
        {
          text: 'PEFT教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/peft/' },
            { text: 'LoRA', link: '/peft/lora' },
            { text: 'QLoRA', link: '/peft/qlora' }
          ]
        }
      ],
      '/trl/': [
        {
          text: 'TRL教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/trl/' },
            { text: 'RLHF', link: '/trl/rlhf' },
            { text: 'DPO', link: '/trl/dpo' }
          ]
        }
      ],
      '/deepspeed/': [
        {
          text: 'DeepSpeed教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/deepspeed/' },
            { text: 'ZeRO优化', link: '/deepspeed/zero' },
            { text: '3D并行', link: '/deepspeed/3d-parallel' }
          ]
        }
      ],
      '/flash-attention/': [
        {
          text: 'FlashAttention教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/flash-attention/' },
            { text: '原理与使用', link: '/flash-attention/usage' }
          ]
        }
      ],
      '/unsloth/': [
        {
          text: 'Unsloth教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/unsloth/' },
            { text: '快速微调', link: '/unsloth/finetune' }
          ]
        }
      ],
      '/vllm/': [
        {
          text: 'vLLM教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/vllm/' },
            { text: 'PagedAttention', link: '/vllm/paged-attention' },
            { text: '部署服务', link: '/vllm/deployment' }
          ]
        }
      ],
      '/tensorrt-llm/': [
        {
          text: 'TensorRT-LLM教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/tensorrt-llm/' },
            { text: '模型优化', link: '/tensorrt-llm/optimization' },
            { text: '量化部署', link: '/tensorrt-llm/quantization' }
          ]
        }
      ],
      '/llama-cpp/': [
        {
          text: 'llama.cpp教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/llama-cpp/' },
            { text: '量化推理', link: '/llama-cpp/quantization' },
            { text: '本地部署', link: '/llama-cpp/deployment' }
          ]
        }
      ],
      '/ollama/': [
        {
          text: 'Ollama教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/ollama/' },
            { text: '模型管理', link: '/ollama/models' },
            { text: 'API使用', link: '/ollama/api' }
          ]
        }
      ],
      '/tensorrt/': [
        {
          text: 'TensorRT教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/tensorrt/' },
            { text: 'ONNX导入', link: '/tensorrt/onnx' },
            { text: '插件开发', link: '/tensorrt/plugin' }
          ]
        }
      ],
      '/langchain/': [
        {
          text: 'LangChain教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/langchain/' },
            { text: 'Chain链', link: '/langchain/chain' },
            { text: 'Agent智能体', link: '/langchain/agent' },
            { text: 'Memory记忆', link: '/langchain/memory' }
          ]
        }
      ],
      '/llamaindex/': [
        {
          text: 'LlamaIndex教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/llamaindex/' },
            { text: 'RAG基础', link: '/llamaindex/rag' },
            { text: '索引与检索', link: '/llamaindex/index' }
          ]
        }
      ],
      '/langgraph/': [
        {
          text: 'LangGraph教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/langgraph/' },
            { text: '状态机', link: '/langgraph/state' },
            { text: '多Agent工作流', link: '/langgraph/workflow' }
          ]
        }
      ],
      '/chroma/': [
        {
          text: 'Chroma教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/chroma/' },
            { text: '向量存储', link: '/chroma/storage' },
            { text: 'RAG应用', link: '/chroma/rag' }
          ]
        }
      ],
      '/milvus/': [
        {
          text: 'Milvus教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/milvus/' },
            { text: '集合管理', link: '/milvus/collection' },
            { text: '大规模检索', link: '/milvus/search' }
          ]
        }
      ],
      '/faiss/': [
        {
          text: 'Faiss教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/faiss/' },
            { text: '索引类型', link: '/faiss/index' },
            { text: 'GPU加速', link: '/faiss/gpu' }
          ]
        }
      ],
      '/mlflow/': [
        {
          text: 'MLflow教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/mlflow/' },
            { text: '实验跟踪', link: '/mlflow/tracking' },
            { text: '模型注册', link: '/mlflow/registry' }
          ]
        }
      ],
      '/wandb/': [
        {
          text: 'W&B教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/wandb/' },
            { text: '实验可视化', link: '/wandb/visualization' },
            { text: '超参搜索', link: '/wandb/sweep' }
          ]
        }
      ],
      '/airflow/': [
        {
          text: 'Airflow教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/airflow/' },
            { text: 'DAG编排', link: '/airflow/dag' },
            { text: '任务调度', link: '/airflow/scheduling' }
          ]
        }
      ],
      '/triton/': [
        {
          text: 'Triton教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/triton/' },
            { text: '模型服务', link: '/triton/server' },
            { text: '动态批处理', link: '/triton/batching' }
          ]
        }
      ],
      '/openclaw/': [
        {
          text: 'OpenClaw教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/openclaw/' },
            { text: 'AI代码生成', link: '/openclaw/codegen' },
            { text: '智能补全', link: '/openclaw/autocomplete' }
          ]
        }
      ],
      '/claude-code/': [
        {
          text: 'ClaudeCode教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/claude-code/' },
            { text: 'Claude Code 简介', link: '/claude-code/introduction' },
            { text: '安装指南', link: '/claude-code/installation' },
            { text: '下载与开始', link: '/claude-code/start' },
            { text: '代码分析', link: '/claude-code/analysis' },
            { text: '智能重构', link: '/claude-code/refactor' }
          ]
        }
      ],
      '/cursor/': [
        {
          text: 'Cursor教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/cursor/' },
            { text: '代码生成', link: '/cursor/codegen' },
            { text: '智能重构', link: '/cursor/refactor' }
          ]
        }
      ],
      '/trae/': [
        {
          text: 'Trae教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/trae/' },
            { text: 'AI代码生成', link: '/trae/codegen' },
            { text: '智能补全', link: '/trae/autocomplete' }
          ]
        }
      ],
      '/bentoml/': [
        {
          text: 'BentoML教程',
          collapsed: false,
          items: [
            { text: '概述', link: '/bentoml/' },
            { text: '模型打包', link: '/bentoml/packaging' },
            { text: 'API服务', link: '/bentoml/api' }
          ]
        }
      ]
    },

    outline: false
  }
})
