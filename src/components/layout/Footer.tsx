import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Share2, Globe, ArrowRight } from "lucide-react";
import { SITE, NAV_ITEMS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1a] text-white relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#8e2de2]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#4a00e0]/6 blur-[100px] pointer-events-none" />

      {/* Pre-footer CTA */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-[#8e2de2]/20 to-[#4a00e0]/20 rounded-2xl border border-[#8e2de2]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-2xl mb-1" style={{fontFamily:"Sora, sans-serif"}}>
                Ready to elevate your packaging?
              </h3>
              <p className="text-white/60 text-[14px]">Get a free quote in under 2 minutes. No commitment required.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366]/15 border border-[#25d366]/30 text-[#4ade80] font-semibold text-sm hover:bg-[#25d366]/25 transition-all">
                <MessageCircle size={15} /> WhatsApp
              </a>
              <Link href="/get-quote"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl shimmer-btn text-white font-bold text-sm shadow-[0_4px_20px_rgba(142,45,226,0.4)] hover:shadow-[0_6px_30px_rgba(142,45,226,0.6)] transition-all">
                Get Instant Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center">
                <span className="text-white font-black text-lg" style={{fontFamily:'Sora, sans-serif'}}>B</span>
              </div>
              <div>
                <div className="font-black text-[14px] gradient-text" style={{fontFamily:'Sora, sans-serif'}}>BUNNY PRINTING</div>
                <div className="text-[9px] tracking-[0.2em] text-white/40 uppercase">Studio</div>
              </div>
            </div>
            <p className="text-white/50 text-[13.5px] leading-relaxed mb-6">
              Premium custom packaging for brands that mean business. Based in Lahore, serving Pakistan and the world.
            </p>
            <div className="space-y-3">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-colors">
                <Phone size={13} className="text-[#8e2de2]" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-colors">
                <Mail size={13} className="text-[#8e2de2]" /> {SITE.email}
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-white/60">
                <MapPin size={13} className="text-[#8e2de2] flex-shrink-0 mt-0.5" /> {SITE.address}
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/60">
                <Clock size={13} className="text-[#8e2de2]" /> Mon–Sat, 10AM–6PM PKT
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href={SITE.instagram} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8e2de2]/20 hover:border-[#8e2de2]/40 transition-all">
                <Share2 size={15} />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#8e2de2]/20 hover:border-[#8e2de2]/40 transition-all">
                <Globe size={15} />
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25d366]/20 hover:border-[#25d366]/40 transition-all text-[#4ade80]">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-[13px] tracking-[0.12em] uppercase text-white/40 mb-5">Products</h4>
            <ul className="space-y-2.5">
              {["Mailer Boxes", "Rigid Boxes", "Folding Cartons", "Display Boxes", "Gift Boxes", "Cosmetic Boxes", "Food Boxes", "Paper Bags", "Kraft Boxes", "Die Cut Boxes"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-[13.5px] text-white/55 hover:text-white transition-colors link-hover">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[13px] tracking-[0.12em] uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Industries", href: "/industries" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "Reviews", href: "/reviews" },
                { label: "FAQs", href: "/faq" },
                { label: "How To Order", href: "/how-to-order" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13.5px] text-white/55 hover:text-white transition-colors link-hover">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[13px] tracking-[0.12em] uppercase text-white/40 mb-5">Stay in the Loop</h4>
            <p className="text-[13.5px] text-white/50 mb-5 leading-relaxed">
              Subscribe for exclusive offers, packaging tips, and new product launches.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[13.5px] text-white placeholder-white/30 outline-none focus:border-[#8e2de2]/50 focus:bg-white/8 transition-all"
              />
              <button className="w-full shimmer-btn text-white font-bold text-[13.5px] py-3 rounded-xl shadow-[0_4px_16px_rgba(142,45,226,0.3)] hover:shadow-[0_6px_24px_rgba(142,45,226,0.5)] transition-all flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-white/6">
              <p className="text-[12px] text-white/30 mb-3">Help Desk</p>
              <div className="space-y-2">
                {[
                  { label: "Materials Guide", href: "/materials" },
                  { label: "Artwork Guidelines", href: "/artwork-guidelines" },
                  { label: "Packaging Samples", href: "/packaging-samples" },
                ].map((item) => (
                  <Link key={item.label} href={item.href} className="block text-[13px] text-white/50 hover:text-white transition-colors">{item.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-white/30">
            © 2025 Bunny Printing Studio. All Rights Reserved. Made in Lahore 🇵🇰
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <Link key={item} href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
