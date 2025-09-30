'use client'

import React from 'react'
import {
  Search,
  Notifications,
  KeyboardArrowDown,
  BarChart,
} from '@mui/icons-material'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Page Title */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <BarChart className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">
              A clear look at the key details and structure
            </p>
          </div>
        </div>

        {/* Right Section - Icons and User Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {/* Notification Icon */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Notifications className="w-5 h-5" />
            <div className="absolute top-[8px] right-[8px] w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* User Profile Dropdown */}
          <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">SA</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              Super Admin
            </span>
            <KeyboardArrowDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
