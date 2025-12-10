import { Calendar, Clock, CheckCircle2, TrendingUp, MessageCircle, Users, FileText, Coffee, Sparkles, Target } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { useDarkMode } from '../hooks/useDarkMode'

const weeklySchedule = [
  {
    day: 'Monday',
    icon: FileText,
    time: '30-45 minutes',
    color: 'bg-blue-500',
    tasks: [
      'Review what happened in Solana over the weekend',
      'Plan your content for the week (3-5 posts)',
      'Identify 5-10 accounts to engage with',
      'Research topics for your next thread'
    ],
    actionItems: [
      'Read Solana news/updates',
      'Check trending Solana topics',
      'Save interesting posts for later engagement'
    ]
  },
  {
    day: 'Tuesday',
    icon: FileText,
    time: '45-60 minutes',
    color: 'bg-green-500',
    tasks: [
      'Create 1-2 posts for the week',
      'Draft a thread (if planning one)',
      'Take screenshots or create visuals',
      'Schedule or post your content'
    ],
    actionItems: [
      'Write your educational thread',
      'Create project update post',
      'Prepare visuals'
    ]
  },
  {
    day: 'Wednesday',
    icon: MessageCircle,
    time: '30 minutes (spread throughout day)',
    color: 'bg-purple-500',
    tasks: [
      'Reply to 10-15 posts with thoughtful comments',
      'Like 30-40 relevant posts',
      'Retweet 5-7 valuable posts with your take',
      'Engage with replies on your posts'
    ],
    actionItems: [
      'Set aside 10 minutes morning, lunch, evening',
      'Focus on quality engagement over quantity',
      'Build relationships with 2-3 new people'
    ]
  },
  {
    day: 'Thursday',
    icon: Users,
    time: '45 minutes',
    color: 'bg-pink-500',
    tasks: [
      'Check Discord/Telegram communities',
      'Answer questions in community channels',
      'Share resources or updates',
      'Participate in community discussions'
    ],
    actionItems: [
      'Help 2-3 newcomers',
      'Share your work for feedback',
      'Engage in community events'
    ]
  },
  {
    day: 'Friday',
    icon: TrendingUp,
    time: '30 minutes',
    color: 'bg-yellow-500',
    tasks: [
      'Share what you learned this week',
      'Post a "week in review" update',
      'Celebrate small wins',
      'Plan weekend learning/building'
    ],
    actionItems: [
      'Create a learning journey post',
      'Share project progress',
      'Thank people who helped you'
    ]
  },
  {
    day: 'Saturday',
    icon: Coffee,
    time: '2-3 hours (Optional)',
    color: 'bg-indigo-500',
    tasks: [
      'Work on your project',
      'Learn something new',
      'Create content for next week',
      'Engage casually with community'
    ],
    actionItems: []
  },
  {
    day: 'Sunday',
    icon: Coffee,
    time: '15-20 minutes',
    color: 'bg-gray-500',
    tasks: [
      'Quick check of notifications',
      'Light engagement (5-10 replies)',
      'Plan for Monday',
      'Rest and recharge!'
    ],
    actionItems: []
  },
]

const weeklyMetrics = [
  { name: 'Posts Created', target: '3-5', current: 4, color: '#9945FF' },
  { name: 'Engagements', target: '50-100', current: 75, color: '#14F195' },
  { name: 'New Connections', target: '5-10', current: 7, color: '#FF6B6B' },
  { name: 'Community Contribs', target: '3-5', current: 4, color: '#4ECDC4' },
]

const metricsData = weeklyMetrics.map(m => ({
  name: m.name.split(' ')[0],
  target: parseInt(m.target.split('-')[1]),
  current: m.current,
  color: m.color
}))

export default function WeeklyRoutine() {
  const [completedTasks, setCompletedTasks] = useState({})
  const isDark = useDarkMode()
  
  const toggleTask = (dayIndex, taskIndex) => {
    const key = `${dayIndex}-${taskIndex}`
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const totalTasks = weeklySchedule.reduce((sum, day) => sum + day.tasks.length, 0)
  const completedCount = Object.values(completedTasks).filter(Boolean).length
  const progressPercentage = (completedCount / totalTasks) * 100

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Weekly Routine for Beginners</h1>
          </div>
          <p className="text-lg text-white/90 mb-6">
            A simple, actionable plan to build your social presence consistently without overwhelm.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white/90">Weekly Progress</span>
              <span className="text-lg font-bold">{Math.round(progressPercentage)}%</span>
            </div>
            <ProgressBar 
              value={completedCount} 
              max={totalTasks} 
              color="#FFFFFF"
              showValue={false}
            />
          </div>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Weekly Schedule</h2>
        <div className="space-y-4">
          {weeklySchedule.map((day, i) => {
            const Icon = day.icon
            return (
              <div key={i} className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-solana-purple transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${day.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{day.day}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{day.time}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tasks:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {day.tasks.map((task, j) => {
                      const taskKey = `${i}-${j}`
                      const isCompleted = completedTasks[taskKey]
                      return (
                        <label 
                          key={j} 
                          onClick={() => toggleTask(i, j)}
                          className={`flex items-start space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            isCompleted 
                              ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800' 
                              : 'bg-gray-50 dark:bg-gray-700/50 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-solana-purple/30'
                          }`}
                        >
                          <div className="mt-0.5">
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                            )}
                          </div>
                          <span className={`text-sm flex-1 ${isCompleted ? 'text-gray-500 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                            {task}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {day.actionItems.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Action Items:</h4>
                    <ul className="space-y-1">
                      {day.actionItems.map((item, j) => (
                        <li key={j} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-solana-purple mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Weekly Metrics */}
      <div className="card card-hover">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Target className="w-6 h-6 text-solana-purple" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Weekly Metrics Dashboard</h2>
          </div>
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <div className="mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#f0f0f0'} />
              <XAxis dataKey="name" stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1f2937' : '#fff',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: isDark ? '#f3f4f6' : '#111827'
                }} 
              />
              <Bar dataKey="current" fill="#9945FF" name="Current" />
              <Bar dataKey="target" fill="#14F195" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeklyMetrics.map((metric, i) => {
            const targetMax = parseInt(metric.target.split('-')[1])
            const percentage = (metric.current / targetMax) * 100
            return (
              <div key={i} className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{metric.name}</span>
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: metric.color }}></div>
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">{metric.current}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">Target: {metric.target}</div>
                <ProgressBar 
                  value={metric.current} 
                  max={targetMax} 
                  color={metric.color}
                  showValue={false}
                />
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
                  {Math.round(percentage)}% complete
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key Principles */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              principle: 'Consistency > Perfection',
              description: 'It\'s better to post regularly with good content than sporadically with perfect content.'
            },
            {
              principle: 'Quality over Quantity',
              description: 'Better to post 3 great posts than 10 mediocre ones.'
            },
            {
              principle: 'Engagement First',
              description: 'Spend more time engaging with others than creating original content (80/20 rule).'
            },
            {
              principle: 'Be Patient',
              description: 'Building a social presence takes time. Stay consistent and results will follow.'
            }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.principle}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Tips for Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Set specific times for social media (avoid endless scrolling)',
            'Use a content calendar to plan ahead',
            'Batch create content when you\'re inspired',
            'Engage in small bursts throughout the day',
            'Track what works and double down',
            'Don\'t compare your week 1 to someone\'s year 3',
            'Take breaks when needed (Sunday is rest day!)',
            'Focus on one platform well before expanding'
          ].map((tip, i) => (
            <div key={i} className="flex items-start space-x-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Reflection */}
      <div className="card bg-blue-50 dark:bg-blue-900/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">End of Week Reflection</h2>
        <div className="space-y-3">
          {[
            'What content performed best this week?',
            'Which engagements led to meaningful conversations?',
            'What did I learn from the community?',
            'What should I focus on next week?',
            'Who should I thank for their help?'
          ].map((question, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{question}</p>
              <textarea 
                className="w-full p-2 border border-gray-200 dark:border-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
                rows="2"
                placeholder="Your reflection..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

