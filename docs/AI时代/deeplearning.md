# 深度学习基础

## 第一章：深度学习入门

### 1.1 什么是深度学习

深度学习是**机器学习**的分支，基于**神经网络**。通过构建多层网络，自动学习数据的特征表示。

**深度学习的优势：**
- 自动特征提取
- 处理非结构化数据
- 强大的表达能力
- 端到端学习

### 1.2 神经网络基础

#### 感知机

```python
import torch
import torch.nn as nn

# 简单感知机
class Perceptron(nn.Module):
    def __init__(self, input_dim):
        super().__init__()
        self.linear = nn.Linear(input_dim, 1)
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, x):
        return self.sigmoid(self.linear(x))
```

#### 全连接网络

```python
class DNN(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, output_dim)
        )
    
    def forward(self, x):
        return self.layers(x)
```

### 1.3 PyTorch基础

#### 张量

```python
import torch

# 创建张量
x = torch.tensor([1, 2, 3])
x = torch.randn(3, 4)  # 3x4随机矩阵

# 基本操作
y = x + 2
z = torch.matmul(x, y.T)

# GPU支持
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
x = x.to(device)
```

#### 自动求导

```python
x = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
y = x ** 2
z = y.sum()

z.backward()
print(x.grad)  # tensor([2., 4., 6.])
```

### 1.4 卷积神经网络（CNN）

```python
class CNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Sequential(
            # 输入3通道，输出32通道，卷积核3x3
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        
        self.fc = nn.Sequential(
            nn.Flatten(),
            nn.Linear(64 * 8 * 8, 256),
            nn.ReLU(),
            nn.Linear(256, 10)
        )
    
    def forward(self, x):
        x = self.conv(x)
        x = self.fc(x)
        return x
```

### 1.5 循环神经网络（RNN）

```python
class RNN(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super().__init__()
        self.hidden_size = hidden_size
        self.rnn = nn.RNN(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
    
    def forward(self, x):
        out, hidden = self.rnn(x)
        out = self.fc(out[:, -1, :])
        return out
```

### 1.6 Transformer

```python
class TransformerEncoder(nn.Module):
    def __init__(self, d_model, nhead, num_layers):
        super().__init__()
        self.transformer = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(d_model=d_model, nhead=nhead),
            num_layers=num_layers
        )
    
    def forward(self, x):
        return self.transformer(x)
```

### 1.7 训练流程

```python
# 完整训练流程
model = CNN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(100):
    for batch_x, batch_y in train_loader:
        # 前向传播
        outputs = model(batch_x)
        loss = criterion(outputs, batch_y)
        
        # 反向传播
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    if (epoch + 1) % 10 == 0:
        print(f'Epoch [{epoch+1}], Loss: {loss.item():.4f}')
```

### 1.8 经典网络

| 网络 | 年份 | 特点 |
|------|------|------|
| LeNet | 1998 | 早期CNN |
| AlexNet | 2012 | 深度学习复兴 |
| VGG | 2014 | 深层网络 |
| ResNet | 2015 | 残差连接 |
| Transformer | 2017 | 注意力机制 |
| BERT | 2018 | 预训练+微调 |

### 1.9 练习

1. 使用PyTorch实现手写数字识别
2. 搭建一个简单的文本分类模型
3. 了解并尝试预训练模型微调

---

**下一步**： [第二章：深度学习进阶](./advanced.html)
