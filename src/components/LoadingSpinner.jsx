export default function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-solana-purple rounded-full animate-spin`}></div>
  )
}

