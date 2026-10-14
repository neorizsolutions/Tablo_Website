import React from 'react';
import { 
  Users, 
  Workflow, 
  CreditCard, 
  Scan, 
  Sparkles, 
  CheckCircle2,
  Store,
  Coffee,
  Check
} from 'lucide-react';

export const BusinessBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-[#FAFCFB] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider mb-3">
            Practical Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
            Operational Advantages by Venue Model
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Tangible operational improvements engineered around real restaurant floors—without invented revenue figures, fake statistics, or unsubstantiated guarantees.
          </p>
        </div>

        {/* Dual Venue Scenarios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Box 1: Quick-Service, Cafés & Counters */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF5F0] text-[#0A3C2F] flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-[#059669]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    Quick-Service Restaurants & Cafés
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Benefits of TABLO Self-Ordering
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Eliminate Counter Bottlenecks:</span>
                    Patrons order from their personal devices while standing in line or sitting down, distributing peak load away from single-cashier desks.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Guaranteed Revenue Before Fulfillment:</span>
                    Razorpay online payments require cryptographic verification before order confirmation, preventing unpaid food prep.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Zero Cashier Re-Keying:</span>
                    Self-service desktop scanner validates paid order tokens hands-free, automatically triggering official 80mm receipts.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Anti-Double Billing Security:</span>
                    Hardware and software single-bill locks reject duplicate scans, ensuring clean reconciliation every shift.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Ideal for: Food courts, fast casuals, bakeries & express bistros</span>
            </div>
          </div>

          {/* Box 2: Dine-In & Full Service */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center">
                  <Store className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                    Full-Service Dining & Restaurants
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Benefits of TABLO Table QR
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Table-Aware Autonomous Ordering:</span>
                    Guests scan table placards to view live items, allowing them to order immediate appetizers or extra drinks without signaling servers.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Accurate Kitchen Communication:</span>
                    Dishes are dispatched digitally with table numbers and specific guest preparation notes, eliminating handwritten pad ambiguity.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Zero Counter Hardware Overhead:</span>
                    Runs completely on mobile web browsers and staff tablets/PCs, requiring no desktop laser scanners or specialized counter peripherals.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-gray-900 block">Staff Focus on True Hospitality:</span>
                    Frees waitstaff from repetitive order re-keying, allowing them to focus on meal quality, dish presentation, and table turnover.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-teal-800">
              <span>Ideal for: Dine-in restaurants, casual eateries, pubs & garden cafés</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
