import { useState, useRef, useEffect } from 'react'
import { Search, X, FileText, User, Target, MessageCircle, Users, Calendar, Image as ImageIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const searchIndex = [
  { title: 'Profile Setup', path: '/profile-setup', icon: User, category: 'Setup' },
  { title: 'Bio Templates', path: '/profile-setup', icon: User, category: 'Templates' },
  { title: 'Positioning Strategy', path: '/positioning', icon: Target, category: 'Strategy' },
  { title: 'Engagement Tips', path: '/engagement', icon: MessageCircle, category: 'Tips' },
  { title: '80/20 Rule', path: '/engagement', icon: MessageCircle, category: 'Strategy' },
  { title: 'Community Guide', path: '/communities', icon: Users, category: 'Guide' },
  { title: 'Content Templates', path: '/content-guide', icon: FileText, category: 'Templates' },
  { title: 'Weekly Routine', path: '/weekly-routine', icon: Calendar, category: 'Routine' },
  { title: 'Graphics Guide', path: '/graphics-guide', icon: ImageIcon, category: 'Guide' },
  { title: 'Posting Schedule', path: '/weekly-routine', icon: Calendar, category: 'Schedule' },
  { title: 'Thread Examples', path: '/content-guide', icon: FileText, category: 'Examples' },
  { title: 'Solana Communities', path: '/communities', icon: Users, category: 'Resources' },
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = (value) => {
    setQuery(value)
    if (value.length > 0) {
      const filtered = searchIndex.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered.slice(0, 5))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  const handleSelect = (path) => {
    navigate(path)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          placeholder="Search guides, templates, tips..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-solana-purple focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <X className="w-4 h-4 text-gray-400 dark:text-gray-500" />
          </button>
        )}
      </div>
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto animate-slide-up">
          {results.map((result, i) => {
            const Icon = result.icon
            return (
              <button
                key={i}
                onClick={() => handleSelect(result.path)}
                className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
              >
                <div className="p-2 bg-gradient-solana rounded-lg">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white">{result.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{result.category}</div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

