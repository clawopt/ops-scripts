---
title: Python 基础语法
---

# Python 基础语法

本章介绍 Python 的基础语法，包括变量、数据类型、运算符等核心概念。我们将结合 AI 场景来讲解每个知识点。

## 1. 变量与数据类型

Python 是动态类型语言，变量不需要声明类型，解释器会自动推断。

### 1.1 基本数据类型

```python
# 数值类型
learning_rate = 0.001      # float - 学习率
epochs = 100               # int - 训练轮数
batch_size = 32            # int - 批次大小

# 字符串 - 模型名称
model_name = "GPT-4"
prompt = "请解释什么是深度学习"

# 布尔值 - 训练状态
is_training = True
use_gpu = False

# None - 空值，常用于初始化
best_model = None
```

### 1.2 类型转换

在 AI 开发中，经常需要在不同数据类型之间转换：

```python
# 从配置文件读取的通常是字符串
lr_str = "0.001"
learning_rate = float(lr_str)  # 转换为浮点数

# 数值转字符串用于日志输出
loss = 0.5234
log_msg = f"当前损失值: {loss}"  # 自动转换

# 常见的类型检查
print(type(learning_rate))  # <class 'float'>
print(isinstance(epochs, int))  # True
```

### 1.3 在线练习：变量与类型

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 创建一个变量 `model_accuracy`，值为 `0.95`
2. 创建一个变量 `model_name`，值为你的模型名称
3. 使用 `print()` 输出这两个变量

---

## 2. 运算符

### 2.1 算术运算符

在 AI 计算中，算术运算符用于处理损失值、梯度等：

```python
# 基本运算
total_loss = 0.5 + 0.3      # 加法: 0.8
avg_loss = total_loss / 2    # 除法: 0.4
scaled_loss = avg_loss * 10  # 乘法: 4.0

# 整除和取模 - 用于批次计算
total_samples = 1000
batch_size = 32
num_batches = total_samples // batch_size  # 整除: 31
remainder = total_samples % batch_size      # 取模: 8

# 幂运算 - 用于学习率衰减
initial_lr = 0.1
decay_rate = 0.95
epoch = 10
current_lr = initial_lr * (decay_rate ** epoch)
print(f"第{epoch}轮学习率: {current_lr:.6f}")
```

### 2.2 比较运算符

用于条件判断，如早停机制：

```python
# 比较运算
current_loss = 0.05
target_loss = 0.1
patience = 10
no_improve_count = 5

# 判断是否达到目标
if current_loss < target_loss:
    print("已达到训练目标！")

# 判断是否需要早停
if no_improve_count >= patience:
    print("触发早停机制")

# 链式比较
accuracy = 0.95
if 0.9 <= accuracy <= 1.0:
    print("模型性能优秀")
```

### 2.3 逻辑运算符

组合多个条件：

```python
# 训练条件判断
has_gpu = True
memory_enough = True
data_ready = False

# 所有条件都满足
if has_gpu and memory_enough and data_ready:
    print("开始训练")
else:
    print("条件不满足，无法开始训练")

# 至少一个条件满足
use_cuda = has_gpu or memory_enough

# 取反
is_overfitting = True
if not is_overfitting:
    print("模型正常")
```

### 2.4 在线练习：运算符

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 计算 `2` 的 `10` 次方
2. 判断 `0.95` 是否在 `0.9` 和 `1.0` 之间
3. 使用逻辑运算符判断：当 `accuracy > 0.9` 且 `loss < 0.1` 时输出"模型训练成功"

---

## 3. 字符串操作

在 AI 开发中，字符串用于处理文本数据、日志输出、提示词等。

### 3.1 字符串创建与基本操作

```python
# 字符串创建
prompt = "请解释什么是机器学习"
model_output = '机器学习是人工智能的一个分支...'

# 多行字符串 - 常用于长提示词
system_prompt = """
你是一个专业的AI助手，请根据用户的问题给出详细、准确的回答。

注意事项：
1. 回答要简洁明了
2. 提供具体的例子
3. 避免使用专业术语
"""

# 字符串拼接
user_name = "张三"
greeting = "你好，" + user_name + "！欢迎使用AI助手。"

# f-string 格式化（推荐）
accuracy = 0.9567
loss = 0.1234
print(f"模型准确率: {accuracy:.2%}, 损失值: {loss:.4f}")
# 输出: 模型准确率: 95.67%, 损失值: 0.1234
```

### 3.2 字符串方法

```python
# 大小写转换
text = "Hello AI World"
print(text.lower())      # hello ai world
print(text.upper())      # HELLO AI WORLD
print(text.title())      # Hello Ai World

# 去除空白
user_input = "  请帮我写一段代码  "
cleaned = user_input.strip()  # "请帮我写一段代码"

# 分割与连接
sentence = "机器学习,深度学习,自然语言处理"
fields = sentence.split(",")  # ['机器学习', '深度学习', '自然语言处理']
joined = " | ".join(fields)   # "机器学习 | 深度学习 | 自然语言处理"

# 查找与替换
text = "Python是最好的编程语言"
print(text.find("Python"))     # 0 (返回索引)
print(text.replace("Python", "Python 3"))  # Python 3是最好的编程语言

# 检查内容
filename = "model_v1.pth"
print(filename.startswith("model"))  # True
print(filename.endswith(".pth"))     # True
```

### 3.3 在线练习：字符串操作

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 创建一个包含你名字的字符串，使用 f-string 输出"你好，{名字}！"
2. 将字符串 `"AI,ML,DL,NLP"` 按逗号分割成列表
3. 将分割后的列表用 `" | "` 连接成新字符串

---

## 4. 输入与输出

### 4.1 print() 函数详解

```python
# 基本输出
print("训练开始")

# 多个值输出
epoch = 1
loss = 0.5
print("Epoch:", epoch, "Loss:", loss)

# 使用 sep 和 end 参数
print("Python", "AI", "ML", sep=" | ")  # Python | AI | ML
print("第一行", end=" -> ")
print("第二行")  # 第一行 -> 第二行

# 格式化输出
accuracy = 0.95678
print(f"准确率: {accuracy:.2%}")     # 准确率: 95.68%
print(f"准确率: {accuracy:.4f}")     # 准确率: 0.9568
print(f"准确率: {accuracy:e}")       # 准确率: 9.567800e-01
```

### 4.2 input() 函数

```python
# 获取用户输入
name = input("请输入你的名字: ")
print(f"你好，{name}！")

# 输入数字需要类型转换
age = int(input("请输入你的年龄: "))
print(f"你明年将 {age + 1} 岁")

# 实际应用：配置参数
learning_rate = float(input("请输入学习率 (默认0.001): ") or "0.001")
print(f"使用学习率: {learning_rate}")
```

### 4.3 在线练习：输入输出

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 使用 `print()` 输出你的姓名、年龄、爱好（使用 f-string）
2. 创建三个变量：`model_name`、`accuracy`、`loss`，格式化输出为表格形式

---

## 5. 注释

良好的注释习惯对于 AI 项目尤为重要：

```python
# 单行注释：解释单行代码的作用
learning_rate = 0.001  # 学习率，控制梯度下降的步长

"""
多行注释：用于详细说明
这个函数实现了学习率衰减策略：
- 初始学习率为 0.1
- 每轮衰减率为 0.95
- 使用指数衰减
"""

def train_model(data, epochs=100):
    """
    训练模型的函数
    
    参数:
        data: 训练数据
        epochs: 训练轮数，默认100
    
    返回:
        训练好的模型
    """
    # TODO: 实现模型训练逻辑
    pass

# 重要提示使用 TODO 或 FIXME
# TODO: 添加早停机制
# FIXME: 修复内存泄漏问题
```

---

## 小结

本章介绍了 Python 的基础语法：

| 知识点 | 说明 | AI 应用场景 |
|--------|------|-------------|
| 变量与类型 | 动态类型，自动推断 | 存储超参数、模型配置 |
| 运算符 | 算术、比较、逻辑 | 损失计算、条件判断 |
| 字符串 | 文本处理、格式化 | 提示词、日志输出 |
| 输入输出 | print/input | 用户交互、调试 |
| 注释 | 代码说明 | 项目文档、团队协作 |

## 下一步

下一章我们将学习 [控制流与函数](/python/control-flow)，包括：
- 条件语句（if-elif-else）
- 循环语句（for、while）
- 函数定义与调用
- Lambda 表达式

## 练习题

1. 创建一个变量存储模型名称，另一个变量存储准确率（0.95），使用 f-string 输出
2. 计算从 1 加到 100 的和（提示：使用公式或循环）
3. 将字符串 `"hello ai world"` 转换为标题格式（每个单词首字母大写）
