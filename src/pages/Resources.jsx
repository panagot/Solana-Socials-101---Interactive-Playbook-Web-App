import { ExternalLink, BookOpen, Video, FileText, Code, Users, Globe, Download } from 'lucide-react'

const resources = [
  {
    category: 'Official Documentation',
    icon: BookOpen,
    color: 'bg-blue-500',
    items: [
      { name: 'Solana Documentation', url: 'https://docs.solana.com', description: 'Official Solana developer docs' },
      { name: 'Anchor Book', url: 'https://www.anchor-lang.com/book', description: 'Complete Anchor framework guide' },
      { name: 'Solana Cookbook', url: 'https://solanacookbook.com', description: 'Recipes for common Solana tasks' },
    ]
  },
  {
    category: 'Learning Resources',
    icon: Video,
    color: 'bg-purple-500',
    items: [
      { name: 'Solana YouTube Channel', url: 'https://www.youtube.com/c/solana', description: 'Official Solana tutorials' },
      { name: 'Superteam Ireland', url: '#', description: 'Local community resources' },
      { name: 'Solana Stack Exchange', url: 'https://solana.stackexchange.com', description: 'Q&A for Solana developers' },
    ]
  },
  {
    category: 'Developer Tools',
    icon: Code,
    color: 'bg-green-500',
    items: [
      { name: 'Solana Explorer', url: 'https://explorer.solana.com', description: 'Blockchain explorer' },
      { name: 'Solana Playground', url: 'https://beta.solpg.io', description: 'Online IDE for Solana' },
      { name: 'Anchor Framework', url: 'https://www.anchor-lang.com', description: 'Solana framework' },
    ]
  },
  {
    category: 'Community',
    icon: Users,
    color: 'bg-pink-500',
    items: [
      { name: 'Solana Discord', url: 'https://discord.gg/solana', description: 'Main Solana community' },
      { name: 'Superteam Ireland', url: '#', description: 'Irish Solana builders' },
      { name: 'Solana Forum', url: 'https://forum.solana.com', description: 'Community discussions' },
    ]
  },
  {
    category: 'Design Resources',
    icon: Globe,
    color: 'bg-yellow-500',
    items: [
      { name: 'Solana Brand Assets', url: 'https://solana.com/branding', description: 'Official Solana branding' },
      { name: 'Canva', url: 'https://canva.com', description: 'Free design tool' },
      { name: 'Figma', url: 'https://figma.com', description: 'Professional design tool' },
    ]
  },
  {
    category: 'Templates & Guides',
    icon: FileText,
    color: 'bg-indigo-500',
    items: [
      { name: 'Content Templates', url: '/content-guide', description: 'Ready-to-use post templates', internal: true },
      { name: 'Bio Templates', url: '/profile-setup', description: 'Profile bio examples', internal: true },
      { name: 'Weekly Routine', url: '/weekly-routine', description: 'Action plan template', internal: true },
    ]
  },
]

export default function Resources() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Resource Library</h1>
          </div>
          <p className="text-lg text-white/90">
            Curated collection of tools, guides, and resources for building in the Solana ecosystem
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="space-y-6">
        {resources.map((category, i) => {
          const Icon = category.icon
          return (
            <div key={i} className="card card-hover">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`${category.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.internal ? item.url : item.url}
                    target={item.internal ? undefined : '_blank'}
                    rel={item.internal ? undefined : 'noopener noreferrer'}
                    className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-solana-purple hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-solana-purple transition-colors">
                        {item.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-solana-purple transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg hover:shadow-lg transition-all text-left">
            <Download className="w-6 h-6 text-solana-purple mb-2" />
            <div className="font-semibold text-gray-900 dark:text-white mb-1">Export All Resources</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Download as text file</div>
          </button>
          <a
            href="/content-guide"
            className="p-4 bg-white rounded-lg hover:shadow-lg transition-all text-left"
          >
            <FileText className="w-6 h-6 text-solana-green mb-2" />
            <div className="font-semibold text-gray-900 dark:text-white mb-1">View Templates</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Copy-paste ready templates</div>
          </a>
          <a
            href="/success-stories"
            className="p-4 bg-white rounded-lg hover:shadow-lg transition-all text-left"
          >
            <Users className="w-6 h-6 text-solana-purple mb-2" />
            <div className="font-semibold text-gray-900 dark:text-white mb-1">Success Stories</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">See real results</div>
          </a>
        </div>
      </div>
    </div>
  )
}

