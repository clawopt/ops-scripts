---
layout: home
---

<style>
  body {
    font-family: 'Noto Sans SC', sans-serif;
    background-color: #F8FAFC;
  }

  .glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .hero-gradient {
    background: radial-gradient(circle at top right, #EEF2FF 0%, #F8FAFC 50%);
  }

  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  /* 隐藏滚动条但保留功能 */
  .flex.overflow-x-auto {
    scrollbar-width: none; /* Firefox */
  }

  .flex.overflow-x-auto::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
</style>

<section class="relative pt-20 pb-32 overflow-hidden hero-gradient">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">X AI</span>，让AI成为你的智能生产力
      </h1>
      <p class="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
        探索 AI 工具、赛道与案例，引领智能未来。我们提供最前沿的AI技术和应用，帮助你抓住AI时代的机遇。
      </p>
      <div class="flex flex-wrap gap-4">
        <a class="px-8 py-4 bg-white text-slate-600 rounded-2xl font-bold border border-slate-200 flex items-center gap-2 hover:bg-slate-50 transition-colors no-underline" href="/tracks">
          开启热门赛道
        </a>
        <a class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-200 flex items-center gap-2 hover:scale-105 transition-transform no-underline" href="/tools">
          探索AI工具 <span class="iconify" data-icon="solar:arrow-right-up-bold"></span>
        </a>
      </div>
      <div class="mt-12 flex items-center gap-6">
        <div class="flex -space-x-3">
          <div class="w-10 h-10 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center text-blue-600">
            <span class="iconify" data-icon="solar:user-bold"></span>
          </div>
          <div class="w-10 h-10 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-green-600">
            <span class="iconify" data-icon="solar:user-bold"></span>
          </div>
          <div class="w-10 h-10 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center text-purple-600">
            <span class="iconify" data-icon="solar:user-bold"></span>
          </div>
        </div>
        <p class="text-sm text-slate-500 font-medium">10,000+ 用户已加入</p>
      </div>
    </div>
    <div class="relative">
      <div class="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
      <div class="relative glass rounded-[32px] p-4 shadow-2xl border border-white/50">
        <div class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[24px] p-6 shadow-inner">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-white font-bold">AI 工具仪表盘</h3>
            <div class="flex gap-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-700/50 rounded-xl p-4">
              <div class="text-slate-400 text-sm mb-1">工具总数</div>
              <div class="text-white text-2xl font-bold">50+</div>
            </div>
            <div class="bg-slate-700/50 rounded-xl p-4">
              <div class="text-slate-400 text-sm mb-1">热门赛道</div>
              <div class="text-white text-2xl font-bold">7个</div>
            </div>
            <div class="bg-slate-700/50 rounded-xl p-4">
              <div class="text-slate-400 text-sm mb-1">案例解析</div>
              <div class="text-white text-2xl font-bold">20+</div>
            </div>
            <div class="bg-slate-700/50 rounded-xl p-4">
              <div class="text-slate-400 text-sm mb-1">用户增长</div>
              <div class="text-green-400 text-2xl font-bold">+25%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="py-12 bg-slate-900 text-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-3xl font-bold mb-1">50+</div>
        <div class="text-slate-400 text-sm">AI 工具</div>
      </div>
      <div>
        <div class="text-3xl font-bold mb-1">7个</div>
        <div class="text-slate-400 text-sm">热门赛道</div>
      </div>
      <div>
        <div class="text-3xl font-bold mb-1">20+</div>
        <div class="text-slate-400 text-sm">案例解析</div>
      </div>
      <div>
        <div class="text-3xl font-bold mb-1">10k+</div>
        <div class="text-slate-400 text-sm">用户数量</div>
      </div>
    </div>
  </div>
</section>



<section class="py-16 max-w-7xl mx-auto px-6">
  <div class="flex justify-between items-end mb-10">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold mb-4 flex items-center gap-2"><span class="iconify text-2xl" data-icon="solar:flame-bold"></span> 热门赛道</h2>
      <p class="text-slate-500">2026年最具潜力的AI应用方向，从技术到落地全流程解析。</p>
    </div>
    <a class="text-blue-600 font-bold flex items-center gap-1 hover:no-underline" href="/tracks">查看全部 <span class="iconify" data-icon="solar:arrow-right-linear"></span></a>
  </div>
  <div class="flex overflow-x-auto gap-6 pb-4">
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
      <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
        <span class="iconify text-3xl" data-icon="solar:play-circle-bold-duotone"></span>
      </div>
      <h3 class="font-bold text-lg mb-2">短剧</h3>
      <p class="text-sm text-slate-500 mb-6 font-light">AI 生成短剧脚本与视频，快速制作高质量内容。</p>
      <div class="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">潜力赛道</div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
      <div class="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
        <span class="iconify text-3xl" data-icon="solar:users-group-rounded-bold-duotone"></span>
      </div>
      <h3 class="font-bold text-lg mb-2">数字人</h3>
      <p class="text-sm text-slate-500 mb-6 font-light">AI 驱动的虚拟数字人技术，为企业提供智能交互。</p>
      <div class="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">解放生产力</div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
      <div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
        <span class="iconify text-3xl" data-icon="solar:book-open-bold-duotone"></span>
      </div>
      <h3 class="font-bold text-lg mb-2">漫画</h3>
      <p class="text-sm text-slate-500 mb-6 font-light">AI 创作漫画内容，快速生成故事和图像。</p>
      <div class="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">创意领域</div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
      <div class="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
        <span class="iconify text-3xl" data-icon="solar:film-reel-bold-duotone"></span>
      </div>
      <h3 class="font-bold text-lg mb-2">视频剪辑</h3>
      <p class="text-sm text-slate-500 mb-6 font-light">AI 辅助视频编辑与特效，提升制作效率。</p>
      <div class="text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full inline-block">高效工具</div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
      <div class="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
        <span class="iconify text-3xl" data-icon="solar:code-bold-duotone"></span>
      </div>
      <h3 class="font-bold text-lg mb-2">编程</h3>
      <p class="text-sm text-slate-500 mb-6 font-light">AI 辅助编程与代码生成，提升开发效率。</p>
      <div class="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">开发工具</div>
    </div>
  </div>
</section>



<section class="py-16 bg-slate-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex justify-between items-end mb-10">
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold mb-4 flex items-center gap-2"><span class="iconify text-2xl" data-icon="solar:rocket-bold"></span> 顶流工具</h2>
        <p class="text-slate-500">2026年最受欢迎的AI工具，助力你高效完成任务。</p>
      </div>
      <a class="text-blue-600 font-bold flex items-center gap-1 hover:no-underline" href="/tools">查看全部 <span class="iconify" data-icon="solar:arrow-right-linear"></span></a>
    </div>
    <div class="flex overflow-x-auto gap-6 pb-4">
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
          <span class="text-white font-bold text-lg">ClawGPT</span>
        </div>
        <h3 class="font-bold text-lg mb-2">ClawGPT</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">智能对话助手，提供精准回答和创意内容。</p>
        <div class="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">AI 助手</div>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
          <span class="text-white font-bold text-lg">Seedance</span>
        </div>
        <h3 class="font-bold text-lg mb-2">Seedance 2.0</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">AI 视频生成工具，快速创建高质量视频内容。</p>
        <div class="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">视频生成</div>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
          <span class="text-white font-bold text-lg">Sora</span>
        </div>
        <h3 class="font-bold text-lg mb-2">Sora</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">AI 视频生成工具，支持长视频创作。</p>
        <div class="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">视频生成</div>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
          <span class="text-white font-bold text-lg">Midjourney</span>
        </div>
        <h3 class="font-bold text-lg mb-2">Midjourney</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">AI 图像生成工具，创造惊艳视觉效果。</p>
        <div class="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">图像生成</div>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-yellow-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-200">
          <span class="text-white font-bold text-lg">Suno</span>
        </div>
        <h3 class="font-bold text-lg mb-2">Suno AI</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">AI 音乐生成工具，创作独特音乐作品。</p>
        <div class="text-xs font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full inline-block">音乐生成</div>
      </div>
      <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover min-w-[280px]">
        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
          <span class="text-white font-bold text-lg">ChatGPT</span>
        </div>
        <h3 class="font-bold text-lg mb-2">ChatGPT</h3>
        <p class="text-sm text-slate-500 mb-6 font-light">智能对话助手，提供全面的AI交互体验。</p>
        <div class="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">AI 助手</div>
      </div>
    </div>
  </div>
</section>



<section class="py-16 max-w-7xl mx-auto px-6">
  <div class="flex justify-between items-end mb-10">
    <div class="max-w-xl">
      <h2 class="text-3xl font-bold mb-4 flex items-center gap-2"><span class="iconify text-2xl" data-icon="solar:chart-square-bold"></span> 案例解析</h2>
      <p class="text-slate-500">AI 技术在实际应用中的成功案例，为你提供参考和启发。</p>
    </div>
    <a class="text-blue-600 font-bold flex items-center gap-1 hover:no-underline" href="/cases">查看全部 <span class="iconify" data-icon="solar:arrow-right-linear"></span></a>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span class="iconify text-2xl" data-icon="solar:play-circle-bold"></span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">AI 驱动的短视频创作</h3>
          <p class="text-sm text-slate-500 mb-4 font-light">如何利用 AI 工具快速生成高质量短视频内容，提升创作效率和效果。</p>
          <div class="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">视频创作</div>
        </div>
      </div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span class="iconify text-2xl" data-icon="solar:users-group-rounded-bold"></span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">数字人在直播中的应用</h3>
          <p class="text-sm text-slate-500 mb-4 font-light">企业如何通过数字人技术提升直播效果，降低运营成本。</p>
          <div class="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">数字人</div>
        </div>
      </div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span class="iconify text-2xl" data-icon="solar:code-bold"></span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">AI 辅助的编程效率提升</h3>
          <p class="text-sm text-slate-500 mb-4 font-light">开发者如何利用 AI 工具提高代码质量和开发速度，减少重复工作。</p>
          <div class="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">编程</div>
        </div>
      </div>
    </div>
    <div class="bg-white p-8 rounded-3xl border border-slate-100 card-hover">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
          <span class="iconify text-2xl" data-icon="solar:trending-up-bold"></span>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">AI 生成内容的商业化路径</h3>
          <p class="text-sm text-slate-500 mb-4 font-light">如何将 AI 生成的内容转化为商业价值，实现变现。</p>
          <div class="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">商业化</div>
        </div>
      </div>
    </div>
  </div>
</section>

