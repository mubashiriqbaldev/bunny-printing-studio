"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, CheckCircle2, Share2, Globe } from "lucide-react";
import { SITE } from "@/data/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", subject:"", message:"" });
  const update = (f: string, v: string) => setForm(p => ({...p, [f]: v}));

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#0d0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(142,45,226,0.18)_0%,transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[12px] font-bold text-[#c77dff] tracking-wide uppercase">Get In Touch</span>
          </div>
          <h1 className="font-black text-[clamp(38px,6vw,64px)] leading-tight text-white mb-4" style={{fontFamily:'Sora, sans-serif'}}>
            Let's Create Something <span className="gradient-text">Extraordinary</span>
          </h1>
          <p className="text-[17px] text-white/50 leading-relaxed">
            Have a project in mind? Reach out and our team will be happy to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] shadow-[0_8px_40px_rgba(74,0,224,0.07)] p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center mx-auto mb-5 shadow-[0_6px_24px_rgba(142,45,226,0.4)]">
                    <CheckCircle2 size={30} className="text-white" />
                  </div>
                  <h3 className="font-black text-[24px] mb-2" style={{fontFamily:'Sora, sans-serif'}}>Message Sent!</h3>
                  <p className="text-[#7c6fa0] text-[15px] mb-5">We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#8e2de2] font-semibold text-[14px] hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="font-black text-[22px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Send Us a Message</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[{f:"name",l:"Full Name *",p:"Your name"},{f:"email",l:"Email *",p:"you@company.com",t:"email"}].map(({f,l,p,t}) => (
                        <div key={f}>
                          <label className="block text-[12.5px] font-semibold text-[#3d3558] mb-1.5">{l}</label>
                          <input type={t||"text"} value={(form as any)[f]} onChange={e=>update(f,e.target.value)} placeholder={p}
                            className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#8e2de2]/50 focus:ring-2 focus:ring-[#8e2de2]/10 placeholder-[#c4bdd8] transition-all" />
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[{f:"phone",l:"Phone",p:"+92 3XX XXXXXXX",t:"tel"},{f:"company",l:"Company",p:"Your brand name"}].map(({f,l,p,t}) => (
                        <div key={f}>
                          <label className="block text-[12.5px] font-semibold text-[#3d3558] mb-1.5">{l}</label>
                          <input type={t||"text"} value={(form as any)[f]} onChange={e=>update(f,e.target.value)} placeholder={p}
                            className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#8e2de2]/50 focus:ring-2 focus:ring-[#8e2de2]/10 placeholder-[#c4bdd8] transition-all" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#3d3558] mb-1.5">Subject</label>
                      <select value={form.subject} onChange={e=>update("subject",e.target.value)}
                        className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#8e2de2]/50 bg-white text-[#3d3558]">
                        <option value="">Select a subject</option>
                        <option>Custom Quote Request</option>
                        <option>Product Information</option>
                        <option>Existing Order Query</option>
                        <option>Sample Request</option>
                        <option>Partnership / Wholesale</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-semibold text-[#3d3558] mb-1.5">Message *</label>
                      <textarea value={form.message} onChange={e=>update("message",e.target.value)} rows={5}
                        placeholder="Tell us about your project, product, or question..."
                        className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#8e2de2]/50 resize-none placeholder-[#c4bdd8] transition-all" />
                    </div>
                    <button onClick={() => setSubmitted(true)} className="w-full shimmer-btn text-white font-bold py-3.5 rounded-xl text-[15px] flex items-center justify-center gap-2 shadow-[0_6px_24px_rgba(142,45,226,0.35)]">
                      Send Message <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] p-6">
                <h3 className="font-bold text-[17px] text-[#0d0d1a] mb-5" style={{fontFamily:'Sora, sans-serif'}}>Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Phone size={16} className="text-[#8e2de2]" />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
                    { icon: <Mail size={16} className="text-[#8e2de2]" />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                    { icon: <MapPin size={16} className="text-[#8e2de2]" />, label: "Address", value: SITE.address },
                    { icon: <Clock size={16} className="text-[#8e2de2]" />, label: "Hours", value: SITE.hours },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-[#f3f0ff] border border-[#8e2de2]/15 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-[11.5px] font-semibold text-[#7c6fa0] uppercase tracking-wide mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[14px] font-medium text-[#0d0d1a] hover:text-[#8e2de2] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-[14px] font-medium text-[#0d0d1a]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 bg-[#f0fdf4] border border-[#25d366]/25 rounded-2xl p-5 hover:bg-[#dcfce7] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#25d366] flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle size={22} className="text-white" fill="white" />
                </div>
                <div>
                  <p className="font-bold text-[14.5px] text-[#0d0d1a]">Chat on WhatsApp</p>
                  <p className="text-[13px] text-[#7c6fa0]">Fastest way to get a response</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-[#7c6fa0] group-hover:text-[#25d366] transition-colors" />
              </a>

              <div className="bg-white rounded-2xl border border-[rgba(142,45,226,0.1)] p-5">
                <p className="text-[12.5px] font-semibold text-[#7c6fa0] uppercase tracking-wide mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <Share2 size={18} />, href: SITE.instagram, label: "Instagram" },
                    { icon: <Globe size={18} />, href: SITE.facebook, label: "Facebook" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f3f0ff] border border-[#8e2de2]/15 text-[#8e2de2] font-semibold text-[13px] hover:bg-gradient-to-r hover:from-[#8e2de2] hover:to-[#4a00e0] hover:text-white hover:border-transparent transition-all">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-[16px] mb-2" style={{fontFamily:'Sora, sans-serif'}}>Need a Quick Quote?</h3>
                <p className="text-white/70 text-[13.5px] mb-4">Fill in our quote form and we'll respond with pricing within 24 hours.</p>
                <a href="/get-quote" className="inline-flex items-center gap-2 bg-white text-[#8e2de2] font-bold text-[13.5px] px-5 py-2.5 rounded-xl hover:bg-white/90 transition-all">
                  Get Instant Quote <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
