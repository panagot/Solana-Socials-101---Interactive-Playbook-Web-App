import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ProfileSetup from './pages/ProfileSetup'
import Positioning from './pages/Positioning'
import Engagement from './pages/Engagement'
import Communities from './pages/Communities'
import ContentGuide from './pages/ContentGuide'
import WeeklyRoutine from './pages/WeeklyRoutine'
import GraphicsGuide from './pages/GraphicsGuide'
import SuccessStories from './pages/SuccessStories'
import Resources from './pages/Resources'
import OnboardingTour from './components/OnboardingTour'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import BackToTop from './components/BackToTop'
import ErrorBoundary from './components/ErrorBoundary'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { useState } from 'react'

function App() {
  const [tourComplete, setTourComplete] = useState(false)

  return (
    <ErrorBoundary>
      <Router>
        <AppContent onTourComplete={() => setTourComplete(true)} />
      </Router>
    </ErrorBoundary>
  )
}

function AppContent({ onTourComplete }) {
  useKeyboardShortcuts()

  return (
    <>
      <OnboardingTour onComplete={onTourComplete} />
      <KeyboardShortcuts />
      <BackToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/positioning" element={<Positioning />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/content-guide" element={<ContentGuide />} />
          <Route path="/weekly-routine" element={<WeeklyRoutine />} />
          <Route path="/graphics-guide" element={<GraphicsGuide />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

