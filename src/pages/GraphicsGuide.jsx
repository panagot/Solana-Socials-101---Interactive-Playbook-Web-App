import { Image as ImageIcon, Palette, Download, CheckCircle2, ExternalLink, Code, BarChart3, Camera } from 'lucide-react'

const visualTypes = [
  {
    type: 'Profile Screenshots',
    icon: Camera,
    description: 'Examples of well-designed Solana Twitter profiles',
    what: [
      'Examples of well-designed Solana Twitter profiles',
      'Annotate what makes them effective',
      'Show before/after examples if possible'
    ],
    tools: ['Screenshot tool (built-in OS)', 'Annotation: Snagit, Skitch, or Canva']
  },
  {
    type: 'Thread Visuals',
    icon: ImageIcon,
    description: 'Diagrams and visual breakdowns for threads',
    what: [
      'Thread structure diagrams',
      'Visual breakdowns of complex topics',
      'Comparison charts (Solana vs other chains)',
      'Step-by-step process flows'
    ],
    tools: ['Canva (free templates)', 'Figma (for custom designs)', 'Excalidraw (for diagrams)']
  },
  {
    type: 'Infographics',
    icon: BarChart3,
    description: 'Visual representations of data and concepts',
    what: [
      'Solana ecosystem overview',
      'Posting schedule/timeline',
      'Engagement strategy (80/20 rule)',
      'Community integration process'
    ],
    tools: ['Canva', 'Figma', 'Adobe Illustrator']
  },
  {
    type: 'Code Snippets',
    icon: Code,
    description: 'Well-formatted code with syntax highlighting',
    what: [
      'Use syntax highlighting',
      'Keep snippets short and focused',
      'Add comments explaining key parts',
      'Use consistent formatting'
    ],
    tools: ['VS Code', 'Carbon.now.sh', 'CodePen']
  },
  {
    type: 'Comparison Charts',
    icon: BarChart3,
    description: 'Side-by-side comparisons',
    what: [
      'Solana vs Ethereum (speed, fees, etc.)',
      'Different Solana tools/frameworks',
      'Before/after of profile improvements',
      'Engagement strategies'
    ],
    tools: ['Canva', 'Figma', 'Google Sheets']
  },
]

const solanaColors = {
  purple: { hex: '#9945FF', name: 'Primary Purple' },
  green: { hex: '#14F195', name: 'Secondary Green' },
  dark: { hex: '#1A1A2E', name: 'Dark' },
  white: { hex: '#FFFFFF', name: 'Background' },
  gray: { hex: '#F5F5F5', name: 'Light Background' }
}

const designTemplates = [
  {
    name: 'Thread Header',
    description: 'Eye-catching header for educational threads',
    structure: `
┌─────────────────────────────────────────┐
│  [Solana Purple Gradient Background]    │
│                                         │
│         🧵 THREAD TITLE                  │
│                                         │
│      Brief description or hook           │
│                                         │
│  [Optional: Solana logo or icon]        │
└─────────────────────────────────────────┘
    `
  },
  {
    name: 'Quote Card',
    description: 'Shareable quote cards',
    structure: `
┌─────────────────────────────────────────┐
│                                         │
│         "Your inspiring quote here"     │
│                                         │
│                    — Author Name        │
│                                         │
│  [Solana-themed background or border]   │
└─────────────────────────────────────────┘
    `
  },
  {
    name: 'Comparison Table',
    description: 'Side-by-side feature comparisons',
    structure: `
┌──────────────┬──────────────┬──────────────┐
│   Feature    │   Solana     │  Ethereum   │
├──────────────┼──────────────┼──────────────┤
│ Block Time   │   400ms      │   12-15s     │
│ Avg Fee      │  ~$0.00025   │  ~$5-50      │
│ TPS          │  65,000+     │  15-30       │
└──────────────┴──────────────┴──────────────┘
    `
  },
]

const freeResources = [
  {
    category: 'Icons',
    items: [
      { name: 'Flaticon', link: 'flaticon.com', note: 'Free with attribution' },
      { name: 'Icons8', link: 'icons8.com', note: 'Free tier available' },
      { name: 'Heroicons', link: 'heroicons.com', note: 'Open source' }
    ]
  },
  {
    category: 'Images',
    items: [
      { name: 'Unsplash', link: 'unsplash.com', note: 'Free photos' },
      { name: 'Pexels', link: 'pexels.com', note: 'Free stock photos' },
      { name: 'Solana Media Kit', link: 'solana.com', note: 'Official assets' }
    ]
  },
  {
    category: 'Fonts',
    items: [
      { name: 'Google Fonts', link: 'fonts.google.com', note: 'Free fonts' },
      { name: 'Inter', link: 'rsms.me/inter', note: 'Recommended' },
      { name: 'Poppins', link: 'fonts.google.com', note: 'Modern & clean' }
    ]
  },
  {
    category: 'Design Inspiration',
    items: [
      { name: 'Dribbble', link: 'dribbble.com', note: 'Search "Solana" or "crypto"' },
      { name: 'Behance', link: 'behance.net', note: 'Crypto design projects' },
      { name: 'Twitter', link: 'twitter.com', note: 'See what successful accounts post' }
    ]
  },
]

export default function GraphicsGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <ImageIcon className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Graphics & Visual Guide</h1>
          </div>
          <p className="text-lg text-white/90">
            Learn how to create compelling visuals that enhance your social media presence and make your content stand out.
          </p>
        </div>
      </div>

      {/* Types of Visuals */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Visuals to Use</h2>
        <div className="space-y-6">
          {visualTypes.map((visual, i) => {
            const Icon = visual.icon
            return (
              <div key={i} className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-solana-purple transition-all">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-solana rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{visual.type}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{visual.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What to Create:</h4>
                      <ul className="space-y-1">
                        {visual.what.map((item, j) => (
                          <li key={j} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="text-solana-purple mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {visual.tools.map((tool, j) => (
                          <span key={j} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Solana Brand Colors */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solana Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(solanaColors).map(([key, color]) => (
            <div key={key} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
              <div 
                className="w-full h-24 rounded-lg mb-3 border border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">{color.name}</div>
              <div className="font-mono text-sm text-gray-600 dark:text-gray-400">{color.hex}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Pro Tip:</strong> Use the purple gradient (#9945FF to #14F195) for backgrounds and the solid colors for accents and text.
          </p>
        </div>
      </div>

      {/* Design Templates */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Design Templates</h2>
        <div className="space-y-6">
          {designTemplates.map((template, i) => (
            <div key={i} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{template.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {template.structure}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Resources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Free Resources for Graphics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freeResources.map((category, i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <div key={j} className="flex items-start justify-between p-3 bg-white dark:bg-gray-800 rounded">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white mb-1">{item.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{item.note}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Content Checklist */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Visual Content Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Clear and readable at small sizes',
            'Uses Solana brand colors appropriately',
            'Includes relevant emojis/icons',
            'Has proper spacing and alignment',
            'Branded consistently',
            'Adds value to the post (not just decoration)',
            'Accessible (good contrast, readable fonts)',
            'Mobile-friendly (most users are on mobile)'
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pro Tips for Visual Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              tip: 'Consistency',
              description: 'Use the same style, colors, and fonts across all visuals'
            },
            {
              tip: 'Simplicity',
              description: 'Don\'t overcrowd - white space is your friend'
            },
            {
              tip: 'Mobile-First',
              description: 'Design for how it looks on phones (most Twitter users are mobile)'
            },
            {
              tip: 'Test',
              description: 'Preview how your visual looks in the Twitter feed'
            },
            {
              tip: 'Accessibility',
              description: 'Ensure text contrast meets WCAG standards'
            },
            {
              tip: 'Branding',
              description: 'Subtle Solana elements > Over-the-top branding'
            }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.tip}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Example Visual Posts */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Example Visual Posts</h2>
        <div className="space-y-4">
          {[
            {
              type: 'Educational Thread with Visual',
              example: '🧵 How Solana\'s Proof of History works',
              visual: 'Diagram showing PoH vs PoW comparison',
              result: 'Higher engagement, easier to understand'
            },
            {
              type: 'Project Update with Screenshot',
              example: 'Just shipped v0.2 of my Solana dApp',
              visual: 'Screenshot of the new UI/features',
              result: 'Shows real progress, builds credibility'
            },
            {
              type: 'Resource Share with Infographic',
              example: 'Top 5 Solana resources for beginners',
              visual: 'Infographic with icons and links',
              result: 'Saves to bookmarks, gets shared'
            }
          ].map((example, i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-solana-purple hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{example.type}</h3>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p><strong className="text-gray-900 dark:text-white">Post:</strong> "{example.example}"</p>
                <p><strong className="text-gray-900 dark:text-white">Visual:</strong> {example.visual}</p>
                <p className="text-green-600 dark:text-green-400"><strong>Result:</strong> {example.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Library Checklist */}
      <div className="card bg-blue-50 dark:bg-blue-900/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Visual Library to Create</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            '5-10 example profile screenshots',
            '3-5 thread structure diagrams',
            '2-3 comparison charts',
            '1-2 infographics (ecosystem overview, posting schedule)',
            '3-5 code snippet examples with annotations',
            '2-3 quote cards with Solana branding',
            '1-2 timeline graphics for your journey',
            'Weekly metrics dashboard template'
          ].map((item, i) => (
            <label key={i} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
              <input type="checkbox" className="w-5 h-5 text-solana-purple rounded" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

