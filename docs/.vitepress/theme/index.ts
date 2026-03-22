import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      const initScrollArrows = () => {
        const scrollContainers = document.querySelectorAll('.scroll-container')

        scrollContainers.forEach(container => {
          const scrollContent = container.querySelector('.scroll-content') as HTMLElement | null
          const fadeEl = container.querySelector('.scroll-fade-right') as HTMLElement | null
          const arrowEl = container.querySelector('.scroll-arrow') as HTMLElement | null

          if (!scrollContent || !fadeEl || !arrowEl) return

          const checkScroll = () => {
            const scrollLeft = scrollContent.scrollLeft
            const scrollWidth = scrollContent.scrollWidth
            const clientWidth = scrollContent.clientWidth

            if (scrollLeft + clientWidth >= scrollWidth - 10) {
              fadeEl.style.opacity = '0'
              arrowEl.style.opacity = '0'
              arrowEl.style.pointerEvents = 'none'
            } else {
              fadeEl.style.opacity = '1'
              arrowEl.style.opacity = '1'
              arrowEl.style.pointerEvents = 'auto'
            }
          }

          checkScroll()
          scrollContent.addEventListener('scroll', checkScroll)
          window.addEventListener('resize', checkScroll)
        })
      }

      setTimeout(initScrollArrows, 100)

      if (typeof document !== 'undefined') {
        const observer = new MutationObserver(() => {
          setTimeout(initScrollArrows, 100)
        })
        observer.observe(document.body, { childList: true, subtree: true })
      }
    }
  }
}
