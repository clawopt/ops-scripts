---
title: 字典与集合
description: 全网最详细的字典与集合教程
outline: deep
---

# 字典与集合

## 从用法触发的直觉

几乎所有 Python 学习者都会在早期接触到字典。

```python
scores = {
    "Alice": 95,
    "Bob": 88,
    "Charlie": 92
}

print(scores["Alice"])
```

它之所以让人感觉直观、自然且可读，是因为字典把“根据键找到值”这件事抽象得非常贴近人类对“名称—含义”的理解；而当我们稍微深入地追问一句——为什么查找能快到几乎不需要等待？——就会走进哈希与位运算共同构成的定位机制，它把键映射到槽位，再通过少量探测完成命中，这套路径既简洁又可靠。

## 为什么字典查找这么快

当你执行：

```python
scores["Alice"]
```

Python 首先计算：

```python
hash("Alice")
```

然后通过位运算映射到数组槽位：

```text
槽位数组（长度8）：

[0] None
[1] None
[2] ("Bob", 88)
[3] None
[4] ("Alice", 95)
[5] None
[6] ("Charlie", 92)
[7] None
```

定位公式：

```text
index = hash(key) & (size - 1)
```

这就是 O(1) 查找的真正含义——不是遍历，而是定位。

为了把“定位”与“遍历”的差异从直觉变成可感知的事实，我们可以做一个简短的时间比较，让同一个目标在列表与集合中分别进行成员测试，观察两段时间的对比，从而形成稳定的性能直觉：

```python
import time
n = 300000
arr = list(range(n))
s = set(arr)
target = n - 1

t0 = time.time()
_ = target in arr
t1 = time.time()
_ = target in s
t2 = time.time()
print(round(t1 - t0, 4), round(t2 - t1, 4))
```

当数据规模逐步增大时，列表的成员测试需要逐项比对，复杂度呈线性增长；而集合的成员测试以哈希定位为核心，期望在常数时间内完成，这就是“遍历”与“定位”在工程上的分野，亦是字典与集合能在实际项目中承担高频查找职责的根本原因。

## 冲突与开放寻址

在有限的槽位与无限的键值空间之间，冲突并不是偶尔出现的异常，而是必然发生的常态；为了让这种常态不影响查找的整体效率，Python 采用开放寻址法而不是链式结构，通过逐步探测相邻或计算出的槽位，找到能够容纳该键值对的位置：

```text
槽位4 已占
继续探测槽位5
槽位5 空 → 插入
```

对于同一键的重复赋值，字典不会生成新的条目，而是以覆盖的方式更新该槽位的值，这一点在冲突处理存在的情况下尤为重要，因为它保证了“一个键对应一个位置”的不变约定：

```python
d = {}
d["k"] = 1
d["k"] = 2
print(d, len(d))
```

字典始终维持“一个键一个槽位”的语义约束；即便底层发生哈希冲突，它也会通过探测找到合适的位置，从而既不破坏查找路径的连贯性，也不产生重复条目。

## 扰动与探测路径

为避免线性聚集，Python 使用扰动算法：

```text
i = (i * 5 + 1 + perturb) & mask
perturb >>= 5
```

这让不同 key 在冲突后走不同路径。

不同的哈希值不仅决定初始槽位，还会影响随后的探测序列；这意味着同样的插入过程在不同键的哈希分布下会走出不同的路径，从而降低相邻键汇聚到同一连片区域的风险：

```python
keys = ["Aa", "BB", "CC", "DD", "EE"]
print([hash(k) for k in keys])
```

在探测过程中引入扰动算法，能够在每次冲突后打乱后续的前进节奏，使得不同键在继续寻找空槽位时走上分散的路线，由此有效降低线性聚集，维护整体性能的稳定。

## 负载因子、扩容与 Rehash

负载因子定义：

```text
load_factor = 已使用槽位 / 总槽位
```

当接近 2/3 时触发扩容。

扩容通常翻倍：

```text
8 → 16 → 32 → 64
```

当元素不断插入、负载因子逐步上升并接近设定阈值时，字典会触发扩容以换取更低的冲突概率；从用户视角看，这种行为表现为内存占用的“阶梯式”增长，而从工程视角看，它是以空间换时间的典型策略：

```python
import sys
d = {}
sizes = []
for i in range(5000):
    d[i] = i
    if i % 1000 == 0:
        sizes.append((i, sys.getsizeof(d)))
print(sizes)
```

每一次扩容都伴随着 `rehash` 与重新定位，这样做的目的并非改变外在语义，而是以更加稀疏的索引空间确保后续查找与更新依旧能够在常数时间内完成。

## Rehash 的语义稳定性

扩容后所有 key 重新定位：

扩容前：

```text
hash(key) & 7
```

扩容后：

```text
hash(key) & 15
```

扩容之后所有键会依据新的掩码与容量被重新定位到更大的索引空间中，不过从开发者的角度来看，读取的语义与体验应当保持稳定，不论是扩容前写入的键还是扩容后新增的键，都能够被毫不意外地命中：

```python
d = {i: i*i for i in range(1000)}
for i in range(1000, 8000):
    d[i] = i*i
print(d[999], d[5000])
```

这份稳定性也正是字典在长期运行的服务与数据密集型任务中被广泛采用的原因之一。

## 删除与墓碑标记

在字典中，删除并不是把槽位简单地重置为 `None`；如果这么做，会切断此前形成的探测链，导致后续查找在遇到这个空洞时错误地结束。为了解决这个问题，Python 使用墓碑标记（`DUMMY`），让查找在经过该位置时继续沿着既有路径前行：

```text
[1] DUMMY
```

删除后再插入同名键：

```python
d = {"Alice": 1, "Bob": 2}
del d["Alice"]
d["Alice"] = 3
print(d)
```

这种设计在保证删除语义成立的同时，维护了探测链的连贯性，从而不会破坏后续查找与插入的正常行为。

## 紧凑字典结构（Python 3.6）

旧结构：

```text
[槽位] hash | key | value
```

新结构：

```text
索引数组：
[0] → 2
[1] → None
[2] → 0

数据数组：
[0] ("Alice",95)
[1] ("Bob",88)
[2] ("Charlie",92)
```

自 Python 3.6 起，字典采用了紧凑结构，将索引数组与数据数组分离，这种布局使存储更为紧凑；从用户的视角来看，它意味着在相同条目数量下更少的内存开销，同时也为插入顺序的维护打下基础：

```python
import sys
small = {str(i): i for i in range(50)}
large = {str(i): i for i in range(500)}
print(sys.getsizeof(small), sys.getsizeof(large))
```

通过减少每个条目的重复元数据并集中维护索引，紧凑结构把“空间与遍历友好性”的平衡掌握得更为细致。

## 插入顺序（Python 3.7）

3.7 起，插入顺序成为语言规范。

在 Python 3.7 以后，插入顺序成为语言规范的一部分，字典的遍历顺序与构建顺序保持一致；这使得我们在编排输出与序列化时可以直接依赖构建过程本身，而不必借助额外的数据结构来记录顺序：

```python
d = {}
for k in ["z", "a", "b", "x"]:
    d[k] = k.upper()
print(list(d.keys()))
```

因此，在需要按构建顺序输出的场合，把字典作为“有序映射”的最简手段，已经成为一种可靠且常见的工程选择。

## 集合的本质与集合运算

```text
{1,2,3}
```

等价逻辑：

```text
{1:True, 2:True, 3:True}
```

集合可以被理解为“没有值的字典”，它天生适合去重与高效的成员测试，并且在交集、并集与差集这类集合代数中展现出极高的表达力：

```python
nums = [1, 1, 2, 3, 3, 4]
unique = set(nums)
print(sorted(unique), 3 in unique, 5 in unique)
```

在去重的同时，我们还可以依靠成员测试迅速判断某个元素是否已经出现过，这种“表达与性能合一”的特性让集合在标签系统、访问权限与去重统计等场景中十分实用。

## 自定义键的契约：__hash__ 与 __eq__

插入流程：

```text
插入对象
 ↓
计算 hash
 ↓
定位槽位
 ↓
冲突时调用 __eq__
```

规则：

> 如果 a == b，那么 hash(a) 必须等于 hash(b)

当我们希望把自定义对象作为字典的键或集合的元素时，需要同时满足 `__hash__` 与 `__eq__` 的契约：相等的对象必须拥有相同的哈希，从而在定位与比较两个阶段始终指向同一槽位：

```python
class User:
    def __init__(self, uid, name):
        self.uid = uid
        self.name = name
    def __eq__(self, other):
        return isinstance(other, User) and self.uid == other.uid
    def __hash__(self):
        return hash(self.uid)

u1 = User(1, "Alice")
u2 = User(1, "Alice")
cache = {u1: "OK"}
print(cache[u2])
```

当两个对象在语义上相等且拥有一致的哈希值时，它们就会命中同一槽位，示例中 `u2` 能够直接命中 `u1` 的缓存，正是契约发挥作用的结果。

## 可变对象的风险与误用

```python
p = Person("Alice")
d = {p:100}
p.name = "Bob"
```

一旦把可变字段纳入哈希计算，后续修改就可能使同一个对象在新的哈希空间里指向不同的位置，从而出现查找失败或覆盖错误的情况；因此在工程实践中，更推荐使用不可变的标识字段（例如 `id`）参与哈希，或者避免修改参与哈希的字段。

错误的哈希设计可能导致查找失败：

```python
class Bad:
    def __init__(self, name):
        self.name = name
    def __hash__(self):
        return hash(self.name)
    def __eq__(self, other):
        return isinstance(other, Bad) and self.name == other.name

obj = Bad("A")
d = {obj: 123}
obj.name = "B"
print(d.get(obj, "miss"))
```

把可变字段（如 `name`）纳入哈希不仅会让定位失去稳定性，也会让等价性比较变得不可信，进而影响到集合与字典的整体行为。

## 常用 API 与易错点

### 读取与默认值：get 与 setdefault
当我们从原理回到日常编程，字典与集合的 API 既强大也有一些容易忽略的细节。首先，`dict.get(key, default)` 是比直接索引更稳妥的读取：缺失时不会抛出异常；而 `dict.setdefault(key, default)` 不仅返回值，还会在缺失时写入默认值，这非常适合“按键分组”的场景。

```python
group = {}
for user, tag in [("alice","nlp"), ("bob","vision"), ("alice","cv")]:
    group.setdefault(user, set()).add(tag)
print(group)
```

### 合并与更新：解包、管道与 update
关于合并与更新，`{**a, **b}` 与 `a | b`（3.9+）遵循“后者覆盖前者”；而 `dict.update` 会就地修改左操作数。若是嵌套结构，`update` 只做浅层合并，容易留下“内层仍是旧值”的错觉。

```python
a = {"cfg": {"lr": 1e-3, "wd": 0.0}, "gpu": 2}
b = {"cfg": {"lr": 2e-3}, "gpu": 4}
merged = {**a, **b}  # 或 a | b
print(merged)        # 注意：merged["cfg"]["wd"] 不再保留
```

### 视图对象与快照：keys/items
`d.keys()` / `d.items()` 返回的是动态视图，会随字典变动而更新；如果需要快照，应显式转为列表。

```python
d = {"a": 1}
keys_view = d.keys()
d["b"] = 2
print(list(keys_view))  # ['a','b'] —— 视图会反映最新内容
```

### 拷贝策略：浅拷贝与深拷贝
`dict.copy()` 是浅拷贝，内层对象依旧共享引用；如需隔离，应使用 `copy.deepcopy`。在实际工程中，浅拷贝往往是更高效的选择，但要清楚它的边界。

```python
import copy
cfg = {"opt": {"lr": 1e-3}}
shallow = cfg.copy()
deep = copy.deepcopy(cfg)
cfg["opt"]["lr"] = 5e-4
print(shallow["opt"]["lr"], deep["opt"]["lr"])  # 5e-4, 1e-3
```

### 字典读取与视图的细节

在成员测试上，`x in d` 等价于测试键是否存在，这是最快的方式；而 `x in d.keys()` 会创建或遍历视图，通常不如直接测试字典本身来得高效；如果你需要测试值而不是键，则可以显式使用 `x in d.values()`，但这会做线性扫描。

```python
d = {"alice": 95, "bob": 88}
print("alice" in d)         # True（测试键）
print(95 in d.values())     # True（测试值，线性）
```

`pop(key, default)` 在删除的同时返回被删除的值；若键不存在而又没有提供默认值，会抛出 `KeyError`。`popitem()` 则删除并返回“最后插入”的键值对（3.7+），适合 LIFO 风格的逐条取出。

```python
d = {"a":1, "b":2}
print(d.pop("a"))           # 1
print(d.pop("x", "none"))   # none（提供默认值更稳妥）
print(d.popitem())          # ('b', 2) —— 最后插入的项
```

`fromkeys(iterable, value)` 能快速构造只有键的字典，但如果 `value` 是可变对象（例如空列表），所有键会共享同一个引用，这是一个高频陷阱；更安全的做法是用推导式为每个键创建独立对象。

```python
keys = ["a","b","c"]
d1 = dict.fromkeys(keys, [])    # 所有键共享同一个列表
d1["a"].append(1)
print(d1["b"])                  # [1] —— 共享导致“串联”

d2 = {k: [] for k in keys}      # 推导式为每个键创建新的列表
d2["a"].append(1)
print(d2["b"])                  # [] —— 彼此独立
```

字典推导式也适合做“过滤”与“变换”，在需要构造新映射时比循环更清晰。

```python
scores = {"alice":95,"bob":88,"carol":92}
passed = {k:v for k,v in scores.items() if v >= 90}
curve  = {k:v+2 for k,v in scores.items()}
print(passed, curve)
```

### 集合的常用操作与对照

集合的 `add` 与 `update` 分别用于添加单个元素与批量元素；删除时，`remove` 在元素不存在时抛出异常，而 `discard` 则静默跳过，这在“尝试性删除”的场景下更安全；`pop` 返回并删除任意一个元素（不保证顺序），适合逐步取出。

```python
s = set()
s.add("nlp")
s.update(["cv","vision"])
s.discard("graph")    # 不存在也不会报错
print(s)
```

关系判断方面，`isdisjoint` 用于判定两个集合是否没有交集，`issubset` 与 `issuperset` 则分别用于子集与超集的判断。对称差可以用 `^` 或 `symmetric_difference`，表示“在 A 或 B 中、但不同时在两者中”的元素。

```python
a = {"nlp","vision"}
b = {"vision","graph"}
print(a.isdisjoint({"math"}))       # True
print({"nlp"}.issubset(a))          # True
print(a.issuperset({"nlp"}))        # True
print(a ^ b)                        # {'nlp','graph'}
```

需要注意的是，集合元素必须是可哈希的不可变对象；列表或字典由于可变性不能作为元素，如果确实需要“不可变的组合”，可以使用 `frozenset` 来表达无序且不可变的集合组合。

### 默认值策略与容器工厂

除了 `setdefault` 之外，`collections.defaultdict` 提供了“默认值的工厂函数”，在键缺失时自动创建初始值，这对“按键分桶”与“计数器”非常便利；不过它的行为在序列化或与非默认字典交互时需要留意。

```python
from collections import defaultdict
group = defaultdict(set)
for user, tag in [("alice","nlp"),("bob","vision"),("alice","cv")]:
    group[user].add(tag)     # 缺失时自动创建 set()
print(dict(group))           # 转成普通 dict 后再传递
```

### 迭代与修改的边界

在迭代字典或集合的同时修改它们，容易引发“跳项”或异常；如果确需在遍历时修改，通常的安全姿势是先做快照，再基于快照迭代，从而避免与底层结构的动态变化相互干扰。

```python
d = {"a":1,"b":2,"c":3}
for k, v in list(d.items()):    # 基于快照迭代更安全
    if v % 2 == 1:
        del d[k]
print(d)                        # {'b':2}
```

### 排序与输出

字典天然不排序，但我们可以用 `sorted` 配合 `items()` 进行按键或按值的排序输出；这类输出通常用于报告或持久化，能让结果在不同环境下保持一致的序。

```python
d = {"bob":88,"alice":95,"carol":92}
print(sorted(d.items()))                      # 按键排序
print(sorted(d.items(), key=lambda x: x[1]))  # 按值排序
```

## 综合示例：标签系统与配方索引

把字典与集合的能力整合起来，会形成很“顺手”的数据建模方式。比如我们为用户维护标签集合，并支持“交集检索”；同时用 `frozenset` 为配方建立“无序组合键”的索引。

```python
# 用户 -> 标签集合
user_tags = {}
for u, t in [("alice","nlp"),("alice","cv"),("bob","vision"),("bob","nlp")]:
    user_tags.setdefault(u, set()).add(t)

# 根据两个标签找同时具备的用户
def search_users(*tags):
    result = set(user_tags.keys())
    for t in tags:
        result &= {u for u, ts in user_tags.items() if t in ts}
    return sorted(result)

print(search_users("nlp"))       # ['alice','bob']
print(search_users("nlp","cv"))  # ['alice']

# 配方：无序组合键
recipes = {
    frozenset({"egg","milk","flour"}): "pancake",
    frozenset({"tomato","basil","mozzarella"}): "caprese"
}
print(recipes[frozenset({"flour","milk","egg"})])  # pancake
```

这段程序把“哈希定位 + 集合运算”组合到了一起：用户标签用集合去重与成员测试实现；交集检索自然地用 `&` 完成；配方索引用不可变集合避免了顺序敏感的陷阱。这正是字典与集合在工程中的常见姿势：用最贴近问题结构的方式来表达数据与操作。

 
