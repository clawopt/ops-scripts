# Make 入门

## 第一章：Makefile基础

### 1.1 什么是Make

Make是一个构建自动化工具，通过读取Makefile文件来自动化编译和链接程序。

**Make的作用：**
- 自动识别哪些文件需要重新编译
- 自动化构建流程
- 处理依赖关系

### 1.2 Makefile基本结构

```makefile
# 目标 : 依赖
# 	命令

# 编译hello程序
hello: main.o foo.o bar.o
	gcc -o hello main.o foo.o bar.o

# 编译目标文件
main.o: main.c foo.h
	gcc -c main.c

foo.o: foo.c foo.h
	gcc -c foo.c

bar.o: bar.c bar.h
	gcc -c bar.c

# 清理
clean:
	rm -f *.o hello
```

### 1.3 使用变量

```makefile
# 变量定义
CC = gcc
CFLAGS = -Wall -g
TARGET = myapp

# 使用变量
$(TARGET): main.o
	$(CC) -o $(TARGET) main.o

main.o: main.c
	$(CC) $(CFLAGS) -c main.c

clean:
	rm -f $(TARGET) *.o
```

### 1.4 常用内置变量

| 变量 | 说明 |
|------|------|
| $@ | 目标文件名 |
| $< | 第一个依赖文件 |
| $^ | 所有依赖文件 |
| $? | 所有比目标新的依赖 |

### 1.5 模式规则

```makefile
# 简化目标文件编译
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@
```

### 1.6 伪目标

```makefile
.PHONY: clean all install

all: myapp

myapp: main.o foo.o
	gcc -o $@ $^

clean:
	rm -f *.o myapp

install:
	cp myapp /usr/local/bin/
```

### 1.7 条件判断

```makefile
# 根据系统选择编译器
ifeq ($(OS),Windows_NT)
    CC = cl
else
    CC = gcc
endif

# 调试模式
DEBUG = 1
ifeq ($(DEBUG),1)
    CFLAGS += -g -O0
else
    CFLAGS += -O3
endif
```

### 1.8 函数

```makefile
# 字符串替换
SRCS = $(wildcard *.c)
OBJS = $(SRCS:.c=.o)

# 模式替换
OBJS = $(patsubst %.c,%.o,$(SRCS))

# 循环
$(foreach dir,$(DIRS),$(MAKE) -C $(dir))
```

### 1.9 完整示例

```makefile
CC = gcc
CFLAGS = -Wall -Wextra -std=c11
LDFLAGS = -lm

TARGET = calculator
SRCS = main.c add.c sub.c mul.c div.c
OBJS = $(SRCS:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

.PHONY: all clean
```

### 1.10 练习

1. 编写一个简单的Makefile编译C程序
2. 使用变量重构Makefile
3. 添加清理目标

---

**下一步**： [第二章：Make进阶](./advanced.html)
