import { useState, useEffect } from 'react'

export default function ChartTooltip({ children, ...props }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const contentStyle = {
    backgroundColor: isDark ? '#1f2937' : '#fff',
    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    color: isDark ? '#f3f4f6' : '#111827'
  }

  return children({ ...props, contentStyle })
}

