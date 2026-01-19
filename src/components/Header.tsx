'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import AuthButtons to avoid SSR issues with Firebase
const AuthButtons = dynamic(() => import('./AuthButtons'), {
  ssr: false,
  loading: () => <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (sectionId: string, e?: React.MouseEvent) => {
    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      e?.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // If we're not on the home page, the Link component will handle navigation to /#sectionId
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">FN</span>
          </div>
          <span className="text-xl font-bold text-primary">FastNet Solutions</span>
        </div>

        {/* Desktop Navigation */}
        <div className="flex justify-center flex-1">
          <div className="nav-menu-container">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => handleNavClick('services', e)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => handleNavClick('about', e)}>
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsSupportDropdownOpen(!isSupportDropdownOpen)}
                  className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>Support</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isSupportDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      <Link
                        href="/support/help-center"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsSupportDropdownOpen(false)}
                      >
                        Help Center
                      </Link>
                      <Link
                        href="/support/billing"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsSupportDropdownOpen(false)}
                      >
                        Billing
                      </Link>
                      <Link
                        href="/support/technical-support"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsSupportDropdownOpen(false)}
                      >
                        Technical Support
                      </Link>
                      <Link
                        href="/support/status"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setIsSupportDropdownOpen(false)}
                      >
                        Status Page
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => handleNavClick('contact', e)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="auth-container ml-auto">
          <div className="hidden md:block">
            <AuthButtons />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.3s ease-in-out' }}
      >
        <div className="px-4 py-2 space-y-2">
          <Link href="/" className="block text-primary font-semibold py-2">
            Home
          </Link>
          <Link href="#services" className="block text-gray-600 hover:text-primary py-2" onClick={(e) => handleNavClick('services', e)}>
            Services
          </Link>
          <Link href="#about" className="block text-gray-600 hover:text-primary py-2" onClick={(e) => handleNavClick('about', e)}>
            About
          </Link>
          <div className="py-2">
            <div className="text-gray-600 font-medium mb-2">Support</div>
            <div className="pl-4 space-y-1">
              <Link href="/support/help-center" className="block text-gray-500 hover:text-primary py-1">
                Help Center
              </Link>
              <Link href="/support/billing" className="block text-gray-500 hover:text-primary py-1">
                Billing
              </Link>
              <Link href="/support/technical-support" className="block text-gray-500 hover:text-primary py-1">
                Technical Support
              </Link>
              <Link href="/support/status" className="block text-gray-500 hover:text-primary py-1">
                Status Page
              </Link>
            </div>
          </div>
          <Link href="#contact" className="block text-gray-600 hover:text-primary py-2" onClick={(e) => handleNavClick('contact', e)}>
            Contact
          </Link>
          <div className="border-t pt-2 mt-2">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  )
}