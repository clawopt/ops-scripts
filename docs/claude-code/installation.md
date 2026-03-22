---
title: 安装指南
---

# 安装指南

**完成时间**：15 分钟

## 前提条件

- **Claude Pro 或 Max 订阅**（不是免费版）
  - 如果没有，请在 [claude.ai](https://claude.ai) 注册
  - Pro 版本每月 $20

- **操作系统要求**：
  - Mac (macOS 10.15+)
  - Windows 10+
  - Linux (Ubuntu 20.04+)

- **硬件要求**：
  - 4 GB+ 内存
  - 网络连接

- **无需任何编程工具！**

## 如何打开终端

### Mac

1. 按 `Cmd + Space` 打开 Spotlight
2. 输入 "Terminal"（终端）
3. 按 Enter

### Windows

1. 按 Windows 键
2. 输入 "PowerShell"
3. 按 Enter

你会看到一个带有闪烁光标的窗口 - 这就是你输入命令的地方。

## 安装命令

复制下面的命令，粘贴到终端中，然后按 Enter。

### Mac/Linux

```bash
curl -fsSL https://claude.ai/install.sh | sh
```

### Mac (使用 Homebrew)

```bash
brew install claude
```

### Windows PowerShell

```powershell
irm https://claude.ai/install.ps1 | iex
```

运行后，关闭并重新打开终端。

## 验证安装

```bash
claude --version
```

你应该看到一个版本号。如果看到 "command not found"，关闭终端，重新打开，然后重试。

## 认证

1. 输入：`claude`
2. 选择 "Claude account with subscription"（**不是** Anthropic Console）
3. 完成浏览器认证
4. 选择你喜欢的文本样式
5. 你应该看到 Claude Code 欢迎屏幕

## 故障排除

### command not found: claude

- 完全关闭终端并重新打开
- Mac：运行 `source ~/.zshrc` 或 `source ~/.bashrc`
- Windows：重启 PowerShell

### 订阅要求

- 在 [claude.ai](https://claude.ai) 验证活跃订阅
- 退出并重新登录

### 权限被拒绝

- Mac：安装脚本会自动处理权限
- Windows：以管理员身份运行 PowerShell

### 诊断

运行 `/doctor` 进行诊断。

进入 Claude Code 后，输入 `/doctor` - 它会显示什么正常工作，什么不正常。

## 命令参考

| 命令 | 说明 |
|------|------|
| `claude` | 启动 Claude Code |
| `claude --version` | 查看版本 |
| `/doctor` | 运行诊断 |
| `/help` | 查看帮助 |

## 下一步

[下载与开始](/claude-code/start) - 下载课程材料并开始学习
