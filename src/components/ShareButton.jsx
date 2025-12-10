import { Share2, Copy, Check, Twitter } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ShareButton({ title = 'Solana Socials 101', url = '/', description = 'Complete guide to building your social presence in the Solana ecosystem' }) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin + url)
      setCanShare('share' in navigator)
    }
  }, [url])

  const shareText = `${title} - ${description}`

  const copyToClipboard = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shareUrl
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
          setShowMenu(false)
        }, 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
      document.body.removeChild(textArea)
      return
    }

    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setShowMenu(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, '_blank', 'width=550,height=420')
    setShowMenu(false)
  }

  const shareNative = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        })
        setShowMenu(false)
      } catch (err) {
        // User cancelled or error
        console.log('Share cancelled or failed')
      }
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 animate-slide-up">
          <div className="p-2">
            {canShare && (
              <button
                onClick={shareNative}
                className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left text-sm"
              >
                <Share2 className="w-4 h-4" />
                <span>Share via...</span>
              </button>
            )}
            <button
              onClick={shareOnTwitter}
              className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left text-sm"
            >
              <Twitter className="w-4 h-4 text-blue-400" />
              <span>Share on Twitter</span>
            </button>
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-left text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy link</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

