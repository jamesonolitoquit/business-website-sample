export default function Billing() {
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
            <span className="text-gray-900">Billing</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Billing & Payments</h1>
          <p className="text-gray-600 mt-2">Manage your billing information, payment methods, and account balance.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Bill */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Bill</h2>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Monthly Service - Premium Plan</h3>
                    <p className="text-gray-600">Due Date: January 25, 2026</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">$79.99</div>
                    <div className="text-sm text-gray-600">Amount Due</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Internet Service (200 Mbps)</span>
                    <span>$79.99</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Taxes & Fees</span>
                    <span>$6.40</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$86.39</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                    Pay Now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-gray-600">Expires 12/26</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary hover:underline text-sm">Edit</button>
                    <button className="text-red-600 hover:underline text-sm">Remove</button>
                  </div>
                </div>
                <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 py-3 rounded-lg hover:border-primary hover:text-primary transition-colors">
                  + Add Payment Method
                </button>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Billing History</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <div className="font-medium">December 2025</div>
                    <div className="text-sm text-gray-600">Paid on Dec 25, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$79.99</div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <div className="font-medium">November 2025</div>
                    <div className="text-sm text-gray-600">Paid on Nov 25, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$79.99</div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <div className="font-medium">October 2025</div>
                    <div className="text-sm text-gray-600">Paid on Oct 25, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$79.99</div>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Paid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90">
                  Make a Payment
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50">
                  Update Payment Method
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50">
                  Download Invoice
                </button>
              </div>
            </div>

            {/* Billing FAQ */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing FAQ</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">When is my bill due?</h4>
                  <p className="text-sm text-gray-600">Your bill is due on the 25th of each month.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">How do I change my plan?</h4>
                  <p className="text-sm text-gray-600">Contact our support team to modify your service plan.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">What payment methods do you accept?</h4>
                  <p className="text-sm text-gray-600">We accept credit cards, debit cards, and bank transfers.</p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-primary rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-sm mb-4">Our billing specialists are here to assist you.</p>
              <a href="/support/technical-support" className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}