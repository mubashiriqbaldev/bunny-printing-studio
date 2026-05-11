import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industries — Custom Packaging for Every Sector",
  description: "Bunny Printing Studio provides custom packaging solutions for cosmetics, food, e-commerce, fashion, retail, and pharmaceutical industries.",
};

const INDUSTRY_DETAIL = [
  { ...INDUSTRIES[0], products: ["Cosmetic Boxes", "Serum Boxes", "Perfume Boxes", "Foundation Boxes", "Cream Boxes"], desc: "The beauty industry demands packaging that conveys luxury and quality at first glance. Our cosmetic packaging combines premium materials, high-definition printing, and elegant finishes to create boxes that perfectly represent your beauty brand." },
  { ...INDUSTRIES[1], products: ["Food Boxes", "Bakery Boxes", "Kraft Boxes", "Window Boxes", "Paper Bags"], desc: "Food packaging must be safe, vibrant, and durable. We offer food-grade materials, FDA-compliant inks, and custom designs that keep products fresh while making your brand unforgettable." },
  { ...INDUSTRIES[2], products: ["Mailer Boxes", "Corrugated Boxes", "Poly Mailers", "Tissue Paper", "Stickers"], desc: "E-commerce brands win on unboxing. Our custom mailer boxes and shipping packaging are designed to protect products during transit while creating a memorable delivery experience that drives repeat business." },
  { ...INDUSTRIES[3], products: ["Apparel Boxes", "Garment Bags", "Tissue Paper", "Shopping Bags", "Tags"], desc: "Fashion is about the complete experience. We create packaging that reflects the premium nature of your apparel brand — from rigid boxes to luxury shopping bags and branded tissue wrapping." },
  { ...INDUSTRIES[4], products: ["Retail Boxes", "Display Boxes", "Counter Displays", "Shelf Boxes", "POS Displays"], desc: "Retail shelf packaging must capture attention in seconds. Our packaging is designed with visual hierarchy, brand consistency, and structural integrity to drive purchase decisions at point of sale." },
  { ...INDUSTRIES[5], products: ["Pharma Boxes", "Medicine Cartons", "Supplement Boxes", "Labels", "Insert Cards"], desc: "Pharmaceutical packaging requires precision, compliance, and clarity. We produce high-accuracy cartons with exact color matching, required labeling spaces, and materials that meet industry standards." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Industries</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,60px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Packaging Solutions <span className="gradient-text">Across Every Industry</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-xl mx-auto">
            Every industry has unique packaging requirements. We've built expertise across them all.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {INDUSTRY_DETAIL.map((ind, i) => (
              <div key={ind.name} className={`bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] p-8 grid md:grid-cols-[1fr_1.5fr] gap-8 items-start card-glow`}>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8e2de2]/10 to-[#4a00e0]/10 border border-[#8e2de2]/15 flex items-center justify-center text-3xl mb-4">
                    {ind.icon}
                  </div>
                  <h2 className="font-black text-[22px] text-[#0d0d1a] mb-2" style={{fontFamily:'Sora, sans-serif'}}>{ind.name}</h2>
                  <p className="text-[14px] text-[#7c6fa0] leading-relaxed mb-5">{ind.desc}</p>
                  <Link href="/get-quote" className="inline-flex items-center gap-2 shimmer-btn text-white font-bold px-5 py-2.5 rounded-xl text-[13.5px] shadow-[0_4px_16px_rgba(142,45,226,0.35)]">
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#7c6fa0] uppercase tracking-wider mb-3">Popular Products</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.products.map((p) => (
                      <span key={p} className="bg-[#f3f0ff] border border-[#8e2de2]/12 text-[#8e2de2] text-[13px] font-medium px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-[#8e2de2] hover:to-[#4a00e0] hover:text-white hover:border-transparent transition-all cursor-pointer">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
