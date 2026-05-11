import Link from "next/link";
import { ORDER_STEPS } from "@/data/site";

export default function OrderProcessSection() {
  return (
    <section className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#8e2de2]/10 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">How It Works</span>
          </div>
          <h2 className="font-black text-[clamp(32px,4vw,52px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            How to Order — <span className="gradient-text">Simple and Straightforward</span>
          </h2>
          <p className="text-[16px] text-white/50 max-w-xl mx-auto">
            Getting your custom packaging is easy. Here's how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ORDER_STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < ORDER_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-[calc(100%_-_32px)] h-px bg-gradient-to-r from-[#8e2de2]/40 to-[#8e2de2]/10 z-10" />
              )}
              
              <div className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-[#8e2de2]/30 transition-all h-full">
                {/* Step number */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(142,45,226,0.4)] group-hover:scale-110 transition-transform">
                  <span className="font-black text-white text-[18px]" style={{fontFamily:'Sora, sans-serif'}}>{step.step}</span>
                </div>
                <h3 className="font-bold text-[16px] text-white mb-2" style={{fontFamily:'Sora, sans-serif'}}>{step.title}</h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/get-quote" className="shimmer-btn text-white font-bold px-8 py-4 rounded-xl text-[15px] inline-flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.5)] hover:shadow-[0_8px_40px_rgba(142,45,226,0.7)] transition-all hover:-translate-y-0.5">
            Get Instant Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
