import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Packaging Samples — Request a Free Sample",
  description: "Request a free packaging sample from Bunny Printing Studio. Plain samples, printed samples, and production samples available.",
};

const SAMPLE_TYPES = [
  {
    type: "Plain Sample",
    price: "Free",
    icon: "📦",
    description: "Get an unprinted sample in your chosen size and material. Perfect for checking dimensions, structural integrity, and material quality before committing to a print run.",
    features: ["Your exact dimensions", "Your chosen material", "No artwork required", "Delivered within 5-7 days"],
    color: "from-[#f3f0ff] to-[#ede8ff]",
    border: "border-[#8e2de2]/15",
  },
  {
    type: "Printed Sample",
    price: "Small fee",
    icon: "🖨️",
    description: "Receive a sample with your artwork printed on it. Check color accuracy, print quality, and overall design before approving a bulk order.",
    features: ["Your artwork printed", "Full-color reproduction", "Check design accuracy", "Delivered within 7-10 days"],
    color: "from-[#8e2de2] to-[#4a00e0]",
    border: "border-transparent",
    featured: true,
  },
  {
    type: "Production Sample",
    price: "Standard rate",
    icon: "🏭",
    description: "A full production-quality sample manufactured using your exact specs, materials, and finishes. The gold standard for large orders where getting it right the first time is critical.",
    features: ["Full production quality", "All finishes applied", "Exact material spec", "Approve before bulk run"],
    color: "from-[#f3f0ff] to-[#ede8ff]",
    border: "border-[#8e2de2]/15",
  },
];

export default function PackagingSamplesPage() {
  return (
    <>
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Free Samples</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,60px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Request a Free <span className="gradient-text">Packaging Sample</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-relaxed">
            Not sure about material or print quality? Request a sample before placing your full order. Our samples let you feel the quality, check the sizing, and approve the design — before production begins.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SAMPLE_TYPES.map((s) => (
              <div key={s.type} className={`rounded-3xl border ${s.border} overflow-hidden ${s.featured ? 'shadow-[0_12px_40px_rgba(142,45,226,0.3)] scale-[1.02]' : 'shadow-sm bg-white'}`}>
                <div className={`bg-gradient-to-br ${s.color} p-8 ${s.featured ? 'text-white' : ''}`}>
                  <span className="text-4xl block mb-4">{s.icon}</span>
                  <h3 className="font-black text-[22px] mb-1" style={{fontFamily:'Sora, sans-serif'}}>{s.type}</h3>
                  <span className={`text-[13px] font-bold ${s.featured ? 'text-white/80' : 'text-[#8e2de2]'}`}>{s.price}</span>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-[14px] text-[#7c6fa0] leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13.5px] text-[#3d3558]">
                        <CheckCircle2 size={15} className="text-[#8e2de2] flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-quote" className={`flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-[14px] transition-all ${s.featured ? 'shimmer-btn text-white shadow-[0_4px_20px_rgba(142,45,226,0.4)]' : 'bg-[#f3f0ff] border border-[#8e2de2]/20 text-[#8e2de2] hover:bg-gradient-to-r hover:from-[#8e2de2] hover:to-[#4a00e0] hover:text-white hover:border-transparent'}`}>
                    Request This Sample <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] p-10">
            <h2 className="font-black text-[24px] text-center mb-8" style={{fontFamily:'Sora, sans-serif'}}>How the <span className="gradient-text">Sample Process</span> Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step:"1", title:"Request Online", desc:"Fill in our sample request form with your product type, dimensions, and material preference." },
                { step:"2", title:"We Prepare", desc:"Our team prepares your sample based on your specifications. Plain samples take 3-5 days, printed 7-10 days." },
                { step:"3", title:"Delivered Free", desc:"Your sample is shipped to your address free of charge anywhere in Pakistan." },
                { step:"4", title:"Approve & Order", desc:"Happy with the sample? Place your full order and we'll begin production immediately." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center mx-auto mb-4 shadow-[0_4px_16px_rgba(142,45,226,0.35)]">
                    <span className="font-black text-white text-[16px]" style={{fontFamily:'Sora, sans-serif'}}>{s.step}</span>
                  </div>
                  <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-1.5" style={{fontFamily:'Sora, sans-serif'}}>{s.title}</h3>
                  <p className="text-[13px] text-[#7c6fa0] leading-relaxed">{s.desc}</p>
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
