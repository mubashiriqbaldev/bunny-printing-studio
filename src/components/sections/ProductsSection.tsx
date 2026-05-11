import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/site";

export default function ProductsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,45,226,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Our Collections</span>
          </div>
          <h2 className="font-black text-[clamp(32px,4vw,52px)] leading-tight mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Custom Packaging <br /><span className="gradient-text">For Every Brand</span>
          </h2>
          <p className="text-[16px] text-[#7c6fa0] leading-relaxed">
            Browse our full range of boxes, bags, labels, and print products — each fully customizable for your brand.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.id}
              className="group card-glow bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#f3f0ff] to-[#ede8ff] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#8e2de2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="bg-white text-[#8e2de2] font-bold text-[13px] px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    Customize Now <ArrowRight size={12} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-1 group-hover:text-[#8e2de2] transition-colors" style={{fontFamily:'Sora, sans-serif'}}>
                  {product.name}
                </h3>
                <p className="text-[12.5px] text-[#7c6fa0] leading-relaxed mb-3 line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#8e2de2] group-hover:gap-2 transition-all">
                  Customize Now <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#8e2de2]/25 text-[#8e2de2] font-bold px-8 py-3.5 rounded-xl text-[15px] hover:bg-[#f3f0ff] hover:border-[#8e2de2]/40 transition-all card-glow"
          >
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
