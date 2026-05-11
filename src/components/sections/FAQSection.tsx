"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#8e2de2]/4 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">FAQ</span>
            </div>
            <h2 className="font-black text-[clamp(32px,4vw,50px)] leading-tight mb-5" style={{fontFamily:'Sora, sans-serif'}}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-[16px] text-[#7c6fa0] leading-relaxed mb-8">
              Everything you need to know before placing your order. Can't find what you're looking for? Contact our team directly.
            </p>
            <div className="space-y-3">
              <Link href="/faq" className="flex items-center gap-2 text-[#8e2de2] font-bold text-[14px] hover:gap-3 transition-all">
                View All FAQs →
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-[#7c6fa0] font-medium text-[14px] hover:text-[#8e2de2] transition-colors">
                Contact Support →
              </Link>
            </div>

            {/* Samples teaser */}
            <div className="mt-10 bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] rounded-2xl p-6 text-white">
              <div className="text-2xl mb-3">📦</div>
              <h3 className="font-bold text-[17px] mb-2" style={{fontFamily:'Sora, sans-serif'}}>Request a Free Sample</h3>
              <p className="text-white/75 text-[13.5px] leading-relaxed mb-4">
                Not sure about quality? Request a sample before your bulk order.
              </p>
              <Link href="/packaging-samples" className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white font-bold text-[13px] px-4 py-2.5 rounded-xl hover:bg-white/25 transition-all">
                Request Sample →
              </Link>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border transition-all duration-300",
                  open === i
                    ? "border-[#8e2de2]/30 bg-[#f9f8ff] shadow-[0_4px_24px_rgba(142,45,226,0.1)]"
                    : "border-[rgba(142,45,226,0.1)] bg-white hover:border-[#8e2de2]/20"
                )}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={cn("font-semibold text-[14.5px] leading-tight", open === i ? "text-[#8e2de2]" : "text-[#0d0d1a]")} style={{fontFamily:'Sora, sans-serif'}}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "flex-shrink-0 transition-transform duration-300 text-[#7c6fa0]",
                      open === i ? "rotate-180 text-[#8e2de2]" : ""
                    )}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[14px] text-[#7c6fa0] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
