import React from "react";
import SOSButton from "../components/SOSButton";
import { useState } from "react";
import { UserPlus, Star, Trash2, Info, BellRing } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { contactsService } from "../services/contactsService";

export default function EmergencyContactsPage() {
  const [contacts, setContacts] = useState(() => contactsService.getAll());
  const [form, setForm] = useState({
    name: "",
    relationship: "",
    phoneNote: "",
    email: "",
    isPrimary: false,
  });
  const [testBanner, setTestBanner] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const updated = contactsService.add(form);
    setContacts(updated);
    setForm({ name: "", relationship: "", phoneNote: "", email: "", isPrimary: false });
  };

  const handleDelete = (id) => {
    setContacts(contactsService.remove(id));
  };

  const handlePrimary = (id) => {
    setContacts(contactsService.setPrimary(id));
  };

  const handleSimulatePreview = (contact) => {
    setTestBanner(
      `Demo Preview Only: Prepared check-in card for ${contact.name} (${contact.relationship}). No real phone call or SMS was placed.`
    );
  };

  return (
    <DashboardLayout
      title="Emergency & Trusted Contacts"
      subtitle="Organize your trusted support circle. Stored locally in Phase 1 before Firestore integration."
    >
      <SOSButton />
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4 flex items-start gap-3 text-sm text-navy-800">
        <Info className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
        <p>
          <strong>Important:</strong> HerShield AI does not initiate real emergency calls. Keep your local emergency number handy if you ever need immediate assistance.
        </p>
      </div>

      {testBanner && (
        <div className="bg-navy-900 text-white rounded-2xl p-4 text-sm flex items-center justify-between gap-4">
          <span>{testBanner}</span>
          <button
            onClick={() => setTestBanner("")}
            className="text-xs px-3 py-1 rounded-lg bg-white/15 hover:bg-white/25"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Add Contact Form */}
        <form
          onSubmit={handleAdd}
          className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-4 h-fit"
        >
          <h2 className="font-bold text-lg text-navy-900 flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-brand-700" />
            Add Trusted Contact
          </h2>

          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., Sarah Jenkins"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1">
              Relationship *
            </label>
            <input
              type="text"
              required
              value={form.relationship}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
              placeholder="Sister, Friend, Mentor..."
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1">
              Phone Reference (Informational)
            </label>
            <input
              type="text"
              value={form.phoneNote}
              onChange={(e) => setForm({ ...form, phoneNote: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="contact@example.com"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-navy-800 cursor-pointer">
            <input
              type="checkbox"
              checked={form.isPrimary}
              onChange={(e) => setForm({ ...form, isPrimary: e.target.checked })}
              className="rounded text-brand-700 focus:ring-brand-500"
            />
            Set as primary trusted contact
          </label>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold transition"
          >
            Save Contact
          </button>
        </form>

        {/* Contact List */}
        <div className="lg:col-span-7 space-y-4">
          {contacts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-sm">
              No contacts added yet. Use the form to add a trusted person.
            </div>
          ) : (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-navy-900">{contact.name}</h3>
                    {contact.isPrimary && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-800">
                        Primary
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{contact.relationship}</p>
                  {contact.phoneNote && (
                    <p className="text-xs text-slate-500 mt-1">{contact.phoneNote}</p>
                  )}
                  {contact.email && (
                    <p className="text-xs text-slate-500">{contact.email}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleSimulatePreview(contact)}
                    className="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-800 text-xs font-semibold inline-flex items-center gap-1"
                  >
                    <BellRing className="w-3.5 h-3.5" />
                    Simulate Check-In
                  </button>
                  {!contact.isPrimary && (
                    <button
                      onClick={() => handlePrimary(contact.id)}
                      className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-700"
                      title="Make primary"
                    >
                      <Star className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-red-600"
                    title="Delete contact"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
