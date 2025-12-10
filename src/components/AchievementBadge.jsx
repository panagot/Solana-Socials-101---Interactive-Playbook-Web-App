import { Trophy, Star, Target, Zap, Award } from 'lucide-react'

const achievements = [
  { id: 'first-post', name: 'First Post', icon: Zap, color: 'bg-yellow-500', description: 'Created your first post' },
  { id: 'profile-complete', name: 'Profile Master', icon: Target, color: 'bg-green-500', description: 'Completed profile setup' },
  { id: 'week-streak', name: 'Week Warrior', icon: Star, color: 'bg-blue-500', description: 'Posted for 7 days straight' },
  { id: 'community-helper', name: 'Community Helper', icon: Award, color: 'bg-purple-500', description: 'Helped 10+ community members' },
  { id: 'content-creator', name: 'Content Creator', icon: Trophy, color: 'bg-pink-500', description: 'Created 20+ posts' },
]

export default function AchievementBadge({ achievementId, unlocked = false }) {
  const achievement = achievements.find(a => a.id === achievementId)
  if (!achievement) return null

  const Icon = achievement.icon

  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      unlocked 
        ? `${achievement.color} border-transparent text-white` 
        : 'bg-gray-100 border-gray-300 text-gray-400'
    }`}>
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${
          unlocked ? 'bg-white/20' : 'bg-gray-200'
        }`}>
          <Icon className={`w-6 h-6 ${unlocked ? 'text-white' : 'text-gray-400'}`} />
        </div>
        <div className="flex-1">
          <div className={`font-semibold ${unlocked ? 'text-white' : 'text-gray-500'}`}>
            {achievement.name}
          </div>
          <div className={`text-xs ${unlocked ? 'text-white/80' : 'text-gray-400'}`}>
            {achievement.description}
          </div>
        </div>
        {unlocked && (
          <div className="text-2xl">🎉</div>
        )}
      </div>
    </div>
  )
}

