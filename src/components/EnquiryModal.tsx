import React, { useState } from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  User, 
  Store, 
  Send, 
  CheckCircle2, 
  Info,
  Layers,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: 'self-ordering' | 'table-qr' | 'both';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultProduct = 'both' 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    restaurantName: '',
    outletType: 'Casual Dining / Café',
    productInterest: defaultProduct,
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'ready_to_connect'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required';
    }
    if (!formData.restaurantName.trim()) {
      errs.restaurantName = 'Restaurant or outlet name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      // Truthful client-side validation completion
      setStatus('ready_to_connect');
    }, 600);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      restaurantName: '',
      outletType: 'Casual Dining / Café',
      productInterest: 'both',
      message: ''
    });
    setErrors({});
    onClose();
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Neoriz Solutions team, I'm ${formData.fullName} from ${formData.restaurantName || 'my restaurant'}. I am interested in discussing TABLO (${formData.productInterest === 'both' ? 'Self-Ordering & Table QR' : formData.productInterest === 'self-ordering' ? 'Self-Ordering' : 'Table QR'}) for my venue.`
    );
    return `https://wa.me/919447261739?text=${text}`;
  };

  const createEmailLink = () => {
    const subject = encodeURIComponent(`TABLO Restaurant Enquiry — ${formData.restaurantName || formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nRestaurant: ${formData.restaurantName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nVenue Type: ${formData.outletType}\nProduct Interest: ${formData.productInterest}\n\nNotes / Questions:\n${formData.message}`
    );
    return `mailto:hello@neorizsolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#07271F] to-[#0A3C2F] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <span className="text-xl font-bold leading-none">&times;</span>
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Restaurant Consultation
          </div>
          
          <h3 id="enquiry-modal-title" className="text-2xl font-bold text-white tracking-tight">
            Discuss Your Restaurant's Needs
          </h3>
          <p className="text-sm text-emerald-100/80 mt-1">
            Connect with the solutions team to explore whether TABLO Self-Ordering or Table QR fits your floor operations.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {status === 'ready_to_connect' ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-gray-900">
                  Enquiry Prepared
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your enquiry details have been validated for <strong>{formData.restaurantName}</strong>.
                </p>
              </div>

              {/* Verified Direct Channels */}
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-left space-y-3">
                <div className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Connect Directly with Neoriz Solutions:
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <a
                    href={createEmailLink()}
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A3C2F] hover:bg-[#07271F] text-white font-semibold text-xs transition-colors shadow-2xs"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Direct Email</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

                <p className="text-[11px] text-gray-500 pt-1 leading-normal">
                  Direct Line: <strong className="text-gray-700">+91 9447261739</strong> • Email: <strong className="text-gray-700">hello@neorizsolutions.com</strong>
                </p>
              </div>

              {/* Direct Support Note */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-left text-xs text-emerald-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Our restaurant solutions team is based in Kochi, Kerala. Choose WhatsApp or Email above to connect directly with us.
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Interest Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Solution Interest
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'both', label: 'Both Solutions' },
                    { id: 'self-ordering', label: 'Self-Ordering' },
                    { id: 'table-qr', label: 'Table QR' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, productInterest: p.id as any })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.productInterest === p.id
                          ? 'bg-[#0A3C2F] text-white border-[#0A3C2F] shadow-xs'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-emerald-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-emerald-600'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Work Email & Restaurant Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@restaurant.com"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-emerald-600'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Restaurant / Outlet Name *
                  </label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      placeholder="e.g. Urban Diner"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                        errors.restaurantName ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-emerald-600'
                      }`}
                    />
                  </div>
                  {errors.restaurantName && <p className="text-[11px] text-red-600 mt-1">{errors.restaurantName}</p>}
                </div>
              </div>

              {/* Outlet Category */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Venue Type
                </label>
                <select
                  value={formData.outletType}
                  onChange={(e) => setFormData({ ...formData, outletType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-600 bg-white"
                >
                  <option value="Quick Service Restaurant (QSR)">Quick Service Restaurant (QSR)</option>
                  <option value="Casual Dining / Café">Casual Dining / Café</option>
                  <option value="Fine Dining / Bistro">Fine Dining / Bistro</option>
                  <option value="Food Court / Cloud Kitchen">Food Court / Cloud Kitchen</option>
                </select>
              </div>

              {/* Operational Requirements Note */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Floor Operations or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Number of tables, counter layout, or specific billing questions..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-emerald-600"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0A3C2F] hover:bg-[#07271F] text-white font-semibold text-sm transition-all shadow-md active:scale-98 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Validating Details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Prepare Business Enquiry</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Direct connection with Neoriz Solutions specialists. No obligation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
