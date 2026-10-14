import React, { useState } from 'react';
import { 
  TABLE_QR_CUSTOMER_WORKFLOW, 
  TABLE_QR_MANAGEMENT_MODULES, 
  WorkflowCard,
  ManagementModule 
} from '../data/websiteData';
import { 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  Monitor, 
  Users, 
  FileText, 
  ChevronRight, 
  Maximize2,
  Clock,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Utensils,
  TrendingUp,
  BarChart3,
  Download
} from 'lucide-react';

export const TableQrWorkflow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'management'>('customer');
  const [activeModalCard, setActiveModalCard] = useState<WorkflowCard | null>(null);

  const verifiedCustomerSteps = TABLE_QR_CUSTOMER_WORKFLOW.filter(s => s.isVerified);
  const plannedCustomerSteps = TABLE_QR_CUSTOMER_WORKFLOW.filter(s => !s.isVerified);

  return (
    <section id="table-qr" className="py-24 bg-[#FAFCFB] border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/80 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              Full-Service Dining
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
              TABLO Table QR
            </h2>
            <p className="mt-4 text-base sm:text-xl text-gray-600 leading-relaxed font-normal">
              Table-based customer ordering, kitchen coordination, order tracking, and clean restaurant management.
            </p>
          </div>

          {/* Perspective View Switcher */}
          <div className="inline-flex p-1.5 bg-gray-200/80 rounded-2xl border border-gray-300/80 self-start lg:self-end">
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'customer'
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span>Dine-In Customer Journey</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-teal-500/20 text-teal-300">
                10 Steps
              </span>
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'management'
                  ? 'bg-teal-900 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <span>Restaurant Operations</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-teal-500/20 text-teal-300">
                6 Modules
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            PERSPECTIVE 1: DINE-IN CUSTOMER JOURNEY (STEPS 1-5 LIVE, 6-10 PLANNED)
            ========================================================================= */}
        {activeTab === 'customer' && (
          <div className="space-y-12">
            
            {/* PART B.1: Live Steps 1 to 5 */}
            <div>
              <div className="mb-6 p-4 rounded-2xl bg-teal-50/70 border border-teal-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    1–5
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-teal-950">Table Ordering Flow (Steps 1–5)</h4>
                    <p className="text-xs text-gray-600">Scan table QR, browse menu, place order from seat, kitchen receives order, and staff deliver meal to table.</p>
                  </div>
                </div>
                <div className="text-[11px] text-teal-900 bg-white px-3 py-1.5 rounded-xl border border-teal-200/70 shrink-0 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Available Now</span>
                </div>
              </div>

              {/* 5 Live Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {verifiedCustomerSteps.map((card, idx) => (
                  <div
                    key={card.step}
                    className="bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
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
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-6 text-center">
                          <h4 className="text-sm font-bold mt-2">{card.title}</h4>
                        </div>
                      )}
                      
                      {/* Step Pill */}
                      <div className="absolute top-3 left-3 bg-teal-900/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span>Step {card.step}</span>
                      </div>

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
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                            {card.badge}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-900 transition-colors leading-snug mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                          {card.description}
                        </p>

                        <div className="space-y-1.5 pt-3 border-t border-gray-200/70 text-[11px] text-gray-700">
                          {card.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-teal-800">
                        <span className="text-gray-400">Step {card.step} of 10</span>
                        {idx < verifiedCustomerSteps.length - 1 && (
                          <span className="flex items-center gap-1 text-teal-700">
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

            {/* PART B.2: Planned Dine-In Steps 6 to 10 */}
            <div className="pt-8 border-t border-gray-200">
              <div className="mb-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    6–10
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">Planned Dining Features (Steps 6–10)</h4>
                    <p className="text-xs text-amber-900/80">
                      Adding extra items to an open bill, requesting the check, counter table lookup, and bill settlement.
                    </p>
                  </div>
                </div>
                <div className="text-[11px] text-amber-900 bg-white px-3 py-1.5 rounded-xl border border-amber-300 shrink-0 font-medium flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Planned Features</span>
                </div>
              </div>

              {/* 5 Planned Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {plannedCustomerSteps.map((card, idx) => (
                  <div
                    key={card.step}
                    className="bg-white rounded-3xl border border-amber-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                  >
                    {/* Illustration Frame for Planned Step */}
                    <div 
                      className="relative aspect-4/3 bg-gray-100 overflow-hidden cursor-pointer"
                      onClick={() => card.imageSrc && setActiveModalCard(card)}
                    >
                      {card.imageSrc ? (
                        <img
                          src={card.imageSrc}
                          alt={card.imageAlt || card.title}
                          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-amber-50 p-6 text-center">
                          <h4 className="text-sm font-bold text-gray-900 mt-2">{card.title}</h4>
                        </div>
                      )}

                      <div className="absolute top-3 left-3 bg-amber-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        Step {card.step}
                      </div>

                      <div className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                        Planned
                      </div>

                      {card.imageSrc && (
                        <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/90 text-gray-700 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity shadow-sm">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                            Planned
                          </span>
                          <span className="text-[10px] text-gray-500">
                            Table Tab
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-gray-900 leading-snug mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed mb-4">
                          {card.description}
                        </p>

                        <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-700">
                          {card.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                              <span className="leading-snug">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-amber-800">
                        <span className="text-gray-400">Step {card.step} of 10</span>
                        <span className="text-[11px] text-amber-700 font-medium">In Development</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* =========================================================================
            PERSPECTIVE 2: 6 RESTAURANT MANAGEMENT MODULES
            ========================================================================= */}
        {activeTab === 'management' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800/60">
                  Manager View
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  TABLO Table QR Restaurant Operations
                </h3>
                <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  Manage table orders, monitor live kitchen orders, update menus and availability, track sales, and export financial reports.
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-semibold text-slate-400">Operations</span>
                <div className="text-sm font-bold text-white font-mono">6 Modules</div>
              </div>
            </div>

            {/* Management Modules Grid (6 Modules) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TABLE_QR_MANAGEMENT_MODULES.map((module) => (
                <div
                  key={module.id}
                  className={`rounded-3xl border transition-all flex flex-col justify-between overflow-hidden ${
                    module.isVerified
                      ? 'bg-white border-gray-200/90 shadow-xs hover:shadow-lg hover:border-teal-500/40'
                      : 'bg-[#FFFDF8] border-amber-200/90 shadow-xs'
                  }`}
                >
                  {/* Management Frame Header */}
                  <div className={`relative aspect-16/10 overflow-hidden border-b flex flex-col justify-between ${
                    module.isVerified
                      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white border-gray-100'
                      : 'bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white border-amber-100'
                  }`}>
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
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-xs ${
                            module.isVerified
                              ? 'text-teal-300 bg-teal-950/80 border-teal-700/50'
                              : 'text-amber-300 bg-amber-950/80 border-amber-700/50'
                          }`}>
                            Module {module.moduleNumber}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-300 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded border border-gray-700/50">
                            {module.isVerified ? 'Available' : 'Planned'}
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

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className={`text-[11px] font-bold mb-1 ${
                        module.isVerified ? 'text-teal-800' : 'text-amber-900'
                      }`}>
                        {module.subtitle}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {module.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] text-gray-700 mb-4">
                        {module.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            {module.isVerified ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            )}
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Module {module.moduleNumber} of 6</span>
                      <span className={module.isVerified ? 'text-teal-700 font-semibold' : 'text-amber-700 font-semibold'}>
                        {module.isVerified ? 'Available' : 'Planned'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Table QR Operations:</strong> Table ordering and kitchen display are currently available. Combining multiple rounds into one open bill and table settlement are planned capabilities currently in development.
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
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-mono">
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
                <div className="flex items-center gap-2 text-xs text-teal-800 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>TABLO Table QR dining step preview.</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
