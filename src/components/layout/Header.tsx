"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ShoppingCart, ChevronDown, MessageCircle } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Trust Bar */}
      <div className="hidden md:block bg-[#0d0d1a] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-1.5">
              <span className="text-[#c77dff]">✦</span> Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#c77dff]">✦</span> Free Custom Design Help
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#c77dff]">✦</span> 100% Quality Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#a09ab8]">
            <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone size={11} /> {SITE.phone}
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-[#c77dff] transition-colors">IG</a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-[#c77dff] transition-colors">FB</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(142,45,226,0.12),0_8px_32px_rgba(74,0,224,0.08)]"
          : "bg-white border-b border-[rgba(142,45,226,0.08)]"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-[72px] gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex items-center justify-center shadow-[0_4px_16px_rgba(142,45,226,0.4)]">
                  <span className="text-white font-black text-lg leading-none" style={{fontFamily:'Sora, sans-serif'}}>B</span>
                </div>
              </div>
              <div>
                <div className="font-black text-[15px] leading-tight gradient-text" style={{fontFamily:'Sora, sans-serif'}}>
                  BUNNY PRINTING
                </div>
                <div className="text-[9px] tracking-[0.2em] text-[#7c6fa0] uppercase font-medium">Studio</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200",
                      activeDropdown === item.label
                        ? "bg-[#f3f0ff] text-[#8e2de2]"
                        : "text-[#3d3558] hover:text-[#8e2de2] hover:bg-[#f3f0ff]"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={13} className={cn("transition-transform duration-200", activeDropdown === item.label ? "rotate-180" : "")} />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-[0_20px_60px_rgba(74,0,224,0.15),0_0_0_1px_rgba(142,45,226,0.1)] py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-[#3d3558] hover:text-[#8e2de2] hover:bg-[#f9f8ff] transition-all font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#8e2de2] to-[#4a00e0] flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#25d366] hover:bg-[#f0fdf4] transition-all"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
              <Link
                href="/get-quote"
                className="shimmer-btn text-white px-5 py-2.5 rounded-xl text-[13.5px] font-bold shadow-[0_4px_20px_rgba(142,45,226,0.35)] hover:shadow-[0_6px_28px_rgba(142,45,226,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Instant Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden ml-auto p-2 rounded-lg text-[#3d3558] hover:bg-[#f3f0ff] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[rgba(142,45,226,0.1)] max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between w-full py-3 text-[14px] font-semibold text-[#3d3558] border-b border-[rgba(142,45,226,0.06)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-[13px] text-[#7c6fa0] hover:text-[#8e2de2] font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#f0fdf4] text-[#25d366] font-bold text-[14px]">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <Link href="/get-quote"
                  className="flex items-center justify-center w-full py-3 rounded-xl shimmer-btn text-white font-bold text-[14px]"
                  onClick={() => setMobileOpen(false)}>
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
