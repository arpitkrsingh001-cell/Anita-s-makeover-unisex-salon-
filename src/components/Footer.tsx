import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SALON_BRANCHES } from '../data/salonData.ts';
import { SALON_WHATSAPP_NUMBER, SALON_GENERAL_EMAIL, SALON_FRANCHISE_EMAIL } from '../utils/booking.ts';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer className="bg-[#201815] text-[#EADBCE] border-t border-[#382B24] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-[#2C211C] via-[#352822] to-[#2C211C] border border-[#45362E] rounded-xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Experience Couture Beauty</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready for Your Signature Makeover?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8B8A6] max-w-xl">
              Book bridal consultation, designer hair styling, or clinical skincare treatments at our luxury salons in Gurgaon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all shadow-md font-sans"
            >
              Book Appointment
            </button>
            <a
              href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded transition-all shadow-md font-sans"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp +91 99536 07012</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#382B24]">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/client/anitas-makeover-logo.webp"
                alt="Anita's Makeover Salon Logo"
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded"
              />
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                Anita's Makeover
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#B7A796]">
              A premier unisex beauty salon and certified academy brand for men and women in Delhi and Gurgaon NCR. Founded by celebrity makeup artist Anita Yadav, we bring international styling standards, ammonia-free hair artistry, and curative skincare rituals.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Authorized Official Brand Website</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-[#382B24] pb-2">
              Salon & Academy
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'services', label: 'All Services Catalog' },
                { id: 'bridal', label: 'Bridal Makeover by Anita Yadav' },
                { id: 'membership', label: 'Silver & Gold Memberships' },
                { id: 'gallery', label: "Gallery & Party Makeup by Anita Ma'am" },
                { id: 'academy', label: "Anita's Makeover Academy" },
                { id: 'branches', label: 'Gurgaon Branches & Directions' },
                { id: 'franchise', label: 'Franchise & Business Opportunities' },
                { id: 'about', label: 'About Founders & Legacy' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#A89F91]" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Branch Locations */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-[#382B24] pb-2">
              Our 3 Branches
            </h4>
            <div className="space-y-4 text-xs">
              {SALON_BRANCHES.map((b) => (
                <div key={b.id} className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37] shrink-0" />
                    <span>{b.locality}</span>
                  </div>
                  <p className="text-[#A89F91] text-[11px] leading-snug">
                    {b.address} - {b.pincode}
                  </p>
                  <a
                    href={`tel:${b.phone}`}
                    className="text-[#D4AF37] hover:underline text-[11px] block"
                  >
                    Call: {b.formattedPhone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-[#382B24] pb-2">
              Central Contact
            </h4>
            <div className="space-y-3 text-xs text-[#B7A796]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Salon Timings</span>
                  <span>10:00 AM – 8:00 PM (Monday to Sunday)</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">WhatsApp Booking</span>
                  <a
                    href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    +91 99536 07012
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">General Inquiries</span>
                  <a href={`mailto:${SALON_GENERAL_EMAIL}`} className="hover:text-white transition-colors">
                    {SALON_GENERAL_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Franchise Queries</span>
                  <a href={`mailto:${SALON_FRANCHISE_EMAIL}`} className="hover:text-white transition-colors">
                    {SALON_FRANCHISE_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#8C7D70] gap-4">
          <p>© {new Date().getFullYear()} Anita's Makeover Salon & Academy. All rights reserved.</p>
          <div className="flex items-center gap-4 text-center">
            <span>Preserving verified client data from anitasmakeover.com/salon/</span>
            <span>·</span>
            <span>No unverified claims or fabricated pricing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
