import { TESTIMONIALS } from "@/data/site";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#faf8ff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(142,45,226,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Client Reviews</span>
          </div>
          <h2 className="font-black text-[clamp(32px,4vw,52px)] leading-tight mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-[16px] text-[#7c6fa0] max-w-lg mx-auto">
            Brands across Pakistan and beyond trust Bunny Printing Studio for their packaging needs.
          </p>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 mt-5 bg-white border border-[rgba(142,45,226,0.1)] rounded-2xl px-5 py-3 shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-[16px]">★</span>)}
            </div>
            <span className="font-black text-[20px] text-[#0d0d1a]" style={{fontFamily:'Sora, sans-serif'}}>4.9</span>
            <span className="text-[13px] text-[#7c6fa0]">from 200+ reviews</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[rgba(142,45,226,0.08)] p-6 card-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <span key={si} className="text-amber-400 text-[14px]">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-[14px] text-[#3d3558] leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(142,45,226,0.08)]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center text-white font-bold text-[15px] flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[13.5px] text-[#0d0d1a]">{t.name}</p>
                  <p className="text-[12px] text-[#7c6fa0]">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
