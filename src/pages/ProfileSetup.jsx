import { CheckCircle2, XCircle, Image as ImageIcon, User, Link as LinkIcon, Pin, Sparkles, Copy, Check, Download } from 'lucide-react'
import { useState } from 'react'
import { exportChecklist } from '../utils/export'
import ComparisonTool from '../components/ComparisonTool'

const profileElements = [
  {
    title: 'Profile Picture',
    icon: User,
    good: [
      'Clear, professional headshot or distinctive avatar',
      'Recognizable at small sizes (400x400px minimum)',
      'Solana-themed element (purple gradient, logo)',
      'Professional yet authentic'
    ],
    bad: [
      'Blurry or low resolution',
      'Too busy with text/background',
      'Generic stock photos',
      'Inappropriate content'
    ],
    visual: 'profile-picture-example'
  },
  {
    title: 'Display Name',
    icon: User,
    format: 'Your Name | Solana Builder/Developer/Creator',
    examples: [
      'Sarah | Solana Dev',
      'Mike | Building on Solana',
      'Alex | Solana Creator'
    ]
  },
  {
    title: 'Bio (160 characters)',
    icon: User,
    template: `[Your role/interest] | [What you're building/learning]
[Key achievements or interests]
[Links/communities] | [Location (optional)]`,
    examples: [
      `🚀 Solana Developer | Building DeFi tools
📚 Learning Rust & Anchor
🔗 [Your project link] | Dublin, Ireland`,
      `Creator & Solana Enthusiast
🎨 NFTs | 🎮 Gaming | 💜 Solana
Building in public | Join the journey`
    ]
  },
  {
    title: 'Header/Banner Image',
    icon: ImageIcon,
    specs: '1500x500px for optimal display',
    tips: [
      'Include Solana branding or project visuals',
      'Keep text minimal and readable',
      'Consider seasonal updates',
      'Use Solana purple gradient (#9945FF to #14F195)'
    ]
  },
  {
    title: 'Pinned Tweet',
    icon: Pin,
    tips: [
      'Pin your best work or most important announcement',
      'Update it monthly to show you\'re active',
      'Could be: project launch, thread about your journey, or valuable resource'
    ]
  },
  {
    title: 'Link in Bio',
    icon: LinkIcon,
    tools: ['Linktree', 'Bio.link', 'Custom landing page'],
    includes: [
      'GitHub',
      'Project links',
      'Portfolio',
      'Discord',
      'Telegram'
    ]
  }
]

export default function ProfileSetup() {
  const [copiedBio, setCopiedBio] = useState(null)

  const copyBio = (bio, index) => {
    navigator.clipboard.writeText(bio)
    setCopiedBio(index)
    setTimeout(() => setCopiedBio(null), 2000)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Creating Your Crypto-Friendly X Profile</h1>
          </div>
          <p className="text-lg text-white/90">
            Your profile is your first impression. Make it count with these essential elements.
          </p>
        </div>
      </div>

      {/* Profile Elements */}
      {profileElements.map((element, index) => {
        const Icon = element.icon
        return (
          <div key={index} className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-solana rounded-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{element.title}</h2>
            </div>

            {element.specs && (
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Specifications: {element.specs}</p>
              </div>
            )}

            {element.format && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Format:</p>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100">
                  {element.format}
                </div>
              </div>
            )}

            {element.template && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Template:</p>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg font-mono text-sm whitespace-pre-line text-gray-900 dark:text-gray-100">
                  {element.template}
                </div>
              </div>
            )}

            {element.good && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Do This</h3>
                  </div>
                  <ul className="space-y-2">
                    {element.good.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {element.bad && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold text-gray-900">Avoid This</h3>
                    </div>
                    <ul className="space-y-2">
                      {element.bad.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {element.examples && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Examples:</p>
                <div className="space-y-3">
                  {element.examples.map((example, i) => (
                    <div key={i} className="group relative p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-solana-purple hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <p className="text-sm whitespace-pre-line pr-8 text-gray-900 dark:text-gray-100">{example}</p>
                      <button
                        onClick={() => copyBio(example, i)}
                        className="absolute top-2 right-2 p-1.5 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100 border border-gray-200 dark:border-gray-600"
                        title="Copy to clipboard"
                      >
                        {copiedBio === i ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {element.tips && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Tips:</p>
                <ul className="space-y-2">
                  {element.tips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-solana-purple rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {element.tools && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Recommended Tools:</p>
                <div className="flex flex-wrap gap-2">
                  {element.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-solana-purple/10 text-solana-purple rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {element.includes && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Include:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {element.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {element.visual && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    📸 Screenshot placeholder: {element.visual}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Add example screenshots of good profile setups here
                  </p>
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Visual Profile Layout */}
      <div className="card card-hover">
        <div className="flex items-center space-x-2 mb-6">
          <ImageIcon className="w-6 h-6 text-solana-purple" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Layout Visual Guide</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 max-w-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            {/* Banner */}
            <div className="h-32 bg-gradient-solana rounded-t-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <p className="text-white/90 text-sm font-medium">1500x500px Banner</p>
                <p className="text-white/70 text-xs mt-1">Include Solana branding or project visuals</p>
              </div>
            </div>
            
            {/* Profile Section */}
            <div className="flex items-start space-x-4 -mt-16 mb-4">
              <div className="w-24 h-24 bg-gradient-solana rounded-full border-4 border-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1 pt-16">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Your Name | Solana Builder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">@yourhandle</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                  🚀 Solana Developer | Building DeFi tools<br/>
                  📚 Learning Rust & Anchor<br/>
                  🔗 [Your project link] | Dublin, Ireland
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>Location</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🔗</span>
                    <span>linktr.ee/you</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>Joined [Date]</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Pinned Tweet Indicator */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Pin className="w-4 h-4 text-solana-purple" />
                <span className="font-medium">Pinned Tweet</span>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-green-50 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-700 dark:text-gray-300">Your most important announcement or best work goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Comparison */}
      <ComparisonTool
        title="Profile Transformation"
        before={[
          'Generic profile picture',
          'No bio or empty bio',
          'No banner image',
          'No pinned tweet',
          'No links in bio',
          'Inconsistent branding'
        ]}
        after={[
          'Professional Solana-themed profile picture',
          'Compelling bio with emojis and key info',
          'Custom banner with Solana branding',
          'Pinned best work or announcement',
          'Link in bio with all resources',
          'Consistent Solana branding throughout'
        ]}
      />

      {/* Checklist */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Setup Checklist</h2>
          </div>
          <button
            onClick={() => {
              const items = [
                'Upload a clear, recognizable profile picture (400x400px minimum)',
                'Add Solana-themed elements to your profile picture or banner',
                'Create a compelling display name with your role',
                'Write a bio under 160 characters with emojis and key info',
                'Design a 1500x500px banner with Solana branding',
                'Pin your best tweet or important announcement',
                'Set up a link in bio (Linktree, Bio.link, etc.)',
                'Include all relevant links (GitHub, portfolio, Discord)',
                'Update your location (optional but helpful)',
                'Verify your profile looks good on mobile and desktop'
              ]
              exportChecklist(items, 'profile-setup-checklist.txt')
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Checklist</span>
          </button>
        </div>
        <div className="space-y-3">
          {[
            'Upload a clear, recognizable profile picture (400x400px minimum)',
            'Add Solana-themed elements to your profile picture or banner',
            'Create a compelling display name with your role',
            'Write a bio under 160 characters with emojis and key info',
            'Design a 1500x500px banner with Solana branding',
            'Pin your best tweet or important announcement',
            'Set up a link in bio (Linktree, Bio.link, etc.)',
            'Include all relevant links (GitHub, portfolio, Discord)',
            'Update your location (optional but helpful)',
            'Verify your profile looks good on mobile and desktop'
          ].map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md group">
              <input type="checkbox" className="w-5 h-5 text-solana-purple rounded focus:ring-2 focus:ring-solana-purple" />
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white flex-1">{item}</span>
              <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-has-[:checked]:opacity-100 transition-opacity" />
            </label>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-green-50 rounded-lg border border-purple-200">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">💡 Tip:</strong> Complete all items to have a professional, crypto-friendly profile that stands out in the Solana ecosystem!
          </p>
        </div>
      </div>
    </div>
  )
}

