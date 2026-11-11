import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Sparkles, Send, AlertCircle, Phone, User, CheckCircle2 } from 'lucide-react';
import {
  BookingData,
  generateWhatsAppBookingUrl,
  validateBookingForm,
  SALON_WHATSAPP_NUMBER,
} from '../utils/booking.ts';
import { SALON_BRANCHES, SALON_SERVICES } from '../data/salonData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialBranch?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialBranch = '',
}) => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    service: initialService,
    branch: initialBranch || 'Sector 23A, Gurgaon (Registered Head Office)',
    date: '',
    time: '11:00 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessNotice, setShowSuccessNotice] = useState(false);

  // Sync initial props
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialBranch) {
      setFormData((prev) => ({ ...prev, branch: initialBranch }));
    }
  }, [initialService, initialBranch]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ];

  // Flatten services list for convenient select
  const allServices = SALON_SERVICES.flatMap((cat) =>
    cat.items.map((item) => ({
      category: cat.name,
      name: item.name,
    }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setShowSuccessNotice(true);

    const whatsappUrl = generateWhatsAppBookingUrl(formData);

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] border border-[#E8DFD5] w-full max-w-xl rounded-lg shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#201815] text-[#FAF8F5] p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Appointment Concierge</span>
            </div>
            <h2 id="booking-modal-title" className="font-serif text-2xl font-bold tracking-tight">
              Request Your Appointment
            </h2>
            <p className="text-xs text-[#EADBCE] mt-1">
              Select your desired service, date, and salon branch. Our reception team will review and confirm your slot via WhatsApp or call.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#EADBCE] hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          {showSuccessNotice && (
            <div className="p-4 bg-[#E8F5E9] border border-[#A5D6A7] rounded text-xs text-[#1F513B] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-sm">Opening WhatsApp...</strong>
                Your appointment details are prefilled. Please press "Send" in WhatsApp to dispatch your request to our concierge at <span className="font-mono font-medium">+91 99536 07012</span>.
              </div>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#A89F91] absolute left-3 top-3" />
                <input
                  id="booking-name"
                  type="text"
                  required
                  placeholder="e.g. Pooja Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              {errors.name && <p className="text-red-600 text-[11px] mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#A89F91] absolute left-3 top-3" />
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              {errors.phone && <p className="text-red-600 text-[11px] mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Service & Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-service" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Select Service <span className="text-red-500">*</span>
              </label>
              <select
                id="booking-service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="">-- Choose a Service --</option>
                {allServices.map((s, idx) => (
                  <option key={idx} value={s.name}>
                    {s.name} ({s.category})
                  </option>
                ))}
                <option value="Custom Hair & Skin Consultation">Custom Hair & Skin Consultation</option>
                <option value="Bridal Day Package Inquiry">Bridal Day Package Inquiry</option>
              </select>
              {errors.service && <p className="text-red-600 text-[11px] mt-1">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="booking-branch" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Preferred Branch <span className="text-red-500">*</span>
              </label>
              <select
                id="booking-branch"
                required
                value={formData.branch}
                onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                {SALON_BRANCHES.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
              {errors.branch && <p className="text-red-600 text-[11px] mt-1">{errors.branch}</p>}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-date" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              {errors.date && <p className="text-red-600 text-[11px] mt-1">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="booking-time" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
                Preferred Time Slot <span className="text-red-500">*</span>
              </label>
              <select
                id="booking-time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              >
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts}>
                    {ts}
                  </option>
                ))}
              </select>
              {errors.time && <p className="text-red-600 text-[11px] mt-1">{errors.time}</p>}
            </div>
          </div>

          {/* Special Notes / Requests */}
          <div>
            <label htmlFor="booking-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1.5">
              Special Requests / Hair or Skin Notes (Optional)
            </label>
            <textarea
              id="booking-notes"
              rows={2}
              placeholder="e.g. Inquiring for wedding date, sensitive skin, or specific stylist request..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Important Notice Box (Explicit requirement) */}
          <div className="p-3 bg-[#F3ECE2] border border-[#E8DFD5] rounded text-xs text-[#736861] flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold text-[#201815]">Appointment Confirmation Policy:</strong> Submitting opens WhatsApp with your formatted inquiry. Appointments are confirmed manually by our front-desk coordinators upon slot verification. No automated booking or upfront payment is processed here.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#736861] hover:text-[#201815] transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Proceed to WhatsApp (+91 99536 07012)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
