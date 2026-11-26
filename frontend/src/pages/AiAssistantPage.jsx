import React from "react";
import { useState } from "react";
import { Bot, Send, Sparkles, Info } from "lucide-react";
import { sendSafetyPrompt } from "../services/aiService";

const QUICK_PROMPTS = [
  "How do I create a commute safety plan?",
  "How can I secure my social media privacy?",
  "What should I ask at an annual wellness checkup?",
];

export default function AiAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am the HerShield AI Safety Assistant. Ask me about personal safety planning, digital privacy, educational topics, or preparing for health appointments.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (promptText) => {
    const text = (promptText ?? input).trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    if (!promptText) setInput("");
    setLoading(true);

    try {
      const reply = await sendSafetyPrompt(text);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="bg-navy-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">HerShield AI Safety Assistant</h1>
            <p className="text-xs text-slate-300">
              Phase 1 Local Preview — Connects securely to Gemini AI via Node.js in Phase 2
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/10 text-brand-100 w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          No API keys exposed in browser
        </span>
      </div>

      <div className="bg-brand-50 border border-brand-200 rounded-xl p-3.5 text-xs text-navy-800 flex items-center gap-2">
        <Info className="w-4 h-4 text-brand-700 shrink-0" />
        <span>
          This assistant provides general safety & educational information and cannot contact emergency services.
        </span>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[500px]">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line leading-relaxed ${
                  msg.role === "user"
                    ? "bg-brand-700 text-white rounded-br-sm"
                    : "bg-slate-100 text-navy-900 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-500 rounded-2xl px-4 py-2.5 text-sm">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2.5 border-t border-slate-100 flex flex-wrap gap-2 bg-slate-50">
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-navy-800 hover:border-brand-500 hover:text-brand-700 transition"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 border-t border-slate-200 flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a safety, privacy, or wellness question..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-4 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 disabled:opacity-50 text-white font-semibold inline-flex items-center gap-1.5 transition"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
