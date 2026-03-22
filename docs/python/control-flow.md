---
title: 控制流与函数
---

# 控制流与函数

本章介绍 Python 的控制流语句和函数定义，这是编写 AI 程序的基础。

## 1. 条件语句

条件语句用于根据不同情况执行不同的代码，在 AI 开发中常用于训练控制、模型选择等场景。

### 1.1 if 语句

```python
# 基本条件判断
loss = 0.05

if loss < 0.1:
    print("模型训练良好！")

# if-else 结构
accuracy = 0.85

if accuracy >= 0.9:
    print("模型性能优秀")
else:
    print("模型需要继续优化")
```

### 1.2 if-elif-else 结构

```python
# 多条件判断 - 模型性能评估
accuracy = 0.92

if accuracy >= 0.95:
    grade = "S级"
    recommendation = "可以部署到生产环境"
elif accuracy >= 0.90:
    grade = "A级"
    recommendation = "性能良好，建议小规模测试"
elif accuracy >= 0.80:
    grade = "B级"
    recommendation = "需要进一步调优"
elif accuracy >= 0.70:
    grade = "C级"
    recommendation = "建议重新设计模型"
else:
    grade = "D级"
    recommendation = "模型效果不佳，需要重新训练"

print(f"模型评级: {grade}")
print(f"建议: {recommendation}")
```

### 1.3 条件表达式（三元运算符）

```python
# 简洁的条件赋值
loss = 0.08
status = "收敛" if loss < 0.1 else "未收敛"
print(f"训练状态: {status}")

# 实际应用：选择设备
import os
device = "cuda" if os.path.exists("/dev/nvidia0") else "cpu"
print(f"使用设备: {device}")

# 选择优化器
use_adam = True
optimizer = "Adam" if use_adam else "SGD"
```

### 1.4 嵌套条件

```python
# 训练决策系统
has_gpu = True
gpu_memory = 24  # GB
batch_size = 32

if has_gpu:
    if gpu_memory >= 16:
        batch_size = 64
        print(f"GPU显存充足，使用批次大小: {batch_size}")
    elif gpu_memory >= 8:
        batch_size = 32
        print(f"GPU显存适中，使用批次大小: {batch_size}")
    else:
        batch_size = 16
        print(f"GPU显存有限，使用批次大小: {batch_size}")
else:
    print("无GPU，使用CPU训练")
    batch_size = 8
```

### 1.5 在线练习：条件语句

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 创建一个变量 `score`（0-100），根据分数输出等级（A/B/C/D/F）
2. 使用三元运算符判断一个数是奇数还是偶数
3. 编写一个简单的温度转换器：输入摄氏度，输出华氏度，如果温度超过30度输出"炎热"

---

## 2. 循环语句

循环用于重复执行代码，在 AI 中常用于遍历数据、训练迭代等。

### 2.1 for 循环

```python
# 遍历列表
models = ["GPT-4", "Claude", "Gemini", "Llama"]

for model in models:
    print(f"正在评估模型: {model}")

# 使用 range() - 训练循环
epochs = 5
for epoch in range(epochs):
    print(f"第 {epoch + 1} 轮训练开始")

# 带索引的遍历
metrics = ["accuracy", "precision", "recall", "f1"]
for idx, metric in enumerate(metrics):
    print(f"{idx + 1}. {metric}")

# 遍历字典
model_config = {
    "learning_rate": 0.001,
    "batch_size": 32,
    "epochs": 100,
    "optimizer": "Adam"
}

for key, value in model_config.items():
    print(f"{key}: {value}")
```

### 2.2 while 循环

```python
# 基本while循环 - 训练直到收敛
loss = 1.0
target_loss = 0.1
epoch = 0
max_epochs = 100

while loss > target_loss and epoch < max_epochs:
    # 模拟训练过程
    loss = loss * 0.9  # 假设每轮损失降低10%
    epoch += 1
    print(f"Epoch {epoch}: loss = {loss:.4f}")

print(f"\n训练完成！共训练 {epoch} 轮，最终损失: {loss:.4f}")

# 带用户交互的循环
while True:
    user_input = input("请输入命令 (输入 'quit' 退出): ")
    if user_input == "quit":
        print("再见！")
        break
    print(f"你输入了: {user_input}")
```

### 2.3 循环控制语句

```python
# break - 提前退出循环
for i in range(10):
    if i == 5:
        print("找到目标，退出循环")
        break
    print(i)

# continue - 跳过当前迭代
print("\n跳过偶数:")
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)

# 实际应用：早停机制
losses = [0.9, 0.7, 0.5, 0.3, 0.25, 0.24, 0.23, 0.23, 0.23]
patience = 3
no_improve = 0
best_loss = float('inf')

for epoch, loss in enumerate(losses):
    print(f"Epoch {epoch + 1}: loss = {loss:.4f}")
    
    if loss < best_loss:
        best_loss = loss
        no_improve = 0
    else:
        no_improve += 1
    
    if no_improve >= patience:
        print(f"\n触发早停！连续 {patience} 轮无改善")
        break
```

### 2.4 循环中的 else 子句

```python
# for-else：循环正常结束时执行else
print("搜索目标值:")
target = 5
for i in range(10):
    if i == target:
        print(f"找到目标: {i}")
        break
else:
    print("未找到目标")

# while-else
count = 0
while count < 3:
    print(f"计数: {count}")
    count += 1
else:
    print("循环正常结束")
```

### 2.5 在线练习：循环语句

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 使用 for 循环计算 1 到 100 的和
2. 使用 while 循环实现一个简单的猜数字游戏
3. 打印九九乘法表

---

## 3. 函数

函数是组织代码的基本单元，良好的函数设计让 AI 代码更易维护和复用。

### 3.1 函数定义与调用

```python
# 基本函数定义
def greet(name):
    """问候函数"""
    return f"你好，{name}！欢迎学习AI编程。"

# 调用函数
message = greet("张三")
print(message)

# 无返回值函数
def print_model_info(name, params, accuracy):
    """打印模型信息"""
    print(f"模型名称: {name}")
    print(f"参数量: {params}")
    print(f"准确率: {accuracy:.2%}")

print_model_info("GPT-4", "1.8T", 0.95)
```

### 3.2 参数类型

```python
# 位置参数和关键字参数
def train_model(model_name, epochs, learning_rate=0.001, batch_size=32):
    """
    训练模型函数
    
    参数:
        model_name: 模型名称（必需）
        epochs: 训练轮数（必需）
        learning_rate: 学习率（默认0.001）
        batch_size: 批次大小（默认32）
    """
    print(f"训练模型: {model_name}")
    print(f"训练轮数: {epochs}")
    print(f"学习率: {learning_rate}")
    print(f"批次大小: {batch_size}")

# 不同的调用方式
train_model("ResNet", 100)  # 使用默认参数
train_model("ResNet", 100, learning_rate=0.01)  # 指定部分参数
train_model("ResNet", 100, batch_size=64, learning_rate=0.01)  # 关键字参数

# *args: 可变位置参数
def calculate_mean(*numbers):
    """计算平均值"""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

print(f"平均值: {calculate_mean(1, 2, 3, 4, 5)}")

# **kwargs: 可变关键字参数
def create_model(**config):
    """创建模型配置"""
    print("模型配置:")
    for key, value in config.items():
        print(f"  {key}: {value}")

create_model(
    name="Transformer",
    layers=12,
    hidden_size=768,
    attention_heads=12
)
```

### 3.3 返回值

```python
# 单返回值
def get_model_size(params):
    """获取模型大小的可读格式"""
    if params >= 1e9:
        return f"{params / 1e9:.1f}B"
    elif params >= 1e6:
        return f"{params / 1e6:.1f}M"
    elif params >= 1e3:
        return f"{params / 1e3:.1f}K"
    return str(params)

print(get_model_size(175000000000))  # 175.0B

# 多返回值
def evaluate_model(predictions, labels):
    """评估模型性能"""
    correct = sum(p == l for p, l in zip(predictions, labels))
    total = len(labels)
    accuracy = correct / total
    
    # 计算精确率和召回率（简化版）
    tp = sum(1 for p, l in zip(predictions, labels) if p == l == 1)
    fp = sum(1 for p, l in zip(predictions, labels) if p == 1 and l == 0)
    fn = sum(1 for p, l in zip(predictions, labels) if p == 0 and l == 1)
    
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0
    
    return accuracy, precision, recall, f1

# 使用返回值
predictions = [1, 0, 1, 1, 0, 1, 0, 0]
labels = [1, 0, 1, 0, 0, 1, 1, 0]
acc, prec, rec, f1 = evaluate_model(predictions, labels)
print(f"准确率: {acc:.2%}, 精确率: {prec:.2%}, 召回率: {rec:.2%}, F1: {f1:.2%}")
```

### 3.4 函数作为参数

```python
# 高阶函数：函数作为参数
def train_with_callback(epoch, loss, callback=None):
    """带回调函数的训练"""
    print(f"Epoch {epoch}: loss = {loss:.4f}")
    if callback:
        callback(epoch, loss)

# 定义回调函数
def early_stop_callback(epoch, loss):
    if loss < 0.1:
        print("  -> 达到目标，建议停止训练")

def log_callback(epoch, loss):
    with open("training.log", "a") as f:
        f.write(f"{epoch},{loss}\n")

# 使用回调
train_with_callback(1, 0.5, early_stop_callback)
train_with_callback(10, 0.05, early_stop_callback)
```

### 3.5 在线练习：函数

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 编写一个函数 `calculate_bmi(height, weight)`，计算并返回 BMI 值和健康状态
2. 编写一个函数 `count_words(text)`，统计文本中每个单词出现的次数
3. 编写一个可变参数函数，计算任意数量数字的最大值、最小值和平均值

---

## 4. Lambda 表达式

Lambda 是匿名函数，适合简单的、一次性使用的函数。

### 4.1 基本语法

```python
# 普通函数
def square(x):
    return x ** 2

# Lambda 表达式
square_lambda = lambda x: x ** 2

print(square(5))         # 25
print(square_lambda(5))  # 25

# 多参数 Lambda
add = lambda a, b: a + b
print(add(3, 5))  # 8

# 条件表达式
is_even = lambda x: "偶数" if x % 2 == 0 else "奇数"
print(is_even(4))  # 偶数
```

### 4.2 Lambda 在 AI 中的应用

```python
# 排序模型列表
models = [
    {"name": "GPT-4", "params": 1.8e12, "accuracy": 0.95},
    {"name": "Claude", "params": 1.0e12, "accuracy": 0.93},
    {"name": "Llama", "params": 7e9, "accuracy": 0.88},
    {"name": "Gemini", "params": 5e11, "accuracy": 0.92}
]

# 按准确率排序
sorted_by_accuracy = sorted(models, key=lambda m: m["accuracy"], reverse=True)
print("按准确率排序:")
for m in sorted_by_accuracy:
    print(f"  {m['name']}: {m['accuracy']:.2%}")

# 按参数量排序
sorted_by_params = sorted(models, key=lambda m: m["params"])
print("\n按参数量排序:")
for m in sorted_by_params:
    print(f"  {m['name']}: {m['params']:.2e}")

# 过滤大模型
large_models = list(filter(lambda m: m["params"] > 1e12, models))
print(f"\n参数超过1T的模型: {[m['name'] for m in large_models]}")
```

### 4.3 map、filter、reduce

```python
# map: 对每个元素应用函数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(f"平方: {squared}")

# 将模型名称转为大写
model_names = ["gpt-4", "claude", "gemini"]
uppercase_names = list(map(str.upper, model_names))
print(f"大写: {uppercase_names}")

# filter: 过滤元素
scores = [85, 92, 78, 95, 60, 88, 72]
passed = list(filter(lambda x: x >= 80, scores))
print(f"及格分数: {passed}")

# reduce: 累积计算
from functools import reduce

numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(f"总和: {total}")

# 找出最大值
max_value = reduce(lambda a, b: a if a > b else b, numbers)
print(f"最大值: {max_value}")
```

### 4.4 在线练习：Lambda

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 使用 Lambda 和 `sorted()` 对列表 `[("GPT", 95), ("Claude", 93), ("Llama", 88)]` 按分数排序
2. 使用 `map()` 将列表 `[1, 2, 3, 4, 5]` 的每个元素乘以 2
3. 使用 `filter()` 筛选出列表 `[12, 5, 8, 21, 30, 7]` 中的偶数

---

## 5. 递归函数

递归是函数调用自身的过程，在 AI 中常用于树结构遍历、分治算法等。

### 5.1 基本递归

```python
# 阶乘
def factorial(n):
    """计算n的阶乘"""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"5! = {factorial(5)}")  # 120

# 斐波那契数列
def fibonacci(n):
    """计算第n个斐波那契数"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print("斐波那契数列前10项:")
for i in range(10):
    print(fibonacci(i), end=" ")
print()
```

### 5.2 递归在 AI 中的应用

```python
# 遍历嵌套的模型配置
def print_config(config, indent=0):
    """递归打印嵌套配置"""
    prefix = "  " * indent
    for key, value in config.items():
        if isinstance(value, dict):
            print(f"{prefix}{key}:")
            print_config(value, indent + 1)
        else:
            print(f"{prefix}{key}: {value}")

model_config = {
    "model": {
        "name": "Transformer",
        "encoder": {
            "layers": 6,
            "hidden_size": 512
        },
        "decoder": {
            "layers": 6,
            "hidden_size": 512
        }
    },
    "training": {
        "optimizer": "Adam",
        "learning_rate": 0.001
    }
}

print_config(model_config)

# 计算神经网络的层数
def count_layers(model_dict):
    """递归计算模型层数"""
    if "layers" in model_dict:
        return model_dict["layers"]
    
    total = 0
    for value in model_dict.values():
        if isinstance(value, dict):
            total += count_layers(value)
    return total

print(f"\n总层数: {count_layers(model_config['model'])}")
```

### 5.3 在线练习：递归

<iframe
  frameBorder="0"
  height="400px"
  src="https://onecompiler.com/embed/python?codeChangeEvent=true&hideLanguageSelection=true&hideNew=true"
  width="100%"
></iframe>

**练习任务**：
1. 编写递归函数计算列表 `[1, 2, 3, 4, 5]` 的元素之和
2. 编写递归函数实现二分查找
3. 编写递归函数计算字符串反转

---

## 小结

本章介绍了 Python 的控制流和函数：

| 知识点 | 说明 | AI 应用场景 |
|--------|------|-------------|
| if-elif-else | 条件判断 | 模型评估、训练控制 |
| for/while | 循环迭代 | 训练循环、数据处理 |
| 函数 | 代码复用 | 模块化开发 |
| Lambda | 匿名函数 | 数据处理、排序 |
| 递归 | 自调用 | 树遍历、分治算法 |

## 下一步

下一章我们将学习 [数据结构](/python/data-structures)，包括：
- 列表（List）
- 字典（Dictionary）
- 集合（Set）
- 元组（Tuple）

## 练习题

1. 编写一个函数 `is_prime(n)` 判断一个数是否为质数
2. 使用循环打印以下图案：
   ```
   *
   **
   ***
   ****
   *****
   ```
3. 编写一个函数 `train_model_simulation(epochs, lr)`，模拟训练过程并返回每轮的损失值列表
