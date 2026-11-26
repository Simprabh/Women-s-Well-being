import React from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">HerShield AI</p>
              <p className="text-xs text-slate-400">
                Women's Safety, Education & Empowerment Platform
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <Link to="/resources" className="hover:text-white transition">
              Safety Resources
            </Link>
            <Link to="/education" className="hover:text-white transition">
              Education
            </Link>
            <Link to="/health" className="hover:text-white transition">
              Women's Health
            </Link>
            <Link to="/assistant" className="hover:text-white transition">
              AI Assistant
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-navy-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-2">
          <p>Phase 1 Frontend Preview — Mock local data only (no database connected yet).</p>
          <p>Informational use only. Not a substitute for emergency services or medical care.</p>
        </div>
      </div>
    </footer>
  );
}
