import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import { PRODUCTS, INDUSTRIES } from "@/data/site";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products — Custom Boxes, Bags & Labels",
  description: "Browse our full catalog of custom packaging: mailer boxes, rigid boxes, folding cartons, paper bags, labels, and more. All fully customizable.",
};

const CATEGORIES = ["All", "Boxes", "Bags", "Labels", "Cosmetic", "Food"];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Our Products</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,64px)] leading-tight text-white mb-5" style={{fontFamily:'Sora, sans-serif'}}>
            Custom Packaging <span className="gradient-text">For Every Brand</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-xl mx-auto leading-relaxed">
            Browse our full range of custom packaging. Every product is fully customizable in size, material, and finish.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button key={cat} className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${cat === "All" ? "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white border-transparent shadow-[0_4px_16px_rgba(142,45,226,0.3)]" : "bg-white border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30 hover:text-[#8e2de2]"}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7c6fa0]" />
              <input type="text" placeholder="Search products..." className="pl-9 pr-4 py-2.5 border border-[rgba(142,45,226,0.15)] rounded-xl text-[13.5px] outline-none focus:border-[#8e2de2]/40 bg-white w-56" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PRODUCTS.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className="group card-glow bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] overflow-hidden">
                <div className="relative h-52 bg-gradient-to-br from-[#f3f0ff] to-[#ede8ff] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8e2de2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <span className="text-[10.5px] font-bold text-[#8e2de2] uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-bold text-[15px] text-[#0d0d1a] mt-1 mb-1.5 group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>{product.name}</h3>
                  <p className="text-[12.5px] text-[#7c6fa0] line-clamp-2 leading-relaxed mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.slice(0,3).map((f) => (
                      <span key={f} className="text-[11px] bg-[#f3f0ff] text-[#8e2de2] px-2.5 py-1 rounded-full font-medium border border-[#8e2de2]/10">{f}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8e2de2] group-hover:gap-2.5 transition-all">
                    Customize Now <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries quick links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-black text-[24px] text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>Shop by <span className="gradient-text">Industry</span></h2>
            <Link href="/industries" className="text-[13.5px] font-bold text-[#8e2de2] flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight size={13} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.name} href={ind.href} className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#faf8ff] border border-[rgba(142,45,226,0.08)] hover:bg-[#f3f0ff] hover:border-[#8e2de2]/20 transition-all text-center card-glow">
                <span className="text-2xl group-hover:scale-110 transition-transform">{ind.icon}</span>
                <span className="text-[12px] font-semibold text-[#3d3558] group-hover:text-[#8e2de2] transition-colors leading-tight">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
