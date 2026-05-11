import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/data/site";

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Industries We Serve</span>
            </div>
            <h2 className="font-black text-[clamp(32px,4vw,50px)] leading-tight mb-5" style={{fontFamily:'Sora, sans-serif'}}>
              Packaging Solutions <br /><span className="gradient-text">Across Every Industry</span>
            </h2>
            <p className="text-[16px] text-[#7c6fa0] leading-relaxed mb-8">
              From local startups to established brands, Bunny Printing Studio delivers custom packaging for businesses across Pakistan and beyond. Every industry has unique packaging needs — we meet them all.
            </p>
            <Link href="/industries" className="shimmer-btn text-white font-bold px-7 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.4)] hover:shadow-[0_8px_36px_rgba(142,45,226,0.6)] transition-all">
              Explore Industries <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Industry cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INDUSTRIES.map((industry, i) => (
              <Link
                href={industry.href}
                key={industry.name}
                className="group card-glow bg-[#faf8ff] border border-[rgba(142,45,226,0.1)] rounded-2xl p-5 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e2de2]/10 to-[#4a00e0]/10 border border-[#8e2de2]/15 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-1.5 group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>
                  {industry.name}
                </h3>
                <p className="text-[13px] text-[#7c6fa0] leading-relaxed mb-3">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#8e2de2] opacity-0 group-hover:opacity-100 transition-all">
                  Learn more <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
