import React from "react";
import SOSButton from "../components/SOSButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Users,
  Bot,
  BookOpen,
  HeartPulse,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../context/AuthContext";
import { contactsService } from "../services/contactsService";

export default function DashboardPage() {
  const { user, updateSafetyStatus } = useAuth();
  const [simNotice, setSimNotice] = useState("");
  const contacts = contactsService.getAll();

  const handleSimulatedCheckIn = (status) => {
    updateSafetyStatus(status);
    setSimNotice(
      `Simulation logged locally: Status set to "${status}". No real calls or messages were sent.`
    );
  };

  return (
    <DashboardLayout
      title={`Welcome back, ${user?.name || "Member"}`}
      subtitle="Your personal safety overview, trusted contacts, and empowerment tools."
    >
      <SOSButton />
      {/* Simulated Check-In Status Card */}
      <div className="bg-gradient-to-r from-navy-900 to-brand-800 text-white rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              Current Status: {user?.safetyStatus || "Safe"}
            </span>
            <h2 className="text-xl font-bold mt-2">
              Personal Check-In Simulator (Demo Mode)
            </h2>
            <p className="text-sm text-slate-200 mt-1">
              Test status check-ins locally. Real alerts and emergency calls are disabled in HerShield AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSimulatedCheckIn("Safe")}
              className="px-4 py-2 rounded-xl bg-white text-navy-900 text-sm font-semibold hover:bg-slate-100 transition"
            >
              Mark Check-In Safe
            </button>
            <button
              onClick={() => handleSimulatedCheckIn("Needs Check-In (Demo)")}
              className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold inline-flex items-center gap-1.5 transition"
            >
              <ShieldAlert className="w-4 h-4" />
              Simulate Alert Card
            </button>
          </div>
        </div>
        {simNotice && (
          <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 text-xs text-brand-100">
            {simNotice}
          </div>
        )}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/contacts"
          className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-brand-500 transition flex items-start justify-between"
        >
          <div>
            <p className="text-sm text-slate-500 font-medium">Trusted Contacts</p>
            <p className="text-3xl font-bold text-navy-900 mt-1">{contacts.length}</p>
            <p className="text-xs text-brand-700 font-semibold mt-2 inline-flex items-center gap-1">
              Manage contacts <ArrowRight className="w-3.5 h-3.5" />
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
        </Link>

        <Link
          to="/assistant"
          className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-brand-500 transition flex items-start justify-between"
        >
          <div>
            <p className="text-sm text-slate-500 font-medium">AI Safety Assistant</p>
            <p className="text-lg font-bold text-navy-900 mt-1">
              24/7 Safety Guidance
            </p>
            <p className="text-xs text-brand-700 font-semibold mt-2 inline-flex items-center gap-1">
              Open assistant <ArrowRight className="w-3.5 h-3.5" />
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
        </Link>

        <Link
          to="/education"
          className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-brand-500 transition flex items-start justify-between"
        >
          <div>
            <p className="text-sm text-slate-500 font-medium">Education & Awareness</p>
            <p className="text-lg font-bold text-navy-900 mt-1">4 Core Modules</p>
            <p className="text-xs text-brand-700 font-semibold mt-2 inline-flex items-center gap-1">
              Continue learning <ArrowRight className="w-3.5 h-3.5" />
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
        </Link>

        <Link
          to="/health"
          className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-brand-500 transition flex items-start justify-between"
        >
          <div>
            <p className="text-sm text-slate-500 font-medium">Women's Health Hub</p>
            <p className="text-lg font-bold text-navy-900 mt-1">
              Wellness & Care Guides
            </p>
            <p className="text-xs text-brand-700 font-semibold mt-2 inline-flex items-center gap-1">
              View guides <ArrowRight className="w-3.5 h-3.5" />
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <HeartPulse className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </DashboardLayout>
  );
}
