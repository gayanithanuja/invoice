'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Briefcase, Globe, 
  BarChart3, Package, User, Settings, LogOut, 
  Search, Bell, ChevronDown 
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('DashBoard');

  const menuItems = [
    { name: 'DashBoard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'INVOICE', icon: <FileText size={18} />, hasSub: true },
    { name: 'Proposal', icon: <Briefcase size={18} />, hasSub: true },
    { name: 'Web Site', icon: <Globe size={18} /> },
    { name: 'Report', icon: <BarChart3 size={18} /> },
    { name: 'Items', icon: <Package size={18} /> },
    { name: 'User profile', icon: <User size={18} /> },
  ];

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#0a0b2e] text-white flex flex-col shadow-xl">
        {/* Logo Section */}
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#5c67f2] p-1.5 rounded-md">
            <FileText size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-wider">INVOICE SYSTEM</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 mt-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.name 
                    ? 'bg-[#5c67f2] text-white shadow-lg' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span className="text-[14px] font-medium">{item.name}</span>
                  </div>
                  {item.hasSub && <ChevronDown size={14} className="opacity-50" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/5 space-y-1">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
            <span className="text-[14px]">Settings</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors">
            <LogOut size={18} />
            <span className="text-[14px]">Logout</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col bg-white overflow-y-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between px-10 py-6">
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
            Dashboard
          </h1>

          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-72 pl-5 pr-12 py-2.5 bg-white border border-gray-100 rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#5c67f2]/20 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#5c67f2] transition-colors">
                <Search size={18} />
              </div>
            </div>

            {/* Profile & Notifications */}
            <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-[0px_4px_15px_rgba(0,0,0,0.05)] border border-gray-50">
              <button className="p-1.5 hover:bg-gray-50 rounded-full transition-colors">
                <User size={22} className="text-gray-600" />
              </button>
              <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
              <button className="p-1.5 hover:bg-gray-50 rounded-full transition-colors relative">
                <Bell size={22} className="text-gray-600" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <section className="px-10 py-4">
          <div className="border-2 border-dashed border-gray-100 rounded-3xl h-[70vh] flex items-center justify-center text-gray-300">
            Content for {activeTab} goes here...
          </div>
        </section>

      </main>
    </div>
  );
}