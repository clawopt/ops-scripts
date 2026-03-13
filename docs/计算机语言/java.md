# Java 入门

## 第一章：Java基础与环境搭建

### 1.1 Java简介

Java是一门**面向对象**的编程语言，由Sun Microsystems于1995年发布。其核心理念是"Write Once, Run Anywhere"（一次编写，到处运行）。

**Java的特点：**
- 面向对象
- 平台无关性（JVM）
- 自动内存管理
- 丰富的生态系统

### 1.2 JDK安装与环境配置

#### Windows安装

1. 下载JDK：https://www.oracle.com/java/technologies/downloads/
2. 运行安装程序
3. 配置环境变量：
   ```
   JAVA_HOME = C:\Program Files\Java\jdk-17
   PATH = %JAVA_HOME%\bin
   ```

#### Linux/macOS安装

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-17-jdk

# macOS (Homebrew)
brew install openjdk@17
```

#### 验证安装

```bash
java -version
javac -version
```

### 1.3 第一个Java程序

创建`HelloWorld.java`：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, ByteTech!");
    }
}
```

编译运行：

```bash
javac HelloWorld.java
java HelloWorld
```

### 1.4 Java程序结构

```java
// 包声明
package com.bytetech;

// 类定义
public class MyClass {
    // 属性
    private String name;
    
    // 构造方法
    public MyClass(String name) {
        this.name = name;
    }
    
    // 方法
    public void sayHello() {
        System.out.println("Hello, " + name);
    }
    
    // 主方法（程序入口）
    public static void main(String[] args) {
        MyClass obj = new MyScript("ByteTech");
        obj.sayHello();
    }
}
```

### 1.5 基本数据类型

| 类型 | 字节 | 取值范围 |
|------|------|----------|
| byte | 1 | -128 ~ 127 |
| short | 2 | -32768 ~ 32767 |
| int | 4 | -21亿 ~ 21亿 |
| long | 8 | 很大 |
| float | 4 | 浮点数 |
| double | 8 | 双精度浮点数 |
| char | 2 | 字符 |
| boolean | 1 | true/false |

### 1.6 控制流

```java
// 条件判断
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C");
}

// 循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// while循环
while (condition) {
    // do something
}
```

### 1.7 练习题

1. 编写程序，输出1-100的和
2. 编写程序，判断一个数是否为素数
3. 编写程序，实现九九乘法表

---

**下一步**： [第二章：Java面向对象](./oop.html)

[![Download Script](https://img.shields.io/badge/Download-PDF-blue?style=flat-square)](#)
