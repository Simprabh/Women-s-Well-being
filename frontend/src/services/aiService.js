// Phase 1 Mock AI Service
// Phase 2 will call our Node.js backend endpoint (/api/ai/chat) powered by @google/genai
export async function sendSafetyPrompt(message) {
  await new Promise((resolve) => setTimeout(resolve, 650));

  const lower = message.toLowerCase();

  if (lower.includes("emergency") || lower.includes("danger") || lower.includes("help")) {
    return (
      "If you are in immediate physical danger, please contact your local emergency services " +
      "(such as 112, 911, or 999) right away or move to a bright, staffed public space.\n\n" +
      "HerShield AI does not place real emergency calls. Once safe, you can review your " +
      "Emergency Contacts list or use the Safety Resources directory for local support organizations."
    );
  }

  if (lower.includes("privacy") || lower.includes("online") || lower.includes("stalking")) {
    return (
      "Here is a quick Digital Safety Checklist:\n" +
      "1. Enable app-based Two-Factor Authentication (2FA) on email and social accounts.\n" +
      "2. Audit location permissions on your phone and turn off 'Precise Location' for non-essential apps.\n" +
      "3. Review shared calendars, cloud albums, and Bluetooth device lists.\n" +
      "4. Save timestamped screenshots of concerning messages before blocking."
    );
  }

  if (lower.includes("health") || lower.includes("doctor") || lower.includes("wellness")) {
    return (
      "When preparing for a women's wellness visit, consider bringing:\n" +
      "• A brief log of any symptoms, energy changes, or cycle patterns.\n" +
      "• A list of current supplements or medications.\n" +
      "• Specific questions about preventive screenings.\n\n" +
      "Note: HerShield AI provides general educational information and is not a substitute for professional medical advice."
    );
  }

  if (lower.includes("plan") || lower.includes("commute") || lower.includes("travel")) {
    return (
      "A practical Personal Commute Safety Plan includes:\n" +
      "• Sharing your expected route and ETA with a trusted contact.\n" +
      "• Keeping your phone charged (or carrying a small power bank).\n" +
      "• Identifying open, staffed locations (pharmacies, cafes, transit desks) along your route.\n" +
      "• Checking in once you arrive safely."
    );
  }

  return (
    "Thank you for reaching out to HerShield AI (Phase 1 Preview Mode).\n\n" +
    "I can help you explore personal safety planning, digital privacy checklists, bystander strategies, " +
    "and women's health preparation questions. Try asking about:\n" +
    "• \"How do I create a commute safety plan?\"\n" +
    "• \"How can I secure my social media privacy?\"\n" +
    "• \"What should I ask at an annual wellness checkup?\""
  );
}
