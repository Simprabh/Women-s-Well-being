import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Bot,
  Users,
  BookOpen,
  HeartPulse,
  ArrowRight,
  Lock,
} from "lucide-react";

const PILLARS = [
  {
    title: "AI Safety Assistant",
    desc: "Ask questions about personal safety planning, digital privacy, and support options anytime.",
    icon: Bot,
    to: "/assistant",
  },
  {
    title: "Trusted Contacts Network",
    desc: "Organize emergency contacts and test simulated safety check-in cards in one secure place.",
    icon: Users,
    to: "/contacts",
  },
  {
    title: "Education & Awareness",
    desc: "Bite-sized modules on situational awareness, online hygiene, and bystander support.",
    icon: BookOpen,
    to: "/education",
  },
  {
    title: "Women's Health Hub",
    desc: "Clear, supportive wellness checklists, cycle literacy, and preventive care guides.",
    icon: HeartPulse,
    to: "/health",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-100 text-xs font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-200" />
              Women's Safety, Knowledge & Support Platform
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Empowering Women with{" "}
              <span className="text-brand-200">Proactive Safety</span> & Trusted Knowledge.
            </h1>

            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              HerShield AI brings together AI-guided safety planning, trusted contact management,
              awareness education, and women's health resources in one calm, private workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold shadow-lg transition"
              >
                Create Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/assistant"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition"
              >
                Try AI Safety Assistant
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-slate-300">
              <Lock className="w-4 h-4 text-brand-200" />
              <span>
                Phase 1 Frontend Preview: Runs locally in your browser before backend & database integration.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-navy-900">
            Designed for Clarity, Privacy & Confidence
          </h2>
          <p className="mt-3 text-slate-600">
            Simple navigation connecting safety planning, educational tools, and supportive resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ title, desc, icon: Icon, to }) => (
            <Link
              key={title}
              to={to}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-500 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
