/**
 * Shared icon maps, keyed by slug, so every page (Home, Solutions hub,
 * Industries hub, individual pages, etc.) references the same icon
 * for the same solution/industry/software item.
 */
import {
  Phone, Mic, MessageSquareCode, Workflow, CalendarCheck, PhoneCall, UserCheck,
  Database, CalendarClock, PhoneForwarded, Users, GitBranch,
  Stethoscope, Scale, Home as HomeIcon, Hotel, Wrench, Sparkles,
  ShieldCheck, Car, ShoppingCart, Zap, Wind,
  Scissors, Flower2, Hand, BedDouble, UtensilsCrossed,
} from "lucide-react";

export const SOLUTION_ICONS = {
  "ai-receptionist": Phone,
  "ai-voice-agents": Mic,
  "ai-chatbots": MessageSquareCode,
  "ai-workflow-automation": Workflow,
  "ai-appointment-booking": CalendarCheck,
  "ai-call-answering": PhoneCall,
  "ai-lead-qualification": UserCheck,
};

export const SOFTWARE_ICONS = {
  "ai-crm": Database,
  "ai-appointment-management": CalendarClock,
  "ai-call-management": PhoneForwarded,
  "ai-lead-management": Users,
  "ai-workflow-automation": GitBranch,
};

export const INDUSTRY_ICONS = {
  "dental-practices": Stethoscope,
  "medical-clinics": Stethoscope,
  "law-firms": Scale,
  "real-estate": HomeIcon,
  "insurance-agencies": ShieldCheck,
  "auto-repair-shops": Car,
  "ecommerce": ShoppingCart,

  // Home services hub + trade pages
  "ai-for-home-services": Wrench,
  "plumbers": Wrench,
  "electricians": Zap,
  "hvac": Wind,
  "cleaning-services": Sparkles,

  // Salons & spas hub + trade pages
  "salons-spas": Sparkles,
  "salon": Scissors,
  "spa": Flower2,
  "barber": Scissors,
  "nail-salon": Hand,

  // Hotels & restaurants hub + trade pages
  "hotels-restaurants": Hotel,
  "hotel": BedDouble,
  "restaurant": UtensilsCrossed,
};

export const SOLUTION_SUMMARIES = {
  "ai-receptionist": "Answers every incoming call, greets callers naturally, and routes or resolves the request without hold times.",
  "ai-voice-agents": "Real-time voice conversations that handle inquiries, transfers, and multi-step requests over the phone.",
  "ai-chatbots": "Text-based conversations on your website or messaging channels that answer questions and capture leads.",
  "ai-workflow-automation": "Connects the steps between systems so repetitive multi-step processes run without manual handoffs.",
  "ai-appointment-booking": "Finds open slots, books, confirms, and reschedules appointments directly against your calendar.",
  "ai-call-answering": "Picks up every call after hours or during overflow, so no inquiry goes to voicemail.",
  "ai-lead-qualification": "Asks the right questions on first contact and scores leads before they reach your sales team.",
};
