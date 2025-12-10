import { Link } from 'react-router-dom'
import { 
  User, 
  Target, 
  MessageCircle, 
  Users, 
  FileText, 
  Calendar, 
  Image as ImageIcon,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Trophy
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts'
import { useState, useEffect } from 'react'
import AchievementBadge from '../components/AchievementBadge'
import { useDarkMode } from '../hooks/useDarkMode'

const stats = [
  { name: 'Profile Setup', value: '100%', icon: User, color: 'bg-purple-500', href: '/profile-setup' },
  { name: 'Positioning', value: '100%', icon: Target, color: 'bg-green-500', href: '/positioning' },
  { name: 'Engagement', value: '100%', icon: MessageCircle, color: 'bg-blue-500', href: '/engagement' },
  { name: 'Communities', value: '100%', icon: Users, color: 'bg-pink-500', href: '/communities' },
]

const engagementData = [
  { day: 'Mon', engagement: 45, posts: 2 },
  { day: 'Tue', engagement: 78, posts: 3 },
  { day: 'Wed', engagement: 92, posts: 4 },
  { day: 'Thu', engagement: 65, posts: 2 },
  { day: 'Fri', engagement: 88, posts: 3 },
  { day: 'Sat', engagement: 56, posts: 1 },
  { day: 'Sun', engagement: 34, posts: 1 },
]

const activityData = [
  { name: 'Replies', value: 40, color: '#9945FF' },
  { name: 'Likes', value: 35, color: '#14F195' },
  { name: 'Retweets', value: 15, color: '#FF6B6B' },
  { name: 'Original Posts', value: 10, color: '#4ECDC4' },
]

const quickLinks = [
  { name: 'Profile Setup', href: '/profile-setup', icon: User, description: 'Create your crypto-friendly X profile' },
  { name: 'Positioning Strategy', href: '/positioning', icon: Target, description: 'Define your niche in Solana' },
  { name: 'Engagement Tips', href: '/engagement', icon: MessageCircle, description: 'Best practices for posting' },
  { name: 'Find Communities', href: '/communities', icon: Users, description: 'Join Solana communities' },
  { name: 'Content Templates', href: '/content-guide', icon: FileText, description: 'Ready-to-use post templates' },
  { name: 'Weekly Routine', href: '/weekly-routine', icon: Calendar, description: 'Daily action plan' },
  { name: 'Graphics Guide', href: '/graphics-guide', icon: ImageIcon, description: 'Create visual content' },
]

export default function Dashboard() {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])
  const isDark = useDarkMode()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats([100, 100, 100, 100])
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 animate-pulse-slow" />
              <h1 className="text-4xl font-bold">Solana Socials 101</h1>
            </div>
            <p className="text-xl text-white/90 mb-6">
              Your complete guide to building a social presence in the Solana ecosystem
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>Beginner-friendly</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>Actionable steps</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
                <span>Complete guide</span>
              </div>
            </div>
            <Link 
              to="/profile-setup"
              className="inline-flex items-center space-x-2 bg-white text-solana-purple px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-5 h-5 animate-pulse-slow" />
                <div className="text-3xl font-bold">10</div>
              </div>
              <div className="text-white/80">Complete Sections</div>
              <div className="mt-2 text-xs text-white/70">+2 bonus pages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.name}
              to={stat.href}
              className="card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                  <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.name}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-solana rounded-full transition-all duration-1000"
                        style={{ width: `${animatedStats[index]}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Chart */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weekly Engagement</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your activity over the past week</p>
            </div>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9945FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9945FF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14F195" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14F195" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" className="dark:stroke-gray-400" />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: document.documentElement.classList.contains('dark') ? '#1f2937' : '#fff',
                  border: document.documentElement.classList.contains('dark') ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#111827'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="engagement" 
                stroke="#9945FF" 
                strokeWidth={3}
                fill="url(#colorEngagement)"
                dot={{ fill: '#9945FF', r: 5 }}
              />
              <Area 
                type="monotone" 
                dataKey="posts" 
                stroke="#14F195" 
                strokeWidth={2}
                fill="url(#colorPosts)"
                dot={{ fill: '#14F195', r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2 px-3 py-1 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-solana-purple"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Engagement</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-solana-green"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Posts</span>
            </div>
          </div>
        </div>

        {/* Activity Distribution */}
        <div className="card card-hover">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Activity Distribution</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">80/20 engagement rule</p>
            </div>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={110}
                innerRadius={40}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1f2937' : '#fff',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: isDark ? '#f3f4f6' : '#111827'
                }}
                wrapperStyle={{ zIndex: 1000 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {activityData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Teaser */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20 border-2 border-solana-purple/30 dark:border-solana-purple/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Join 500+ Successful Builders</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              See how others are using this playbook to grow their Solana presence
            </p>
            <Link
              to="/success-stories"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-solana text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <span>View Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="hidden md:block text-6xl">🚀</div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Navigation</h3>
          <Sparkles className="w-5 h-5 text-solana-purple" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                to={link.href}
                className="card card-hover p-4 group animate-slide-up"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-solana rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-solana-purple dark:group-hover:text-solana-green transition-colors">{link.name}</h4>
                      <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-solana-purple dark:group-hover:text-solana-green group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { value: '3-5', label: 'Posts per week (target)', icon: FileText, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
          { value: '50-100', label: 'Engagements per week (target)', icon: MessageCircle, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
          { value: '5-10', label: 'New connections per week (target)', icon: Users, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
        ].map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="card card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          )
        })}
      </div>

      {/* Achievements Section */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AchievementBadge achievementId="profile-complete" unlocked={true} />
          <AchievementBadge achievementId="first-post" unlocked={true} />
          <AchievementBadge achievementId="week-streak" unlocked={false} />
          <AchievementBadge achievementId="community-helper" unlocked={false} />
          <AchievementBadge achievementId="content-creator" unlocked={false} />
        </div>
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">💡 Tip:</strong> Complete sections and follow the weekly routine to unlock achievements!
          </p>
        </div>
      </div>

      {/* Getting Started CTA */}
      <div className="card bg-gradient-to-r from-solana-purple/10 to-solana-green/10 dark:from-solana-purple/20 dark:to-solana-green/20 border-2 border-solana-purple/30 dark:border-solana-purple/50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Start Your Journey?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Follow the playbook step-by-step and watch your Solana presence grow
            </p>
          </div>
          <Link
            to="/profile-setup"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-solana text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Begin Setup</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

