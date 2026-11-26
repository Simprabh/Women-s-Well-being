import React from "react";
import { useState } from "react";
import { Search, LifeBuoy, Tag } from "lucide-react";
import { SAFETY_RESOURCES } from "../data/mockData";

export default function SafetyResourcesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(SAFETY_RESOURCES.map((r) => r.category))];

  const filtered = SAFETY_RESOURCES.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.summary.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-navy-900 text-white rounded-2xl p-8">
        <div className="flex items-center gap-2 text-brand-200 text-sm font-semibold mb-2">
          <LifeBuoy className="w-4 h-4" />
          Support & Planning Directory
        </div>
        <h1 className="text-3xl font-bold">Safety Resources</h1>
        <p className="text-slate-300 mt-2 max-w-2xl text-sm sm:text-base">
          Explore personal safety guides, digital privacy checklists, and support pathways.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search safety resources..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "bg-brand-700 text-white"
                  : "bg-white border border-slate-200 text-navy-800 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700">
                  {res.category}
                </span>
                <span className="text-xs text-slate-500">{res.availability}</span>
              </div>
              <h2 className="text-lg font-bold text-navy-900">{res.title}</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {res.summary}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              {res.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-navy-700 bg-slate-100 px-2.5 py-1 rounded-lg"
                >
                  <Tag className="w-3 h-3 text-brand-600" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
