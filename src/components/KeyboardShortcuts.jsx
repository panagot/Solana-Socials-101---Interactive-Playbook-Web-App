import { Keyboard } from 'lucide-react'
import { useState, useEffect } from 'react'

const shortcuts = [
  { keys: ['Ctrl', 'K'], description: 'Focus search' },
  { keys: ['Esc'], description: 'Close modals/menus' },
  { keys: ['/', '?'], description: 'Show this help' },
]

export default function KeyboardShortcuts() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' || e.key === '?') {
        e.preventDefault()
        setShow(true)
      }
      if (e.key === 'Escape' && show) {
        setShow(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [show])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShow(false)}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Keyboard className="w-6 h-6 text-solana-purple" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Keyboard Shortcuts</h2>
          </div>
          <button
            onClick={() => setShow(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            ×
          </button>
        </div>
        <div className="space-y-3">
          {shortcuts.map((shortcut, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm text-gray-700 dark:text-gray-300">{shortcut.description}</span>
              <div className="flex items-center space-x-1">
                {shortcut.keys.map((key, j) => (
                  <span key={j} className="px-2 py-1 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded text-xs font-mono text-gray-700 dark:text-gray-300">
                    {key}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

