import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import { PRODUCTS, SITE } from "@/data/site";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Custom Packaging`,
    description: product.description,
  };
}

const MATERIALS = ["Kraft Paperboard (Eco-friendly)", "SBS Paperboard (Premium)", "Corrugated Cardboard", "Rigid Board (Luxury)", "Recycled Materials"];
const FINISHES = ["Gloss Lamination", "Matte Lamination", "Spot UV Coating", "Hot Foil Stamping (Gold/Silver)", "Embossing", "Debossing", "Soft Touch Coating"];
const PRINTING = ["CMYK Full Color (Offset)", "Pantone Spot Colors", "Digital Printing", "Metallic Inks", "White Ink Printing"];

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#faf8ff] border-b border-[rgba(142,45,226,0.08)] py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-[12.5px] text-[#7c6fa0]">
          <Link href="/" className="hover:text-[#8e2de2] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#8e2de2] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#0d0d1a] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Gallery */}
            <div className="space-y-4 lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3f0ff] to-[#ede8ff] border border-[rgba(142,45,226,0.1)]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[product.image, product.image, product.image].map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-[#f3f0ff] border border-[rgba(142,45,226,0.1)] cursor-pointer hover:border-[#8e2de2]/30 transition-colors">
                    <Image src={img} alt={`${product.name} view ${i+1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block bg-[#f3f0ff] border border-[#8e2de2]/20 text-[#8e2de2] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">{product.category}</span>
              <h1 className="font-black text-[clamp(28px,4vw,44px)] leading-tight text-[#0d0d1a] mb-3" style={{fontFamily:'Sora, sans-serif'}}>{product.name}</h1>
              <p className="text-[16px] text-[#7c6fa0] leading-relaxed mb-6">{product.description}</p>

              {/* Stars */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />)}
                <span className="text-[13px] text-[#7c6fa0] font-medium">4.9/5 — based on 200+ orders</span>
              </div>

              {/* Features */}
              <div className="bg-[#f9f8ff] rounded-2xl border border-[rgba(142,45,226,0.08)] p-5 mb-6">
                <h3 className="font-bold text-[14px] text-[#0d0d1a] mb-3" style={{fontFamily:'Sora, sans-serif'}}>Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[13px] text-[#3d3558] font-medium">
                      <CheckCircle2 size={14} className="text-[#8e2de2] flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Free Design Service", "Free Shipping", "100% Quality Guaranteed", "Min. 100 Units"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-[12px] bg-white border border-[rgba(142,45,226,0.12)] text-[#7c6fa0] px-3 py-1.5 rounded-full font-medium">
                    <CheckCircle2 size={11} className="text-[#8e2de2]" /> {b}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Link href="/get-quote" className="flex items-center justify-center gap-2 w-full shimmer-btn text-white font-bold py-4 rounded-xl text-[15px] shadow-[0_6px_28px_rgba(142,45,226,0.4)] hover:shadow-[0_8px_36px_rgba(142,45,226,0.6)] hover:-translate-y-0.5 transition-all">
                  Get Custom Quote <ArrowRight size={16} />
                </Link>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#f0fdf4] border border-[#25d366]/25 text-[#16a34a] font-bold py-3.5 rounded-xl text-[14.5px] hover:bg-[#dcfce7] transition-all">
                  <MessageCircle size={16} /> Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs tabs */}
      <section className="py-16 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Materials Available", icon: "🧱", items: MATERIALS },
              { title: "Printing Options", icon: "🖨️", items: PRINTING },
              { title: "Finishing Options", icon: "✨", items: FINISHES },
            ].map((section) => (
              <div key={section.title} className="bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="font-bold text-[15px] text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-[#7c6fa0]">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-black text-[24px] mb-8 text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>Related <span className="gradient-text">Products</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group card-glow bg-[#faf8ff] rounded-2xl border border-[rgba(142,45,226,0.1)] overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[14px] text-[#0d0d1a] mb-1 group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>{p.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#8e2de2]">View Details <ArrowRight size={11} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
