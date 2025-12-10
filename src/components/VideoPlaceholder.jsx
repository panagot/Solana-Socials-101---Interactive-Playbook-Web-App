import { Play, Video } from 'lucide-react'

export default function VideoPlaceholder({ title, description, duration = '5:00' }) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
      <div className="aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-solana opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
          <Video className="w-8 h-8 text-white/80 mx-auto mb-2" />
          <p className="text-white/90 font-semibold mb-1">{title}</p>
          <p className="text-white/70 text-sm">{description}</p>
          <div className="mt-3 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
            {duration}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <p className="text-white text-xs">📹 Video tutorial coming soon</p>
      </div>
    </div>
  )
}

