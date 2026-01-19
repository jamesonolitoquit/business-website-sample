'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'

function AuthButtons() {
  const { isLoggedIn, toggleLogin } = useAuth()
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (isLoggedIn) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">JD</span>
          </div>
          <span className="text-gray-700 font-medium">John Doe</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isProfileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <div className="py-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                Settings
              </Link>
              <div className="border-t border-gray-100"></div>
              <button
                onClick={() => {
                  toggleLogin()
                  setIsProfileDropdownOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => {/* TODO: Open sign up modal */}}
        className="text-gray-600 hover:text-primary px-4 py-2 rounded-lg transition-colors"
      >
        Sign up
      </button>
      <button
        onClick={() => {/* TODO: Open log in modal */}}
        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors hover:scale-105 transform"
      >
        Log in
      </button>
    </div>
  )
}

export default AuthButtons