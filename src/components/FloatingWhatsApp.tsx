import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip Pill */}
      <div className="hidden sm:flex items-center gap-1.5 bg-[#201815] text-[#FAF8F5] text-xs px-3 py-1.5 rounded-full shadow-lg border border-[#C5A059]/40 opacity-90 group-hover:opacity-100 transition-opacity">
        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
        <span>Book on WhatsApp · +91 99536 07012</span>
      </div>

      {/* Primary Floating Action Button */}
      <button
        onClick={onOpenBooking}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Book Appointment on WhatsApp (+91 99536 07012)"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
