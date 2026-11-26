import React from "react";
import { AlertTriangle } from "lucide-react";

export default function SafetyBanner() {
  return (
    <div className="bg-navy-900 text-slate-100 text-xs sm:text-sm py-2 px-4 border-b border-brand-700/40">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 text-brand-400 shrink-0" />
        <span>
          <strong>Safety Notice:</strong> HerShield AI is an informational & empowerment preview. It does{" "}
          <strong>not</strong> place real emergency calls. In an immediate emergency, contact local emergency services (e.g., 112 / 911 / 999).
        </span>
      </div>
    </div>
  );
}
