export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/support" className="hover:text-primary">Support</a>
            <span>/</span>
            <span className="text-gray-900">Status Page</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">System Status</h1>
          <p className="text-gray-600 mt-2">Real-time status of FastNet Solutions services and infrastructure.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overall Status */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Overall Status</h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-green-700">All Systems Operational</span>
            </div>
          </div>
          <p className="text-gray-600">All FastNet Solutions services are operating normally. Last updated: January 19, 2026 at 2:30 PM EST</p>
        </div>

        {/* Service Status Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Internet Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Internet Services</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Operational</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">Core internet connectivity and network infrastructure</p>
            <div className="text-xs text-gray-500">Uptime: 99.98% (30 days)</div>
          </div>

          {/* Customer Portal */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Customer Portal</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Operational</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">Online account management and billing portal</p>
            <div className="text-xs text-gray-500">Uptime: 99.95% (30 days)</div>
          </div>

          {/* Support Systems */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Support Systems</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Operational</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">Help center, live chat, and ticketing system</p>
            <div className="text-xs text-gray-500">Uptime: 99.92% (30 days)</div>
          </div>

          {/* Mobile App */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Mobile App</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-yellow-700">Degraded</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">FastNet mobile application for iOS and Android</p>
            <div className="text-xs text-gray-500">Uptime: 98.45% (30 days)</div>
          </div>

          {/* API Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">API Services</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Operational</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">REST API endpoints for third-party integrations</p>
            <div className="text-xs text-gray-500">Uptime: 99.97% (30 days)</div>
          </div>

          {/* Email Services */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Email Services</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Operational</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">Transactional and marketing email delivery</p>
            <div className="text-xs text-gray-500">Uptime: 99.99% (30 days)</div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Mobile App Performance Issues</h3>
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Resolved</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Users reported slower load times in the mobile application.</p>
              <div className="text-xs text-gray-500">
                <div>Started: Jan 15, 2026 10:30 AM EST</div>
                <div>Resolved: Jan 15, 2026 2:45 PM EST</div>
                <div>Duration: 4 hours 15 minutes</div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Scheduled Maintenance</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Routine maintenance on our network infrastructure to improve performance.</p>
              <div className="text-xs text-gray-500">
                <div>Started: Jan 10, 2026 2:00 AM EST</div>
                <div>Completed: Jan 10, 2026 4:30 AM EST</div>
                <div>Duration: 2 hours 30 minutes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Scheduled Maintenance</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">Network Infrastructure Upgrade</h3>
                <p className="text-blue-800 text-sm mt-1">We will be performing routine maintenance on our network infrastructure to improve service reliability and speed.</p>
                <div className="text-xs text-blue-700 mt-2">
                  <div>Scheduled: February 5, 2026 1:00 AM - 3:00 AM EST</div>
                  <div>Expected Impact: Brief service interruptions (less than 5 minutes)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Updates */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Updates</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm text-gray-600">January 19, 2026 at 2:30 PM EST</div>
                <p className="text-gray-900">All systems are operating normally. No active incidents.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm text-gray-600">January 15, 2026 at 2:45 PM EST</div>
                <p className="text-gray-900">Mobile app performance issues have been resolved. Service has returned to normal.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm text-gray-600">January 10, 2026 at 4:30 AM EST</div>
                <p className="text-gray-900">Scheduled maintenance has been completed successfully. All services are operational.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-8 bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-6">Subscribe to receive notifications about service status updates and maintenance schedules.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  )
}