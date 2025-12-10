import { FileText, Copy, CheckCircle2, MessageSquare, Rocket, BookOpen, Lightbulb, Megaphone, Eye, Sparkles } from 'lucide-react'
import { useState } from 'react'

const contentTypes = [
  {
    type: 'Educational Threads',
    icon: BookOpen,
    purpose: 'Teach something valuable',
    structure: ['Hook: Compelling first tweet', 'Body: 5-10 tweets with key points', 'Conclusion: Summary and call to action'],
    example: `🧵 How to get started with Solana development in 2024

A thread for absolute beginners 👇

1/10 First, understand why Solana?
- Fast transactions (400ms block time)
- Low fees (~$0.00025 per transaction)
- Growing ecosystem with real projects
- Strong developer tools

2/10 Set up your environment:
- Install Rust (rustup.rs)
- Install Solana CLI
- Set up a wallet (Phantom or Solflare)
- Get some SOL for testing

[Continue with 8 more tweets...]

10/10 Resources to continue learning:
- Solana Cookbook
- Anchor documentation
- Solana Stack Exchange
- @SuperteamIreland community

What would you like to learn next? Drop it below! 🚀`
  },
  {
    type: 'Project Updates',
    icon: Rocket,
    purpose: 'Share progress and build anticipation',
    structure: ['What you built/changed', 'Why it matters', 'What\'s next', 'Ask for feedback'],
    example: `🚀 Project Update: Solana Task Manager

Just shipped v0.2 with some major improvements:

✨ New Features:
- Multi-wallet support
- Transaction history
- Gas optimization

🔧 Technical Deep Dive:
We reduced gas costs by 40% by batching transactions.
Used Anchor's instruction builder for efficiency.

📊 What's Next:
- Mobile app (Q2 2024)
- Team collaboration features
- Public beta testing

Want early access? Drop your wallet below! 👇`
  },
  {
    type: 'Learning Journey Posts',
    icon: Lightbulb,
    purpose: 'Show authenticity and help others',
    structure: ['What you learned', 'What was challenging', 'Key takeaways', 'Resources that helped'],
    example: `📚 What I learned building my first Solana dApp

6 months ago, I knew nothing about Solana.
Today, I shipped my first project. Here's what I wish I knew:

1. Start with Anchor, not raw Solana
   - Much easier for beginners
   - Better error messages
   - Great documentation

2. Use devnet liberally
   - Test everything before mainnet
   - Don't waste real SOL on mistakes
   - Solana Explorer is your friend

3. Join communities early
   - @SuperteamIreland helped me so much
   - Discord > Google for Solana questions
   - People are genuinely helpful

4. Build in public
   - Share your struggles
   - Get feedback early
   - Learn from others' mistakes

What's your biggest Solana learning? Share below! 🚀`
  },
  {
    type: 'Resource Shares',
    icon: FileText,
    purpose: 'Provide value and establish expertise',
    structure: ['What the resource is', 'Why it\'s useful', 'How to use it', 'Tag creators'],
    example: `💡 Solana Resource: Anchor Book

Just finished reading the Anchor Book and it's a game-changer for Solana devs.

What I loved:
- Clear explanations
- Real-world examples
- Common pitfalls covered
- Best practices

Best for: Developers moving from other chains or new to Solana

Free resource: anchor-lang.com/book

Highly recommend! What Solana resources have helped you most?`
  },
  {
    type: 'Question Posts',
    icon: MessageSquare,
    purpose: 'Start conversations and learn',
    structure: ['Clear question', 'Context (optional)', 'Tag relevant people', 'Engage with replies'],
    example: `❓ Question for Solana developers:

What's your go-to tool for debugging Solana programs?

I've been using:
- Solana Explorer
- Anchor logs
- Custom scripts

But wondering if there's something better I'm missing?

@solana @SuperteamIreland what do you use?`
  },
  {
    type: 'Announcements',
    icon: Megaphone,
    purpose: 'Share important news',
    structure: ['Clear headline', 'Key details', 'Next steps', 'Celebration/thanks'],
    example: `🎉 Exciting News!

After 3 months of building, I'm launching my Solana project!

What it is: [Brief description]
Why it matters: [Value proposition]
When: [Launch date]

Huge thanks to:
- @SuperteamIreland for support
- Beta testers who gave feedback
- The Solana community for inspiration

Join the waitlist: [link]

Let's build! 🚀`
  },
]

const templates = [
  {
    name: 'Project Update',
    template: `🚀 [Project Name] Update

Just shipped [feature/version]:

✨ What's New:
- [Feature 1]
- [Feature 2]

🔧 Technical:
[Brief technical detail]

📊 What's Next:
[Upcoming features]

[Call to action/question]`
  },
  {
    name: 'Learning Share',
    template: `📚 Just learned: [Topic]

Here's what I discovered:

1. [Key point 1]
2. [Key point 2]
3. [Key point 3]

Resources that helped:
- [Resource 1]
- [Resource 2]

What have you learned recently? Share below! 🚀`
  },
  {
    name: 'Question Post',
    template: `❓ Question for [audience]:

[Your question]

Context: [Brief context if needed]

@[relevant accounts] what are your thoughts?

[Engage with replies]`
  },
  {
    name: 'Resource Share',
    template: `💡 Solana Resource: [Name]

Just discovered [resource] and it's amazing for [use case].

What I love:
- [Benefit 1]
- [Benefit 2]

Link: [url]

What resources have helped you? Share below!`
  },
  {
    name: 'Thread Starter',
    template: `🧵 [Compelling Title]

A thread about [topic] for [audience] 👇

1/10 [First key point]

[Continue with numbered tweets...]

10/10 [Summary and call to action]

What would you add? Drop it below! 🚀`
  },
]

export default function ContentGuide() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [previewIndex, setPreviewIndex] = useState(null)

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const togglePreview = (index) => {
    setPreviewIndex(previewIndex === index ? null : index)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card bg-gradient-solana text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-6 h-6 animate-pulse-slow" />
            <h1 className="text-3xl font-bold">Content Style Guidelines & Examples</h1>
          </div>
          <p className="text-lg text-white/90">
            Learn how to create engaging content that provides value and builds your reputation in the Solana ecosystem.
          </p>
        </div>
      </div>

      {/* Content Types */}
      <div className="space-y-6">
        {contentTypes.map((content, i) => {
          const Icon = content.icon
          return (
            <div key={i} className="card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-solana rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{content.type}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Purpose: {content.purpose}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Structure:</h3>
                <ul className="space-y-1">
                  {content.structure.map((item, j) => (
                    <li key={j} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-solana-purple mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Example:</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => togglePreview(i)}
                      className="flex items-center space-x-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{previewIndex === i ? 'Hide Preview' : 'Preview'}</span>
                    </button>
                    <button
                      onClick={() => copyToClipboard(content.example, `example-${i}`)}
                      className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedIndex === `example-${i}` ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                {previewIndex === i && (
                  <div className="mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-200 dark:border-blue-800 shadow-lg animate-slide-up">
                    <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 bg-gradient-solana rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Your Name</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">@yourhandle</div>
                      </div>
                    </div>
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans leading-relaxed">{content.example}</pre>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <button className="hover:text-gray-700 dark:hover:text-gray-300">❤️ 0</button>
                      <button className="hover:text-gray-700 dark:hover:text-gray-300">🔄 0</button>
                      <button className="hover:text-gray-700 dark:hover:text-gray-300">💬 0</button>
                    </div>
                  </div>
                )}
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-solana-purple hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-sans leading-relaxed">{content.example}</pre>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Tone Guidelines */}
      <div className="card bg-gradient-to-r from-purple-50 to-green-50">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Content Tone Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Professional but Approachable</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Use emojis strategically</li>
              <li>• Be conversational, not corporate</li>
              <li>• Show personality while staying respectful</li>
              <li>• Explain technical terms when needed</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Authentic</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Share real experiences</li>
              <li>• Admit when you don't know something</li>
              <li>• Celebrate others' wins</li>
              <li>• Be vulnerable about challenges</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Value-First</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Every post should provide value</li>
              <li>• Avoid pure self-promotion</li>
              <li>• Help others succeed</li>
              <li>• Share knowledge freely</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Templates */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <FileText className="w-6 h-6 text-solana-purple" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Reference Templates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template, i) => (
            <div key={i} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-solana-purple hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-solana-purple transition-colors">{template.name}</h3>
                <button
                  onClick={() => copyToClipboard(template.template, `template-${i}`)}
                  className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-solana-purple hover:text-white rounded text-xs transition-all duration-300"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedIndex === `template-${i}` ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded font-mono text-xs whitespace-pre-wrap text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                {template.template}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Content Tips */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Visual Content Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Screenshots</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Code snippets (with syntax highlighting)</li>
              <li>• UI mockups or designs</li>
              <li>• Analytics or metrics</li>
              <li>• Transaction confirmations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Graphics</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Use Canva or Figma for simple graphics</li>
              <li>• Include Solana branding (purple gradient)</li>
              <li>• Keep text readable</li>
              <li>• Brand consistently</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Videos</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Short demos (under 2 minutes)</li>
              <li>• Tutorial snippets</li>
              <li>• Project walkthroughs</li>
              <li>• Community highlights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tools</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Canva (free graphics)</li>
              <li>• Figma (custom designs)</li>
              <li>• Loom (video demos)</li>
              <li>• Thread Reader (formatting)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Checklist */}
      <div className="card bg-blue-50">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Before Posting Checklist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Does this provide value to my audience?',
            'Is the tone appropriate for my brand?',
            'Have I proofread for typos?',
            'Are emojis used strategically?',
            'Is there a clear call to action?',
            'Have I tagged relevant people (if appropriate)?',
            'Is the timing right for maximum engagement?',
            'Does this align with my positioning?'
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-2 p-2 bg-white rounded">
              <input type="checkbox" className="w-4 h-4 text-solana-purple rounded mt-1" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

