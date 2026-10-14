import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Layers, QrCode } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (product?: 'self-ordering' | 'table-qr' | 'both') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Comparison', href: '#comparison' },
    { name: 'Self-Ordering', href: '#self-ordering' },
    { name: 'Table QR', href: '#table-qr' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs py-3.5'
          : 'bg-[#FAFCFB]/90 backdrop-blur-xs py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo & Sub-tag */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] rounded-lg">
            <img
              src="/logo.png"
              alt="TABLO"
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            {/* <div className="flex flex-col">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#059669]">Restaurant Solutions</span>
            </div> */}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                onBlur={() => setTimeout(() => setProductsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-[#0A3C2F] transition-colors py-1 cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-gray-500 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a
                    href="#self-ordering"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/60 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <QrCode className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-900">
                        TABLO Self-Ordering
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                        Menu QR • Razorpay • Order QR • Counter Scanner
                      </div>
                    </div>
                  </a>

                  <a
                    href="#table-qr"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/60 transition-colors group mt-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 group-hover:text-teal-900">
                        TABLO Table QR
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                        Table-aware ordering • Kitchen queue • Staff billing
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0A3C2F] transition-colors relative py-1 hover:underline hover:decoration-emerald-500 hover:decoration-2 hover:underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry('both')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A3C2F] hover:bg-[#07271F] text-white text-sm font-semibold tracking-tight transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry('both')}
              className="px-3 py-1.5 rounded-lg bg-[#0A3C2F] text-white text-xs font-semibold mr-1 cursor-pointer"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="pb-2 border-b border-gray-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Products</span>
            <div className="mt-2 space-y-1">
              <a
                href="#self-ordering"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>TABLO Self-Ordering</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">QSR & Express</span>
              </a>
              <a
                href="#table-qr"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>TABLO Table QR</span>
                <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">Dine-In</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-[#0A3C2F]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('both');
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#0A3C2F] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
