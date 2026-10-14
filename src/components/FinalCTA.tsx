import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, QrCode, Layers, PhoneCall } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: (product?: 'self-ordering' | 'table-qr' | 'both') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="contact" className="py-24 bg-[#07271F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
            Ready for Modern Restaurant Operations
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Deploy the Right TABLO <br className="hidden sm:inline" />Solution for Your Floor
          </h2>

          <p className="text-base sm:text-xl text-emerald-100/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Whether your venue requires high-throughput self-service counter collection or frictionless table-side ordering, TABLO keeps your hospitality modern, verified, and effortless.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry('both')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-[#07271F] font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span>Discuss Your Restaurant's Needs</span>
              <ArrowRight className="w-5 h-5 text-[#059669]" />
            </button>

            <a
              href="https://wa.me/919447261739"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-medium text-base border border-white/20 transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>

          {/* Product Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 border border-white/10">
              <QrCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>TABLO Self-Ordering: Counter & QSR</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-200 border border-white/10">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>TABLO Table QR: Full Dine-In</span>
            </div>
          </div>

          {/* Direct Verified Contact Bar */}
          <div className="pt-6 border-t border-emerald-900/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-emerald-200/70 font-medium">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              Direct: +91 9447261739
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              hello@neorizsolutions.com
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Kochi, Kerala, India
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
