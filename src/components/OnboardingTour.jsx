import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'

const tourSteps = [
  {
    id: 'dashboard',
    title: 'Welcome to Solana Socials 101!',
    content: 'This is your dashboard. Track your progress, view metrics, and navigate to different sections.',
    position: 'center'
  },
  {
    id: 'stats',
    title: 'Track Your Progress',
    content: 'Monitor your completion across all sections. Click any card to jump to that section.',
    position: 'bottom'
  },
  {
    id: 'charts',
    title: 'Visual Analytics',
    content: 'See your engagement patterns and activity distribution. Use these insights to optimize your strategy.',
    position: 'top'
  },
  {
    id: 'navigation',
    title: 'Quick Navigation',
    content: 'Access all sections quickly. Each section has actionable steps and templates you can use immediately.',
    position: 'right'
  }
]

export default function OnboardingTour({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showTour, setShowTour] = useState(false)

  useEffect(() => {
    try {
      const hasSeenTour = typeof window !== 'undefined' ? localStorage.getItem('hasSeenTour') : null
      if (!hasSeenTour) {
        setShowTour(true)
      }
    } catch (err) {
      // localStorage might not be available
      console.log('localStorage not available')
    }
  }, [])

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  const completeTour = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('hasSeenTour', 'true')
      }
    } catch (err) {
      console.log('Could not save to localStorage')
    }
    setShowTour(false)
    if (onComplete) onComplete()
  }

  if (!showTour) return null

  const step = tourSteps[currentStep]

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"></div>
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 pointer-events-auto animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-solana-purple" />
              <span className="text-sm font-semibold text-gray-500">
                Step {currentStep + 1} of {tourSteps.length}
              </span>
            </div>
            <button
              onClick={completeTour}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 mb-6">{step.content}</p>
          <div className="flex items-center justify-between">
            <button
              onClick={completeTour}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Skip Tour
            </button>
            <button
              onClick={nextStep}
              className="btn-primary flex items-center space-x-2"
            >
              <span>{currentStep === tourSteps.length - 1 ? 'Get Started' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-4 flex space-x-2">
            {tourSteps.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded ${
                  i === currentStep ? 'bg-solana-purple' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

