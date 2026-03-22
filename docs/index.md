---
layout: home
---

<style>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-box {
  margin-bottom: 16px;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.875rem;
  background: #fff;
  outline: none;
  transition: all 0.2s ease;
  font-family: inherit;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 1px var(--vp-c-brand-1);
}

.search-input::placeholder {
  color: #94a3b8;
}

.category-section {
  margin-bottom: 8px;
}

.category-header {
  margin-bottom: 5px;
  padding-bottom: 3px;
  border-bottom: 1px solid #e2e8f0;
}

.category-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.tech-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: block;
}

.tech-card:hover {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-color: #06b6d4;
}

.tech-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.tech-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
}

.tech-desc {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<div class="home-container">

  <div class="search-box">
    <input type="text" placeholder="搜索技术教程..." class="search-input">
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">编程语言基础层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/python/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
            <span style="color: white;">Py</span>
          </div>
          <span class="tech-name">Python</span>
        </div>
        <p class="tech-desc">AI生态核心语言，语法简洁，标准库丰富</p>
      </a>
      <a href="/x-ai-web/numpy/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #4f46e5, #3730a3);">
            <span style="color: white;">Np</span>
          </div>
          <span class="tech-name">NumPy</span>
        </div>
        <p class="tech-desc">数值计算基石，ndarray数组，向量化运算</p>
      </a>
      <a href="/x-ai-web/pandas/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
            <span style="color: white;">Pd</span>
          </div>
          <span class="tech-name">Pandas</span>
        </div>
        <p class="tech-desc">表格数据处理，DataFrame操作</p>
      </a>
      <a href="/x-ai-web/matplotlib/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">
            <span style="color: white;">Mp</span>
          </div>
          <span class="tech-name">Matplotlib</span>
        </div>
        <p class="tech-desc">静态可视化基础，出版级图表</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">C++开发层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/cpp/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #00599c, #004482);">
            <span style="color: white;">C++</span>
          </div>
          <span class="tech-name">C++基础</span>
        </div>
        <p class="tech-desc">语法基础，指针引用，面向对象</p>
      </a>
      <a href="/x-ai-web/modern-cpp/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5);">
            <span style="color: white;">C++17</span>
          </div>
          <span class="tech-name">现代C++</span>
        </div>
        <p class="tech-desc">智能指针，Lambda，移动语义</p>
      </a>
      <a href="/x-ai-web/cmake/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
            <span style="color: white;">CM</span>
          </div>
          <span class="tech-name">CMake</span>
        </div>
        <p class="tech-desc">跨平台构建，target管理</p>
      </a>
      <a href="/x-ai-web/gdb/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
            <span style="color: white;">GDB</span>
          </div>
          <span class="tech-name">GDB调试</span>
        </div>
        <p class="tech-desc">断点调试，变量查看</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">CUDA GPU编程层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/cuda/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00);">
            <span style="color: white;">CUDA</span>
          </div>
          <span class="tech-name">CUDA基础</span>
        </div>
        <p class="tech-desc">内核函数，线程层次，内存模型</p>
      </a>
      <a href="/x-ai-web/cuda-memory/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #10b981, #059669);">
            <span style="color: white;">Mem</span>
          </div>
          <span class="tech-name">CUDA内存优化</span>
        </div>
        <p class="tech-desc">全局内存，共享内存，统一内存</p>
      </a>
      <a href="/x-ai-web/cublas/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
            <span style="color: white;">BLAS</span>
          </div>
          <span class="tech-name">cuBLAS</span>
        </div>
        <p class="tech-desc">GPU矩阵运算，GEMM/GEMV</p>
      </a>
      <a href="/x-ai-web/cudnn/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
            <span style="color: white;">DNN</span>
          </div>
          <span class="tech-name">cuDNN</span>
        </div>
        <p class="tech-desc">深度学习原语，卷积，池化</p>
      </a>
      <a href="/x-ai-web/nccl/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ec4899, #db2777);">
            <span style="color: white;">NCCL</span>
          </div>
          <span class="tech-name">NCCL</span>
        </div>
        <p class="tech-desc">多GPU通信，AllReduce</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">传统机器学习层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/sklearn/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #f7931e, #e07f00);">
            <span style="color: white;">SK</span>
          </div>
          <span class="tech-name">Scikit-learn</span>
        </div>
        <p class="tech-desc">ML算法，预处理，模型选择</p>
      </a>
      <a href="/x-ai-web/xgboost/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #00b4d8, #0096c7);">
            <span style="color: white;">XGB</span>
          </div>
          <span class="tech-name">XGBoost</span>
        </div>
        <p class="tech-desc">梯度提升，回归/分类/排序</p>
      </a>
      <a href="/x-ai-web/lightgbm/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a);">
            <span style="color: white;">LGB</span>
          </div>
          <span class="tech-name">LightGBM</span>
        </div>
        <p class="tech-desc">微软GBDT，速度快内存省</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">深度学习框架层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/pytorch/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ee4c2c, #d13b1c);">
            <span style="color: white;">PT</span>
          </div>
          <span class="tech-name">PyTorch</span>
        </div>
        <p class="tech-desc">动态图，自动微分，nn.Module</p>
      </a>
      <a href="/x-ai-web/tensorflow/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ff6f00, #e65100);">
            <span style="color: white;">TF</span>
          </div>
          <span class="tech-name">TensorFlow/Keras</span>
        </div>
        <p class="tech-desc">静态图，生产部署，Keras API</p>
      </a>
      <a href="/x-ai-web/pytorch-lightning/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #7c3aed, #6d28d9);">
            <span style="color: white;">⚡</span>
          </div>
          <span class="tech-name">PyTorch Lightning</span>
        </div>
        <p class="tech-desc">工程化封装，自动分布式</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">大模型训练与微调层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/transformers/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ffcc00, #f0b400);">
            <span style="color: #333;">🤗</span>
          </div>
          <span class="tech-name">Transformers</span>
        </div>
        <p class="tech-desc">预训练模型，Tokenizer，Trainer</p>
      </a>
      <a href="/x-ai-web/peft/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #a855f7, #9333ea);">
            <span style="color: white;">PEFT</span>
          </div>
          <span class="tech-name">PEFT</span>
        </div>
        <p class="tech-desc">LoRA，QLoRA参数高效微调</p>
      </a>
      <a href="/x-ai-web/deepspeed/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0078d4, #005a9e);">
            <span style="color: white;">DS</span>
          </div>
          <span class="tech-name">DeepSpeed</span>
        </div>
        <p class="tech-desc">ZeRO优化，3D并行</p>
      </a>
      <a href="/x-ai-web/unsloth/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #22c55e, #16a34a);">
            <span style="color: white;">US</span>
          </div>
          <span class="tech-name">Unsloth</span>
        </div>
        <p class="tech-desc">2024最快微调，显存优化</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">大模型推理部署层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/vllm/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
            <span style="color: white;">vLLM</span>
          </div>
          <span class="tech-name">vLLM</span>
        </div>
        <p class="tech-desc">PagedAttention，高吞吐服务</p>
      </a>
      <a href="/x-ai-web/tensorrt-llm/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00);">
            <span style="color: white;">TRT</span>
          </div>
          <span class="tech-name">TensorRT-LLM</span>
        </div>
        <p class="tech-desc">NVIDIA LLM优化，量化</p>
      </a>
      <a href="/x-ai-web/ollama/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5);">
            <span style="color: white;">Ollama</span>
          </div>
          <span class="tech-name">Ollama</span>
        </div>
        <p class="tech-desc">一键本地LLM，REST API</p>
      </a>
      <a href="/x-ai-web/tensorrt/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00);">
            <span style="color: white;">TRT</span>
          </div>
          <span class="tech-name">TensorRT</span>
        </div>
        <p class="tech-desc">模型优化部署，ONNX导入</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">LLM应用开发层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/langchain/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #1c3c3c, #0d1f1f);">
            <span style="color: #00b4d8;">🦜</span>
          </div>
          <span class="tech-name">LangChain</span>
        </div>
        <p class="tech-desc">Chain链，Agent智能体，Memory</p>
      </a>
      <a href="/x-ai-web/llamaindex/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #6366f1, #4f46e5);">
            <span style="color: white;">LI</span>
          </div>
          <span class="tech-name">LlamaIndex</span>
        </div>
        <p class="tech-desc">RAG框架，索引与检索</p>
      </a>
      <a href="/x-ai-web/langgraph/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #10b981, #059669);">
            <span style="color: white;">LG</span>
          </div>
          <span class="tech-name">LangGraph</span>
        </div>
        <p class="tech-desc">状态机工作流，多Agent协作</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">向量数据库层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/chroma/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #ec4899, #db2777);">
            <span style="color: white;">Ch</span>
          </div>
          <span class="tech-name">Chroma</span>
        </div>
        <p class="tech-desc">嵌入式向量库，轻量RAG</p>
      </a>
      <a href="/x-ai-web/milvus/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
            <span style="color: white;">Mv</span>
          </div>
          <span class="tech-name">Milvus</span>
        </div>
        <p class="tech-desc">云原生向量数据库，十亿级规模</p>
      </a>
      <a href="/x-ai-web/faiss/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #06b6d4, #0891b2);">
            <span style="color: white;">Fs</span>
          </div>
          <span class="tech-name">Faiss</span>
        </div>
        <p class="tech-desc">Meta向量检索库，PQ/HNSW</p>
      </a>
    </div>
  </div>

  <div class="category-section">
    <div class="category-header">
      <h2 class="category-title">MLOps与模型工程层</h2>
    </div>
    <div class="tech-grid">
      <a href="/x-ai-web/mlflow/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
            <span style="color: white;">MF</span>
          </div>
          <span class="tech-name">MLflow</span>
        </div>
        <p class="tech-desc">实验跟踪，模型注册</p>
      </a>
      <a href="/x-ai-web/wandb/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #fbbf24, #f59e0b);">
            <span style="color: #333;">WB</span>
          </div>
          <span class="tech-name">Weights & Biases</span>
        </div>
        <p class="tech-desc">可视化实验，超参搜索</p>
      </a>
      <a href="/x-ai-web/airflow/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #0ea5e9, #0284c7);">
            <span style="color: white;">AF</span>
          </div>
          <span class="tech-name">Airflow</span>
        </div>
        <p class="tech-desc">DAG编排，任务调度</p>
      </a>
      <a href="/x-ai-web/triton/" class="tech-card">
        <div class="tech-card-header">
          <div class="tech-icon" style="background: linear-gradient(135deg, #76b900, #5a8f00);">
            <span style="color: white;">TS</span>
          </div>
          <span class="tech-name">Triton Server</span>
        </div>
        <p class="tech-desc">模型服务，动态批处理</p>
      </a>
    </div>
  </div>

</div>
