'use client';

import React, { useState } from 'react';
import {
  Home,
  Dashboard,
  Search,
  Notifications,
  AccountBalance,
  AccountBalanceWallet,
  Receipt,
  Assessment,
  People,
  Store,
  AccountBalanceWalletOutlined,
  AdminPanelSettings,
  Settings,
  Help,
  ExpandMore,
  ChevronRight,
} from '@mui/icons-material';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['finance', 'client-refund', 'banks']);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

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
          children: []
        },
        { 
          name: 'Client Refund', 
          icon: AccountBalanceWalletOutlined, 
          expandable: true,
          expanded: expandedItems.includes('client-refund'),
          children: []
        },
        { name: 'Analysis', icon: Assessment },
      ]
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
          children: []
        },
      ]
    },
    {
      section: 'OTHERS',
      items: [
        { name: 'Admins', icon: AdminPanelSettings },
        { name: 'Settings', icon: Settings },
        { name: 'Support', icon: Help },
      ]
    }
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar-bg text-sidebar-text">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-gray-600">
          <h1 className="text-xl font-bold text-white">NUPEM</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigationItems.map((section) => (
            <div key={section.section} className="mb-6">
              <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.section}
              </h3>
              <div className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => item.expandable && toggleExpanded(item.name.toLowerCase().replace(' ', '-'))}
                      className={`group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        item.active
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-300 hover:bg-sidebar-hover hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.name}
                      </div>
                      {item.expandable && (
                        <div className="ml-2">
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
        <div className="border-t border-gray-600 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">SA</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Super Admin</p>
              <p className="text-xs text-gray-400">super@admin.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
