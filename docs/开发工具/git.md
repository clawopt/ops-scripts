# Git 入门

## 第一章：Git基础与配置

### 1.1 什么是Git

Git是一个**分布式版本控制系统**，由Linus Torvalds于2005年创建。主要用于追踪代码变更、协作开发。

**Git的核心概念：**
- 仓库（Repository）
- 提交（Commit）
- 分支（Branch）
- 合并（Merge）

### 1.2 安装Git

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
```

#### macOS

```bash
# 使用Homebrew
brew install git

# 或安装Xcode命令行工具
xcode-select --install
```

#### Windows

下载安装：[Git for Windows](https://git-scm.com/)

#### 验证安装

```bash
git --version
```

### 1.3 首次配置

```bash
# 设置用户名
git config --global user.name "Your Name"

# 设置邮箱
git config --global user.email "your.email@example.com"

# 设置默认编辑器
git config --global core.editor vim

# 查看配置
git config --list
```

### 1.4 创建仓库

```bash
# 初始化仓库
git init my-project
cd my-project

# 或克隆现有仓库
git clone https://github.com/user/repo.git
```

### 1.5 基本操作

#### 查看状态

```bash
git status
```

#### 添加文件到暂存区

```bash
# 添加单个文件
git add filename.txt

# 添加所有文件
git add .

# 添加目录
git add src/
```

#### 提交更改

```bash
git commit -m "提交说明"

# 添加并提交（简化操作）
git commit -am "提交说明"
```

#### 查看历史

```bash
# 查看提交历史
git log

# 简洁格式
git log --oneline

# 显示差异
git log -p
```

### 1.6 分支操作

```bash
# 创建分支
git branch feature-login

# 切换分支
git checkout feature-login

# 创建并切换
git checkout -b feature-register

# 查看分支
git branch

# 删除分支
git branch -d feature-login

# 合并分支
git checkout main
git merge feature-login
```

### 1.7 远程操作

```bash
# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 查看远程仓库
git remote -v

# 推送到远程
git push origin main

# 拉取更新
git pull origin main

# 克隆仓库
git clone https://github.com/user/repo.git
```

### 1.8 常用命令速查表

| 命令 | 说明 |
|------|------|
| git init | 初始化仓库 |
| git clone | 克隆仓库 |
| git add | 添加文件 |
| git commit | 提交 |
| git push | 推送到远程 |
| git pull | 拉取远程 |
| git branch | 分支操作 |
| git checkout | 切换分支 |
| git merge | 合并分支 |
| git status | 查看状态 |
| git log | 查看历史 |

### 1.9 练习

1. 创建一个本地仓库，提交几次修改
2. 创建分支，在分支上修改并合并回主分支
3. 将本地仓库推送到GitHub

---

**下一步**： [第二章：Git进阶与协作](./advanced.html)
