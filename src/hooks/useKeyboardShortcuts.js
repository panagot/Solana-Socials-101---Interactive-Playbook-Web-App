import { useEffect } from 'react'

export function useKeyboardShortcuts() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleKeyDown = (e) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]')
        if (searchInput) {
          searchInput.focus()
        }
      }

      // Ctrl/Cmd + / for help
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault()
        // Could show help modal
      }

      // Escape to close modals/menus
      if (e.key === 'Escape') {
        // Close any open dropdowns
        if (typeof document !== 'undefined') {
          const dropdowns = document.querySelectorAll('[data-dropdown]')
          dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('open')) {
              dropdown.classList.remove('open')
            }
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}

