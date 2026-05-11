"use client";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-[#25d366] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
        <div className="relative w-14 h-14 rounded-2xl bg-[#25d366] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
        <div className="absolute -top-10 right-0 bg-[#0d0d1a] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          Chat with us
        </div>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </div>
    </a>
  );
}
