import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog — Packaging Tips, Guides & Industry Insights",
  description: "Read expert articles on custom packaging design, materials, branding, and industry trends from the Bunny Printing Studio team.",
};

const POSTS = [
  { slug: "why-custom-packaging-matters", title: "Why Custom Packaging Is Your Best Marketing Investment in 2025", excerpt: "In a crowded market, your packaging is often the first physical interaction a customer has with your brand. Here's why investing in custom packaging delivers measurable ROI.", category: "Branding", readTime: "6 min", date: "March 12, 2025", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80", featured: true },
  { slug: "choose-right-packaging-material", title: "How to Choose the Right Packaging Material for Your Product", excerpt: "Kraft, SBS, corrugated, rigid board — understanding the difference between packaging materials is key to making the right choice for your product and budget.", category: "Materials", readTime: "8 min", date: "February 28, 2025", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80" },
  { slug: "unboxing-experience-guide", title: "The Complete Guide to Creating a Memorable Unboxing Experience", excerpt: "Unboxing videos are one of the fastest-growing content formats on social media. Learn how to design packaging that your customers will share.", category: "Design", readTime: "7 min", date: "February 15, 2025", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80" },
  { slug: "eco-friendly-packaging-pakistan", title: "Eco-Friendly Packaging Options Available in Pakistan", excerpt: "Sustainability is no longer a trend — it's a business requirement. Here's a guide to the eco-friendly packaging options available in Pakistan.", category: "Sustainability", readTime: "5 min", date: "January 30, 2025", image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?w=600&q=80" },
  { slug: "cosmetic-packaging-tips", title: "Cosmetic Packaging That Sells: Design Tips for Beauty Brands", excerpt: "Cosmetic packaging is as much about brand identity as it is about protection. Here's how to design boxes that fly off the shelf.", category: "Design", readTime: "6 min", date: "January 15, 2025", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80" },
  { slug: "mailer-boxes-ecommerce", title: "Why Mailer Boxes Are Essential for E-Commerce Brands in 2025", excerpt: "Custom mailer boxes have become the default choice for e-commerce brands that care about the unboxing experience. Here's everything you need to know.", category: "E-Commerce", readTime: "5 min", date: "January 5, 2025", image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" },
];

const CATS = ["All", "Branding", "Materials", "Design", "Sustainability", "E-Commerce"];

export default function BlogPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Insights & Guides</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,60px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Packaging <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-[16px] text-white/50">Expert guides, design tips, and industry insights from the Bunny Printing Studio team.</p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map((c) => (
              <button key={c} className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${c === "All" ? "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white border-transparent shadow-[0_4px_16px_rgba(142,45,226,0.3)]" : "bg-white border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30 hover:text-[#8e2de2]"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="group block mb-10 bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] overflow-hidden card-glow">
            <div className="grid md:grid-cols-[1.4fr_1fr]">
              <div className="relative h-64 md:h-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-103 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Featured</div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#8e2de2] mb-3">
                  <Tag size={11} /> {featured.category}
                </span>
                <h2 className="font-black text-[22px] leading-snug text-[#0d0d1a] mb-3 group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>{featured.title}</h2>
                <p className="text-[14px] text-[#7c6fa0] leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-[12px] text-[#7c6fa0] mb-5">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime} read</span>
                  <span>{featured.date}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#8e2de2] group-hover:gap-2.5 transition-all">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group card-glow bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 text-[#8e2de2] text-[11px] font-bold px-2.5 py-1 rounded-full">{post.category}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-2 leading-snug group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>{post.title}</h3>
                  <p className="text-[13px] text-[#7c6fa0] line-clamp-2 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[12px] text-[#7c6fa0]">
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <span className="text-[12.5px] font-bold text-[#8e2de2] flex items-center gap-1 group-hover:gap-2 transition-all">Read <ArrowRight size={11} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
