import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-[80px] mb-4">📦</div>
        <h1 className="font-black text-[clamp(48px,8vw,96px)] gradient-text leading-none mb-4" style={{fontFamily:'Sora, sans-serif'}}>404</h1>
        <h2 className="font-black text-[24px] text-[#0d0d1a] mb-3" style={{fontFamily:'Sora, sans-serif'}}>Page Not Found</h2>
        <p className="text-[#7c6fa0] text-[15px] mb-8 leading-relaxed">Looks like this page has been unpacked and moved. Let's get you back on track.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="shimmer-btn text-white font-bold px-6 py-3 rounded-xl text-[14px] flex items-center gap-2 shadow-[0_4px_20px_rgba(142,45,226,0.35)]">
            Back to Home <ArrowRight size={14} />
          </Link>
          <Link href="/products" className="bg-[#f3f0ff] border border-[#8e2de2]/20 text-[#8e2de2] font-bold px-6 py-3 rounded-xl text-[14px] hover:bg-gradient-to-r hover:from-[#8e2de2] hover:to-[#4a00e0] hover:text-white transition-all">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
