---
layout: home
---

<style>
.home-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* 分类区域布局 */
.category-section {
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.category-section:nth-child(1) { animation-delay: 0.1s; }
.category-section:nth-child(2) { animation-delay: 0.2s; }
.category-section:nth-child(3) { animation-delay: 0.3s; }
.category-section:nth-child(4) { animation-delay: 0.4s; }
.category-section:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: stretch;
}

/* 左侧分类介绍 */
.category-intro {
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: start;
  max-height: fit-content;
}

.category-intro-image {
  width: 100%;
  height: 80px;
  object-fit: contain;
  margin-bottom: 12px;
  flex-shrink: 0;
}

.category-intro-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
  flex-shrink: 0;
}

.category-intro-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-shrink: 0;
}

/* 右侧教程列表 */
.tutorials-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.tutorial-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  text-decoration: none !important;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  background: #f8fafc;
}

.tutorial-item:hover {
  background: #f1f5f9;
  border-color: #e2e8f0;
}

.tutorial-item,
.tutorial-item * {
  text-decoration: none !important;
}

.tutorial-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  font-weight: 600;
}

.tutorial-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0;
}

.tutorial-content {
  flex: 1;
}

.tutorial-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
}

.tutorial-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
}
</style>

<div class="home-container">

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/oc.svg" alt="AI 编程教程" class="category-intro-image">
        <h3 class="category-intro-title">AI 编程教程</h3>
        <p class="category-intro-desc">使用 AI 原生编程工具提升开发效率</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/openclaw/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;"><img src="./images/oc.svg" alt="OpenClaw" style="width: 100%; height: 100%; object-fit: contain;"></div>
          <div class="tutorial-content">
            <div class="tutorial-title">OpenClaw教程</div>
            <div class="tutorial-desc">AI私人助手，全天24h可用，无人值守编程</div>
          </div>
        </a>
        <a href="/x-ai-web/claude-code/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #d97706, #b45309); color: white;"><img src="./images/code.png" alt="ClaudeCode" style="width: 100%; height: 100%; object-fit: contain;"></div>
          <div class="tutorial-content">
            <div class="tutorial-title">ClaudeCode教程</div>
            <div class="tutorial-desc">Anthropic 编程助手，长上下文</div>
          </div>
        </a>
        <a href="/x-ai-web/cursor/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white;"><img src="./images/cursor.png" alt="Cursor" style="width: 100%; height: 100%; object-fit: contain;"></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Cursor教程</div>
            <div class="tutorial-desc">AI 代码编辑器，GPT-4 驱动</div>
          </div>
        </a>
        <a href="/x-ai-web/trae/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"><img src="./images/trae.png" alt="Trae" style="width: 100%; height: 100%; object-fit: contain;"></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Trae教程</div>
            <div class="tutorial-desc">AI 原生 IDE，智能代码生成</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/python.png" alt="Python教程" class="category-intro-image">
        <h3 class="category-intro-title">Python教程</h3>
        <p class="category-intro-desc">掌握 AI 开发必备的编程语言和核心库</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/python/00-why-python" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;"><span class="iconify" data-icon="logos:python"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Python教程</div>
            <div class="tutorial-desc">AI 生态核心语言，语法简洁，标准库丰富</div>
          </div>
        </a>
        <a href="/x-ai-web/numpy/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #4f46e5, #3730a3); color: white;"><span class="iconify" data-icon="mdi:matrix"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">NumPy教程</div>
            <div class="tutorial-desc">数值计算基石，ndarray 数组，向量化运算</div>
          </div>
        </a>
        <a href="/x-ai-web/pandas/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white;"><span class="iconify" data-icon="mdi:table"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Pandas教程</div>
            <div class="tutorial-desc">表格数据处理，DataFrame 操作</div>
          </div>
        </a>
        <a href="/x-ai-web/matplotlib/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white;"><span class="iconify" data-icon="mdi:chart-line"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Matplotlib教程</div>
            <div class="tutorial-desc">静态可视化基础，出版级图表</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/cpp.svg" alt="C++教程" class="category-intro-image">
        <h3 class="category-intro-title">C++教程</h3>
        <p class="category-intro-desc">从 C++语言到项目构建</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/cpp/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #00599c, #004482); color: white;"><span class="iconify" data-icon="logos:c-plusplus"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">C++ 基础教程</div>
            <div class="tutorial-desc">语法基础，指针引用，面向对象</div>
          </div>
        </a>
        <a href="/x-ai-web/modern-cpp/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;"><span class="iconify" data-icon="logos:c-plusplus"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Modern C++教程</div>
            <div class="tutorial-desc">智能指针，Lambda，移动语义</div>
          </div>
        </a>
        <a href="/x-ai-web/cmake/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;"><span class="iconify" data-icon="simple-icons:cmake"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">CMake 教程</div>
            <div class="tutorial-desc">跨平台构建，target 管理</div>
          </div>
        </a>
        <a href="/x-ai-web/gdb/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white;"><span class="iconify" data-icon="mdi:bug"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">GDB 教程</div>
            <div class="tutorial-desc">断点调试，变量查看</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/chroma.png" alt="AI数据库教程" class="category-intro-image">
        <h3 class="category-intro-title">AI数据库教程</h3>
        <p class="category-intro-desc">面向AI时代的数据库技术</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/pgvector/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white;"><span class="iconify" data-icon="logos:postgresql"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">PG Vector 教程</div>
            <div class="tutorial-desc">PostgreSQL 向量扩展，存储检索一体化</div>
          </div>
        </a>
        <a href="/x-ai-web/duckdb/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white;"><span class="iconify" data-icon="logos:duckduckgo"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">DuckDB 教程</div>
            <div class="tutorial-desc">嵌入式分析数据库，向量查询加速</div>
          </div>
        </a>
        <a href="/x-ai-web/lancedb/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"><span class="iconify" data-icon="mdi:database"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">LanceDB 教程</div>
            <div class="tutorial-desc">Serverless AI 数据库，云原生架构</div>
          </div>
        </a>
        <a href="/x-ai-web/milvus/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white;"><span class="iconify" data-icon="mdi:vector-link"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Milvus 教程</div>
            <div class="tutorial-desc">云原生 AI 数据库，十亿级规模</div>
          </div>
        </a>
        <a href="/x-ai-web/faiss/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;"><span class="iconify" data-icon="mdi:vector-arrange-above"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Faiss 教程</div>
            <div class="tutorial-desc">Meta 向量检索库，PQ/HNSW</div>
          </div>
        </a>
        <a href="/x-ai-web/chroma/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ec4899, #db2777); color: white;"><span class="iconify" data-icon="mdi:palette"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Chroma 教程</div>
            <div class="tutorial-desc">嵌入式向量库，轻量 RAG</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/cuda.png" alt="GPU CUDA 教程" class="category-intro-image">
        <h3 class="category-intro-title">GPU CUDA 教程</h3>
        <p class="category-intro-desc">掌握 GPU 并行计算核心技能</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/cuda/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00); color: white;"><span class="iconify" data-icon="mdi:chip"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">CUDA C++</div>
            <div class="tutorial-desc">GPU 并行计算，内核函数，线程层次</div>
          </div>
        </a>
        <a href="/x-ai-web/cuda-cmake/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white;"><span class="iconify" data-icon="simple-icons:cmake"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">CUDA CMake</div>
            <div class="tutorial-desc">CUDA 项目构建，target 管理</div>
          </div>
        </a>
        <a href="/x-ai-web/cuda-gdb/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ef4444, #dc2626); color: white;"><span class="iconify" data-icon="mdi:bug"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">CUDA GDB</div>
            <div class="tutorial-desc">GPU 调试工具，断点调试</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/sklearn.svg" alt="机器学习教程" class="category-intro-image">
        <h3 class="category-intro-title">机器学习教程</h3>
        <p class="category-intro-desc">学习经典机器学习框架</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/sklearn/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #f7931e, #e07f00); color: white;"><span class="iconify" data-icon="simple-icons:scikitlearn"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Scikit-learn 教程</div>
            <div class="tutorial-desc">ML 算法，预处理，模型选择</div>
          </div>
        </a>
        <a href="/x-ai-web/xgboost/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #00b4d8, #0096c7); color: white;"><span class="iconify" data-icon="simple-icons:x"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">XGBoost 教程</div>
            <div class="tutorial-desc">梯度提升，回归/分类/排序</div>
          </div>
        </a>
        <a href="/x-ai-web/lightgbm/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white;"><span class="iconify" data-icon="mdi:leaf"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">LightGBM 教程</div>
            <div class="tutorial-desc">微软 GBDT，速度快内存省</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/pytorch.png" alt="深度学习教程" class="category-intro-image">
        <h3 class="category-intro-title">深度学习教程</h3>
        <p class="category-intro-desc">掌握主流深度学习框架</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/pytorch/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ee4c2c, #d13b1c); color: white;"><span class="iconify" data-icon="simple-icons:pytorch"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">PyTorch 教程</div>
            <div class="tutorial-desc">动态图，自动微分，nn.Module</div>
          </div>
        </a>
        <a href="/x-ai-web/tensorflow/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ff6f00, #e65100); color: white;"><span class="iconify" data-icon="logos:tensorflow"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">TensorFlow 教程/Keras</div>
            <div class="tutorial-desc">静态图，生产部署，Keras API</div>
          </div>
        </a>
        <a href="/x-ai-web/pytorch-lightning/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #7c3aed, #6d28d9); color: white;"><span class="iconify" data-icon="mdi:lightning-bolt"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">PyTorch Lightning 教程</div>
            <div class="tutorial-desc">工程化封装，自动分布式</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/transformers.jpeg" alt="大模型训练教程" class="category-intro-image">
        <h3 class="category-intro-title">大模型训练教程</h3>
        <p class="category-intro-desc">学习大模型训练和微调技术</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/transformers/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #ffcc00, #f0b400); color: #333;"><span class="iconify" data-icon="simple-icons:huggingface"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Transformers 教程</div>
            <div class="tutorial-desc">预训练模型，Tokenizer，Trainer</div>
          </div>
        </a>
        <a href="/x-ai-web/peft/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #a855f7, #9333ea); color: white;"><span class="iconify" data-icon="mdi:tune"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">PEFT教程</div>
            <div class="tutorial-desc">LoRA，QLoRA 参数高效微调</div>
          </div>
        </a>
        <a href="/x-ai-web/deepspeed/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #0078d4, #005a9e); color: white;"><span class="iconify" data-icon="mdi:server"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">DeepSpeed教程</div>
            <div class="tutorial-desc">ZeRO 优化，3D 并行</div>
          </div>
        </a>
        <a href="/x-ai-web/unsloth/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a); color: white;"><span class="iconify" data-icon="mdi:rocket"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Unsloth教程</div>
            <div class="tutorial-desc">2026 最快微调，显存优化</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/vllm.webp" alt="大模型推理部署层" class="category-intro-image">
        <h3 class="category-intro-title">大模型推理教程</h3>
        <p class="category-intro-desc">掌握大模型推理优化和部署技术</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/vllm/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7); color: white;"><span class="iconify" data-icon="mdi:engine"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">vLLM教程</div>
            <div class="tutorial-desc">PagedAttention，高吞吐服务</div>
          </div>
        </a>
        <a href="/x-ai-web/tensorrt-llm/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00); color: white;"><span class="iconify" data-icon="logos:nvidia"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">TensorRT-LLM教程</div>
            <div class="tutorial-desc">NVIDIA LLM 优化，量化</div>
          </div>
        </a>
        <a href="/x-ai-web/ollama/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;"><span class="iconify" data-icon="mdi:robot-happy"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">Ollama 教程</div>
            <div class="tutorial-desc">一键本地 LLM，REST API</div>
          </div>
        </a>
        <a href="/x-ai-web/tensorrt/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00); color: white;"><span class="iconify" data-icon="mdi:cube-outline"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">TensorRT 教程</div>
            <div class="tutorial-desc">模型优化部署，ONNX 导入</div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="category-section">
    <div class="category-layout">
      <div class="category-intro">
        <img src="./images/langchain.png" alt="LLM 应用开发教程" class="category-intro-image">
        <h3 class="category-intro-title">大模型应用开发教程</h3>
        <p class="category-intro-desc">学习大模型应用开发框架</p>
      </div>
      <div class="tutorials-list">
        <a href="/x-ai-web/langchain/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #1c3c3c, #0d1f1f); color: #00b4d8;"><span class="iconify" data-icon="simple-icons:langchain"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">LangChain 教程</div>
            <div class="tutorial-desc">Chain 链，Agent 智能体，Memory</div>
          </div>
        </a>
        <a href="/x-ai-web/llamaindex/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white;"><span class="iconify" data-icon="mdi:file-search"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">LlamaIndex教程</div>
            <div class="tutorial-desc">RAG 框架，索引与检索</div>
          </div>
        </a>
        <a href="/x-ai-web/langgraph/" class="tutorial-item">
          <div class="tutorial-icon" style="background: linear-gradient(135deg, #10b981, #059669); color: white;"><span class="iconify" data-icon="mdi:graph"></span></div>
          <div class="tutorial-content">
            <div class="tutorial-title">LangGraph教程</div>
            <div class="tutorial-desc">状态机工作流，多 Agent 协作</div>
          </div>
        </a>
      </div>
    </div>
  </div>

</div>
