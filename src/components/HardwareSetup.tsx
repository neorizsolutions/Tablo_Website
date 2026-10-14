import React from 'react';
import { HARDWARE_ITEMS } from '../data/websiteData';
import { 
  QrCode, 
  Smartphone, 
  ScanLine, 
  Monitor, 
  Printer, 
  Layers, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const HardwareSetup: React.FC = () => {
  return (
    <section id="hardware" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold uppercase tracking-wider mb-3">
            Hardware & Counter Setup
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07271F] tracking-tight">
            Equipment & Device Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            See exactly what physical equipment each product uses. TABLO keeps your counter footprint light and simple.
          </p>
        </div>

        {/* Product Distinction Highlight Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-[#EBF5F0]/60 border border-emerald-200/90 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0A3C2F] text-white flex items-center justify-center shrink-0">
              <ScanLine className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-emerald-800 uppercase">Self-Ordering Counter Station</div>
              <h3 className="text-base font-bold text-gray-900 mt-1">2D Desktop Scanner & Thermal Receipt Printer</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Used in TABLO Self-Ordering. Customers scan their phone Order QR at the counter to automatically trigger an instant printed receipt.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-teal-50/60 border border-teal-200/90 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-teal-800 uppercase">Table QR Minimal Setup</div>
              <h3 className="text-base font-bold text-gray-900 mt-1">Table Placards & Standard Web Screens</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                TABLO Table QR does not require specialized counter scanners. Orders appear directly on kitchen and staff displays, and bills are settled via the management screen.
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Items Table */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">Equipment Specifications</h3>
            <p className="text-xs text-gray-500 mt-1">
              Standard, widely available restaurant peripherals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100/70 text-gray-600 uppercase text-[11px] font-bold border-b border-gray-200">
                <tr>
                  <th className="py-3.5 px-6">Hardware Item</th>
                  <th className="py-3.5 px-6">Applicable Product</th>
                  <th className="py-3.5 px-6">Role on Floor</th>
                  <th className="py-3.5 px-6">Technical Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {HARDWARE_ITEMS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        item.product.includes('Self-Ordering') 
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : item.product.includes('Table QR')
                          ? 'bg-teal-50 text-teal-800 border-teal-200'
                          : 'bg-gray-100 text-gray-800 border-gray-200'
                      }`}>
                        {item.product}
                      </span>
                    </td>
                    <td className="py-4 px-6 leading-relaxed">
                      {item.role}
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-500 leading-relaxed">
                      {item.specs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Compatibility and Consultation Note */}
        <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 flex items-start gap-3 text-xs text-gray-600">
          <Info className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-gray-900">Equipment Compatibility:</span> Standard 2D barcode desktop scanners (USB) and standard 80mm thermal receipt printers work seamlessly with TABLO Self-Ordering. Our team assists with equipment recommendations and simple counter setup.
          </div>
        </div>

      </div>
    </section>
  );
};
