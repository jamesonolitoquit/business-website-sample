export default function TechnicalSupport() {
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
            <span className="text-gray-900">Technical Support</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Technical Support</h1>
          <p className="text-gray-600 mt-2">Get help with technical issues, troubleshooting, and service optimization.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Options */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Technical Support Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Support</h3>
                      <p className="text-sm text-gray-600">24/7 available</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">Speak directly with our technical experts for immediate assistance.</p>
                  <div className="text-lg font-semibold text-primary">1-800-FASTNET</div>
                  <div className="text-sm text-gray-600">Mon-Fri: 8AM-8PM EST</div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Live Chat</h3>
                      <p className="text-sm text-gray-600">Average wait: 2 minutes</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">Chat with our support team in real-time for quick solutions.</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-sm">
                    Start Chat
                  </button>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Support</h3>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">Send us detailed information about your issue for comprehensive support.</p>
                  <div className="text-sm font-medium text-primary">support@fastnetsolutions.com</div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Submit Ticket</h3>
                      <p className="text-sm text-gray-600">Track your issues</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">Create a support ticket for complex issues that need detailed tracking.</p>
                  <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">
                    Submit Ticket
                  </button>
                </div>
              </div>
            </div>

            {/* Troubleshooting Tools */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Troubleshooting Tools</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Speed Test</h3>
                  <p className="text-gray-600 text-sm mb-3">Test your internet connection speed and quality.</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-sm">
                    Run Speed Test
                  </button>
                </div>

                <div className="border rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Connection Diagnostics</h3>
                  <p className="text-gray-600 text-sm mb-3">Run automated diagnostics on your connection.</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-sm">
                    Start Diagnostics
                  </button>
                </div>
              </div>
            </div>

            {/* Common Issues */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Solutions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Slow Internet Speed</h3>
                  <p className="text-gray-600 text-sm mt-1">Try restarting your modem, check for background downloads, or run a speed test to identify the issue.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Wi-Fi Connection Problems</h3>
                  <p className="text-gray-600 text-sm mt-1">Move closer to your router, change Wi-Fi channels, or update your router firmware.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Intermittent Connection</h3>
                  <p className="text-gray-600 text-sm mt-1">Check cable connections, test with a wired connection, or contact support for signal issues.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-900">Device Not Connecting</h3>
                  <p className="text-gray-600 text-sm mt-1">Forget and reconnect to Wi-Fi, check device compatibility, or reset network settings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Emergency Support</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">All Systems Operational</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Our network is running smoothly with no reported issues.</p>
              <a href="/support/status" className="text-primary hover:underline text-sm">
                View Status Page →
              </a>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/support/help-center" className="block text-primary hover:underline text-sm">
                  Help Center
                </a>
                <a href="/support/billing" className="block text-primary hover:underline text-sm">
                  Billing Support
                </a>
                <a href="#contact" className="block text-primary hover:underline text-sm">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}