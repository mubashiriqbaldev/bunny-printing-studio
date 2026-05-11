"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Upload } from "lucide-react";
import { PRODUCTS, SITE } from "@/data/site";

const STEPS = ["Your Details", "Box Specs", "Finishing", "Review"];

export default function GetQuotePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    product: "", length: "", width: "", height: "", quantity: "",
    material: "", printing: "", finishing: "", message: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_rgba(142,45,226,0.4)]">
            <CheckCircle2 size={36} className="text-white" />
          </div>
          <h1 className="font-black text-[32px] mb-3" style={{fontFamily:'Sora, sans-serif'}}>
            Quote Request <span className="gradient-text">Received!</span>
          </h1>
          <p className="text-[#7c6fa0] text-[15px] mb-6 leading-relaxed">
            Thank you, {form.name}! Our team will review your requirements and send a detailed quote to {form.email} within 24 hours.
          </p>
          <div className="bg-[#f9f8ff] border border-[#8e2de2]/15 rounded-2xl p-5 mb-6 text-left">
            <p className="text-[13px] font-semibold text-[#3d3558] mb-3">What happens next:</p>
            {["Our team reviews your requirements", "We prepare a detailed quote and design mockup", "You receive the quote via email within 24 hours", "Approve and we start production"].map((s, i) => (
              <div key={i} className="flex items-center gap-2.5 py-2 border-b border-[#8e2de2]/8 last:border-0">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">{i+1}</div>
                <span className="text-[13px] text-[#7c6fa0]">{s}</span>
              </div>
            ))}
          </div>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="shimmer-btn text-white font-bold px-6 py-3 rounded-xl text-[14px] inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(142,45,226,0.35)]">
            Need faster response? WhatsApp us →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8ff] py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f3f0ff] border border-[#8e2de2]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[12px] font-bold text-[#8e2de2] tracking-wide uppercase">Free Quote</span>
          </div>
          <h1 className="font-black text-[clamp(32px,5vw,52px)] leading-tight mb-3" style={{fontFamily:'Sora, sans-serif'}}>
            Get Your <span className="gradient-text">Custom Quote</span>
          </h1>
          <p className="text-[#7c6fa0] text-[16px]">Fill in the form below and we'll get back to you within 24 hours.</p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all ${i <= step ? 'bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white' : 'bg-white border border-[rgba(142,45,226,0.15)] text-[#7c6fa0]'}`}>
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black">{i + 1}</span>
                <span className="hidden sm:inline">{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className="w-6 h-px bg-[rgba(142,45,226,0.2)]" />}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="bg-white rounded-3xl border border-[rgba(142,45,226,0.1)] shadow-[0_8px_40px_rgba(74,0,224,0.08)] p-8">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-bold text-[20px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Your Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {field:"name", label:"Full Name *", placeholder:"Your name", type:"text"},
                  {field:"email", label:"Email Address *", placeholder:"you@company.com", type:"email"},
                  {field:"phone", label:"Phone / WhatsApp *", placeholder:"+92 3XX XXXXXXX", type:"tel"},
                  {field:"company", label:"Company / Brand Name", placeholder:"Optional", type:"text"},
                ].map(({field, label, placeholder, type}) => (
                  <div key={field}>
                    <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">{label}</label>
                    <input type={type} value={(form as any)[field]} onChange={e => update(field, e.target.value)} placeholder={placeholder}
                      className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] text-[#0d0d1a] outline-none focus:border-[#8e2de2]/50 focus:ring-2 focus:ring-[#8e2de2]/10 placeholder-[#c4bdd8] transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-bold text-[20px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Box Specifications</h2>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Product Type *</label>
                <select value={form.product} onChange={e => update('product', e.target.value)}
                  className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] text-[#0d0d1a] outline-none focus:border-[#8e2de2]/50 bg-white">
                  <option value="">Select product type</option>
                  {PRODUCTS.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Dimensions (in inches)</label>
                <div className="grid grid-cols-3 gap-3">
                  {["length","width","height"].map(dim => (
                    <div key={dim}>
                      <label className="block text-[11px] text-[#7c6fa0] capitalize mb-1">{dim}</label>
                      <input type="number" placeholder="0" value={(form as any)[dim]} onChange={e => update(dim, e.target.value)}
                        className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-3 py-3 text-[14px] text-[#0d0d1a] outline-none focus:border-[#8e2de2]/50 text-center" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Quantity *</label>
                <select value={form.quantity} onChange={e => update('quantity', e.target.value)}
                  className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] text-[#0d0d1a] outline-none focus:border-[#8e2de2]/50 bg-white">
                  <option value="">Select quantity</option>
                  {["100-500","500-1,000","1,000-5,000","5,000-10,000","10,000+","Custom"].map(q => <option key={q} value={q}>{q} units</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Material Preference</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Kraft Paperboard","SBS Paperboard","Corrugated","Rigid Board","Eco-Friendly","Not Sure"].map(m => (
                    <button key={m} onClick={() => update('material', m)}
                      className={`py-2.5 px-3 rounded-xl border text-[12.5px] font-medium transition-all text-left ${form.material === m ? 'border-[#8e2de2] bg-[#f3f0ff] text-[#8e2de2]' : 'border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-bold text-[20px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Printing & Finishing</h2>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-2">Printing Option</label>
                <div className="grid grid-cols-2 gap-2">
                  {["CMYK Full Color","Single Color","Pantone Spot Color","No Print"].map(p => (
                    <button key={p} onClick={() => update('printing', p)}
                      className={`py-3 px-4 rounded-xl border text-[13px] font-medium transition-all ${form.printing === p ? 'border-[#8e2de2] bg-[#f3f0ff] text-[#8e2de2]' : 'border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-2">Finishing Options (select all that apply)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["Gloss Lamination","Matte Lamination","Spot UV","Foil Stamping","Embossing","Debossing","Soft Touch","None"].map(f => (
                    <button key={f} onClick={() => update('finishing', f)}
                      className={`py-2.5 px-3 rounded-xl border text-[12.5px] font-medium transition-all ${form.finishing === f ? 'border-[#8e2de2] bg-[#f3f0ff] text-[#8e2de2]' : 'border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:border-[#8e2de2]/30'}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Upload Artwork (optional)</label>
                <div className="border-2 border-dashed border-[rgba(142,45,226,0.2)] rounded-xl p-8 text-center hover:border-[#8e2de2]/40 transition-colors cursor-pointer">
                  <Upload size={24} className="mx-auto text-[#7c6fa0] mb-2" />
                  <p className="text-[13.5px] text-[#7c6fa0]">Drop files here or click to upload</p>
                  <p className="text-[12px] text-[#c4bdd8] mt-1">AI, EPS, PDF, PSD — max 50MB</p>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#3d3558] mb-1.5">Additional Notes</label>
                <textarea value={form.message} onChange={e => update('message', e.target.value)} rows={3} placeholder="Any specific requirements, references, or questions..."
                  className="w-full border border-[rgba(142,45,226,0.15)] rounded-xl px-4 py-3 text-[14px] text-[#0d0d1a] outline-none focus:border-[#8e2de2]/50 resize-none placeholder-[#c4bdd8]" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-bold text-[20px] text-[#0d0d1a] mb-6" style={{fontFamily:'Sora, sans-serif'}}>Review Your Quote Request</h2>
              <div className="space-y-3">
                {[
                  { label: "Name", value: form.name || "—" },
                  { label: "Email", value: form.email || "—" },
                  { label: "Phone", value: form.phone || "—" },
                  { label: "Product", value: form.product || "—" },
                  { label: "Dimensions", value: form.length && form.width && form.height ? `${form.length} × ${form.width} × ${form.height} in` : "—" },
                  { label: "Quantity", value: form.quantity || "—" },
                  { label: "Material", value: form.material || "—" },
                  { label: "Printing", value: form.printing || "—" },
                  { label: "Finishing", value: form.finishing || "—" },
                ].map(({label, value}) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-[rgba(142,45,226,0.06)] last:border-0">
                    <span className="text-[13px] font-medium text-[#7c6fa0]">{label}</span>
                    <span className="text-[13.5px] font-semibold text-[#0d0d1a]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[#f3f0ff] rounded-xl p-4 text-[13px] text-[#7c6fa0]">
                ✓ Free custom design help included &nbsp;|&nbsp; ✓ Free shipping &nbsp;|&nbsp; ✓ 100% quality guaranteed
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(142,45,226,0.08)]">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold border border-[rgba(142,45,226,0.15)] text-[#7c6fa0] hover:text-[#8e2de2] hover:border-[#8e2de2]/30 transition-all ${step === 0 ? 'invisible' : ''}`}>
              ← Back
            </button>
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="shimmer-btn text-white font-bold px-7 py-2.5 rounded-xl text-[14px] flex items-center gap-2 shadow-[0_4px_20px_rgba(142,45,226,0.35)]">
                Continue <ArrowRight size={15} />
              </button>
            ) : (
              <button onClick={() => setSubmitted(true)} className="shimmer-btn text-white font-bold px-7 py-2.5 rounded-xl text-[14px] flex items-center gap-2 shadow-[0_4px_20px_rgba(142,45,226,0.35)]">
                Submit Quote Request <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
