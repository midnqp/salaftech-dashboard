'use client';

import React from 'react';
import {
  Home,
  Dashboard,
  Search,
  Notifications,
  AccountCircle,
} from '@mui/icons-material';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-header-bg text-header-text border-b border-gray-600">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Navigation Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Home className="h-6 w-6" />
          </button>
          <button className="text-primary-400 hover:text-primary-300 transition-colors">
            <Dashboard className="h-6 w-6" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search className="h-6 w-6" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Notifications className="h-6 w-6" />
          </button>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <AccountCircle className="h-8 w-8 text-gray-300" />
            <span className="text-sm font-medium text-white">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
