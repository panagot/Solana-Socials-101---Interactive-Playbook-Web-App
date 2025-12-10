import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('darkMode')
        if (saved) {
          setDarkMode(saved === 'true')
          document.documentElement.classList.toggle('dark', saved === 'true')
        }
      }
    } catch (err) {
      console.log('localStorage not available')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newMode.toString())
      }
    } catch (err) {
      console.log('Could not save to localStorage')
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', newMode)
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}

