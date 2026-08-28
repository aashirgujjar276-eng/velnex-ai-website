import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, Newspaper } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";
import { blogPosts } from "../../data/blogContent.js";

export default function Blog() {
  return (
    <>
      <Seo
        path="/resources/blog"
        title="Blog | Velnex AI"
        description="Practical thinking on AI receptionists, voice agents, and automation for small businesses."
        jsonLd={[organizationSchema(), breadcrumbSchema([{ label: "Resources", path: "/resources" }, { label: "Blog", path: "/resources/blog" }])]}
      />

      {/* HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/resources" className="text-white/40 hover:text-white transition-colors">Resources</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">Blog</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>Blog</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4 mb-5">
            Thinking on AI and automation.
          </h1>
          <p style={fontBody} className="text-body-lg text-white/80 max-w-2xl mb-8">
            Practical writing on missed calls, follow-up, and what actually changes when a
            business automates its front line.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <Reveal key={post.slug}>
                <Link to={`/resources/blog/${post.slug}`} className="block h-full">
                  <Card className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center mb-5">
                      <Newspaper className="w-6 h-6 text-[#1E5FA8]" />
                    </div>
                    <span className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                    <h3 style={fontDisplay} className="text-[#0B2E5C] text-base uppercase tracking-tight mt-2 mb-2">{post.title}</h3>
                    <p style={fontBody} className="text-[#0B2E5C]/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-[#1E5FA8] text-xs font-semibold inline-flex items-center gap-1">
                      Read more <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">Have a question a post didn't cover?</h2>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
