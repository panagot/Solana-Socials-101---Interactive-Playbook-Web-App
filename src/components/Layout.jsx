import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  User, 
  Target, 
  MessageCircle, 
  Users, 
  FileText, 
  Calendar, 
  Image as ImageIcon,
  Menu,
  X,
  Sparkles,
  Award,
  BookOpen,
  Rocket,
  Twitter
} from 'lucide-react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import DarkModeToggle from './DarkModeToggle'
import ShareButton from './ShareButton'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Profile Setup', href: '/profile-setup', icon: User },
  { name: 'Positioning', href: '/positioning', icon: Target },
  { name: 'Engagement', href: '/engagement', icon: MessageCircle },
  { name: 'Communities', href: '/communities', icon: Users },
  { name: 'Content Guide', href: '/content-guide', icon: FileText },
  { name: 'Weekly Routine', href: '/weekly-routine', icon: Calendar },
  { name: 'Graphics Guide', href: '/graphics-guide', icon: ImageIcon },
  { name: 'Success Stories', href: '/success-stories', icon: Award },
  { name: 'Resources', href: '/resources', icon: BookOpen },
]

export default function Layout({ children }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-solana rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">Solana Socials</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">101 Playbook</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group
                    ${isActive 
                      ? 'bg-gradient-solana text-white shadow-lg shadow-solana-purple/30' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-solana-purple dark:hover:text-solana-green'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110'} transition-transform duration-300`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="relative flex items-center justify-center">
              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Superteam Ireland
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-1">
                  Solana Socials 101
                </p>
              </div>
              <a
                href="https://x.com/superteamIE"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-0 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                aria-label="Follow Superteam Ireland on X"
                title="Follow @superteamIE on X"
              >
                <svg 
                  className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-solana-purple dark:group-hover:text-solana-green transition-colors" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex-1 lg:ml-0 ml-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <div className="hidden md:block">
                <SearchBar />
              </div>
              <ShareButton 
                title="Solana Socials 101"
                url={location.pathname}
                description="Complete guide to building your social presence in the Solana ecosystem"
              />
              <DarkModeToggle />
              <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {/* Irish Flag Icon */}
                <div className="flex items-center rounded overflow-hidden shadow-sm border border-gray-300 dark:border-gray-600" style={{ width: '28px', height: '18px', flexShrink: 0 }}>
                  <div className="flex-1" style={{ backgroundColor: '#169B62', height: '100%' }}></div>
                  <div className="flex-1" style={{ backgroundColor: '#FFFFFF', height: '100%', borderLeft: '1px solid rgba(0,0,0,0.1)', borderRight: '1px solid rgba(0,0,0,0.1)' }}></div>
                  <div className="flex-1" style={{ backgroundColor: '#FF883E', height: '100%' }}></div>
                </div>
                
                {/* Text */}
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs">Superteam Ireland</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

