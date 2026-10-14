import React from 'react';
import { ArrowRight, CheckCircle2, QrCode, Layers } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: (product?: 'self-ordering' | 'table-qr' | 'both') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F9F6] via-[#FAFCFB] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-emerald-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-100/30 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#064E3B] text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
            Modern Restaurant Ordering & Billing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#07271F] tracking-tight leading-[1.12]">
            Smarter Ordering. <br />
            <span className="text-[#059669]">Simpler Restaurant Operations.</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Help your restaurant serve customers more smoothly with digital ordering, easy billing, and clear order management.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry('both')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A3C2F] hover:bg-[#07271F] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span>Discuss Your Restaurant's Needs</span>
              <ArrowRight className="w-5 h-5 text-emerald-400" />
            </button>

            <a
              href="#comparison"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-medium text-base border border-gray-200/90 shadow-2xs hover:border-gray-300 transition-all duration-200 cursor-pointer"
            >
              <span>Compare Solutions</span>
            </a>
          </div>
        </div>

        {/* Two Distinct Product Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card A: TABLO Self-Ordering */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-emerald-600/30 shadow-xl hover:shadow-2xl hover:border-emerald-600 transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-6 right-6">
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-1 rounded-full">
                For Express Cafés & Fast Food
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EBF5F0] text-[#0A3C2F] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <QrCode className="w-7 h-7 text-[#059669]" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07271F] mb-3">
                TABLO Self-Ordering
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Customers scan the menu QR at the counter, browse dishes, pay securely online, and scan their Order QR at the counter for instant printed receipts.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-gray-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>5-minute temporary stock hold while paying</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Online payments verified before order confirmation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Separate Order QR for quick counter scanning</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast counter scanning and automatic receipt printing</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-3">
              <a
                href="#self-ordering"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A3C2F] hover:bg-[#07271F] text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Explore Workflow</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
              <button
                onClick={() => onOpenEnquiry('self-ordering')}
                className="py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 transition-colors cursor-pointer"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Card B: TABLO Table QR */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-teal-600/30 shadow-xl hover:shadow-2xl hover:border-teal-600 transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-6 right-6">
              <span className="text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 px-3 py-1 rounded-full">
                For Dine-In Restaurants
              </span>
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layers className="w-7 h-7 text-teal-600" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07271F] mb-3">
                TABLO Table QR
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Guests scan the QR code on their dining table, browse the menu, and place orders directly from their seats. Orders appear instantly on kitchen and staff screens.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-gray-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Table-specific QR placards (Table 01, Table 02, etc.)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Order directly from seats without waiting for staff</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Live order tracking on kitchen and floor screens</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Smooth kitchen coordination and table-based billing</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-3">
              <a
                href="#table-qr"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Explore Workflow</span>
                <ArrowRight className="w-4 h-4 text-teal-300" />
              </a>
              <button
                onClick={() => onOpenEnquiry('table-qr')}
                className="py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold border border-gray-200 transition-colors cursor-pointer"
              >
                Enquire
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
