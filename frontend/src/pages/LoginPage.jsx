import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Eye, EyeOff, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const { login, loginAsDemo } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || password.length < 6) {
      setError("Please enter a valid email and a password (6+ characters).");
      return;
    }
    await login({ email });
    navigate("/dashboard");
  };

  const handleDemo = async () => {
    await loginAsDemo();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center mx-auto mb-3">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-navy-900">Welcome Back</h1>
          <p className="text-sm text-slate-600 mt-1">
            Sign in to your HerShield AI workspace
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-800 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-800 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-2.5 text-slate-500 hover:text-navy-800"
              >
                {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleDemo}
            className="w-full py-2.5 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 font-semibold text-sm inline-flex items-center justify-center gap-2 transition"
          >
            <Sparkles className="w-4 h-4" />
            Quick Demo Sign-In (Review Dashboard)
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-brand-700 font-semibold hover:underline">
            Create one
          </Link>
        </p>
        <p className="mt-2 text-center text-xs text-slate-400">
          Phase 1 Mock Auth — Firebase Authentication connects in Phase 2.
        </p>
      </div>
    </div>
  );
}
