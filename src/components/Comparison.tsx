import React from 'react';
import { PRODUCT_COMPARISON } from '../data/websiteData';
import { Check, X, ArrowRight, QrCode, Layers } from 'lucide-react';

interface ComparisonProps {
  onOpenEnquiry: (product?: 'self-ordering' | 'table-qr' | 'both') => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="comparison" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-3">
            Product Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
            Which Solution Fits Your Venue?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Compare key features side by side to choose the best ordering setup for your restaurant floor.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FAFCFB] rounded-3xl border border-gray-200/90 shadow-md overflow-hidden max-w-5xl mx-auto">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-gray-100/90 border-b border-gray-200 p-5 sm:p-6 text-sm font-bold text-gray-900">
            <div className="col-span-4 sm:col-span-4 text-gray-500 uppercase text-xs tracking-wider self-center">
              Feature
            </div>
            
            <div className="col-span-4 sm:col-span-4 text-center">
              <div className="inline-flex items-center gap-1.5 text-[#0A3C2F] font-extrabold text-sm sm:text-base">
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>TABLO Self-Ordering</span>
              </div>
              <div className="text-[11px] font-normal text-emerald-800 mt-0.5">
                Fast-casual & Counter Pickup
              </div>
            </div>

            <div className="col-span-4 sm:col-span-4 text-center">
              <div className="inline-flex items-center gap-1.5 text-teal-900 font-extrabold text-sm sm:text-base">
                <Layers className="w-4 h-4 text-teal-600" />
                <span>TABLO Table QR</span>
              </div>
              <div className="text-[11px] font-normal text-teal-700 mt-0.5">
                Full-Service Dine-In
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200/70">
            {PRODUCT_COMPARISON.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 hover:bg-white transition-colors text-xs sm:text-sm items-center"
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-gray-800 pr-2">
                  {row.feature}
                </div>
                
                <div className="col-span-4 sm:col-span-4 text-gray-700 px-3 text-center sm:text-left leading-snug">
                  {row.selfOrdering}
                </div>

                <div className="col-span-4 sm:col-span-4 text-gray-700 px-3 text-center sm:text-left leading-snug">
                  {row.tableQr}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callouts in Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 p-6 bg-gray-50 border-t border-gray-200 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-emerald-200 text-left space-y-2">
              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Select TABLO Self-Ordering if:
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                You want customers to pay online up-front, eliminate cashier lines, and collect orders at a dedicated station with instant thermal bill prints.
              </p>
              <button
                onClick={() => onOpenEnquiry('self-ordering')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>Enquire about Self-Ordering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-teal-200 text-left space-y-2">
              <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                Select TABLO Table QR if:
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                You run table service where diners order from their seats, servers deliver prepared food, and billing is consolidated per table.
              </p>
              <button
                onClick={() => onOpenEnquiry('table-qr')}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 pt-1 cursor-pointer"
              >
                <span>Enquire about Table QR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
