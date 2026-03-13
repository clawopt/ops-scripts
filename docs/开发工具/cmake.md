# CMake 入门

## 第一章：CMake基础

### 1.1 什么是CMake

CMake是一个**跨平台**的构建系统生成器。它用简单的配置文件（CMakeLists.txt）来控制软件的编译过程。

**为什么用CMake：**
- 跨平台（Linux、macOS、Windows）
- 自动生成Makefile
- 强大的模块系统
- 支持测试和安装

### 1.2 安装CMake

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install cmake
```

#### macOS

```bash
brew install cmake
```

#### Windows

下载安装：[CMake官网](https://cmake.org/download/)

#### 验证安装

```bash
cmake --version
```

### 1.3 第一个CMake项目

#### 项目结构

```
myproject/
├── CMakeLists.txt
├── main.cpp
└── math/
    ├── CMakeLists.txt
    └── math.cpp
```

#### 主CMakeLists.txt

```cmake
# 最低CMake版本
cmake_minimum_required(VERSION 3.10)

# 项目名称
project(MyProject VERSION 1.0 LANGUAGES CXX)

# 设置C++标准
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# 添加子目录
add_subdirectory(math)

# 生成可执行文件
add_executable(myapp main.cpp)

# 链接库
target_link_libraries(myapp math_library)
```

#### 子目录CMakeLists.txt

```cmake
# 创建库
add_library(math_library math.cpp)
```

### 1.4 构建项目

```bash
# 创建构建目录
mkdir build
cd build

# 配置（生成Makefile）
cmake ..

# 编译
cmake --build .

# 或使用make
make
```

### 1.5 常用命令

```cmake
# 设置变量
set(MY_VAR "value")

# 条件判断
if(UNIX)
    message(STATUS "This is Linux")
endif()

# 循环
foreach(item IN ITEMS a b c)
    message(STATUS ${item})
endforeach()

# 函数
function(my_function arg)
    message(STATUS "Argument: ${arg}")
endfunction()
```

### 1.6 查找包

```cmake
# 查找OpenSSL
find_package(OpenSSL REQUIRED)

# 查找Boost
find_package(Boost 1.70 REQUIRED COMPONENTS system)

# 使用找到的包
target_include_directories(myapp PRIVATE ${OPENSSL_INCLUDE_DIR})
target_link_libraries(myapp ${OPENSSL_LIBRARIES})
```

### 1.7 安装配置

```cmake
# 安装目标
install(TARGETS myapp DESTINATION bin)
install(FILES config.ini DESTINATION etc)
```

### 1.8 练习

1. 创建一个Hello World的CMake项目
2. 添加一个库文件并在主程序中使用
3. 练习使用find_package查找系统库

---

**下一步**： [第二章：CMake进阶](./advanced.html)
