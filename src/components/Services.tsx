'use client'

import { ServicePlan } from '@/types'

const servicePlans: ServicePlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 29.99,
    speed: '50 Mbps',
    features: [
      'Download: 50 Mbps',
      'Upload: 10 Mbps',
      'No data caps',
      '24/7 customer support',
      'Free modem rental'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    price: 49.99,
    speed: '100 Mbps',
    features: [
      'Download: 100 Mbps',
      'Upload: 20 Mbps',
      'No data caps',
      'Priority customer support',
      'Free modem rental',
      'Wi-Fi router included'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: 79.99,
    speed: '200 Mbps',
    features: [
      'Download: 200 Mbps',
      'Upload: 50 Mbps',
      'No data caps',
      'VIP customer support',
      'Free modem rental',
      'Premium Wi-Fi router',
      'Free installation'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the internet plan that fits your needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicePlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'border-2 border-primary' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  ${plan.price}
                  <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{plan.speed}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}