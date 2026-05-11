"use client";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FAQS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

const EXTRA_FAQS = [
  { question: "Do you offer eco-friendly or sustainable packaging options?", answer: "Yes. We offer packaging made from recycled materials, FSC-certified paperboard, biodegradable kraft, and soy-based inks. Ask us about our green packaging range when requesting a quote." },
  { question: "What is your return or remake policy?", answer: "If your order has a manufacturing defect or the print does not match your approved proof, we will reprint or refund at no cost to you. We take full responsibility for quality issues on our end." },
  { question: "Can I order different sizes in the same run?", answer: "Generally, each SKU (size + spec) is priced and produced separately. However, if you have multiple box types with similar specs, we can often run them together to reduce cost. Discuss this during your quote." },
  { question: "How do I track my order?", answer: "Once your order ships, we'll provide a tracking number via email and WhatsApp. You can track your shipment through our courier partner's website in real-time." },
];

const ALL_FAQS = [...FAQS, ...EXTRA_FAQS];

const CATEGORIES = [
  { label: "Ordering", faqs: ALL_FAQS.slice(0, 3) },
  { label: "Production", faqs: ALL_FAQS.slice(3, 5) },
  { label: "Shipping", faqs: ALL_FAQS.slice(5, 7) },
  { label: "Design & Files", faqs: ALL_FAQS.slice(7, 9) },
  { label: "Returns", faqs: ALL_FAQS.slice(9) },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">FAQs</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,60px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-[16px] text-white/50">Everything you need to know before placing your custom packaging order.</p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-4xl mx-auto px-6">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label} className="mb-10">
              <h2 className="font-black text-[18px] text-[#0d0d1a] mb-4 flex items-center gap-3" style={{fontFamily:'Sora, sans-serif'}}>
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0">{ci + 1}</span>
                {cat.label}
              </h2>
              <div className="space-y-3">
                {cat.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  return (
                    <div key={key} className={cn("rounded-2xl border transition-all duration-300", open === key ? "border-[#8e2de2]/30 bg-white shadow-[0_4px_24px_rgba(142,45,226,0.1)]" : "border-[rgba(142,45,226,0.1)] bg-white hover:border-[#8e2de2]/20")}>
                      <button onClick={() => setOpen(open === key ? null : key)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
                        <span className={cn("font-semibold text-[14.5px] leading-snug", open === key ? "text-[#8e2de2]" : "text-[#0d0d1a]")} style={{fontFamily:'Sora, sans-serif'}}>{faq.question}</span>
                        <ChevronDown size={17} className={cn("flex-shrink-0 transition-transform text-[#7c6fa0]", open === key ? "rotate-180 text-[#8e2de2]" : "")} />
                      </button>
                      {open === key && (
                        <div className="px-6 pb-5">
                          <p className="text-[14px] text-[#7c6fa0] leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] rounded-3xl p-10 text-center text-white mt-12">
            <h2 className="font-black text-[26px] mb-3" style={{fontFamily:'Sora, sans-serif'}}>Still have questions?</h2>
            <p className="text-white/70 text-[15px] mb-6">Our team is happy to help. Reach out via any channel below.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="bg-white text-[#8e2de2] font-bold px-6 py-3 rounded-xl text-[14px] hover:bg-white/90 transition-all flex items-center gap-2">
                Contact Us <ArrowRight size={14} />
              </Link>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl text-[14px] hover:bg-white/20 transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
