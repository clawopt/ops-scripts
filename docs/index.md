---
layout: home

hero:
  name: "ByteTech"
  text: "，迈向AI"
  tagline: "面向 AI 时代的计算机学习入口 • 系统化学习路径 • 实战导向"
  actions:
    - theme: brand
      text: "🚀 开始学习"
      link: "/计算机语言"
    - theme: alt
      text: "📚 浏览教程"
      link: "/专业技能"

features:
  - title: "💻 计算机语言"
    details: "前端：HTML/CSS/JS/React/Vue 后端：Java/Python/Go/C++"
    link: "/计算机语言"

  - title: "🛠️ 专业技能"
    details: "前端开发/后端开发/游戏/大数据/容器化/数据库/OS/网络/Linux"
    link: "/专业技能"

  - title: "🤖 AI时代"
    details: "数据结构算法/大模型/深度学习"
    link: "/AI时代"

---

<div class="hero-stats">

## 📊 学习数据

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">3</div>
    <div class="stat-label">学习方向</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">40+</div>
    <div class="stat-label">核心教程</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">免费开放</div>
  </div>
</div>

</div>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
  border-radius: 16px;
  padding: 32px 24px;
  color: white;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
