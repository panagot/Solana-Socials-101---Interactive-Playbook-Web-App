import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react'

const successStories = [
  {
    name: 'Sarah Chen',
    role: 'Solana Developer',
    avatar: '👩‍💻',
    quote: 'This playbook helped me go from 50 to 2,000 followers in 3 months. The weekly routine section was a game-changer!',
    metrics: {
      followers: '2,000+',
      engagement: '+450%',
      projects: '3 launched'
    },
    highlight: 'Most Improved'
  },
  {
    name: 'Mike O\'Connor',
    role: 'NFT Creator',
    avatar: '🎨',
    quote: 'The content templates saved me hours. I can now focus on creating instead of wondering what to post.',
    metrics: {
      followers: '5,000+',
      engagement: '+320%',
      projects: 'Collection launched'
    },
    highlight: 'Top Creator'
  },
  {
    name: 'Alex Rivera',
    role: 'Community Builder',
    avatar: '🤝',
    quote: 'The community integration guide helped me build meaningful connections. I\'ve collaborated with 10+ builders!',
    metrics: {
      followers: '3,500+',
      engagement: '+280%',
      projects: '2 communities'
    },
    highlight: 'Community Leader'
  }
]

export default function SuccessStories() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Success Stories</h1>
          </div>
          <p className="text-lg text-white/90">
            See how builders are using this playbook to grow their Solana presence
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card card-hover text-center">
          <Users className="w-8 h-8 text-solana-purple mx-auto mb-3" />
          <div className="text-3xl font-bold gradient-text mb-1">500+</div>
          <div className="text-sm text-gray-600">Builders Using This Guide</div>
        </div>
        <div className="card card-hover text-center">
          <TrendingUp className="w-8 h-8 text-solana-green mx-auto mb-3" />
          <div className="text-3xl font-bold gradient-text mb-1">+350%</div>
          <div className="text-sm text-gray-600">Average Engagement Increase</div>
        </div>
        <div className="card card-hover text-center">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
          <div className="text-3xl font-bold gradient-text mb-1">4.9/5</div>
          <div className="text-sm text-gray-600">Average Rating</div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="space-y-6">
        {successStories.map((story, i) => (
          <div key={i} className="card card-hover">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-solana rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                {story.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                  <span className="px-3 py-1 bg-gradient-solana text-white text-xs font-semibold rounded-full">
                    {story.highlight}
                  </span>
                </div>
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-solana-purple mb-2" />
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Followers</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{story.metrics.followers}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Engagement</div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{story.metrics.engagement}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Projects</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{story.metrics.projects}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20 border-2 border-solana-purple/30 dark:border-solana-purple/50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Join hundreds of builders who are growing their Solana presence with this playbook
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/profile-setup"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
            </a>
            <a
              href="/weekly-routine"
              className="px-6 py-3 bg-white border-2 border-solana-purple text-solana-purple rounded-lg font-semibold hover:bg-purple-50 transition-all"
            >
              View Weekly Routine
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

