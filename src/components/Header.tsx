import React from 'react';
import { useApp } from '../context/AppContext.js';
import { Bell } from 'lucide-react';

export function Header() {
  const {
    activeTab,
    unreadAlertsCount,
    setActiveTab,
  } = useApp();

  return (
    <header className="sticky top-0 z-30 bg-[#941329]/80 backdrop-blur-xl border-b border-white/10 text-white transition-colors">
      <div className="max-w-[420px] mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl glass-card flex items-center justify-center shadow-md transition-transform group-hover:scale-105 p-1">
            <img
              src="https://res.cloudinary.com/dwd83begj/image/upload/v1792686945/logo_icon-removebg-preview_e6k6ne.png"
              alt="Driver Ping Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base tracking-tight font-display text-white uppercase leading-none">
              Driver Ping
            </span>
            <span className="text-[9px] text-white/60 tracking-wider font-semibold uppercase">
              South Africa · RSA
            </span>
          </div>
        </button>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Alerts Bell (Alerts on Header only) */}
          <button
            onClick={() => setActiveTab('alerts')}
            className={`relative p-2 rounded-full transition-all focus:outline-none border cursor-pointer ${
              activeTab === 'alerts'
                ? 'glass-card text-[#941329] border-white shadow-md'
                : 'bg-white/15 hover:bg-white/25 text-white border-white/15'
            }`}
            title="Alerts - Notifications and reports"
            aria-label="View alerts"
          >
            <Bell className="w-4 h-4" />
            {unreadAlertsCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 bg-white text-[#941329] rounded-full text-[9px] font-black flex items-center justify-center shadow-md border border-[#941329] animate-pulse">
                {unreadAlertsCount > 9 ? '9+' : unreadAlertsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
