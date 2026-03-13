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
      text: "📚 浏览教程"
      link: "/开发工具/git"

features:
  - title: "💻 计算机语言"
    details: "Java、C++、Python等编程语言系统学习，从入门到进阶"
    link: "/计算机语言/java"

  - title: "🔧 开发工具"
    details: "Git、CMake、Make等开发必备工具精讲"
    link: "/开发工具/git"

  - title: "🛠️ 专业技能"
    details: "数据库、存储、大数据等核心技术能力"
    link: "/专业技能/database"

  - title: "🤖 AI时代"
    details: "数据结构、算法、大模型、深度学习等AI核心技术"
    link: "/AI时代/algorithm"

---

<div class="hero-stats">

## 📊 学习数据

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

<div class="quick-links-grid">
  <div class="quick-link-card">
    <span class="icon">💻</span>
    <div class="title">Java</div>
    <a href="/计算机语言/java" class="link">开始学习</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🖥️</span>
    <div class="title">C++</div>
    <a href="/计算机语言/cpp" class="link">开始学习</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🔰</span>
    <div class="title">Git</div>
    <a href="/开发工具/git" class="link">开始学习</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">⚙️</span>
    <div class="title">CMake</div>
    <a href="/开发工具/cmake" class="link">开始学习</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🗄️</span>
    <div class="title">数据库</div>
    <a href="/专业技能/database" class="link">开始学习</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🧠</span>
    <div class="title">算法</div>
    <a href="/AI时代/algorithm" class="link">开始学习</a>
  </div>
</div>

</div>

<div class="features-section">

## 🌟 平台特色

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🎯</div>
    <h3>系统化学习路径</h3>
    <p>从入门到进阶，为每个技术领域提供清晰的学习路径</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">💡</div>
    <h3>实战导向</h3>
    <p>理论结合实践，通过项目实战巩固所学知识</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>AI 时代前沿</h3>
    <p>涵盖大模型、深度学习等AI领域最新技术</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🤝</div>
    <h3>社区支持</h3>
    <p>活跃的学习社区，互相交流，共同进步</p>
  </div>
</div>

</div>

<style>
/* 特性卡片 */
.features-section {
  margin: 80px auto;
  max-width: 900px;
  text-align: center;
}

.features-section h2 {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 40px;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  font-weight: 700;
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 响应式 */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 24px 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
