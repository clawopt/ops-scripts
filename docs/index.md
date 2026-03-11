---
layout: home

hero:
  name: "OpsTools"
  text: "运维工具一键安装脚本库"
  tagline: "发现最好用的运维工具 • 500+ 常用软件一键安装脚本"
  actions:
    - theme: brand
      text: "🚀 立即开始"
      link: "/容器/docker"
    - theme: alt
      text: "⭐ Star 支持"
      link: "https://github.com/clawopt/ops-scripts"

features:
  - title: "🐳 容器平台"
    details: "Docker、K3s、Containerd、Portainer、Podman 等容器化工具"
    link: "/容器/"
    tag: "容器化"

  - title: "🌐 Web服务器"
    details: "Nginx、Caddy、Apache、Traefik、OpenResty 等Web服务器"
    link: "/Web服务器/"
    tag: "Web"

  - title: "🗄️ 数据库"
    details: "MySQL、PostgreSQL、Redis、MongoDB、ClickHouse 等数据库"
    link: "/数据库/"
    tag: "存储"

  - title: "🎛️ 面板工具"
    details: "1Panel、宝塔面板、Nginx Proxy Manager 等可视化面板"
    link: "/面板工具/"
    tag: "管理"

  - title: "🔄 CI/CD"
    details: "Jenkins、GitLab、Argo CD、 Tekton 等持续集成工具"
    link: "/CI_CD/"
    tag: "自动化"

  - title: "📊 监控运维"
    details: "Prometheus、Grafana、Zabbix、ELK 等监控解决方案"
    link: "/监控运维/"
    tag: "监控"

  - title: "🌍 内网穿透"
    details: "frp、nps、ngrok 等内网穿透工具"
    link: "/内网穿透/"
    tag: "网络"

  - title: "📦 开发工具"
    details: "Node.js、Python、Go、Java 等开发环境一键安装"
    link: "/其他/"
    tag: "开发"

---

<div class="hero-stats">

## 📊 统计数据

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">500+</div>
    <div class="stat-label">安装脚本</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">8</div>
    <div class="stat-label">软件分类</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">开源免费</div>
  </div>
</div>

</div>

<div class="quick-links">

## ⚡ 热门脚本

| 🐳 Docker | 🌐 Nginx | 🗄️ MySQL | ⚡ Redis | ☸️ K3s | 📊 Grafana |
|:---:|:---:|:---:|:---:|:---:|:---:|
| [查看](/容器/docker) | [查看](/Web服务器/nginx) | [查看](/数据库/mysql) | [查看](/数据库/redis) | [查看](/容器/k3s) | [查看](/监控运维/prometheus-grafana) |

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
