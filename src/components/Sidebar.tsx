'use client'

import React, { useState } from 'react'
import {
  Dashboard,
  AccountBalance,
  AccountBalanceWallet,
  Receipt,
  Assessment,
  People,
  Store,
  AdminPanelSettings,
  Settings,
  Help,
  ExpandMore,
  ChevronRight,
  MenuOpen,
} from '@mui/icons-material'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    )
  }

  const navigationItems = [
    {
      section: 'MAIN',
      items: [
        { name: 'Dashboard', icon: Dashboard, active: true },
        { name: 'Ad Account', icon: AccountBalance },
        { name: 'Top Ups', icon: AccountBalanceWallet },
        {
          name: 'Finance',
          icon: Receipt,
          expandable: true,
          expanded: expandedItems.includes('finance'),
        },
        {
          name: 'Client Refund',
          icon: AccountBalanceWallet,
          expandable: true,
          expanded: expandedItems.includes('client-refund'),
        },
        { name: 'Analysis', icon: Assessment },
      ],
    },
    {
      section: 'MANAGE',
      items: [
        { name: 'Clients', icon: People },
        { name: 'Vendors', icon: Store },
        {
          name: 'Banks',
          icon: AccountBalance,
          expandable: true,
          expanded: expandedItems.includes('banks'),
        },
      ],
    },
    {
      section: 'OTHERS',
      items: [
        { name: 'Admins', icon: AdminPanelSettings },
        { name: 'Settings', icon: Settings },
        { name: 'Support', icon: Help },
      ],
    },
  ]

  return (
    <div
      className={` fixed inset-y-0 left-0 z-50 text-gray-800 bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-900">NUPEM</h1>
          )}
          {/*<button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MenuOpen className="w-5 h-5 text-gray-500" />
          </button> */}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-4 overflow-y-auto no-scrollbar">
          {navigationItems.map((section) => (
            <div key={section.section} className="mb-6">
              {!isCollapsed && (
                <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  {section.section}
                </h3>
              )}
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        item.expandable &&
                        toggleExpanded(
                          item.name.toLowerCase().replace(' ', '-'),
                        )
                      }
                      className={`group cursor-pointer flex w-full items-center ${isCollapsed ? 'justify-center' : 'justify-between'} rounded-md px-3 py-2 text-sm font-medium transition-colors relative ${
                        item.active
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <div className="flex items-center">
                        <item.icon
                          className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'}`}
                        />
                        {!isCollapsed && item.name}
                      </div>
                      {!isCollapsed && item.expandable && (
                        <div className="ml-2 text-gray-500">
                          {item.expanded ? (
                            <ExpandMore className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        {/*<div className="border-t border-gray-700 p-4">
          <div
            className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}
          >
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">SA</span>
              </div>
            </div>
            {!isCollapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Super Admin</p>
                <p className="text-xs text-gray-400">super@admin.com</p>
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar
