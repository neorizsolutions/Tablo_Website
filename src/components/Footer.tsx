import React from 'react';
import { ArrowUpRight, QrCode, Layers, MessageSquare, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (product?: 'self-ordering' | 'table-qr' | 'both') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="TABLO" 
                className="h-9 w-auto object-contain"
              />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#059669]">
                Restaurant Solutions
              </span>
            </a>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              TABLO provides tailored digital ordering and billing platforms for modern restaurants, cafés, and quick-service operations. Choose between self-service counter pickup or table-aware ordering.
            </p>

            <div className="pt-2 text-xs text-gray-500 space-y-1">
              <div>Neoriz Solutions • Software Engineering & Digital Platforms</div>
              <div>Direct: <a href="https://wa.me/919447261739" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold hover:underline">+91 9447261739</a> • <a href="mailto:hello@neorizsolutions.com" className="text-emerald-700 font-semibold hover:underline">hello@neorizsolutions.com</a></div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#self-ordering" className="hover:text-[#0A3C2F] transition-colors flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>TABLO Self-Ordering</span>
                </a>
              </li>
              <li>
                <a href="#table-qr" className="hover:text-[#0A3C2F] transition-colors flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  <span>TABLO Table QR</span>
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#0A3C2F] transition-colors">
                  Product Comparison
                </a>
              </li>
              <li>
                <a href="#hardware" className="hover:text-[#0A3C2F] transition-colors">
                  Equipment Guide
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#0A3C2F] transition-colors">
                  Venue Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Information
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#faq" className="hover:text-[#0A3C2F] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenEnquiry('both')}
                  className="hover:text-[#0A3C2F] transition-colors text-left font-semibold text-[#059669] cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Consultation Callout */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Get in Touch
            </h4>
            <p className="text-xs text-gray-500 leading-normal">
              Have questions regarding restaurant floor setup or equipment compatibility?
            </p>
            <a
              href="https://wa.me/919447261739"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} TABLO. Developed by Neoriz Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Kochi, Kerala, India</span>
            <a href="mailto:hello@neorizsolutions.com" className="hover:text-gray-600">hello@neorizsolutions.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
