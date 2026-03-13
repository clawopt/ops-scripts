---
layout: home

hero:
  name: "ByteTech"
  text: "迈向AI"
  tagline: "面向 AI 时代的计算机学习入口 • 系统化学习路径 • 实战导向"
  actions:
    - theme: brand
      text: "🚀 开始学习"
      link: "/计算机语言/java"
    - theme: alt
      text: "⭐ GitHub"
      link: "https://github.com/clawopt/ops-scripts"

features:
  - title: "💻 计算机语言"
    details: "Java、C++、Python等编程语言系统学习，从入门到进阶"
    link: "/计算机语言/java"
    tag: "编程基础"

  - title: "🔧 开发工具"
    details: "Git、CMake、Make等开发必备工具精讲"
    link: "/开发工具/git"
    tag: "工程化"

  - title: "🛠️ 专业技能"
    details: "数据库、存储、大数据等核心技术能力"
    link: "/专业技能/database"
    tag: "工程能力"

  - title: "🤖 AI时代"
    details: "数据结构、算法、大模型、深度学习等AI核心技术"
    link: "/AI时代/algorithm"
    tag: "人工智能"

---

<div class="hero-stats">

## 📊 学习路径

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">4</div>
    <div class="stat-label">学习方向</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">12</div>
    <div class="stat-label">核心教程</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">免费开放</div>
  </div>
</div>

</div>

<div class="quick-links">

## 📚 热门教程

| 💻 Java | 🖥️ C++ | 🔰 Git | ⚙️ CMake | 🗄️ 数据库 | 🧠 算法 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [开始学习](/计算机语言/java) | [开始学习](/计算机语言/cpp) | [开始学习](/开发工具/git) | [开始学习](/开发工具/cmake) | [开始学习](/专业技能/database) | [开始学习](/AI时代/algorithm) |

</div>

<style>
/* Hero 区域 */
.hero-stats {
  margin: 48px auto;
  max-width: 900px;
  text-align: center;
}

.hero-stats h2 {
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
}

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
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* 快速链接 */
.quick-links {
  margin: 48px auto;
  max-width: 900px;
  text-align: center;
}

.quick-links h2 {
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
  margin-bottom: 20px;
}

.quick-links table {
  width: 100%;
  border: none;
}

.quick-links td {
  padding: 16px;
  text-align: center;
}

.quick-links a {
  display: inline-block;
  padding: 12px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  color: #1e293b;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.quick-links a:hover {
  background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* 响应式 */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .stat-card {
    padding: 24px 20px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .quick-links table,
  .quick-links tbody,
  .quick-links tr,
  .quick-links td {
    display: block;
    width: 100%;
  }
  
  .quick-links td {
    padding: 8px;
  }
}
</style>
