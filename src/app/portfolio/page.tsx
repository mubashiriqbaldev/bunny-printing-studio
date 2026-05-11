import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio — Client Packaging Projects",
  description: "Browse our portfolio of custom packaging projects. Real work done for real brands across Pakistan.",
};

const PROJECTS = [
  { id: 1, client: "Glow Cosmetics", type: "Custom Cosmetic Boxes", qty: "5,000 units", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", tags: ["Cosmetic", "Foil Stamping", "Rigid Box"] },
  { id: 2, client: "ArtisanBake", type: "Branded Bakery Boxes", qty: "2,000 units", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", tags: ["Food", "Custom Print", "Kraft"] },
  { id: 3, client: "StyleHouse", type: "Luxury Gift Boxes", qty: "1,500 units", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80", tags: ["Fashion", "Rigid", "Ribbon"] },
  { id: 4, client: "Luna Jewellery", type: "Custom Rigid Boxes", qty: "3,000 units", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80", tags: ["Jewellery", "Velvet Lining", "Premium"] },
  { id: 5, client: "FreshFarm", type: "Corrugated Fruit Boxes", qty: "10,000 units", image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=600&q=80", tags: ["Food", "Corrugated", "Bulk"] },
  { id: 6, client: "TechShip PK", type: "E-Commerce Mailer Boxes", qty: "8,000 units", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80", tags: ["E-Commerce", "Mailer", "Branded"] },
  { id: 7, client: "OrganicLife", type: "Eco Kraft Packaging", qty: "4,000 units", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", tags: ["Eco", "Kraft", "Sustainable"] },
  { id: 8, client: "FashionForward", type: "Apparel Shopping Bags", qty: "6,000 units", image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&q=80", tags: ["Fashion", "Paper Bags", "Luxury"] },
];

const FILTERS = ["All", "Cosmetic", "Food", "Fashion", "E-Commerce", "Jewellery", "Eco"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Our Work</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,64px)] leading-tight text-white mb-5" style={{fontFamily:'Sora, sans-serif'}}>
            Packaging We've Made <span className="gradient-text">For Our Clients</span>
          </h1>
          <p className="text-[16px] text-white/50 max-w-xl mx-auto leading-relaxed">
            A showcase of custom packaging projects delivered with precision and care. Every box tells a brand story.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {FILTERS.map((f) => (
              <button key={f} className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-all ${f === "All" ? "bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white border-transparent shadow-[0_4px_16px_rgba(142,45,226,0.3)]" : "bg-white border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30 hover:text-[#8e2de2]"}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group card-glow bg-white rounded-2xl overflow-hidden border border-[rgba(142,45,226,0.1)]">
                <div className="relative h-52 overflow-hidden bg-[#f3f0ff]">
                  <Image src={project.image} alt={project.type} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-[12px] font-bold">{project.qty}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold text-[#8e2de2] uppercase tracking-wider mb-1">{project.client}</p>
                  <h3 className="font-bold text-[14px] text-[#0d0d1a] mb-2" style={{fontFamily:'Sora, sans-serif'}}>{project.type}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-[#f3f0ff] text-[#8e2de2] px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/get-quote" className="inline-flex items-center gap-2 shimmer-btn text-white font-bold px-8 py-3.5 rounded-xl text-[15px] shadow-[0_6px_28px_rgba(142,45,226,0.4)]">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
