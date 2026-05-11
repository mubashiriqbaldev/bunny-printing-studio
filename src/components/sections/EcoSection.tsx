import Link from "next/link";

export default function EcoSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#0d4a1a] to-[#0a3515] rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#25d366]/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#4ade80]/5 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(74,222,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-[12px] font-bold text-[#4ade80] tracking-wide uppercase">Sustainability First</span>
              </div>
              <h2 className="font-black text-[clamp(28px,3.5vw,44px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
                Sustainable Packaging — <span style={{color:'#4ade80'}}>Good for Your Brand</span>, Better for the Planet
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed mb-8">
                We are committed to responsible manufacturing. Our packaging materials include eco-friendly, recyclable, and biodegradable options so you can build your brand without compromising on sustainability.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "🌿", label: "Eco-Friendly Materials" },
                  { icon: "♻️", label: "Recyclable Options" },
                  { icon: "🌱", label: "Biodegradable" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/8 hover:border-[#4ade80]/20 transition-all">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-white/70 text-[12.5px] font-medium leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/materials" className="inline-flex items-center gap-2 bg-[#4ade80]/15 border border-[#4ade80]/30 text-[#4ade80] font-bold px-6 py-3 rounded-xl text-[14px] hover:bg-[#4ade80]/25 transition-all">
                Learn About Our Materials →
              </Link>
            </div>

            {/* Right */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "100%", label: "Recyclable packaging options available", icon: "♻️" },
                { stat: "60%", label: "Reduction in carbon footprint vs standard packaging", icon: "🌍" },
                { stat: "FSC", label: "Certified materials from sustainable sources", icon: "🌲" },
                { stat: "Zero", label: "Harmful chemicals in our ink and coating process", icon: "✅" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-[#4ade80]/20 transition-all">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-black text-[26px] leading-none text-[#4ade80] mb-1" style={{fontFamily:'Sora, sans-serif'}}>{item.stat}</div>
                  <p className="text-white/50 text-[12px] leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
