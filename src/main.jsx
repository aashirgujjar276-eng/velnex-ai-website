import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Layout from "./Layout.jsx";
import { redirects } from "./data/redirects.js";

// Route-based code splitting: each page ships as its own chunk instead of
// one large bundle, so a visit to /pricing doesn't also download every
// solution/industry/software detail page's code. Improves initial load
// time, which matters for both real users and Core Web Vitals.
const Home = lazy(() => import("./pages/Home.jsx"));
const Solutions = lazy(() => import("./pages/Solutions.jsx"));
const SolutionDetail = lazy(() => import("./pages/solutions/SolutionDetail.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const IndustryRouter = lazy(() => import("./pages/industries/IndustryRouter.jsx"));
const AISoftware = lazy(() => import("./pages/AISoftware.jsx"));
const AISoftwareDetail = lazy(() => import("./pages/ai-software/AISoftwareDetail.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));
const FAQs = lazy(() => import("./pages/resources/FAQs.jsx"));
const Blog = lazy(() => import("./pages/resources/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/resources/BlogPost.jsx"));
const About = lazy(() => import("./pages/company/About.jsx"));
const WhyVelnexAI = lazy(() => import("./pages/company/WhyVelnexAI.jsx"));
const Careers = lazy(() => import("./pages/company/Careers.jsx"));
const Contact = lazy(() => import("./pages/company/Contact.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Privacy = lazy(() => import("./pages/legal/Privacy.jsx"));
const Terms = lazy(() => import("./pages/legal/Terms.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            {/* Built pages */}
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<Terms />} />

            {/* Solutions */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<SolutionDetail />} />

            {/* Industries */}
            <Route path="/industries" element={<Industries />} />
            {/* One dynamic route handles every industry URL — IndustryRouter
                decides between the hub template (Home Services, Salons &
                Spas, Hotels & Restaurants) and the detail template based on
                the matched slug, so useParams() always resolves correctly. */}
            <Route path="/industries/:slug" element={<IndustryRouter />} />

            {/* AI Software */}
            <Route path="/ai-software" element={<AISoftware />} />
            <Route path="/ai-software/:slug" element={<AISoftwareDetail />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/faqs" element={<FAQs />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/blog/:slug" element={<BlogPost />} />

            {/* Company */}
            <Route path="/about" element={<About />} />
            <Route path="/why-velnex-ai" element={<WhyVelnexAI />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirects — old URLs that moved. Also mirrored in
                public/_redirects for a real edge-level 301 on Cloudflare;
                this client-side fallback only fires if that edge rule is
                ever missed (e.g. a cached SPA shell navigating in-app). */}
            {redirects.map((r) => (
              <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
            ))}

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
