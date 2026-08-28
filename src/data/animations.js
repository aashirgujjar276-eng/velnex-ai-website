/**
 * Maps each page's slug to which animated "scene" it should show.
 * Add a new page slug elsewhere (sitemap.js + its content file) and add
 * one line here — PageAnimation.jsx picks it up automatically, no
 * template changes needed.
 *
 * Scene types: "call" | "chat" | "booking" | "sync" | "workflow"
 */

export const SOLUTION_ANIMATIONS = {
  "ai-receptionist": "call",
  "ai-call-answering": "call",
  "ai-voice-agents": "call",
  "ai-chatbots": "chat",
  "ai-appointment-booking": "booking",
  "ai-lead-qualification": "chat",
  "ai-workflow-automation": "workflow",
};

export const INDUSTRY_ANIMATIONS = {
  "dental-practices": "call",
  "medical-clinics": "call",
  "law-firms": "chat",
  "real-estate": "booking",
  "hotels-restaurants": "call",
  "ai-for-home-services": "booking",
  "salons-spas": "booking",
  "insurance-agencies": "chat",
  "auto-repair-shops": "call",
  "ecommerce": "chat",

  // Home services trade pages
  "plumbers": "call",
  "electricians": "booking",
  "hvac": "booking",
  "cleaning-services": "booking",

  // Salons & spas trade pages
  "salon": "booking",
  "spa": "booking",
  "barber": "booking",
  "nail-salon": "booking",

  // Hotels & restaurants trade pages
  "hotel": "booking",
  "restaurant": "call",
};

export const SOFTWARE_ANIMATIONS = {
  "ai-crm": "sync",
  "ai-appointment-management": "booking",
  "ai-call-management": "call",
  "ai-lead-management": "sync",
  "ai-workflow-automation": "workflow",
};

/** Fallback scene if a slug has no explicit mapping. */
export const DEFAULT_ANIMATION = "chat";
