import { MessageCircle, Heart, Repeat2, Clock, TrendingUp, CheckCircle2, XCircle } from 'lucide-react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { useDarkMode } from '../hooks/useDarkMode'

const engagementData = [
  { name: 'Replies', value: 40, color: '#9945FF' },
  { name: 'Likes', value: 35, color: '#14F195' },
  { name: 'Retweets', value: 15, color: '#FF6B6B' },
  { name: 'Original Posts', value: 10, color: '#4ECDC4' },
]

const postingTimes = [
  { time: '8-10 AM', engagement: 85, label: 'Morning' },
  { time: '12-1 PM', engagement: 70, label: 'Lunch' },
  { time: '6-8 PM', engagement: 90, label: 'Evening' },
  { time: '10 AM-12 PM', engagement: 60, label: 'Weekend' },
]

const weeklyEngagement = [
  { day: 'Mon', replies: 12, likes: 25, retweets: 5 },
  { day: 'Tue', replies: 15, likes: 30, retweets: 8 },
  { day: 'Wed', replies: 18, likes: 35, retweets: 10 },
  { day: 'Thu', replies: 14, likes: 28, retweets: 7 },
  { day: 'Fri', replies: 16, likes: 32, retweets: 9 },
  { day: 'Sat', replies: 10, likes: 20, retweets: 4 },
  { day: 'Sun', replies: 8, likes: 15, retweets: 3 },
]

const goodReplies = [
  {
    example: 'This is great! I tried this approach last week and found that adding [specific tip] made it even better. Thanks for sharing!',
    why: 'Adds value with specific experience'
  },
  {
    example: 'Question: How does this compare to [alternative approach]? I\'m trying to decide between the two for my project.',
    why: 'Asks thoughtful, relevant question'
  },
  {
    example: 'Congrats on the launch! 🎉 I\'ve been following your progress and this is a huge milestone. Excited to try it out!',
    why: 'Celebrates others authentically'
  }
]

const badReplies = [
  'Great thread!',
  'Check out my project',
  '🔥🔥🔥',
  'First!'
]

const relationshipLadder = [
  { level: 1, name: 'Awareness', description: 'They see your name in replies', icon: '👁️' },
  { level: 2, name: 'Recognition', description: 'They recognize your name and engage back', icon: '👋' },
  { level: 3, name: 'Connection', description: 'You have conversations', icon: '💬' },
  { level: 4, name: 'Collaboration', description: 'You work together on something', icon: '🤝' },
  { level: 5, name: 'Partnership', description: 'You become regular collaborators', icon: '🚀' },
]

export default function Engagement() {
  const isDark = useDarkMode()
  
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <MessageCircle className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Best Practices for Posting & Engagement</h1>
          </div>
          <p className="text-lg text-white/90">
            Master the art of engaging authentically and building meaningful relationships in the Solana ecosystem.
          </p>
        </div>
      </div>

      {/* 80/20 Rule */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-solana rounded-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The 80/20 Engagement Rule</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">80% Engagement</h3>
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">80%</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                  <span>Replies (thoughtful)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <span>Likes (relevant content)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Repeat2 className="w-4 h-4 text-purple-600" />
                  <span>Retweets (with your take)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                  <span>Comments on others' posts</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">20% Original Content</h3>
                <span className="text-3xl font-bold text-green-600 dark:text-green-400">20%</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Educational threads</li>
                <li>• Project updates</li>
                <li>• Learning journey posts</li>
                <li>• Resource shares</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={engagementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {engagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1f2937' : '#fff',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: isDark ? '#f3f4f6' : '#111827'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Posting Frequency & Times */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Posting Frequency</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Minimum</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3-5</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">posts per week</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900 dark:text-white">Ideal</span>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">1-2</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">posts per day</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold mb-1">Quality over quantity</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Better to post 3 great posts than 10 mediocre ones</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-500 dark:text-green-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Best Times to Post</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={postingTimes}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#f0f0f0'} />
              <XAxis dataKey="label" stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1f2937' : '#fff',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: isDark ? '#f3f4f6' : '#111827'
                }} 
              />
              <Bar dataKey="engagement" fill="#9945FF" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Morning:</strong> 8-10 AM (before work)</p>
            <p className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Lunch:</strong> 12-1 PM (break time)</p>
            <p className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Evening:</strong> 6-8 PM (after work)</p>
            <p className="text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-white">Weekend:</strong> 10 AM-12 PM (relaxed)</p>
          </div>
        </div>
      </div>

      {/* Weekly Engagement Chart */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Weekly Engagement Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyEngagement}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#f0f0f0'} />
            <XAxis dataKey="day" stroke={isDark ? '#9ca3af' : '#6b7280'} />
            <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#1f2937' : '#fff',
                border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                borderRadius: '8px',
                color: isDark ? '#f3f4f6' : '#111827'
              }} 
            />
            <Line type="monotone" dataKey="replies" stroke="#9945FF" strokeWidth={2} name="Replies" />
            <Line type="monotone" dataKey="likes" stroke="#14F195" strokeWidth={2} name="Likes" />
            <Line type="monotone" dataKey="retweets" stroke="#FF6B6B" strokeWidth={2} name="Retweets" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Daily Engagement Checklist */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Daily Engagement Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { task: 'Reply to 5-10 posts with thoughtful comments', icon: MessageCircle },
            { task: 'Like 20-30 relevant posts', icon: Heart },
            { task: 'Retweet 3-5 valuable posts with your take', icon: Repeat2 },
            { task: 'Reply to comments on your posts', icon: MessageCircle },
            { task: 'Follow 2-3 new interesting accounts', icon: TrendingUp },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <label key={i} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-solana-purple rounded" />
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item.task}</span>
              </label>
            )
          })}
        </div>
      </div>

      {/* Good vs Bad Replies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Good Replies</h2>
          </div>
          <div className="space-y-4">
            {goodReplies.map((reply, i) => (
              <div key={i} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">"{reply.example}"</p>
                <p className="text-xs text-green-700 dark:text-green-400 font-semibold">✓ {reply.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-2 mb-6">
            <XCircle className="w-6 h-6 text-red-500 dark:text-red-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Bad Replies to Avoid</h2>
          </div>
          <div className="space-y-3">
            {badReplies.map((reply, i) => (
              <div key={i} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">"{reply}"</p>
                <p className="text-xs text-red-700 dark:text-red-400 font-semibold mt-1">✗ Too generic or self-promotional</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Relationship Ladder */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">The Relationship Building Ladder</h2>
        <div className="space-y-4">
          {relationshipLadder.map((step, i) => (
            <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-solana rounded-lg flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Level {step.level}</span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{step.name}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
              {i < relationshipLadder.length - 1 && (
                <div className="flex-shrink-0 text-gray-400 dark:text-gray-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Tips */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pro Engagement Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Engage consistently with the same people (but not obsessively)',
            'Support others\' work before asking for support',
            'Share others\' content generously',
            'Celebrate others\' wins publicly',
            'Add value in every interaction',
            'Be genuine and authentic'
          ].map((tip, i) => (
            <div key={i} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

