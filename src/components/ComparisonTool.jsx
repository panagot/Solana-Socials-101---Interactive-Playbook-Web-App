import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react'

export default function ComparisonTool({ before, after, title = 'Before & After' }) {
  return (
    <div className="card">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
          <div className="flex items-center space-x-2 mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            <h4 className="font-bold text-red-700">Before</h4>
          </div>
          <div className="space-y-3">
            {before.map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <div className="p-3 bg-gradient-solana rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* After */}
        <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <h4 className="font-bold text-green-700">After</h4>
          </div>
          <div className="space-y-3">
            {after.map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

