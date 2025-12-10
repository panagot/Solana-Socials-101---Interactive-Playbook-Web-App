export default function ProgressBar({ value, max, color = '#9945FF', label, showValue = true }) {
  const percentage = Math.min((value / max) * 100, 100)
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          {showValue && (
            <span className="text-sm font-semibold text-gray-900">{value}/{max}</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color
          }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

