import { siteData, navigation } from '@/lib/data'

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-12">
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit</button>
          </form>
        </div>
    </div>
  )
}