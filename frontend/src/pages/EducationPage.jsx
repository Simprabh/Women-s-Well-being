import React from "react";
import { useState } from "react";
import { BookOpen, CheckCircle2, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { EDUCATION_MODULES } from "../data/mockData";

export default function EducationPage() {
  const [completedIds, setCompletedIds] = useState([]);
  const [expandedId, setExpandedId] = useState(EDUCATION_MODULES[0].id);

  const toggleComplete = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const progress = Math.round((completedIds.length / EDUCATION_MODULES.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-gradient-to-r from-navy-900 to-brand-800 text-white rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <div className="flex items-center gap-2 text-brand-200 text-sm font-semibold mb-2">
            <BookOpen className="w-4 h-4" />
            Empowerment Learning Hub
          </div>
          <h1 className="text-3xl font-bold">Education & Awareness</h1>
          <p className="text-slate-200 mt-2 max-w-2xl text-sm sm:text-base">
            Practical, self-paced modules covering situational awareness, digital safety, and legal literacy.
          </p>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-4 min-w-[200px]">
          <p className="text-xs text-brand-100 font-medium">Local Session Progress</p>
          <p className="text-2xl font-bold mt-1">{progress}% Complete</p>
          <div className="w-full h-2 bg-white/20 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-brand-200 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {EDUCATION_MODULES.map((mod) => {
          const isExpanded = expandedId === mod.id;
          const isDone = completedIds.includes(mod.id);

          return (
            <div
              key={mod.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700">
                      {mod.level}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {mod.duration}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy-900">{mod.title}</h2>
                  <p className="text-sm text-slate-600 mt-1">{mod.description}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleComplete(mod.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition ${
                      isDone
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-navy-800 hover:bg-slate-200"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isDone ? "Completed" : "Mark Complete"}
                  </button>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : mod.id)}
                    className="p-2 rounded-xl border border-slate-200 text-navy-800 hover:bg-slate-50"
                    aria-label="Toggle module details"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-700 mb-2">
                    Key Takeaways
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
                    {mod.keyTakeaways.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
