# 数据结构与算法

## 第一章：算法基础

### 1.1 什么是算法

算法是**解决问题的步骤和方法**。好算法应该是正确、高效、可读的。

**算法复杂度：**
- 时间复杂度：T(n)
- 空间复杂度：S(n)

### 1.2 复杂度表示

| 符号 | 名称 | 示例 |
|------|------|------|
| O(1) | 常数 | 数组访问 |
| O(log n) | 对数 | 二分查找 |
| O(n) | 线性 | 遍历 |
| O(n log n) | 线性对数 | 快速排序 |
| O(n²) | 平方 | 冒泡排序 |
| O(2ⁿ) | 指数 | 递归Fibonacci |

### 1.3 基础数据结构

#### 数组

```python
# Python数组操作
arr = [1, 2, 3, 4, 5]

# 访问 O(1)
print(arr[0])

# 查找 O(n)
def find(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

#### 链表

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 链表反转
def reverse(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev
```

#### 栈和队列

```python
# 栈 - LIFO
stack = []
stack.append(1)  # push
stack.pop()      # pop

# 队列 - FIFO
from collections import deque
queue = deque()
queue.append(1)  # enqueue
queue.popleft()  # dequeue
```

### 1.4 排序算法

#### 冒泡排序 O(n²)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```

#### 快速排序 O(n log n)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

### 1.5 查找算法

#### 二分查找 O(log n)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### 1.6 递归

```python
# Fibonacci数列
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# 阶乘
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)
```

### 1.7 算法设计技巧

1. **分治**：大问题拆成小问题
2. **动态规划**：存储中间结果
3. **贪心**：局部最优
4. **回溯**：尝试+撤销

### 1.8 练习

1. 实现归并排序
2. 实现二叉树遍历
3. 解决一道LeetCode中等难度题目

---

**下一步**： [第二章：高级算法](./advanced.html)
