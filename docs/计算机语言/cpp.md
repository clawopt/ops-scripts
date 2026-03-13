# C++ 入门

## 第一章：C++基础与环境搭建

### 1.1 C++简介

C++是一种**静态类型**的、编译式的、通用的、大小写敏感的编程语言，由Bjarne Stroustrup于1979年在贝尔实验室开始研发。

**C++的特点：**
- 高性能（直接编译为机器码）
- 面向对象
- 泛型编程（模板）
- 丰富的标准库（STL）

### 1.2 安装C++编译器

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install g++ make
```

#### macOS

```bash
# 使用Xcode
xcode-select --install

# 或使用Homebrew
brew install gcc
```

#### Windows

下载安装：
- [MinGW](https://www.mingw-w64.org/) - 轻量级
- [Visual Studio](https://visualstudio.microsoft.com/) - 完整IDE

#### 验证安装

```bash
g++ --version
make --version
```

### 1.3 第一个C++程序

创建`hello.cpp`：

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, ByteTech!" << std::endl;
    return 0;
}
```

编译运行：

```bash
g++ hello.cpp -o hello
./hello
```

### 1.4 C++程序结构

```cpp
// 头文件
#include <iostream>
#include <vector>

// 使用命名空间
using namespace std;

// 类定义
class MyClass {
private:
    int value;
    
public:
    // 构造方法
    MyClass(int v) : value(v) {}
    
    // 成员函数
    void display() {
        cout << "Value: " << value << endl;
    }
};

// 主函数（程序入口）
int main() {
    MyClass obj(42);
    obj.display();
    return 0;
}
```

### 1.5 基本数据类型

| 类型 | 大小 | 说明 |
|------|------|------|
| int | 4字节 | 整数 |
| float | 4字节 | 单精度浮点 |
| double | 8字节 | 双精度浮点 |
| char | 1字节 | 字符 |
| bool | 1字节 | 布尔值 |
| long | 8字节 | 长整数 |

### 1.6 指针和引用

```cpp
int a = 10;

// 指针
int* p = &a;  // p指向a的地址
cout << *p;   // 解引用，输出10

// 引用
int& ref = a; // ref是a的引用
ref = 20;     // 修改ref即修改a
```

### 1.7 标准输入输出

```cpp
#include <iostream>
#include <iomanip>

int main() {
    // 输出
    cout << "Hello" << endl;
    cout << 123 << " " << 4.56 << endl;
    cout << fixed << setprecision(2) << 3.14159 << endl;
    
    // 输入
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old" << endl;
    
    return 0;
}
```

### 1.8 练习题

1. 编写程序，实现两个数的交换（使用指针）
2. 编写程序，输入一个年份，判断是否为闰年
3. 编写程序，实现冒泡排序

---

**下一步**： [第二章：C++面向对象](./oop.html)
