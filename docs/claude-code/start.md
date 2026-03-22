---
title: 下载与开始
---

# 下载与开始

**完成时间**：5 分钟

**前提条件**：已安装 Claude Code

## 下载课程材料

### 方法一：从 GitHub 下载

1. 访问 [GitHub 仓库](https://github.com/carlvellotti/claude-code-everyone-course)
2. 点击绿色的 "Code" 按钮
3. 选择 "Download ZIP"
4. 解压到你的文档文件夹

### 方法二：使用 Git 克隆（推荐）

```bash
cd ~/Documents
git clone https://github.com/carlvellotti/claude-code-everyone-course.git
```

## 从课程文件夹打开 Claude Code

下载并解压后，你需要从课程文件夹中打开终端：

### Mac

1. 在 Finder 中找到 `claude-code-everyone-course` 文件夹
2. 右键点击文件夹
3. 选择"新建位于文件夹位置的终端窗口"
4. 输入 `claude` 并按 Enter

### Windows

1. 在文件资源管理器中找到 `claude-code-everyone-course` 文件夹
2. 右键点击文件夹
3. 选择"在此处打开 PowerShell 窗口"
4. 输入 `claude` 并按 Enter

### 从终端导航

在终端中输入以下命令：

```bash
cd ~/Documents/claude-code-everyone-course
claude
```

这会导航到你的课程文件夹并直接在其中打开 Claude Code。

::: warning 重要提示
Claude 只能看到你启动它的文件夹中的文件。始终从课程文件夹启动 Claude Code。
:::

## 开始你的第一课

一旦 Claude Code 从课程文件夹运行：

1. 输入 `/start` 或课程指定的命令
2. Claude 会开始交互式教学
3. 跟随提示并在被提示时回应

## 常见问题

### "我可以更改下载位置吗？"

可以，只需记住 `cd` 命令的路径。

### "如果下载失败怎么办？"

尝试从 [GitHub Releases](https://github.com/carlvellotti/claude-code-everyone-course/releases) 手动下载。

### "我可以暂停并稍后继续吗？"

可以！使用 `/resume` 从你离开的地方继续，或者再次运行课程的 `/start` 命令。

### "如何更新课程材料？"

如果你使用 Git 克隆：

```bash
cd ~/Documents/claude-code-everyone-course
git pull
```

如果下载的是 ZIP，需要重新下载最新版本。

## 课程结构概览

```
claude-code-everyone-course/
├── lessons/           # 课程文件
├── practice/          # 练习文件
├── CLAUDE.md          # 项目记忆文件
└── README.md          # 说明文档
```

## 下一步

在 Claude Code 中输入 `/start` 开始模块 1！

或者继续阅读参考指南：

- [代码分析](/claude-code/analysis)

## 关于本课程

由 Carl Vellotti 创建。欢迎在 [X](https://x.com) 或 [LinkedIn](https://linkedin.com) 提供反馈。

加入社区：[fullstackpm.com/cc4e](https://fullstackpm.com/cc4e)
