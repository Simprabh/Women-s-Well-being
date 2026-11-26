const CONTACTS_KEY = "hershield_demo_contacts";

const DEFAULT_CONTACTS = [
  {
    id: "c-1",
    name: "Elena Vance",
    relationship: "Sister",
    phoneNote: "+1 (555) 010-2480 (Demo Only)",
    email: "elena.demo@example.com",
    isPrimary: true,
  },
  {
    id: "c-2",
    name: "Dr. Priya Nair",
    relationship: "Trusted Mentor",
    phoneNote: "+1 (555) 019-8832 (Demo Only)",
    email: "priya.demo@example.com",
    isPrimary: false,
  },
];

// Phase 1 Local Storage Service (Phase 2 will connect to Firebase Firestore)
export const contactsService = {
  getAll() {
    const raw = localStorage.getItem(CONTACTS_KEY);
    if (!raw) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(DEFAULT_CONTACTS));
      return DEFAULT_CONTACTS;
    }
    return JSON.parse(raw);
  },

  add(contact) {
    const current = this.getAll();
    const newContact = { ...contact, id: "c-" + Date.now() };
    const updated = newContact.isPrimary
      ? current.map((c) => ({ ...c, isPrimary: false })).concat(newContact)
      : [...current, newContact];
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    return updated;
  },

  remove(id) {
    const updated = this.getAll().filter((c) => c.id !== id);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    return updated;
  },

  setPrimary(id) {
    const updated = this.getAll().map((c) => ({
      ...c,
      isPrimary: c.id === id,
    }));
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    return updated;
  },
};
