'use client'
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="p-6">
          {/* Breadcrumb */}
          <Breadcrumb />
          
          {/* Page Content */}
          <div className="mt-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
