import { siteData, navigation } from '@/lib/data'

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome back!</h1>
            <p className="text-xl opacity-90">Here's what's happening with your tasks today</p>
          </div>
        </div>
<div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grid content will be populated from data */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Featured Content</h3>
              <p className="text-gray-600">Dynamic content goes here</p>
            </div>
          </div>
        </div>
<div className="container py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="text-gray-600 mt-2">Overview of all tasks and project statistics</p>
          </div>
        </div>
    </div>
  )
}