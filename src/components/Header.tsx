'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useAuth } from '@/contexts/AuthContext'

// Dynamically import AuthButtons to avoid SSR issues with Firebase
const AuthButtons = dynamic(() => import('./AuthButtons'), {
  ssr: false,
  loading: () => <div className="w-20 h-8 bg-gray-200 animate-pulse rounded"></div>
})

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false)
  const [isMobileSupportDropdownOpen, setIsMobileSupportDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isLoggedIn, toggleLogin } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (sectionId: string, e?: React.MouseEvent) => {
    e?.preventDefault()
    router.push(`/#${sectionId}`)
    setIsMenuOpen(false) // Close mobile menu after navigation
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
        className={`md:hidden overflow-hidden bg-white border-t ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.3s ease-in-out' }}
      >
        <div className="px-4 py-4">
          {/* Main Navigation Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Home */}
            <Link
              href="/"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              title="Home"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Home</span>
            </Link>

            {/* Services */}
            <Link
              href="#services"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={(e) => handleNavClick('services', e)}
              title="Services"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Services</span>
            </Link>

            {/* About */}
            <Link
              href="#about"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={(e) => handleNavClick('about', e)}
              title="About"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">About</span>
            </Link>

            {/* Support */}
            <button
              onClick={() => setIsMobileSupportDropdownOpen(!isMobileSupportDropdownOpen)}
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors w-full"
              title="Support"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Support</span>
            </button>

            {/* Contact */}
            <Link
              href="#contact"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={(e) => handleNavClick('contact', e)}
              title="Contact"
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Contact</span>
            </Link>

            {/* Placeholder for 3-column grid */}
            <div></div>
          </div>

          {/* Support Dropdown */}
          {isMobileSupportDropdownOpen && (
            <div className="mb-6 p-3 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <Link href="/support/help-center" className="block text-gray-600 hover:text-primary py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Help Center
                </Link>
                <Link href="/support/billing" className="block text-gray-600 hover:text-primary py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Billing
                </Link>
                <Link href="/support/technical-support" className="block text-gray-600 hover:text-primary py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Technical Support
                </Link>
                <Link href="/support/status" className="block text-gray-600 hover:text-primary py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Status Page
                </Link>
              </div>
            </div>
          )}

          {/* Auth Section */}
          <div className="border-t pt-4">
            {isLoggedIn ? (
              <div className="grid grid-cols-3 gap-4">
                {/* Profile */}
                <Link
                  href="/profile"
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  title="Profile"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">Profile</span>
                </Link>

                {/* Settings */}
                <Link
                  href="/settings"
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  title="Settings"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">Settings</span>
                </Link>

                {/* Logout */}
                <button
                  onClick={() => {
                    toggleLogin()
                    setIsMenuOpen(false)
                  }}
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  title="Logout"
                >
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-xs text-red-600 font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {/* Sign up */}
                <button
                  onClick={() => {/* TODO: Open sign up modal */ setIsMenuOpen(false)}}
                  className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  title="Sign up"
                >
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">Sign up</span>
                </button>

                {/* Log in */}
                <button
                  onClick={() => {/* TODO: Open log in modal */ setIsMenuOpen(false)}}
                  className="flex flex-col items-center space-y-1 p-3 rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors"
                  title="Log in"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="text-xs text-white font-medium">Log in</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}