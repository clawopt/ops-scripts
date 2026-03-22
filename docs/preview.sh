#!/bin/bash

# AI编程技术栈 - 编译预览脚本

# 停掉占用4173端口的进程
kill_port() {
  echo "正在停掉占用4173端口的进程..."
  lsof -ti:4173 | xargs kill -9 2>/dev/null
  sleep 2
}

# 编译并预览
preview() {
  echo "开始编译..."
  cd /Users/bytedance/Work/ops-scripts
  npm run docs:build
  echo "编译完成，启动预览服务器..."
  npm run docs:preview
}

# 主流程
kill_port
preview
