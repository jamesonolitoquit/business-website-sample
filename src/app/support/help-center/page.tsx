export default function HelpCenter() {
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
            <span className="text-gray-900">Help Center</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Help Center</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions and get the help you need.</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-primary text-white px-4 py-1 rounded-md hover:bg-primary/90">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Getting Started */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Getting Started</h3>
            <p className="text-gray-600 mb-4">Learn how to set up your internet service and get online quickly.</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">How to activate your service</a></li>
              <li><a href="#" className="text-primary hover:underline">Setting up your modem</a></li>
              <li><a href="#" className="text-primary hover:underline">Wi-Fi network setup</a></li>
              <li><a href="#" className="text-primary hover:underline">Troubleshooting connection issues</a></li>
            </ul>
          </div>

          {/* Account Management */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Management</h3>
            <p className="text-gray-600 mb-4">Manage your account settings, billing, and service preferences.</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">Updating account information</a></li>
              <li><a href="#" className="text-primary hover:underline">Changing your plan</a></li>
              <li><a href="#" className="text-primary hover:underline">Payment methods</a></li>
              <li><a href="#" className="text-primary hover:underline">Account security</a></li>
            </ul>
          </div>

          {/* Technical Support */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
            <p className="text-gray-600 mb-4">Get help with technical issues and optimize your internet experience.</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary hover:underline">Speed test guide</a></li>
              <li><a href="#" className="text-primary hover:underline">Device compatibility</a></li>
              <li><a href="#" className="text-primary hover:underline">Network optimization</a></li>
              <li><a href="#" className="text-primary hover:underline">Advanced troubleshooting</a></li>
            </ul>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is my internet slow?</h3>
              <p className="text-gray-600 mb-4">Learn about common causes of slow internet and how to improve your connection speed.</p>
              <a href="#" className="text-primary hover:underline text-sm">Read more →</a>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to secure your Wi-Fi network</h3>
              <p className="text-gray-600 mb-4">Protect your home network with these essential security tips and best practices.</p>
              <a href="#" className="text-primary hover:underline text-sm">Read more →</a>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Understanding your bill</h3>
              <p className="text-gray-600 mb-4">Break down of your monthly bill and what each charge represents.</p>
              <a href="#" className="text-primary hover:underline text-sm">Read more →</a>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moving to a new address</h3>
              <p className="text-gray-600 mb-4">Step-by-step guide for transferring your service to a new location.</p>
              <a href="#" className="text-primary hover:underline text-sm">Read more →</a>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="mb-6">Our support team is here to assist you with any questions or issues.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/support/technical-support" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Technical Support
            </a>
            <a href="#contact" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition-colors">
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}