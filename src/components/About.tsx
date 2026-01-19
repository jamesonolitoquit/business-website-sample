export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose FastNet Solutions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 10 years of experience in providing high-speed internet services,
              FastNet Solutions has been the trusted choice for thousands of customers
              across the region.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Lightning Fast Speeds</h3>
                  <p className="text-gray-600">Experience download speeds up to 200 Mbps for seamless streaming and gaming.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 011.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">99.9% Uptime Guarantee</h3>
                  <p className="text-gray-600">Reliable connectivity you can count on, backed by our uptime guarantee.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 011.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Customer Support</h3>
                  <p className="text-gray-600">Our expert support team is always ready to help with any questions or issues.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
                  <p className="text-gray-600 text-sm">Transparent pricing with no surprise charges.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A6.366 6.366 0 0018 8.732a6.36 6.36 0 001.356.692 1 1 0 001.02-.242 1 1 0 00-.242-1.02c-.743-.528-1.31-1.286-1.59-2.063a4.36 4.36 0 00-.25-1.082c.26-.355.981-.898 1.5-1.245.272-.165.578-.234.868-.196a1 1 0 00.777-1.84c-.466-.316-1.102-.524-1.637-.666a3.36 3.36 0 00-1.368-.228 3.36 3.36 0 01-1.368.228c-.535.142-1.171.35-1.637.666a1 1 0 00.777 1.84c.29.037.596.108.868.196.519.347 1.24.89 1.5 1.245a4.36 4.36 0 01-.25 1.082c-.28.777-.847 1.535-1.59 2.063a1 1 0 00-.242 1.02 1 1 0 001.02.242 6.36 6.36 0 001.356-.692 6.366 6.366 0 00-4.212-10.496z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Free Installation</h4>
                  <p className="text-gray-600 text-sm">Professional setup included with premium plans.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Award-Winning Support</h4>
                  <p className="text-gray-600 text-sm">Recognized for exceptional customer service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}