import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  HeartPulse,
  LifeBuoy,
  Bot,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const SIDEBAR_ITEMS = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/contacts", label: "Emergency Contacts", icon: Users },
  { to: "/assistant", label: "AI Safety Assistant", icon: Bot },
  { to: "/resources", label: "Safety Resources", icon: LifeBuoy },
  { to: "/education", label: "Education & Awareness", icon: BookOpen },
  { to: "/health", label: "Women's Health", icon: HeartPulse },
];

export default function DashboardLayout({ title, subtitle, children }) {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="bg-navy-900 text-white rounded-2xl p-5 shadow-sm sticky top-24">
            <div className="pb-4 mb-4 border-b border-navy-700">
              <p className="text-xs uppercase tracking-wider text-brand-200 font-semibold">
                Member Workspace
              </p>
              <p className="text-lg font-bold mt-1 truncate">
                {user?.name || "Member"}
              </p>
              <p className="text-xs text-slate-400 truncate">{user?.email}</p>
            </div>

            <nav className="space-y-1">
              {SIDEBAR_ITEMS.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-brand-700 text-white shadow-sm"
                        : "text-slate-300 hover:bg-navy-800 hover:text-white"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Panel */}
        <section className="lg:col-span-9 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-navy-900">{title}</h1>
            {subtitle && (
              <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
            )}
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}
