import { Target, TrendingUp, Users, Code, Palette, BookOpen, BarChart3, Briefcase, ArrowRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useDarkMode } from '../hooks/useDarkMode'

const niches = [
  { name: 'Developer', icon: Code, color: 'bg-blue-500', description: 'Building dApps, tools, or infrastructure' },
  { name: 'Creator', icon: Palette, color: 'bg-pink-500', description: 'NFTs, art, content creation' },
  { name: 'Educator', icon: BookOpen, color: 'bg-green-500', description: 'Teaching, tutorials, documentation' },
  { name: 'Community Builder', icon: Users, color: 'bg-purple-500', description: 'Organizing, moderating, connecting' },
  { name: 'Analyst', icon: BarChart3, color: 'bg-yellow-500', description: 'Research, data, insights' },
  { name: 'Operator', icon: Briefcase, color: 'bg-indigo-500', description: 'Business development, partnerships' },
]

const timelineData = [
  { week: 'Week 1-2', activity: 20, relationships: 5, label: 'Foundation' },
  { week: 'Week 3-4', activity: 40, relationships: 10, label: 'Content Creation' },
  { week: 'Month 2-3', activity: 60, relationships: 15, label: 'Consistency' },
  { week: 'Month 4+', activity: 80, relationships: 25, label: 'Authority' },
]

const milestones = [
  {
    phase: 'Week 1-2: Foundation',
    tasks: [
      'Set up your profile',
      'Follow 50-100 key Solana accounts',
      'Start engaging with 5-10 posts daily',
      'Share your learning journey'
    ],
    color: 'border-blue-500'
  },
  {
    phase: 'Week 3-4: Content Creation',
    tasks: [
      'Post your first thread about something you learned',
      'Share your project updates (even small wins)',
      'Comment thoughtfully on others\' content',
      'Join 2-3 Solana communities'
    ],
    color: 'border-green-500'
  },
  {
    phase: 'Month 2-3: Consistency',
    tasks: [
      'Establish your posting routine',
      'Build relationships with 10-20 active community members',
      'Create valuable content regularly',
      'Start contributing to open-source projects or communities'
    ],
    color: 'border-purple-500'
  },
  {
    phase: 'Month 4+: Authority Building',
    tasks: [
      'Share unique insights',
      'Help newcomers (pay it forward)',
      'Collaborate with others',
      'Speak at events or create tutorials'
    ],
    color: 'border-yellow-500'
  },
]

const positioningExamples = [
  {
    template: 'I help [target audience] [achieve goal] through [your approach] in the Solana ecosystem.',
    examples: [
      'I help developers learn Solana development through clear tutorials and open-source projects.',
      'I create educational content for newcomers to understand Solana\'s DeFi ecosystem.',
      'I build tools that make Solana more accessible for everyday users.'
    ]
  }
]

export default function Positioning() {
  const isDark = useDarkMode()
  
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Positioning Yourself in the Solana Ecosystem</h1>
          </div>
          <p className="text-lg text-white/90">
            Define your niche, build your reputation, and establish yourself as a valuable member of the community.
          </p>
        </div>
      </div>

      {/* Define Your Niche */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-solana rounded-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Define Your Niche</h2>
        </div>

        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Questions to Ask Yourself:</h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">What aspect of Solana interests you most? (DeFi, NFTs, Gaming, Infrastructure, etc.)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">What skills do you bring? (Development, Design, Writing, Community Building)</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">What do you want to be known for?</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {niches.map((niche, i) => {
            const Icon = niche.icon
            return (
              <div key={i} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-solana-purple transition-all cursor-pointer">
                <div className={`${niche.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{niche.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{niche.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Positioning Statement</h2>
        {positioningExamples.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-solana-purple">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300 mb-2">Template:</p>
              <p className="text-gray-900 dark:text-white font-semibold">{item.template}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Examples:</p>
              <div className="space-y-3">
                {item.examples.map((example, j) => (
                  <div key={j} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Building Your Reputation Timeline */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Building Your Reputation</h2>
          <TrendingUp className="w-6 h-6 text-green-500 dark:text-green-400" />
        </div>

        {/* Timeline Chart */}
        <div className="mb-8">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-700" />
              <XAxis dataKey="label" stroke="#6b7280" className="dark:stroke-gray-400" />
              <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDark ? '#1f2937' : '#fff',
                  border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
                  borderRadius: '8px',
                  color: isDark ? '#f3f4f6' : '#111827'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="activity" 
                stroke="#9945FF" 
                strokeWidth={3}
                name="Activity Level"
                dot={{ fill: '#9945FF', r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="relationships" 
                stroke="#14F195" 
                strokeWidth={3}
                name="Relationships"
                dot={{ fill: '#14F195', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Milestones */}
        <div className="space-y-6">
          {milestones.map((milestone, i) => (
            <div key={i} className={`border-l-4 ${milestone.color} pl-6 py-4`}>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{milestone.phase}</h3>
              <ul className="space-y-2">
                {milestone.tasks.map((task, j) => (
                  <li key={j} className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Authenticity Tips */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authenticity is Key</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Share your failures and learnings, not just wins',
            'Be honest about what you don\'t know',
            'Ask questions publicly (others have them too)',
            'Show your personality'
          ].map((tip, i) => (
            <div key={i} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-solana-purple rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Plan */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Positioning Action Plan</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Identify Your Niche</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose from the niches above or create your own unique combination.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Write Your Positioning Statement</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Use the template to clearly define how you help others in the Solana ecosystem.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Start Building</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Follow the timeline milestones to gradually build your reputation.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 4: Stay Authentic</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remember to be genuine and share your real journey, not just highlights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

