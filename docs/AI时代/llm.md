# 大语言模型入门

## 第一章：大模型基础

### 1.1 什么是大语言模型

大语言模型（Large Language Model，LLM）是基于**深度学习**的NLP模型，通过海量文本训练，具备理解和生成文本的能力。

**代表模型：**
- GPT系列（OpenAI）
- Claude系列（Anthropic）
- LLaMA（Meta）
- 通义千问（阿里）
- 文心一言（百度）

### 1.2 LLM核心概念

#### Transformer架构

LLM的核心是**Transformer**：

```
输入 → 编码器 → 注意力机制 → 解码器 → 输出
```

#### 注意力机制

```python
# 简化的注意力机制
import torch
import torch.nn.functional as F

def attention(Q, K, V):
    # Q, K, V: (batch, seq_len, d_k)
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / sqrt(d_k)
    attention_weights = F.softmax(scores, dim=-1)
    return torch.matmul(attention_weights, V)
```

#### 词嵌入

```python
# 词嵌入示例
import torch.nn as nn

embedding = nn.Embedding(vocab_size, embedding_dim)
input_ids = torch.tensor([1, 2, 3, 4])
embeddings = embedding(input_ids)  # (4, embedding_dim)
```

### 1.3 提示工程

#### 基本技巧

```python
# 1. 明确指令
prompt = """
请完成以下任务：
任务：总结下文内容
内容：{article}
"""

# 2. 给示例
prompt = """
示例：
输入：我今天很开心
输出：表达积极情绪

输入：我明天要考试
输出：
"""

# 3. 分步思考
prompt = """
问题：如何学习编程？
请分步骤回答：
步骤1：
步骤2：
步骤3：
"""
```

#### Few-shot学习

```python
#Few-shot示例
prompt = """
判断情感是正面还是负面：

文本：我爱这部电影！
情感：正面

文本：这个产品太差了。
情感：负面

文本：还可以，中规中矩。
情感：
"""
```

### 1.4 本地部署LLM

#### Ollama

```bash
# 安装
curl -fsSL https://ollama.com/install.sh | sh

# 列出可用模型
ollama list

# 运行模型
ollama run llama2

# 运行中文模型
ollama run qwen:7b
```

#### LM Studio

- 下载：https://lmstudio.ai/
- 支持Windows/macOS
- 图形界面，易上手

### 1.5 使用API

#### OpenAI API

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "你是一个助手"},
        {"role": "user", "content": "你好"}
    ]
)

print(response.choices[0].message.content)
```

#### 阿里云DashScope

```python
from dashscope import Generation

response = Generation.call(
    model='qwen-turbo',
    prompt='你好，请介绍一下自己'
)

print(response.output.text)
```

### 1.6 RAG架构

RAG（检索增强生成）= 知识库 + LLM

```python
# 简化RAG流程
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

# 1. 加载文档
from langchain_community.document_loaders import TextLoader
loader = TextLoader("document.txt")
docs = loader.load()

# 2. 分割
from langchain.text_splitter import CharacterTextSplitter
splitter = CharacterTextSplitter()
split_docs = splitter.split_documents(docs)

# 3. 向量化存储
embeddings = HuggingFaceEmbeddings()
vectorstore = Chroma.from_documents(split_docs, embeddings)

# 4. 检索+生成
retriever = vectorstore.as_retriever()
relevant_docs = retriever.get_relevant_documents(query)
# 将检索结果+query一起发给LLM
```

### 1.7 练习

1. 使用Ollama运行本地模型
2. 尝试不同的Prompt技巧
3. 搭建一个简单的RAG系统

---

**下一步**： [第二章：大模型进阶](./advanced.html)
