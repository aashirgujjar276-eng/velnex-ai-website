import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ChevronRight } from "lucide-react";
import { fontDisplay, fontBody, fontMono } from "../../theme.js";
import Reveal from "../../components/Reveal.jsx";
import Button from "../../components/ui/Button.jsx";
import Seo from "../../components/Seo.jsx";
import { organizationSchema, breadcrumbSchema } from "../../lib/structuredData.js";
import { blogPosts } from "../../data/blogContent.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/resources/blog" replace />;

  return (
    <>
      <Seo
        path={`/resources/blog/${post.slug}`}
        title={`${post.title} | Velnex AI Blog`}
        description={post.excerpt}
        jsonLd={[organizationSchema(), breadcrumbSchema([
          { label: "Resources", path: "/resources" },
          { label: "Blog", path: "/resources/blog" },
          { label: post.title, path: `/resources/blog/${post.slug}` },
        ])]}
      />

      {/* HERO */}
      <section className="relative pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-10 lg:px-16 bg-[#0B2E5C] overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1E5FA8]/30 blur-3xl" />
        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-xs" style={fontBody}>
            <Link to="/" className="text-white/40 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link to="/resources/blog" className="text-white/40 hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-white/80">{post.title}</span>
          </nav>
          <span className="text-[#7FC1FF] text-eyebrow" style={fontMono}>{post.category}</span>
          <h1 style={fontDisplay} className="text-h1 text-white mt-4">{post.title}</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <Link to="/resources/blog" className="inline-flex items-center gap-1.5 text-[#1E5FA8] text-sm font-semibold mb-10 hover:text-[#0B2E5C] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </Reveal>
          <div className="space-y-6">
            {post.body.map((p, i) => (
              <Reveal key={i}>
                <p style={fontBody} className="text-[#0B2E5C]/75 text-body leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#EAF4FD]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 style={fontDisplay} className="text-h2 text-[#0B2E5C] mb-6">See it work for your business.</h2>
            <Button href="/contact" variant="primary" icon={ArrowUpRight}>Book a Demo</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
