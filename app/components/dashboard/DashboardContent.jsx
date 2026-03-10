'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard, FileText, Briefcase, Globe,
  BarChart3, Package, User, Settings, LogOut,
  Search, Bell, ChevronDown, DollarSign,
} from 'lucide-react';

// ─── Dashboard Content ───────────────────────────────────────────────────────
export default function DashboardContent() {
  return (
    <div className="bg-gray-50 p-8 font-sans">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Welcome Back</h1>
        <p className="text-gray-600 mt-2">
          Whereas disregard and contempt for human rights have resulted
        </p>
      </header>1

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Invoice Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-6 h-6 bg-black text-white rounded-full p-1" />
            <h2 className="font-bold text-lg">Invoice</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">Create and manage invoices professionally</p>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Create Invoice
          </button>
        </div>

        {/* Estimate Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">$</div>
            <h2 className="font-bold text-lg">Estimate</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">General cost estimate</p>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Create Estimate
          </button>
        </div>

        {/* Credit Note Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-bold text-lg">Credit note</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">Manage refund</p>
          <button className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Create note
          </button>
        </div>

        {/* Delivery Note Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">$</div>
            <h2 className="font-bold text-lg">Delivery Note</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">Track deliveries</p>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Create Delivery
          </button>
        </div>
      </div>

      {/* Reports Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-6">Report</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Graph Placeholder */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
            <h3 className="text-gray-700 font-semibold mb-4">Revenues Summary</h3>
            <div className="w-full h-48 flex items-end gap-2 border-l border-b border-gray-200 p-2">
              <div className="w-full h-32 bg-gray-50 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                  [Revenue Chart Line Illustration]
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-400 px-4">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
              <span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </div>

          {/* Donut Chart Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="relative w-32 h-32">
              <div className="w-32 h-32 rounded-full border-[12px] border-blue-600 border-t-blue-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-gray-800">Chart</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Monthly salary</li>
                <li>• Revenue</li>
                <li>• Pending</li>
                <li>• Total customer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

