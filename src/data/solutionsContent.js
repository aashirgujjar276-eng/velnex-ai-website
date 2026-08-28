/**
 * Content for each individual /solutions/{slug} page.
 * Rebuilt against the client's keyword audit (v2). Copy is pulled closely
 * from the client's SEO doc rather than paraphrased, specifically so the
 * secondary/supporting/long-tail keyword phrases survive intact at the
 * frequencies the audit targeted. Pricing sections, pricing FAQs, and
 * pricing long-tail keywords are intentionally excluded per client
 * direction — see the whyVelnexParagraph field, which is a new content
 * slot (SolutionDetail.jsx previously hardcoded this section with no
 * way to inject page-specific keyword copy).
 */

export const solutionsContent = {
  "ai-receptionist": {
    featureBullets: {
      heading: "What Your AI Receptionist Does",
      bullets: [
        "Answers every call, day or night — no more missed patients or customers",
        "Sounds like a real person, not a robotic phone tree",
        "Books appointments straight into your calendar in real time",
        "Answers common questions instantly — hours, pricing, availability",
        "Routes urgent calls to your team immediately",
        "Logs every call so nothing gets forgotten",
        "Costs a fraction of hiring extra front-desk staff",
      ],
    },
    metaTitle: "AI Receptionist for Small Business | 24/7 Call Answering | Velnex AI",
    metaDescription:
      "Never miss a call again. Velnex AI's AI receptionist answers 24/7, books appointments, and costs a fraction of hiring staff. Book a free demo.",
    eyebrow: "AI Receptionist",
    h1: "Never Miss Another Call — AI Receptionist for Your Business",
    heroSub:
      "Every unanswered call is a customer calling your competitor. Velnex AI's AI receptionist works day, night, and weekends — books appointments, hands off only when needed. Call it an AI virtual receptionist, call it an AI front desk. Coverage that never clocks out.",

    problems: [
      { title: "Stop losing customers to missed calls", desc: "If your front desk is busy, closed, or short-staffed, every ringing phone is a small risk you're taking on. Customers don't wait around for a callback — they move on. Missed call management isn't really about the call itself, it's about what that call was worth." },
      { title: "The leaks add up faster than you think", desc: "A customer calls during your lunch rush and gets nothing. A lead calls after hours and hangs up before voicemail even picks up. Someone tries three times over a weekend and gives up on the third. Multiply one missed call a day by a year, and it stops looking small." },
      { title: "Built for businesses that live and die by the phone", desc: "If your business runs on calls — bookings, service requests, appointments, quotes — an AI phone receptionist isn't a nice-to-have, it's closer to a second employee who happens to work every shift. An AI call receptionist doesn't replace your team, it just makes sure nothing gets missed while they're doing everything else the business needs." },
      { title: "AI receptionist vs. a traditional answering service", desc: "A regular AI answering service takes a message and passes it along — that's the whole job. A Velnex AI receptionist does more: it holds an actual conversation, answers real questions about your business, and takes action on the call instead of just logging it. Call it an AI virtual receptionist, an automated receptionist, or a virtual AI receptionist — the point is the same." },
      { title: "People search for this in a lot of different ways", desc: "An AI receptionist for business, AI receptionist software, a virtual AI receptionist, an automated receptionist — people usually mean the same underlying thing: something that can take the call and actually deal with it, not just note it down for someone to call back later." },
    ],

    howItWorks: [
      { title: "We learn your business", desc: "Before anything gets built, we look at your actual call patterns — what people ask, when call volume spikes, how appointments usually get booked." },
      { title: "We build the conversation", desc: "Your AI receptionist gets configured around your real services, hours, and offerings, so answers sound like they're coming from someone who actually works there." },
      { title: "We connect your calendar and phone line", desc: "No new number to give out, no new calendar to manage — it plugs into what you're already using." },
      { title: "You go live", desc: "Most businesses are answering calls with their new AI receptionist within days, not weeks, and we keep refining it based on real conversations after launch." },
    ],

    capabilities: [
      "Answers every call, 24/7 — this is where a 24/7 AI receptionist earns its keep. No more \"we're closed,\" no more voicemail nobody checks until Monday. AI call answering means missed call management stops being something you worry about.",
      "Sounds like a real conversation — this isn't a phone tree reading options at you. It's conversational AI, an AI voice receptionist that understands what's actually being asked, with the kind of intelligent call handling that keeps a caller talking instead of hanging up. Whether it runs as voice AI on the phone or an AI voice assistant on chat, it can lean casual or formal.",
      "Books appointments without the back-and-forth — call automation handles the scheduling on the spot, checking real availability and confirming the booking, so AI appointment scheduling doesn't need a person managing a calendar in the background.",
      "Routes the right calls to the right people — AI call routing sends anything urgent or complex straight to your team, so your AI phone agent handles the repetitive stuff and your people only step in when it matters. It's AI customer support that knows its own limits.",
      "Costs a fraction of a full-time hire — no salary, no benefits, no sick days, no training period. This is customer service automation that gives you full coverage without the overhead of a full-time front-desk hire.",
      "Built for small business, not enterprise call centers — every setup uses AI receptionist software configured around how your business actually operates. Whether you search for an AI front desk, a virtual receptionist, or an AI call receptionist, the thing you're looking for is the same, and this is a real step into AI business automation without a big overhaul.",
    ],

    benefits: [
      { title: "Never miss a lead", desc: "Every call gets answered, regardless of time or volume." },
      { title: "Lower staffing cost", desc: "Full front-desk coverage without a full-time salary, benefits, or training period." },
      { title: "A stronger first impression", desc: "Callers get an instant, professional response every time — not hold music." },
      { title: "See it before you commit", desc: "The fastest way to know if this fits is an AI receptionist demo — a real call, handled the way it would be for your customers." },
    ],

    workflowExample: {
      title: "Example: a dental practice after hours",
      steps: [
        "A patient calls at 8pm about tooth pain.",
        "The AI receptionist answers and asks a few quick questions to understand urgency.",
        "For a routine concern, it books the next available appointment automatically.",
        "For a genuine emergency, it escalates immediately to the on-call dentist.",
        "The patient gets a confirmation, and the practice sees the full transcript the next morning.",
      ],
    },

    whyVelnexHeading: "Built as an AI receptionist for small business, not enterprise software.",
    whyVelnexParagraph:
      "We didn't build this as generic AI receptionist for business software — big call centers, complex phone trees, a dozen departments. We built it as an AI receptionist for small business: the kind of business where one missed call actually matters, and hiring a full front-desk team isn't realistic yet. Every setup uses AI receptionist software configured around how your business actually operates — your services, your hours, your booking flow — not a generic template with your logo on it. Whether you search for an AI front desk, an AI phone receptionist, an AI call receptionist, or a virtual receptionist, the thing you're actually looking for is the same: a way to stop losing calls without hiring for it. If you're comparing options to find the best AI receptionist for small business, or you're ready to hire AI receptionist coverage today, book a free demo and we'll show you exactly how it works.",

    relatedIndustries: ["dental-practices", "real-estate", "law-firms", "ai-for-home-services", "hotels-restaurants"],
    relatedSolutions: ["ai-call-answering", "ai-appointment-booking", "ai-voice-agents"],
    relatedSoftware: ["ai-crm", "ai-call-management"],

    faqs: [
      { q: "Is this built for small businesses, or is it made for big companies?", a: "It's built specifically for small businesses — the ones that need real call coverage but can't justify hiring a full-time front-desk team. Enterprise-scale phone systems are a different product entirely." },
      { q: "How is this different from an AI answering service?", a: "A traditional AI answering service takes a message. This holds a real conversation, answers questions about your business, and books the appointment on the spot — an AI receptionist vs answering service comparison usually comes down to whether you want a message taken or the problem actually solved." },
      { q: "Can I hire this even if I only get a few calls a day?", a: "Yes — coverage works whether you get five calls a day or five hundred. There's no minimum volume required to make it worth having." },
      { q: "Does it work 24/7, even for missed calls after hours?", a: "Yes, that's exactly the point. A 24/7 AI receptionist for missed calls means nights, weekends, and holidays are covered the same as a Tuesday afternoon." },
      { q: "Will it work with my current business phone number?", a: "Yes. It connects to the number and phone system you already use — there's nothing to switch over on your end." },
      { q: "Do I need to set it up myself?", a: "No. We handle the setup — connecting your phone number, calendar, and the questions your AI receptionist should be able to answer — so you get a working system, not a tool you have to learn." },
      { q: "Can I see it in action before deciding?", a: "Yes — book an AI receptionist demo and we'll walk through a real call, handled the way it would be for your customers, before you commit to anything." },
    ],
  },

  "ai-voice-agents": {
    featureBullets: {
      heading: "What Your AI Voice Agent Does",
      bullets: [
        "Handles both inbound calls and outbound follow-ups",
        "Holds real conversations — not a scripted menu of options",
        "Books, reschedules, and confirms appointments automatically",
        "Follows up on leads and reminders without anyone lifting a finger",
        "Qualifies interest before handing a call to your sales team",
        "Works around the clock, every day of the week",
        "Sounds natural enough that callers don't feel like they're talking to a machine",
      ],
    },
    metaTitle: "AI Voice Agent for Business | Inbound & Outbound Calling | Velnex AI",
    metaDescription:
      "Let an AI voice agent handle your calls — inbound, outbound, sales, and follow-ups. Sounds natural, works around the clock. Book a free demo.",
    eyebrow: "AI Voice Agent",
    h1: "AI Voice Agents That Actually Talk to Your Customers",
    heroSub:
      "Most \"AI phone systems\" sound like a phone tree with extra steps. An AI voice agent from Velnex AI holds a real conversation — answering questions, booking appointments, following up on leads, even making outbound calls, without your team touching the phone. Whether you call it an AI voice assistant, an AI phone agent, or an AI calling agent, it's voice AI for business built to actually handle the call, not just pick it up.",

    problems: [
      { title: "Your team can't be on the phone all day", desc: "Every call your team takes is time they're not spending on something else — closing a sale, finishing a job, running the business." },
      { title: "The calls that never get made cost you too", desc: "Follow-ups and reminders that quietly never happen cost you money without you ever noticing the gap." },
      { title: "Slow follow-up loses leads", desc: "A slow lead who never got a follow-up, a customer who forgot their appointment because nobody called to remind them — it adds up." },
      { title: "\"I'll call them back later\" quietly turns into never", desc: "Without a system covering both AI outbound calling and AI inbound calling, small gaps compound fast." },
      { title: "What people actually call this", desc: "An AI voice agent, an AI voice assistant, an AI phone agent, an AI calling agent, an AI call agent, an AI voice bot — it's all business voice AI aimed at the same problem: too many phone calls, not enough hands." },
    ],

    howItWorks: [
      { title: "We learn your calls", desc: "We start by looking at what your business actually deals with — call volume, common questions, whether outbound follow-ups are already slipping through the cracks." },
      { title: "We build the conversation", desc: "Your AI voice agent is configured around your real services, offerings, and tone, so it sounds like it belongs to your business, not a generic script." },
      { title: "We connect your systems", desc: "Your calendar, CRM, and phone line get connected, so inbound and outbound calls actually update your records instead of just happening in isolation." },
      { title: "You go live", desc: "Most businesses are taking calls with it within days, and we keep refining the conversation based on real calls after launch." },
    ],

    capabilities: [
      "Inbound calls handled naturally — AI inbound calling holds a real conversation, not a menu of button presses.",
      "Outbound calls handled automatically — AI outbound calling covers reminders, follow-ups, and check-ins that never slip, the way a dedicated AI call center agent would if you had one on staff around the clock.",
      "Sales and follow-up conversations — the AI call center voice agent qualifies interest and passes warm leads to your team, doing AI sales calls without a person dialing.",
      "Appointment booking and confirmation, checking real availability on the spot, powered by the same AI phone answering system as every other call.",
      "Configured around your tone — casual or formal, this business voice AI is built around your business, not a shared script.",
      "Works with the phone number and systems you already use — call center automation and voice automation that plugs into what's already there.",
      "Full AI call automation for AI customer service and AI customer support, so nothing about the call gets lost between the conversation and your records.",
      "Runs on Conversational AI that handles AI phone calls the way a person would, and this is also where an AI voice agent supports wider AI business automation across your calls and calendar.",
    ],

    benefits: [
      { title: "No calls left unmade", desc: "Reminders, follow-ups, and confirmations happen automatically, without anyone dialing." },
      { title: "Leads don't go cold", desc: "Sales conversations get a fast, consistent follow-up instead of sitting in a queue." },
      { title: "Sounds like a real person", desc: "Handles context and interruptions instead of reading from a fixed script." },
      { title: "See it before you commit", desc: "Book an AI voice agent demo and hear it handle a real call before deciding anything." },
    ],

    workflowExample: {
      title: "Example: a home services company following up on quotes",
      steps: [
        "A customer requests a quote through the website and doesn't respond to the follow-up email.",
        "The AI voice agent calls the next day to check in and answer any questions.",
        "It confirms interest, checks technician availability, and books the job on the spot.",
        "The calendar and CRM update automatically with the new appointment.",
        "The office reviews the call transcript the next morning — no manual follow-up needed.",
      ],
    },

    whyVelnexHeading: "Built as an AI voice agent for small business, not a call-center platform.",
    whyVelnexParagraph:
      "This is an AI voice agent for business sized for a business handling its own call volume, not adapted down from enterprise call-center software. Every voice agent is configured around your real services and tone rather than a shared script, and it covers outbound AI calling agent work — reminders, follow-ups, sales calls — as naturally as it answers the phone. If you're comparing options to hire AI voice agent coverage or find the best fit for a small team, book an AI voice agent demo and we'll show you exactly how it sounds on a real call for your business, including how it handles an AI voice agent for sales calls specifically if that's the priority.",

    relatedIndustries: ["ai-for-home-services", "real-estate", "insurance-agencies", "salons-spas"],
    relatedSolutions: ["ai-receptionist", "ai-lead-qualification", "ai-call-answering"],
    relatedSoftware: ["ai-call-management", "ai-crm"],

    faqs: [
      { q: "What's the difference between this and an AI receptionist?", a: "A receptionist mainly answers and routes incoming calls. A voice agent does that too, but it can also make outbound calls — reminders, follow-ups, sales conversations — so it covers more of what your phone line actually needs." },
      { q: "Can it make outbound calls, or just answer incoming ones?", a: "Both. It can call leads back, confirm appointments, send reminders, and follow up — all without anyone on your team dialing a number." },
      { q: "Will it sound generic, or does it actually adapt to my business?", a: "It's configured around your services, tone, and common questions rather than a fixed script, so it responds the way a person from your business actually would." },
      { q: "Can I use this for sales calls specifically, or just support and scheduling?", a: "Yes. Coverage can focus on sales follow-up and lead qualification, general support, scheduling, or a mix of all three." },
      { q: "How fast can this be set up for my business?", a: "Most businesses are live within days. We build the agent around your actual calls and workflows, then launch." },
      { q: "Does it work with the phone number and systems I already use?", a: "Yes — it connects to your existing number and business tools rather than requiring you to change anything." },
      { q: "Can I see a demo before committing?", a: "Yes — book an AI voice agent demo and we'll show you a real call handled the way your customers would experience it." },
    ],
  },

  "ai-chatbots": {
    featureBullets: {
      heading: "What Your AI Chatbot Does",
      bullets: [
        "Engages website visitors the second they land — no waiting",
        "Answers real product and service questions instantly",
        "Captures and qualifies leads before they leave the page",
        "Books appointments directly through the chat window",
        "Connects to your CRM so nothing gets lost in a chat log",
        "Built around your business, not a generic bot template",
        "Works 24/7, even when your team is offline",
      ],
    },
    metaTitle: "AI Chatbot Development Services | Custom AI Chatbots | Velnex AI",
    metaDescription:
      "Get a custom AI chatbot built for your business — handles support, sales, and leads. Explore our AI chatbot development services. Book a free demo.",
    eyebrow: "AI Chatbot Development Services",
    h1: "AI Chatbot Development Services",
    heroSub:
      "Most website chatbots just sit in the corner answering FAQs badly. Velnex AI's AI chatbot development services build something that actually earns its place on your site — a custom AI chatbot that answers real questions, qualifies leads, and books appointments, instead of forwarding everyone to a contact form. This is AI chatbot development done as a service, not a template you configure yourself.",

    problems: [
      { title: "A bad chatbot fails quietly", desc: "It misunderstands simple questions, loops visitors through the same canned answers, and eventually just says \"contact support\" anyway. Visitors bounce, and you never even know they were interested." },
      { title: "Generic bot builders leave you to train it yourself", desc: "You're left training a template AI chatbot software question by question, hoping it eventually gets good enough." },
      { title: "Visitors ask questions outside business hours", desc: "If your website is where people go to ask questions or decide whether to book with you, a visitor asking at 11pm needs a real answer, not a dead end." },
      { title: "Leads leave without being captured", desc: "Without the right questions asked upfront by a proper lead generation chatbot, your team gets a form full of guesses instead of a qualified lead." },
      { title: "Also known as: AI chatbot for business, AI chatbot services, and more", desc: "People search for this under a lot of names — an AI chatbot for business, AI chatbot services, an AI chatbot company, an AI customer support chatbot, an AI sales chatbot, or simply an AI chatbot for website use. Different phrasing, same underlying need: a chatbot for customer service that actually works." },
    ],

    howItWorks: [
      { title: "We learn your business", desc: "We start with your website, your most common customer questions, and what a good outcome looks like — a booked call, a completed sale, a resolved question." },
      { title: "We build the conversation", desc: "Your chatbot gets trained on your actual products, offerings, and policies, so answers sound like they're coming from someone who works there." },
      { title: "We connect your tools", desc: "Your chatbot links to your CRM, calendar, or lead list, so a captured lead or booked call actually shows up where your team already looks for it." },
      { title: "You launch and we refine", desc: "Once live, we review real conversations and keep tuning the responses, because a chatbot that stops improving after launch starts falling behind fast." },
    ],

    capabilities: [
      "Custom AI chatbot development built around your actual pages, products, and the questions visitors ask most — not a shared AI chatbot solution reused across every client.",
      "Handles support automatically as an AI support chatbot — hours, offerings, availability, policies, answered instantly.",
      "Qualifies and captures leads as a lead generation chatbot before a visitor ever leaves the page.",
      "Holds a real conversation through conversational AI chatbot design instead of matching keywords.",
      "Direct integration with your CRM, calendar, or lead list — real AI integration, not an isolated widget.",
      "Works as an AI website chatbot or through a messaging channel you already use, functioning as AI live chat when a visitor wants to talk to someone right now.",
      "Built as business AI chatbot infrastructure for customer service automation and AI customer support at once, not two separate tools.",
      "Part of our broader AI chatbot solutions, including an intelligent chatbot layer that fits into wider AI automation across your business.",
    ],

    benefits: [
      { title: "Fewer visitors bounce", desc: "Real answers keep visitors engaged instead of hitting a dead end." },
      { title: "Leads captured automatically", desc: "The right questions get asked before someone leaves the page." },
      { title: "Consistent support coverage", desc: "The same repetitive questions get answered instantly, any time of day." },
      { title: "See it before you commit", desc: "Book an AI chatbot development demo and see the actual conversation flow before signing off on anything." },
    ],

    workflowExample: {
      title: "Example: a service business capturing an after-hours lead",
      steps: [
        "A visitor lands on the pricing page at 10pm and has a question about a specific service.",
        "The chatbot answers directly, using information trained on the business's actual offerings.",
        "It asks a couple of qualifying questions to understand the visitor's need.",
        "The visitor's details and interest are logged straight to the CRM.",
        "The sales team follows up the next morning with full context already in hand.",
      ],
    },

    whyVelnexHeading: "AI chatbot development services for small business, not an enterprise chatbot platform.",
    whyVelnexParagraph:
      "This is AI chatbot development services for small business specifically — real conversational ability without an enterprise price tag or a months-long implementation. We're a custom AI chatbot development company, not a free chatbot builder that leaves you to do the training yourself. If you're comparing a custom AI chatbot development company against DIY tools, or trying to find the best AI chatbot development company for a business your size, the difference comes down to who's actually building and maintaining the thing. Curious what an AI chatbot development cost looks like for your business, or ready to hire an AI chatbot developer outright? Book a demo and we'll walk through it together.",

    relatedIndustries: ["ecommerce", "salons-spas", "hotels-restaurants", "real-estate", "insurance-agencies"],
    relatedSolutions: ["ai-lead-qualification", "ai-receptionist", "ai-workflow-automation"],
    relatedSoftware: ["ai-crm", "ai-lead-management"],

    faqs: [
      { q: "Is this the same as free chatbot builder tools?", a: "No. Free builders give you a template you have to train yourself. This is built around your business from the start and refined after launch based on real conversations." },
      { q: "Is this built for small businesses, or larger companies?", a: "This is AI chatbot development services for small business specifically — real conversational ability without an enterprise price tag or a months-long implementation." },
      { q: "Can this handle support questions, or only sales and leads?", a: "Both. It can resolve common questions on its own, and hand off to your team when something needs a real person." },
      { q: "Will my chatbot work with my existing website and tools?", a: "Yes — it integrates with your website and connects to your CRM, calendar, or lead list rather than requiring you to change your setup." },
      { q: "How long does it take to build and launch?", a: "Most builds go live within one to two weeks, depending on how much of your site and product catalog the chatbot needs to know." },
      { q: "How do I hire AI chatbot developer support through Velnex AI?", a: "Book a demo. We'll walk through your website, your common customer questions, and your goals, then show you what the chatbot would look like on your website before you commit to anything." },
      { q: "Can I see an AI chatbot development demo first?", a: "Yes — we'll show you a working example built around your actual site content before any commitment is made." },
    ],
  },

  "ai-workflow-automation": {
    featureBullets: {
      heading: "What Workflow Automation Does For You",
      bullets: [
        "Connects your calls, forms, and calendar so nothing needs manual re-entry",
        "Removes repetitive admin work from your team's day",
        "Updates records automatically as information comes in",
        "Adapts to real situations instead of following a rigid script",
        "Runs quietly in the background — no new dashboard to babysit",
        "Frees up hours for work that actually needs a person",
        "Built around your exact tools, not a one-size-fits-all setup",
      ],
    },
    metaTitle: "AI Workflow Automation Software | Business Process Automation | Velnex AI",
    metaDescription:
      "Connect your tools and cut the manual steps. Velnex AI builds AI workflow automation around how your business actually runs. Book a free demo.",
    eyebrow: "AI Workflow Automation",
    h1: "AI Workflow Automation That Automatically Performs Tasks",
    heroSub:
      "Most businesses aren't missing tools — they're missing the connections between them. A lead comes in on one system, gets booked in another, and somewhere in between, someone's manually copying information across so nothing falls through. Velnex AI's AI workflow automation closes those gaps — this is business process automation and workflow automation software built around your actual process, not a generic automation template.",

    problems: [
      { title: "Manual steps are quietly costing you time", desc: "Someone checking a shared spreadsheet, someone else copying a form submission into a CRM — none of it looks broken day to day, but it eats hours that could go somewhere else." },
      { title: "Small manual steps compound", desc: "A missed update here, a forgotten follow-up there, and the business ends up running on someone remembering to do things instead of a system making sure they happen." },
      { title: "Disconnected tools create a manual bridge", desc: "A booking calendar, a CRM, a spreadsheet someone built years ago that's now somehow load-bearing — the tools aren't the problem, the manual bridge between them is." },
      { title: "Nobody planned to be the human API", desc: "Re-typing the same information across three systems was never anyone's actual job, but it ends up being someone's daily task anyway. That's exactly what AI business process automation is built to remove." },
    ],

    howItWorks: [
      { title: "We map your current process", desc: "We start by looking at how information actually moves through your business today — which tools you use, where manual steps are slowing things down." },
      { title: "We design the workflow", desc: "What triggers an action, what data moves where, and what should happen if something doesn't go as expected — real business workflow automation, mapped to how you operate." },
      { title: "We connect everything", desc: "Your calendar, CRM, and communication tools get linked so the workflow actually runs against your real systems, not a sandboxed demo version." },
      { title: "We test, launch, and refine", desc: "Before it goes live, we run it against real scenarios to catch anything that would break in practice, then keep an eye on it after launch." },
    ],

    capabilities: [
      "Connects your calendar, CRM, and communication tools so they stay in sync automatically — CRM automation without a person doing the syncing by hand.",
      "Removes manual steps through AI for business automation — updating records, triggering follow-ups, moving a lead forward on its own.",
      "Adapts to what's actually happening as intelligent automation, not a rigid if-this-then-that script.",
      "Runs quietly in the background as workflow optimization and process optimization without adding a new dashboard to check constantly.",
      "Built and managed by our team as AI workflow solutions, not handed to you as a DIY tool to configure alone.",
      "Scoped to your actual tools and process through business process management thinking, not a generic one-size-fits-all package.",
      "Improves AI productivity and business efficiency across the whole workflow, not just one isolated step.",
      "Fits within wider AI Business Automation, drawing on the same AI Integration and AI Automation Services used across our AI Software Automation stack, with clear Workflow Management throughout.",
    ],

    benefits: [
      { title: "Less manual re-entry", desc: "Information moves between systems on its own instead of being retyped by hand." },
      { title: "Fewer things fall through the cracks", desc: "Follow-ups and updates happen automatically, not when someone remembers." },
      { title: "More time for real work", desc: "Your team spends less time on admin and more time on work that actually needs a person." },
      { title: "See it before you commit", desc: "Book an AI workflow automation demo and we'll map your actual process before anything gets built." },
    ],

    workflowExample: {
      title: "Example: connecting calls, a booking calendar, and a CRM",
      steps: [
        "A customer calls in and books a service over the phone.",
        "The booking is confirmed on the real calendar in real time — no double-booking risk.",
        "The CRM is automatically updated with the customer's details and the new appointment.",
        "A confirmation and reminder are scheduled to go out automatically.",
        "The team sees a single, accurate record — no one had to copy anything by hand.",
      ],
    },

    whyVelnexHeading: "AI workflow automation for small business, not enterprise automation software.",
    whyVelnexParagraph:
      "This is AI workflow automation for small business — sized and priced for a handful of connected tools, not adapted from an enterprise automation platform. Unlike a no-code automation platform you configure and maintain yourself, we build, test, and manage custom AI workflow automation solutions as part of our Business Process Automation Services, so you get the result without becoming the person who keeps it running. This isn't off-the-shelf Business Automation Software or a bare AI Process Automation script — Comparing AI workflow automation services for small business against the alternative of hiring more admin staff, or trying to find the best AI workflow automation software for a business your size? Ready to hire AI workflow automation company support, book a demo and we'll map your actual process first.",

    relatedIndustries: ["ai-for-home-services", "salons-spas", "insurance-agencies", "ecommerce"],
    relatedSolutions: ["ai-lead-qualification", "ai-appointment-booking", "ai-receptionist"],
    relatedSoftware: ["ai-crm"],

    faqs: [
      { q: "Is this built for small businesses, or is it enterprise software scaled down?", a: "It's built specifically for small business use — sized and priced for a handful of connected tools, not adapted from an enterprise platform." },
      { q: "How is this different from a no-code automation platform I set up myself?", a: "Those tools hand you the builder and leave the maintenance to you. We build, test, and manage the automation, so you get the result without needing to become the person who keeps it running." },
      { q: "Is it really custom, or a shared template?", a: "The logic and connections are built around your actual tools and process, not assembled from a shared template." },
      { q: "Which tools can this connect to?", a: "Most common calendar, CRM, and communication tools can be connected — tell us what you're using and we'll confirm compatibility during your demo call." },
      { q: "What happens if my process changes after the automation is already live?", a: "We adjust it. The workflow gets updated to match how your business actually operates, rather than staying frozen at launch-day settings." },
      { q: "How do I hire AI workflow automation company support?", a: "Book a demo. We'll look at your current tools and process, then show you exactly what the automation would look like before you commit to anything." },
      { q: "Can I see a demo before deciding?", a: "Yes — an AI workflow automation demo walks through your actual tools and process, not a generic example." },
    ],
  },

  "ai-appointment-booking": {
    featureBullets: {
      heading: "What Your Scheduling Assistant Does",
      bullets: [
        "Books appointments instantly — no back-and-forth messages",
        "Syncs with your real calendar so nothing double-books",
        "Sends automatic reminders that cut down no-shows",
        "Handles reschedules and cancellations without a phone call",
        "Works for meetings, consultations, or customer appointments alike",
        "Adapts to staff availability and buffer times automatically",
        "Fits your existing booking process instead of replacing it",
      ],
    },
    metaTitle: "AI Scheduling Assistant | Appointment Booking Software | Velnex AI",
    metaDescription:
      "Let an AI scheduling assistant handle bookings, reminders, and rescheduling automatically. No back-and-forth, synced to your calendar. Book a demo.",
    eyebrow: "AI Scheduling Assistant",
    h1: "AI Scheduling Assistant That Books, Reminds, Reschedules",
    heroSub:
      "Booking an appointment shouldn't take five messages back and forth. Velnex AI's AI scheduling assistant checks real availability, confirms the booking, sends the reminder, and handles the reschedule request — all without anyone on your team touching a calendar. Some businesses call it AI appointment booking, others an AI appointment scheduler, an AI booking system, or appointment scheduling software for business — it's the whole booking process, automated.",

    problems: [
      { title: "Manual scheduling is slower than it looks", desc: "A customer asks for a time, you check your calendar, you offer a slot, they're not free, you offer another — that's not one task, it's five, repeated every time someone wants to book." },
      { title: "No-shows are usually a reminder problem", desc: "A no-show isn't usually because someone changed their mind — it's because nobody reminded them, and life got in the way." },
      { title: "Double-bookings happen when calendars aren't synced", desc: "Once someone has to manually put a confirmed time into the calendar, there's a real risk two people end up booked for the same hour." },
      { title: "The hours add up quietly", desc: "A few minutes of back-and-forth per booking, multiplied by every booking in a week, stops looking like a small inconvenience." },
      { title: "People search for this under different names", desc: "AI appointment scheduling, an AI booking assistant, appointment scheduling AI, appointment scheduling software for business — different phrasing for the same need: bookings that happen without someone managing a calendar by hand." },
    ],

    howItWorks: [
      { title: "We learn your booking process", desc: "We start by looking at how bookings actually happen today — who books, how often, what needs to be confirmed, and where things usually slow down." },
      { title: "We connect your calendar", desc: "Your real calendar gets connected directly through AI calendar scheduling, so availability shown to customers is always accurate and every booking updates it automatically." },
      { title: "We set up reminders and rules", desc: "Reminder timing, buffer periods, and any booking rules specific to your business get configured so it works the way your business actually operates." },
      { title: "You go live", desc: "Most businesses are taking bookings within days, and we keep refining the setup based on real bookings after launch." },
    ],

    capabilities: [
      "Books appointments without back-and-forth through automated appointment booking that checks real availability and confirms on the spot.",
      "Stays in sync with your calendar as a true AI calendar assistant — a booking made anywhere updates the real calendar immediately.",
      "Sends automated reminders, cutting down no-shows before they happen.",
      "Handles rescheduling and cancellations the same way it handles the original booking, as part of one consistent scheduling workflow.",
      "Works for meeting scheduling as well as customer scheduling and online appointment booking.",
      "Accounts for buffer time, staff availability, and real constraints through calendar automation and appointment management, not just open slots.",
      "Connects to CRM scheduling and booking automation so every appointment updates your records automatically, functioning as an AI booking assistant your team can rely on.",
      "Runs as Appointment Automation and Smart Scheduling on top of Business Scheduling Software you already trust, not a bolt-on widget.",
    ],

    benefits: [
      { title: "No more back-and-forth", desc: "Customers pick a time and it's just confirmed — no offering three times and waiting for a reply." },
      { title: "Fewer no-shows", desc: "Consistent, automatic reminders go out every time, without anyone setting a manual task." },
      { title: "Always accurate availability", desc: "Your calendar stays the single source of truth, updated the moment something is booked." },
      { title: "See it before you commit", desc: "Book an AI scheduling assistant demo and watch it handle a real booking before deciding anything." },
    ],

    workflowExample: {
      title: "Example: a salon handling a same-day reschedule",
      steps: [
        "A client texts asking to move their afternoon appointment to next week.",
        "The AI scheduling assistant checks real-time availability for the new week.",
        "It confirms a new time directly with the client and updates the calendar instantly.",
        "The freed-up afternoon slot becomes available for other bookings immediately.",
        "A reminder goes out automatically ahead of the new appointment time.",
      ],
    },

    whyVelnexHeading: "An AI scheduling assistant for small business, not enterprise booking software.",
    whyVelnexParagraph:
      "This is an AI scheduling assistant for small business specifically — sized for a manageable booking volume, not adapted from a large enterprise platform. If you're comparing the best AI scheduling assistant options, or looking at AI appointment scheduling software for small business more broadly, the difference to check for is whether it actually syncs your real calendar or just displays a static schedule. Ready to hire an AI scheduling assistant, or want a custom AI scheduling assistant configured around your specific booking rules? Book an AI scheduling assistant demo and we'll show you exactly how it works against your calendar.",

    relatedIndustries: ["salons-spas", "dental-practices", "medical-clinics", "ai-for-home-services"],
    relatedSolutions: ["ai-receptionist", "ai-voice-agents", "ai-workflow-automation"],
    relatedSoftware: ["ai-appointment-management", "ai-crm"],

    faqs: [
      { q: "Is this built for small businesses, or enterprise software scaled down?", a: "It's built for small business use specifically — sized for a manageable booking volume, not adapted from a large enterprise platform." },
      { q: "How is this different from a basic online booking calendar?", a: "A basic calendar link shows open slots and takes a name. This handles the full process — confirming details, syncing your calendar, sending reminders, and handling reschedules." },
      { q: "Does it work for meetings, or only customer appointments?", a: "Both. Meeting scheduling works the same way as customer appointment booking — it's not limited to one type of booking." },
      { q: "Can it handle cancellations and rescheduling, or just new bookings?", a: "It handles all of it — new bookings, reschedules, and cancellations, updating your calendar automatically each time." },
      { q: "Which calendar systems does this work with?", a: "Most common calendar and scheduling tools can be connected — tell us what you're using and we'll confirm compatibility during your demo call." },
      { q: "How do I hire AI scheduling assistant coverage for my business?", a: "Book a demo. We'll look at your current booking process and calendar setup, then show you exactly how the automation would work." },
      { q: "Can I see an AI scheduling assistant demo first?", a: "Yes — we'll walk through a real booking scenario using your actual calendar before you commit to anything." },
    ],
  },

  "ai-call-answering": {
    featureBullets: {
      heading: "What Your AI Answering Service Does",
      bullets: [
        "Picks up every call, 24/7 — nights, weekends, holidays included",
        "Answers common questions on the spot",
        "Routes anything urgent straight to your team",
        "Logs every call automatically, so nothing gets lost",
        "Costs far less than a traditional live answering service",
        "No long contracts, no per-minute billing surprises",
        "Set up in days, not weeks",
      ],
    },
    metaTitle: "AI Answering Service for Business | Never Miss a Call | Velnex AI",
    metaDescription:
      "Every call answered, logged, and handled — 24/7. Velnex AI's AI answering service costs a fraction of a live answering service. Book a free demo.",
    eyebrow: "AI Answering Service",
    h1: "AI Answering Service That Makes Sure Every Call Gets a Response",
    heroSub:
      "Every call your business gets deserves an answer — not a ring-out, not a full voicemail box, not silence. Velnex AI's AI answering service picks up every time, answers the basic questions, logs the call, and flags anything that needs a callback. Some call it an AI phone answering service, others AI call answering or business phone answering service — it's the simplest, most reliable layer of call coverage a business can have.",

    problems: [
      { title: "An unanswered call is a closed door", desc: "Most missed calls don't come back. The person on the other end doesn't leave a voicemail or try again — they just move on to whoever answers next." },
      { title: "Live answering services get expensive fast", desc: "Per-minute pricing adds up quickly once call volume picks up, and it usually means a stranger from a shared call center reading a script that's months out of date." },
      { title: "Voicemail rarely gets a message left", desc: "Even when a call does go to voicemail, most people still don't leave a message anyway." },
      { title: "Every call needs an answer, not just the important ones", desc: "The businesses that lose the least are the ones where every call actually gets picked up, every single time, through real 24/7 call answering." },
    ],

    howItWorks: [
      { title: "We learn your call patterns", desc: "We look at what your business actually deals with — call volume, the most common questions, and what should happen when a call needs more than a basic answer." },
      { title: "We configure the answers", desc: "Common questions get built into automated phone answering — hours, offerings, location, policies — so callers get accurate answers instead of a generic response." },
      { title: "We connect your phone line", desc: "It connects to the number you already use through your existing AI business phone system, so there's nothing new to give out and nothing for customers to learn." },
      { title: "You go live", desc: "Most businesses are live within days, with every call answered and logged from the first one." },
    ],

    capabilities: [
      "24/7 call answering that doesn't take breaks or stop at close of business.",
      "Handles common questions directly — hours, location, availability, policies — as a genuine AI telephone answering layer.",
      "Routes anything urgent straight to your team through intelligent call routing, nothing lost in between.",
      "Logs every call — what was asked, what was answered, what needs follow-up — for full AI call management.",
      "Works with a simple phone line or a full multi-department AI business phone system.",
      "Natural back-and-forth conversation instead of a rigid button-press menu, backed by conversational AI and voice AI.",
      "Full AI call automation and business communication automation, so nothing about the call gets lost between the conversation and your records.",
      "Runs as a genuine AI call answering service and AI business phone answering layer, with AI call routing, missed call management, AI customer support, and AI customer service all handled in one system.",
    ],

    benefits: [
      { title: "Nothing goes to voicemail", desc: "Every call gets picked up and handled, day or night." },
      { title: "A fraction of live-service cost", desc: "Reliable coverage without per-minute billing or a call-center contract." },
      { title: "Nothing depends on memory", desc: "Every call is logged automatically, so follow-up never relies on someone remembering to write it down." },
      { title: "See it before you commit", desc: "Book an AI answering service demo and hear it handle a real call before deciding." },
    ],

    workflowExample: {
      title: "Example: an auto repair shop during a busy morning",
      steps: [
        "Three calls come in at once while the shop's only front-desk person is helping a customer in person.",
        "The AI answering service picks up all three simultaneously.",
        "It answers two routine questions about hours and services directly.",
        "The third caller has an urgent request, which gets flagged and routed to the shop.",
        "The shop reviews the call log later that day — nothing was missed.",
      ],
    },

    whyVelnexHeading: "An AI answering service for small business, not a shared call-center contract.",
    whyVelnexParagraph:
      "This is an AI answering service for small business specifically — sized and priced for a business handling its own call volume, not adapted from enterprise call-center software. A 24/7 AI answering service means nights, weekends, and holidays get the same coverage as a Tuesday afternoon. Comparing the best AI answering service for small business, or specifically an AI phone answering service for small business? Ready to hire AI answering service coverage today? Book an AI answering service demo and we'll show you exactly how it handles a real call for your business.",

    relatedIndustries: ["ai-for-home-services", "hotels-restaurants", "salons-spas", "law-firms"],
    relatedSolutions: ["ai-receptionist", "ai-voice-agents", "ai-appointment-booking"],
    relatedSoftware: ["ai-call-management", "ai-crm"],

    faqs: [
      { q: "Is this built for small businesses, or is it what call centers use?", a: "It's built as an AI answering service for small business specifically — sized and priced for a business handling its own call volume, not adapted from enterprise call-center software." },
      { q: "Does it work 24/7, even overnight and on weekends?", a: "Yes, that's the core of it. Nights, weekends, and holidays are covered exactly the same as a Tuesday afternoon." },
      { q: "How is this different from your AI Receptionist product?", a: "This is the simpler layer — every call answered, logged, and handled at a basic level. Our fuller call solutions build on top of this with automatic appointment booking and outbound calling." },
      { q: "Do I need a business phone system already in place?", a: "It works with whatever you already have — it doesn't require a specific phone system or new hardware." },
      { q: "What happens to calls that need more than a basic answer?", a: "They get flagged and routed to your team, along with a log of what the caller was asking about, so nothing gets silently dropped." },
      { q: "Will it work with my current business phone number?", a: "Yes — it connects to the number and phone system you already use, with nothing to switch over on your end." },
      { q: "How do I hire AI answering service coverage for my business?", a: "Book a demo. We'll look at your call volume and common questions, then show you exactly how the coverage would work." },
      { q: "Can I see an AI answering service demo first?", a: "Yes — book a demo and we'll show you exactly how a real call would be handled for your business." },
    ],
  },

  "ai-lead-qualification": {
    featureBullets: {
      heading: "What Your AI Sales Agent Does",
      bullets: [
        "Qualifies leads automatically before your team ever gets involved",
        "Follows up consistently — no lead falls through the cracks",
        "Scores leads so your team focuses on the ones worth chasing",
        "Reaches out proactively instead of waiting for a callback",
        "Routes qualified leads straight to the right person",
        "Connects directly to the CRM you already use",
        "Built around your actual sales process, not a generic script",
      ],
    },
    metaTitle: "AI Sales Agent for Lead Qualification & Outreach | Velnex AI",
    metaDescription:
      "An AI sales agent that qualifies leads, follows up automatically, and hands your team only the ones worth their time. Book a free demo.",
    eyebrow: "AI Sales Agent",
    h1: "AI Sales Agent That Qualifies Leads First",
    heroSub:
      "Not every lead deserves the same amount of your sales team's time, but most businesses treat them that way anyway. Velnex AI's AI sales agent changes that order — it works AI lead generation and AI lead qualification together, reaching out, scoring interest through AI lead scoring, and only handing your team the leads that are actually ready to talk. Think of it as an AI sales assistant and AI SDR in one, running AI sales automation around the clock.",

    problems: [
      { title: "Your sales team spends time on the wrong leads", desc: "Real selling time gets spent figuring out whether a lead is worth pursuing, while leads that would have converted sit in a queue waiting their turn." },
      { title: "Slow follow-up loses interest fast", desc: "A lead that doesn't get a response within the first hour or two has usually already moved on, and a small sales team can't respond to everyone instantly." },
      { title: "Growth just means more leads falling through the cracks", desc: "More leads coming in should be a good problem, but without lead qualification software to sort and follow up on them consistently, growth just scales the problem." },
      { title: "Manual scoring doesn't scale", desc: "Deciding by hand who's worth a call back gets harder the more leads come in, right when it matters most — which is exactly what AI lead scoring is built to solve." },
      { title: "AI prospecting needs consistency, not memory", desc: "AI prospecting and AI outreach only work if they happen on schedule every time, not whenever someone on the team remembers to follow up." },
    ],

    howItWorks: [
      { title: "We learn your sales process", desc: "We start by looking at how leads actually move through your business today — what qualifies a lead, what disqualifies one, and where things usually stall." },
      { title: "We build the qualifying conversation", desc: "Configured around your actual questions and criteria through automated lead qualification, not a generic script that treats every lead the same way." },
      { title: "We connect your CRM", desc: "Your AI CRM gets connected directly, so qualified leads and their details show up where your sales team already works." },
      { title: "You launch and we refine", desc: "Once live, we review how real leads are being qualified and keep tuning the process as real data comes in." },
    ],

    capabilities: [
      "Works like a real AI sales representative — a qualifying conversation, not a form that collects an email.",
      "Qualifies leads automatically through B2B lead qualification before your team ever talks to them.",
      "Scores leads with AI lead scoring based on how likely they actually are to convert, not just whether they filled out a form.",
      "Reaches out and follows up on schedule through sales workflow automation, every time, without depending on memory.",
      "Routes qualified leads to the right person immediately with lead routing and intelligent lead routing, not a shared inbox.",
      "Connects directly to your AI CRM, keeping records accurate as leads move through sales pipeline automation.",
      "Supports sales funnel automation and sales process automation end to end, aimed at AI revenue growth rather than just more names in a spreadsheet.",
      "Handles AI CRM Automation and AI Customer Qualification through the same Conversational AI used across the rest of your pipeline, keeping Lead Management consistent from first contact to close.",
    ],

    benefits: [
      { title: "Your team talks to the right leads", desc: "Only leads that are genuinely ready get handed off, instead of every inquiry treated equally." },
      { title: "Consistent follow-up", desc: "Outreach happens on schedule instead of getting pushed to \"later\" and quietly never happening." },
      { title: "Nothing sits in a queue", desc: "Qualified leads reach the right person immediately, not whenever someone gets around to it." },
      { title: "See it before you commit", desc: "Book an AI sales agent demo and see exactly how a lead gets qualified before it reaches your team." },
    ],

    workflowExample: {
      title: "Example: qualifying an inbound web lead",
      steps: [
        "A visitor submits a contact form asking about pricing for a service.",
        "The AI sales agent reaches out within minutes to ask a few qualifying questions.",
        "It scores the lead based on budget, timeline, and fit.",
        "A genuinely qualified lead is routed straight to the right sales rep with full context.",
        "An edge case that doesn't fit the usual pattern gets flagged for a human to review, rather than dropped.",
      ],
    },

    whyVelnexHeading: "An AI sales agent for small business, not an enterprise revenue platform.",
    whyVelnexParagraph:
      "This is an AI sales agent for small business specifically — sized for a smaller team's lead volume, not adapted down from an enterprise revenue platform. If you're weighing the best AI sales agent for small business, or looking specifically at an AI sales agent for lead generation, the difference to check for is whether qualification actually happens automatically or just gets logged for someone to review later. Ready to hire AI sales agent coverage, or want a custom AI sales agent configured around your own qualifying criteria? Book an AI sales agent demo and we'll show you exactly how a lead moves through the process.",

    relatedIndustries: ["real-estate", "insurance-agencies", "salons-spas", "ecommerce", "hotels-restaurants"],
    relatedSolutions: ["ai-voice-agents", "ai-chatbots", "ai-workflow-automation"],
    relatedSoftware: ["ai-lead-management", "ai-crm"],

    faqs: [
      { q: "Is this built for small sales teams, or is it really enterprise software?", a: "It's built for small business use specifically — sized for a smaller team's lead volume, not adapted down from an enterprise revenue platform." },
      { q: "Can I use this just for lead generation, or does it also handle qualification and follow-up?", a: "Both. You can use it for AI lead generation specifically, or for the full process — qualification, follow-up, and routing to your team." },
      { q: "Does it replace my sales team, or work alongside them?", a: "It works alongside them. It handles the qualifying and follow-up work upfront, and hands your team only the leads that are actually ready for a real conversation." },
      { q: "What if a lead doesn't fit my normal qualifying criteria but seems promising anyway?", a: "Edge cases like that get flagged for a human to look at rather than automatically dropped." },
      { q: "Will it connect to the CRM I already use?", a: "Yes — it connects to your existing CRM rather than requiring you to switch systems or manage leads in two places." },
      { q: "How do I hire AI sales agent coverage for my team?", a: "Book a demo. We'll look at your current sales process and lead volume, then show you exactly how it would work before you commit to anything." },
      { q: "Can I see an AI sales agent demo before deciding?", a: "Yes — we'll walk through exactly how a real lead gets qualified and routed before any commitment is made." },
    ],
  },
};
