import React from "react";
import { HeartPulse, ShieldAlert } from "lucide-react";
import { WOMENS_HEALTH_TOPICS } from "../data/mockData";

export default function WomensHealthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-navy-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-2 text-brand-200 text-sm font-semibold mb-2">
          <HeartPulse className="w-4 h-4" />
          Wellness & Care Literacy
        </div>
        <h1 className="text-3xl font-bold">Women's Health Information</h1>
        <p className="text-slate-300 mt-2 max-w-2xl text-sm sm:text-base">
          Accessible wellness guides designed to help you prepare informed questions for healthcare visits.
        </p>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4 flex items-start gap-3 text-sm text-navy-800">
        <ShieldAlert className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
        <p>
          <strong>Medical Disclaimer:</strong> This information is for general education only and does not constitute medical diagnosis or treatment. Always consult a qualified healthcare professional for personal medical advice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {WOMENS_HEALTH_TOPICS.map((topic) => (
          <div
            key={topic.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 mb-3">
              {topic.category}
            </span>
            <h2 className="text-xl font-bold text-navy-900">{topic.title}</h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {topic.summary}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-700 mb-2">
                Helpful Highlights
              </p>
              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                {topic.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
