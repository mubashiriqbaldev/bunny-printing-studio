"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Star, Package, Award, Truck } from "lucide-react";
import { SITE, STATS } from "@/data/site";

const TRUST_ITEMS = [
  { icon: <Star size={13} className="text-amber-400" fill="currentColor" />, text: "4.9/5 Rating" },
  { icon: <Package size={13} className="text-[#8e2de2]" />, text: "15M+ Boxes" },
  { icon: <Award size={13} className="text-[#8e2de2]" />, text: "8+ Years" },
  { icon: <Truck size={13} className="text-[#8e2de2]" />, text: "Free Shipping" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(142,45,226,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,0,224,0.05)_0%,transparent_60%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(#8e2de2 1px, transparent 1px), linear-gradient(90deg, #8e2de2 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Animated orbs */}
      <div className="orb absolute top-20 right-[20%] w-80 h-80 bg-[#8e2de2]/12" style={{animationDelay:'0s'}} />
      <div className="orb absolute bottom-20 left-[10%] w-64 h-64 bg-[#4a00e0]/8" style={{animationDelay:'4s'}} />
      <div className="orb absolute top-1/2 right-[5%] w-48 h-48 bg-[#c77dff]/10" style={{animationDelay:'8s'}} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8e2de2] animate-pulse" />
              <span className="text-[12.5px] font-semibold text-[#8e2de2]">Pakistan's Premium Packaging Studio</span>
            </div>

            <h1 className="font-black leading-[1.05] mb-6" style={{fontFamily:'Sora, sans-serif', fontSize:'clamp(42px, 5.5vw, 72px)'}}>
              Custom Packaging
              <br />
              <span className="gradient-text">That Sells.</span>
              <br />
              <span className="text-[#3d3558]">Guaranteed.</span>
            </h1>

            <p className="text-[17px] text-[#7c6fa0] leading-relaxed mb-8 max-w-lg">
              {SITE.tagline} We craft premium custom boxes, bags, and labels for brands across Pakistan and worldwide — with free design, free shipping, and unmatched quality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/get-quote"
                className="shimmer-btn text-white font-bold px-7 py-3.5 rounded-xl text-[15px] flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.4)] hover:shadow-[0_8px_36px_rgba(142,45,226,0.6)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Instant Quote <ArrowRight size={16} />
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#f0fdf4] border border-[#25d366]/30 text-[#16a34a] font-bold px-6 py-3.5 rounded-xl text-[15px] hover:bg-[#dcfce7] transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <Link
                href="/products"
                className="flex items-center gap-2 text-[#7c6fa0] font-semibold px-5 py-3.5 text-[14px] hover:text-[#8e2de2] transition-colors"
              >
                View Products <ArrowRight size={14} />
              </Link>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[12.5px] text-[#7c6fa0] font-medium">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:block">
            {/* Main mockup card */}
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-[#8e2de2]/20 to-[#4a00e0]/20 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-[#f9f8ff] to-[#f0ecff] rounded-3xl border border-[#8e2de2]/15 p-8 shadow-[0_24px_80px_rgba(74,0,224,0.15)]">
                {/* Product mockup grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Mailer Box", color: "from-[#8e2de2] to-[#4a00e0]", emoji: "📦" },
                    { label: "Rigid Box", color: "from-[#4a00e0] to-[#2d00b8]", emoji: "🎁" },
                    { label: "Cosmetic Box", color: "from-[#c77dff] to-[#8e2de2]", emoji: "💄" },
                    { label: "Food Box", color: "from-[#7209b7] to-[#4a00e0]", emoji: "🍰" },
                  ].map((item) => (
                    <div key={item.label} className={`bg-gradient-to-br ${item.color} rounded-2xl p-5 aspect-square flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform cursor-pointer`}>
                      <span className="text-3xl">{item.emoji}</span>
                      <span className="text-white text-xs font-bold text-center">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-3">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-3 text-center border border-[#8e2de2]/10 shadow-sm">
                      <div className="font-black text-[18px] gradient-text" style={{fontFamily:'Sora, sans-serif'}}>{stat.value}</div>
                      <div className="text-[10px] text-[#7c6fa0] font-medium mt-0.5 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Live order badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(74,0,224,0.15)] border border-[#8e2de2]/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                    <span className="text-[12px] font-bold text-[#0d0d1a]">New order placed</span>
                  </div>
                  <p className="text-[11px] text-[#7c6fa0] mt-0.5">Mailer boxes — 500 units</p>
                </div>

                {/* Design badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(74,0,224,0.15)] border border-[#8e2de2]/15">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]">✨</span>
                    <div>
                      <p className="text-[12px] font-bold text-[#0d0d1a]">Free Design</p>
                      <p className="text-[11px] text-[#7c6fa0]">Included always</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#8e2de2]/8 bg-white/60 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex items-center gap-0">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
            {["Cosmetics Brand", "Bakery Co.", "FashionHouse", "OrganicLife", "TechShop PK", "GlowBeauty", "ArtisanBake", "StyleHouse", "Cosmetics Brand", "Bakery Co.", "FashionHouse", "OrganicLife", "TechShop PK", "GlowBeauty", "ArtisanBake", "StyleHouse"].map((brand, i) => (
              <span key={i} className="text-[13px] font-bold text-[#c4bdd8] tracking-wide uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
