import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Award, Package, Globe } from "lucide-react";
import { STATS, SITE } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bunny Printing Studio — Pakistan's premium custom packaging partner based in Lahore. Our story, mission, and values.",
};

const VALUES = [
  { icon: "🎯", title: "Quality Without Compromise", desc: "Every single box that leaves our facility is inspected against our strict quality standards. If it doesn't meet the bar, we redo it — free." },
  { icon: "🤝", title: "Client-First Always", desc: "We work as a true partner, not just a vendor. Your deadlines, your budget, and your brand vision are our top priorities." },
  { icon: "⚡", title: "Speed & Reliability", desc: "We understand that in business, time is money. Our streamlined process and production capacity mean we deliver on time, every time." },
  { icon: "🌿", title: "Sustainability Commitment", desc: "We actively source eco-friendly materials and minimize waste in our production — because better packaging should be better for the planet too." },
  { icon: "💡", title: "Creative Excellence", desc: "Our in-house design team brings packaging concepts to life with precision and creativity — no generic templates, ever." },
  { icon: "🌍", title: "Global Standards, Local Heart", desc: "We produce to international quality standards while staying rooted in Pakistan — serving local brands and international clients alike." },
];

const MILESTONES = [
  { year: "2016", title: "Founded", desc: "Bunny Printing Studio launched in Gulberg, Lahore, with a single press and a big vision." },
  { year: "2018", title: "Scaled Production", desc: "Invested in digital and offset printing technology, expanding our product range to 30+ packaging types." },
  { year: "2020", title: "1 Million Boxes", desc: "Crossed the 1 million boxes delivered milestone — serving over 500 brands across Pakistan." },
  { year: "2022", title: "International Shipping", desc: "Expanded globally, shipping custom packaging to clients in the UAE, UK, and USA." },
  { year: "2024", title: "15 Million Boxes", desc: "Delivered over 15 million boxes to 5,000+ happy clients — and counting." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.2)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Our Story</span>
          </div>
          <h1 className="font-black text-[clamp(40px,6vw,72px)] leading-tight text-white mb-6" style={{fontFamily:'Sora, sans-serif'}}>
            Packaging Built on <span className="gradient-text">Passion & Precision</span>
          </h1>
          <p className="text-[17px] text-white/55 max-w-2xl mx-auto leading-relaxed">
            Bunny Printing Studio started with a simple belief: every brand deserves packaging as exceptional as its product. From Lahore to the world, we've been making that happen since 2016.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[12px] font-bold text-[#8e2de2] uppercase tracking-wide">Who We Are</span>
              </div>
              <h2 className="font-black text-[clamp(28px,4vw,44px)] leading-tight mb-5" style={{fontFamily:'Sora, sans-serif'}}>
                Pakistan's <span className="gradient-text">Premium Packaging</span> Studio
              </h2>
              <div className="space-y-4 text-[15px] text-[#7c6fa0] leading-relaxed">
                <p>
                  Bunny Printing Studio is a Lahore-based custom packaging manufacturer delivering premium-quality boxes, bags, labels, and print products to brands across Pakistan and globally.
                </p>
                <p>
                  We started as a small operation with one press and a big dream — to give Pakistani brands access to world-class packaging that could compete on any shelf, anywhere in the world. Today, we've delivered over 15 million boxes to more than 5,000 clients across cosmetics, food, fashion, e-commerce, and beyond.
                </p>
                <p>
                  What makes us different isn't just our equipment — it's our obsession with the details. Free design service. Free shipping. Relentless quality control. And a team that genuinely cares about your brand.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-[#f9f8ff] border border-[rgba(142,45,226,0.1)] rounded-2xl p-5">
                    <div className="font-black text-[32px] gradient-text leading-none mb-1" style={{fontFamily:'Sora, sans-serif'}}>{stat.value}</div>
                    <div className="text-[13px] text-[#7c6fa0] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] rounded-2xl p-6 text-white aspect-square flex flex-col justify-end">
                    <Package size={28} className="mb-3 opacity-70" />
                    <div className="font-black text-[24px]" style={{fontFamily:'Sora, sans-serif'}}>50+</div>
                    <div className="text-white/70 text-[13px]">Product types</div>
                  </div>
                  <div className="bg-[#f3f0ff] border border-[#8e2de2]/15 rounded-2xl p-5">
                    <Globe size={22} className="text-[#8e2de2] mb-2" />
                    <div className="font-black text-[22px] text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>Worldwide</div>
                    <div className="text-[13px] text-[#7c6fa0]">Shipping coverage</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#0d0d1a] rounded-2xl p-5 text-white">
                    <Award size={22} className="text-[#c77dff] mb-2" />
                    <div className="font-black text-[22px]" style={{fontFamily:'Sora, sans-serif'}}>8+ Years</div>
                    <div className="text-white/60 text-[13px]">Industry experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#4a00e0] to-[#2d00b8] rounded-2xl p-6 text-white aspect-square flex flex-col justify-end">
                    <Users size={28} className="mb-3 opacity-70" />
                    <div className="font-black text-[24px]" style={{fontFamily:'Sora, sans-serif'}}>5K+</div>
                    <div className="text-white/70 text-[13px]">Happy clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[12px] font-bold text-[#8e2de2] uppercase tracking-wide">Our Values</span>
            </div>
            <h2 className="font-black text-[clamp(28px,4vw,44px)] leading-tight" style={{fontFamily:'Sora, sans-serif'}}>
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[rgba(142,45,226,0.08)] p-6 card-glow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f3f0ff] to-[#ede8ff] flex items-center justify-center text-2xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[15px] text-[#0d0d1a] mb-2" style={{fontFamily:'Sora, sans-serif'}}>{v.title}</h3>
                <p className="text-[13.5px] text-[#7c6fa0] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[12px] font-bold text-[#8e2de2] uppercase tracking-wide">Our Journey</span>
            </div>
            <h2 className="font-black text-[clamp(28px,4vw,44px)] leading-tight" style={{fontFamily:'Sora, sans-serif'}}>
              Built Over <span className="gradient-text">8 Years</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-[#8e2de2] to-[#4a00e0]/20" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex gap-6 pl-16 relative">
                  <div className="absolute left-0 top-1 w-14 h-14 rounded-xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center shadow-[0_4px_16px_rgba(142,45,226,0.4)] flex-shrink-0">
                    <span className="font-black text-white text-[11px]" style={{fontFamily:'Sora, sans-serif'}}>{m.year}</span>
                  </div>
                  <div className="bg-[#f9f8ff] rounded-2xl border border-[rgba(142,45,226,0.08)] p-5 flex-1">
                    <h3 className="font-bold text-[15px] text-[#0d0d1a] mb-1" style={{fontFamily:'Sora, sans-serif'}}>{m.title}</h3>
                    <p className="text-[13.5px] text-[#7c6fa0] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
