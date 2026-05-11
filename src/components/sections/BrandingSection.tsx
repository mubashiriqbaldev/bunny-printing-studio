import Link from "next/link";

const BENEFITS = [
  {
    icon: "🏷️",
    title: "Strengthen Brand Recognition",
    desc: "Your logo, colors, and design language printed on every box make your brand instantly recognizable — in-store, online, and everywhere in between.",
  },
  {
    icon: "🛡️",
    title: "Protect Your Products",
    desc: "Precisely sized, quality-made packaging reduces damage and increases the perceived value of your product during transit and on the shelf.",
  },
  {
    icon: "🎁",
    title: "Create a Memorable Unboxing Experience",
    desc: "Thoughtfully designed packaging turns every delivery into a moment your customer wants to share on social media.",
  },
  {
    icon: "🔄",
    title: "Drive Repeat Business",
    desc: "Great packaging signals quality and professionalism — customers come back to brands that care about the details.",
  },
];

export default function BrandingSection() {
  return (
    <section className="py-24 bg-[#faf8ff] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-tl from-[#8e2de2]/6 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Branding Benefits</span>
            </div>
            <h2 className="font-black text-[clamp(32px,4vw,50px)] leading-tight mb-5" style={{fontFamily:'Sora, sans-serif'}}>
              How Custom Packaging <span className="gradient-text">Elevates Your Brand</span>
            </h2>
            <p className="text-[16px] text-[#7c6fa0] leading-relaxed mb-8">
              Custom packaging goes far beyond protection — it's the first physical touchpoint your customer has with your brand. Here's how the right packaging builds your business:
            </p>

            <div className="space-y-4 mb-8">
              {BENEFITS.map((b, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8e2de2]/10 to-[#4a00e0]/10 border border-[#8e2de2]/15 flex items-center justify-center text-[18px] flex-shrink-0 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[14.5px] text-[#0d0d1a] mb-1" style={{fontFamily:'Sora, sans-serif'}}>{b.title}</h3>
                    <p className="text-[13.5px] text-[#7c6fa0] leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="shimmer-btn text-white font-bold px-7 py-3.5 rounded-xl text-[15px] inline-flex items-center gap-2 shadow-[0_6px_28px_rgba(142,45,226,0.4)]">
              Get Free Consultation →
            </Link>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
              <h3 className="font-black text-[22px] mb-2 relative" style={{fontFamily:'Sora, sans-serif'}}>Packaging That Speaks For Your Brand</h3>
              <p className="text-white/70 text-[14px] mb-8 relative">Every box we make is a brand ambassador.</p>
              
              <div className="grid grid-cols-2 gap-3 relative">
                {[
                  { label: "Brand Recall", value: "+73%" },
                  { label: "Repeat Purchases", value: "+52%" },
                  { label: "Social Shares", value: "+86%" },
                  { label: "Customer Trust", value: "+91%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                    <div className="font-black text-[28px] leading-none mb-1" style={{fontFamily:'Sora, sans-serif'}}>{stat.value}</div>
                    <div className="text-white/60 text-[12px] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-white/15 relative">
                <p className="text-white/80 text-[13px] italic">
                  "Custom packaging is the single highest-ROI investment you can make in your customer experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
