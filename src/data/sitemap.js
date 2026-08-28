/**
 * Single source of truth for site structure.
 * Header mega-menus, mobile nav, footer columns, and routes are all
 * generated from this file — add a page here and it appears everywhere
 * it needs to, with no dead links.
 */

export const solutions = [
  { slug: "ai-receptionist", label: "AI Receptionist" },
  { slug: "ai-voice-agents", label: "AI Voice Agents" },
  { slug: "ai-chatbots", label: "AI Chatbots" },
  { slug: "ai-workflow-automation", label: "AI Workflow Automation" },
  { slug: "ai-appointment-booking", label: "AI Scheduling Assistant" },
  { slug: "ai-call-answering", label: "AI Answering Service" },
  { slug: "ai-lead-qualification", label: "AI Sales Agent" },
];

export const homeServicesSub = [
  { slug: "plumbers", label: "Plumbers" },
  { slug: "electricians", label: "Electricians" },
  { slug: "hvac", label: "HVAC Companies" },
  { slug: "cleaning-services", label: "Cleaning Services" },
];

export const salonsSpasSub = [
  { slug: "salon", label: "Salon" },
  { slug: "spa", label: "Spa" },
  { slug: "barber", label: "Barber" },
  { slug: "nail-salon", label: "Nail Salon" },
];

export const hotelsRestaurantsSub = [
  { slug: "hotel", label: "Hotel" },
  { slug: "restaurant", label: "Restaurant" },
];

export const industries = [
  { slug: "dental-practices", label: "AI for Dental Practices" },
  { slug: "medical-clinics", label: "AI for Medical Clinics" },
  { slug: "law-firms", label: "AI for Law Firms" },
  { slug: "real-estate", label: "AI for Real Estate" },
  { slug: "hotels-restaurants", label: "AI for Hotels & Restaurants", children: hotelsRestaurantsSub },
  { slug: "ai-for-home-services", label: "AI for Home Service Businesses", children: homeServicesSub },
  { slug: "salons-spas", label: "AI for Salons & Spas", children: salonsSpasSub },
  { slug: "insurance-agencies", label: "AI for Insurance Agencies" },
  { slug: "ecommerce", label: "AI for E-commerce" },
];

export const aiSoftware = [
  { slug: "ai-crm", label: "AI CRM Software" },
  { slug: "ai-appointment-management", label: "AI Appointment Management Software" },
  { slug: "ai-call-management", label: "AI Call Management Software" },
  { slug: "ai-lead-management", label: "AI Lead Management Software" },
];

export const aiSoftwareNav = aiSoftware;

export const resources = [
  { slug: "faqs", label: "FAQs" },
  { slug: "blog", label: "Blog" },
];

// Same idea: header shows a curated subset, footer keeps the full list.
export const resourcesNav = resources;

export const company = [
  { slug: "about", label: "About Velnex AI", path: "/about" },
  { slug: "why-velnex-ai", label: "Why Velnex AI", path: "/why-velnex-ai" },
  { slug: "careers", label: "Careers", path: "/careers" },
  { slug: "contact", label: "Contact", path: "/contact" },
];

// Footer "Company" column is trimmed to the essentials — the header no
// longer has a Company dropdown at all (replaced by a direct Contact
// link), so the footer is the only nav path to these pages.
export const companyFooter = company;

export const legal = [
  { slug: "privacy-policy", label: "Privacy Policy", path: "/privacy-policy" },
  { slug: "terms-of-service", label: "Terms of Service", path: "/terms-of-service" },
];

export const social = [
  { label: "Instagram", href: "https://www.instagram.com/velnex_ai/" },
  { label: "Facebook", href: "https://www.facebook.com/people/VelnexAi/61591784258710/" },
];
