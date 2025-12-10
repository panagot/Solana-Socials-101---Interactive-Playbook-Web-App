import { Users, MessageCircle, Search, CheckCircle2, ArrowRight, ExternalLink, XCircle } from 'lucide-react'

const twitterCommunities = [
  { name: 'Superteam Ireland', handle: '@SuperteamIreland', description: 'Your local community!', highlight: true },
  { name: 'Solana Foundation', handle: '@solana', description: 'Official Solana updates' },
  { name: 'Solana Labs', handle: '@solanalabs', description: 'Development updates' },
  { name: 'Solana Daily', handle: '@SolanaDaily', description: 'Daily Solana news' },
  { name: 'Solana Beach', handle: '@SolanaBeach', description: 'Community highlights' },
]

const discordServers = [
  { name: 'Solana Discord', link: 'discord.gg/solana', description: 'Main Solana community' },
  { name: 'Superteam Ireland Discord', link: 'Check @SuperteamIreland', description: 'Local Irish community' },
  { name: 'Solana Developer Discord', link: 'For builders', description: 'Developer-focused' },
]

const communityPhases = [
  {
    phase: 'Week 1: Observe 👀',
    tasks: [
      'Read the rules and guidelines',
      'Understand the culture and tone',
      'See what types of posts are valued',
      'Identify active members and moderators'
    ],
    color: 'bg-blue-50 border-blue-500'
  },
  {
    phase: 'Week 2: Engage 💬',
    tasks: [
      'Introduce yourself in the intro channel',
      'Answer questions you know the answer to',
      'Ask thoughtful questions',
      'Share resources (if allowed)'
    ],
    color: 'bg-green-50 border-green-500'
  },
  {
    phase: 'Week 3+: Contribute 🚀',
    tasks: [
      'Share your work and updates',
      'Help newcomers',
      'Organize or participate in events',
      'Become a regular, valuable member'
    ],
    color: 'bg-purple-50 border-purple-500'
  },
]

const dos = [
  'Read community rules before posting',
  'Search before asking questions',
  'Help others without expecting anything',
  'Share wins and ask for feedback',
  'Tag relevant people when appropriate',
  'Use appropriate channels for different topics'
]

const donts = [
  'Spam your project links everywhere',
  'Ask for free airdrops or handouts',
  'Be overly promotional',
  'Ignore community guidelines',
  'Start drama or arguments',
  'DM people out of the blue asking for favors'
]

const searchStrategies = [
  {
    method: 'Twitter Search',
    steps: ['Search "Solana [your interest]"', 'Filter by "People" or "Latest"', 'Follow active accounts']
  },
  {
    method: 'Discord Server Lists',
    steps: ['Visit disboard.org or discord.me', 'Search for "Solana"', 'Join relevant servers']
  },
  {
    method: 'Ask on Twitter',
    steps: ['Post: "Looking for Solana [niche] communities"', 'Engage with replies', 'Check what communities others recommend']
  },
  {
    method: 'Check Profiles',
    steps: ['See what communities active builders are in', 'Check their bio links', 'Join the same communities']
  },
]

export default function Communities() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Finding & Interacting with Solana Communities</h1>
          </div>
          <p className="text-lg text-white/90">
            Connect with the right communities and become a valuable member of the Solana ecosystem.
          </p>
        </div>
      </div>

      {/* Twitter Communities */}
      <div className="card">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-solana rounded-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Twitter/X Communities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {twitterCommunities.map((community, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-lg border-2 ${
                community.highlight 
                  ? 'border-solana-purple bg-purple-50 dark:bg-purple-900/20' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-solana-purple/50'
              } transition-all`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{community.name}</h3>
                {community.highlight && (
                  <span className="px-2 py-1 bg-solana-purple text-white text-xs rounded-full">Local</span>
                )}
              </div>
              <p className="text-sm text-solana-purple dark:text-solana-green font-mono mb-1">{community.handle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{community.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-solana-purple">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">💡 Tip:</strong> Start by following and engaging with Superteam Ireland - your local community is your best starting point!
          </p>
        </div>
      </div>

      {/* Discord & Other Platforms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Discord Servers</h2>
          </div>
          <div className="space-y-3">
            {discordServers.map((server, i) => (
              <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{server.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{server.description}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">{server.link}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="text-gray-900 dark:text-white">Also check:</strong> Telegram groups, Reddit (r/solana, r/solanadev), 
              Solana Forum, Solana Stack Exchange
            </p>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <Search className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">How to Find Communities</h2>
          </div>
          <div className="space-y-4">
            {searchStrategies.map((strategy, i) => (
              <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{strategy.method}</h3>
                <ol className="space-y-2">
                  {strategy.steps.map((step, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-solana-purple">{j + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Integration Timeline */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Community Integration Process</h2>
        <div className="space-y-6">
          {communityPhases.map((phase, i) => (
            <div key={i} className={`p-6 rounded-lg border-l-4 ${phase.color} dark:bg-opacity-20`}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{phase.phase}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phase.tasks.map((task, j) => (
                  <div key={j} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dos and Don'ts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-2 mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-500 dark:text-green-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Dos ✅</h2>
          </div>
          <div className="space-y-3">
            {dos.map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-2 mb-6">
            <XCircle className="w-6 h-6 text-red-500 dark:text-red-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Don'ts ❌</h2>
          </div>
          <div className="space-y-3">
            {donts.map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building Your Network */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Building Your Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span>🏠</span>
              <span>Start Local</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-purple mt-1" />
                <span>Superteam Ireland is your home base</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-purple mt-1" />
                <span>Attend local meetups (virtual or in-person)</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-purple mt-1" />
                <span>Connect with other Irish builders</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-purple mt-1" />
                <span>Support local projects</span>
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <span>🌍</span>
              <span>Expand Globally</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-green mt-1" />
                <span>Engage with international Solana communities</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-green mt-1" />
                <span>Join global events and hackathons</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-green mt-1" />
                <span>Collaborate across time zones</span>
              </li>
              <li className="flex items-start space-x-2">
                <ArrowRight className="w-4 h-4 text-solana-green mt-1" />
                <span>Learn from diverse perspectives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Action Checklist */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Community Action Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Join Superteam Ireland Discord',
            'Follow all key Twitter accounts listed above',
            'Join 2-3 additional Solana Discord servers',
            'Introduce yourself in community intro channels',
            'Read and understand community rules',
            'Start engaging with 5-10 posts daily',
            'Help answer questions from newcomers',
            'Share your work for feedback'
          ].map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-solana-purple rounded" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

