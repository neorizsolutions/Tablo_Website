import React, { useState } from 'react';
import { 
  SELF_ORDERING_CUSTOMER_WORKFLOW, 
  SELF_ORDERING_MANAGEMENT_MODULES, 
  WorkflowCard,
  ManagementModule 
} from '../data/websiteData';
import { 
  QrCode, 
  Clock, 
  CreditCard, 
  Ticket, 
  ScanLine, 
  Printer, 
  ShoppingBag, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Maximize2,
  Utensils,
  PackageCheck,
  BarChart3,
  Monitor,
  TrendingUp,
  Download,
  AlertCircle
} from 'lucide-react';

export const SelfOrderingWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'management'>('customer');
  const [activeModalCard, setActiveModalCard] = useState<WorkflowCard | null>(null);

  return (
    <section id="self-ordering" className="py-24 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
              Counter & Express Dining
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
              TABLO Self-Ordering
            </h2>
            <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed font-normal">
              Digital customer ordering, online payments, clear pickup Order QRs, counter scanning, and automated receipt printing.
            </p>
          </div>

          {/* Perspective View Switcher */}
          <div className="inline-flex p-1.5 bg-gray-100/90 rounded-2xl border border-gray-200/80 self-start lg:self-end">
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'customer'
                  ? 'bg-[#0A3C2F] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Customer Journey</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300">
                8 Steps
              </span>
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'management'
                  ? 'bg-[#0A3C2F] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Restaurant Management</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300">
                8 Modules
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            PERSPECTIVE 1: 8-STEP CUSTOMER JOURNEY
            ========================================================================= */}
        {activeTab === 'customer' && (
          <div>
            <div className="mb-8 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  8
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#07271F]">Simple 8-Step Customer Flow</h4>
                  <p className="text-xs text-gray-600">
                    Scan Menu QR → Browse Menu → Checkout with 5-Minute Hold → Online Payment → <strong>Receive Order QR</strong> → Scan at Counter → <strong>Automatic Receipt Print</strong> → Collect Food.
                  </p>
                </div>
              </div>
              <div className="text-[11px] text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-emerald-200/70 shrink-0 font-medium">
                Menu QR ≠ Order QR Token
              </div>
            </div>

            {/* 8-Step Sequential Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {SELF_ORDERING_CUSTOMER_WORKFLOW.map((card, idx) => (
                <div
                  key={card.step}
                  className={`bg-[#FAFCFB] rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                    card.step === 7
                      ? 'border-emerald-500/60 ring-2 ring-emerald-500/20 bg-emerald-50/20'
                      : 'border-gray-200/90 hover:border-emerald-500/40'
                  }`}
                >
                  {/* Image Frame */}
                  <div 
                    className="relative aspect-4/3 bg-gray-100 overflow-hidden cursor-pointer"
                    onClick={() => card.imageSrc && setActiveModalCard(card)}
                  >
                    {card.imageSrc ? (
                      <img
                        src={card.imageSrc}
                        alt={card.imageAlt || card.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                        Illustration loading
                      </div>
                    )}
                    
                    {/* Step Pill */}
                    <div className="absolute top-3 left-3 bg-[#0A3C2F]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>Step {card.step}</span>
                    </div>

                    {card.step === 7 && (
                      <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                        Receipt Print
                      </div>
                    )}

                    {/* Enlarge Hint */}
                    {card.imageSrc && (
                      <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/90 text-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Text Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                        {card.badge}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0A3C2F] transition-colors leading-snug mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {card.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-gray-200/70 text-[11px] text-gray-700">
                        {card.details.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                      <span className="text-gray-400">Step {card.step} of 8</span>
                      {idx < SELF_ORDERING_CUSTOMER_WORKFLOW.length - 1 && (
                        <span className="flex items-center gap-1 text-emerald-700">
                          <span>Next</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            PERSPECTIVE 2: 8 RESTAURANT MANAGEMENT MODULES
            ========================================================================= */}
        {activeTab === 'management' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                  Manager Portal
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  TABLO Self-Ordering Management
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  Easily manage menus, track stock availability, monitor incoming orders, handle counter billing, and review daily sales reports from your restaurant terminal.
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-semibold text-slate-400">Management Features</span>
                <div className="text-sm font-bold text-white font-mono">8 Modules</div>
              </div>
            </div>

            {/* Management Systems Grid (8 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SELF_ORDERING_MANAGEMENT_MODULES.map((module) => (
                <div
                  key={module.id}
                  className="bg-[#FAFCFB] rounded-3xl border border-gray-200/90 shadow-xs hover:shadow-lg hover:border-emerald-500/40 transition-all flex flex-col justify-between overflow-hidden"
                >
                  {/* Management Header Illustration / Preview Frame */}
                  <div className="relative aspect-16/10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white overflow-hidden border-b border-gray-100 flex flex-col justify-between">
                    {module.imageSrc && !module.isPendingImage ? (
                      <img
                        src={module.imageSrc}
                        alt={module.imageAlt || module.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full p-5 flex flex-col justify-between relative">
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/50 shadow-xs">
                            Module {module.moduleNumber}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-400 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded border border-emerald-500/20">
                            Manager View
                          </span>
                        </div>

                        <div className="z-10 mt-auto">
                          <h4 className="text-sm font-bold text-white mt-0.5 leading-snug">
                            {module.title}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-emerald-800 mb-1">
                        {module.subtitle}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {module.description}
                      </p>

                      {/* Operational Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-700 mb-4">
                        {module.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Module {module.moduleNumber} of 8</span>
                      <span className="text-emerald-700 font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on receipt printing */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center gap-3 text-xs text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                <strong>Counter Receipt Printing:</strong> When staff scan the customer's Order QR at the counter, the terminal validates the order and prints the official receipt and pickup slip immediately.
              </span>
            </div>
          </div>
        )}

        {/* Modal for Expanded Image View */}
        {activeModalCard && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveModalCard(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono">
                    Step {activeModalCard.step}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900">{activeModalCard.title}</h4>
                </div>
                <button
                  onClick={() => setActiveModalCard(null)}
                  className="p-1 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200 cursor-pointer text-lg font-bold leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="p-4 max-h-[70vh] overflow-auto flex items-center justify-center bg-gray-900/5">
                <img
                  src={activeModalCard.imageSrc}
                  alt={activeModalCard.imageAlt || activeModalCard.title}
                  className="max-h-[65vh] w-auto rounded-xl object-contain shadow-md"
                />
              </div>

              <div className="p-5 bg-white border-t border-gray-200 space-y-2">
                <p className="text-sm text-gray-700">{activeModalCard.description}</p>
                <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>TABLO Self-Ordering customer step preview.</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
