import React from 'react';
import { 
  SELF_ORDERING_FEATURES, 
  TABLE_QR_FEATURES,
  ProductFeature 
} from '../data/websiteData';
import { 
  QrCode, 
  Utensils, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Ticket, 
  ScanLine, 
  Printer, 
  CheckCircle2,
  Layers,
  Smartphone,
  Monitor,
  Users,
  FileText
} from 'lucide-react';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'QrCode': return <QrCode className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Ticket': return <Ticket className="w-5 h-5" />;
      case 'ScanLine': return <ScanLine className="w-5 h-5" />;
      case 'Printer': return <Printer className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-[#FAFCFB] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
            Features Built for Hospitality
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Thoughtfully designed for busy restaurant environments—reliable digital ordering, clear order routing, and easy billing.
          </p>
        </div>

        {/* ── TABLO SELF-ORDERING ── */}
        <div id="self-ordering-features" className="mb-20 pt-4 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase bg-emerald-100/70 px-2.5 py-1 rounded-md">
                Fast-Casual & Express
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07271F] mt-2">
                TABLO Self-Ordering
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Optimized for fast-casual cafés, food courts, and quick-service counters.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl shrink-0 self-start sm:self-auto">
              Counter Scanner & Printed Receipts Supported
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SELF_ORDERING_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5F0] text-[#0A3C2F] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(feat.icon)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {feat.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#0A3C2F] transition-colors">
                    {feat.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                  <span>Self-Ordering</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLO TABLE QR ── */}
        <div id="table-qr-features" className="pt-8 scroll-mt-24 border-t border-gray-200/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-teal-800 uppercase bg-teal-100/70 px-2.5 py-1 rounded-md">
                Dine-In Hospitality
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#07271F] mt-2">
                TABLO Table QR
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                A simpler way to order at the table. Built for dine-in venues, restaurants, and sit-down cafés.
              </p>
            </div>
            <div className="text-xs font-semibold text-teal-900 bg-teal-50 border border-teal-200 px-3.5 py-2 rounded-xl shrink-0 self-start sm:self-auto">
              Table Placards & Kitchen Order Routing
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABLE_QR_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-xs hover:shadow-md hover:border-teal-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(feat.icon)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {feat.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-teal-900 transition-colors">
                    {feat.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                  <span>Table QR Engine</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
