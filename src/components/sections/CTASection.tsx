import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0d0d1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,45,226,0.15)_0%,transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#8e2de2] animate-pulse" />
          <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Let's Get Started</span>
        </div>

        <h2 className="font-black text-[clamp(36px,5vw,64px)] leading-tight text-white mb-6" style={{fontFamily:'Sora, sans-serif'}}>
          Ready to Create<br />
          <span className="gradient-text">Packaging That Sells?</span>
        </h2>

        <p className="text-[17px] text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of brands that trust Bunny Printing Studio for premium custom packaging. Get your free quote in under 2 minutes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link href="/get-quote" className="shimmer-btn text-white font-bold px-8 py-4 rounded-xl text-[16px] flex items-center gap-2 shadow-[0_8px_40px_rgba(142,45,226,0.5)] hover:shadow-[0_12px_50px_rgba(142,45,226,0.7)] hover:-translate-y-1 transition-all duration-300">
            Get Instant Quote <ArrowRight size={18} />
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-[#25d366]/15 border border-[#25d366]/30 text-[#4ade80] font-bold px-7 py-4 rounded-xl text-[16px] hover:bg-[#25d366]/25 transition-all">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/35 font-medium">
          <span>✓ Free design included</span>
          <span>✓ Free shipping</span>
          <span>✓ No hidden fees</span>
          <span>✓ 100% quality guaranteed</span>
        </div>
      </div>
    </section>
  );
}
