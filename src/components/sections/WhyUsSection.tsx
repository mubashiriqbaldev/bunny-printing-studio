import { WHY_US } from "@/data/site";
import Link from "next/link";

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#faf8ff] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8e2de2]/6 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Why Bunny Printing</span>
            </div>
            <h2 className="font-black text-[clamp(32px,4vw,50px)] leading-tight mb-5" style={{fontFamily:'Sora, sans-serif'}}>
              The Packaging Partner <br /><span className="gradient-text">Your Brand Deserves</span>
            </h2>
            <p className="text-[16px] text-[#7c6fa0] leading-relaxed mb-8">
              From local startups to established brands, we deliver custom packaging that protects your products and amplifies your brand identity — with zero compromise on quality.
            </p>
            
            <div className="space-y-4 mb-10">
              {WHY_US.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[rgba(142,45,226,0.08)] card-glow group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f3f0ff] to-[#ede8ff] border border-[#8e2de2]/15 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-1" style={{fontFamily:'Sora, sans-serif'}}>{item.title}</h3>
                    <p className="text-[13.5px] text-[#7c6fa0] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/get-quote" className="shimmer-btn text-white font-bold px-7 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.4)]">
              Get Free Consultation →
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5K+", label: "Happy Clients", icon: "🤝", color: "from-[#8e2de2] to-[#4a00e0]" },
                { number: "15M+", label: "Boxes Delivered", icon: "📦", color: "from-[#4a00e0] to-[#2d00b8]" },
                { number: "100%", label: "Quality Guaranteed", icon: "🛡️", color: "from-[#7209b7] to-[#8e2de2]" },
                { number: "Free", label: "Design & Shipping", icon: "✨", color: "from-[#c77dff] to-[#8e2de2]" },
              ].map((item) => (
                <div key={item.label} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white card-glow`}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-black text-[32px] leading-none mb-1" style={{fontFamily:'Sora, sans-serif'}}>{item.number}</div>
                  <div className="text-white/75 text-[13px] font-medium">{item.label}</div>
                </div>
              ))}
            </div>
            
            {/* Testimonial snippet */}
            <div className="mt-4 bg-white rounded-2xl p-5 border border-[rgba(142,45,226,0.1)] shadow-[0_8px_32px_rgba(74,0,224,0.08)]">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-[14px]">★</span>
                ))}
                <span className="text-[12px] text-[#7c6fa0] ml-1">4.9/5 — 200+ reviews</span>
              </div>
              <p className="text-[13.5px] text-[#3d3558] italic leading-relaxed">
                "Bunny Printing Studio completely transformed our brand. The quality is exceptional and the team is incredibly responsive."
              </p>
              <p className="text-[12px] text-[#7c6fa0] mt-2 font-medium">— Ayesha S., Glow Cosmetics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
