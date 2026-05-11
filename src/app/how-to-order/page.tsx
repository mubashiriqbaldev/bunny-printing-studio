import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ORDER_STEPS, SITE } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How To Order — Simple Custom Packaging Process",
  description: "Learn how to order custom packaging from Bunny Printing Studio in 4 simple steps. Quote, design, approve, deliver.",
};

const EXTENDED_STEPS = [
  { ...ORDER_STEPS[0], detail: "Use our online quote form or WhatsApp us directly. Tell us your box type, dimensions (L × W × H), quantity, material preference, and any finishing options. The more detail you provide, the faster we can quote you accurately.", icon: "📋" },
  { ...ORDER_STEPS[1], detail: "Once we have your requirements, our in-house design team creates a digital mockup of your packaging — completely free. You'll see exactly how your artwork will look on the box before we print a single unit.", icon: "🎨" },
  { ...ORDER_STEPS[2], detail: "Review the digital proof carefully. Request any changes — we'll revise until you're completely satisfied. Once you approve, confirm your order and we collect payment via EasyPaisa, JazzCash, bank transfer, or card.", icon: "✅" },
  { ...ORDER_STEPS[3], detail: "We manufacture your packaging to your exact specifications using premium materials and high-quality printing. Once complete, your order ships free to your door. You'll receive a tracking number to monitor delivery.", icon: "🚚" },
];

export default function HowToOrderPage() {
  return (
    <>
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Simple Process</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,60px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            How to Order <span className="gradient-text">Custom Packaging</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-xl mx-auto">Getting your custom packaging is simple and straightforward. Here's everything you need to know.</p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 mb-16">
            {EXTENDED_STEPS.map((step, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] p-8 flex gap-6 items-start card-glow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex flex-col items-center justify-center shadow-[0_6px_20px_rgba(142,45,226,0.4)]">
                    <span className="text-white text-[10px] font-bold opacity-70">STEP</span>
                    <span className="text-white font-black text-[22px] leading-none" style={{fontFamily:'Sora, sans-serif'}}>{i+1}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{step.icon}</span>
                    <h2 className="font-black text-[20px] text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>{step.title}</h2>
                  </div>
                  <p className="text-[14.5px] text-[#7c6fa0] leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] p-8 mb-8">
            <h2 className="font-black text-[22px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Typical <span className="gradient-text">Timeline</span></h2>
            <div className="space-y-3">
              {[
                { phase: "Quote Response", time: "Within 24 hours", color: "bg-[#8e2de2]" },
                { phase: "Design Mockup", time: "1-3 business days", color: "bg-[#4a00e0]" },
                { phase: "Revision Rounds", time: "1-2 days per round", color: "bg-[#7209b7]" },
                { phase: "Production", time: "7-12 business days", color: "bg-[#560bad]" },
                { phase: "Delivery", time: "1-3 days after dispatch", color: "bg-[#3a0ca3]" },
              ].map((t) => (
                <div key={t.phase} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${t.color}`} />
                  <div className="flex-1 flex items-center justify-between bg-[#f9f8ff] rounded-xl px-4 py-3">
                    <span className="text-[14px] font-semibold text-[#3d3558]">{t.phase}</span>
                    <span className="text-[13px] text-[#8e2de2] font-bold">{t.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-quote" className="shimmer-btn text-white font-bold px-8 py-4 rounded-xl text-[15px] flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.4)]">
              Start Your Order <ArrowRight size={16} />
            </Link>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#f0fdf4] border border-[#25d366]/25 text-[#16a34a] font-bold px-7 py-4 rounded-xl text-[15px] hover:bg-[#dcfce7] transition-all">
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
