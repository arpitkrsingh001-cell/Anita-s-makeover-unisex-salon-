import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceName?: string, branchName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'membership', label: 'Membership' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'branches', label: 'Branches' },
    { id: 'academy', label: 'Academy' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcements & Quick Info Bar */}
      <div className="bg-[#201815] text-[#EADBCE] text-xs py-2 px-4 border-b border-[#382B24]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-[#D4AF37] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Gurgaon's Premier Unisex Salon & Academy
            </span>
            <span className="hidden md:inline text-[#736861]">·</span>
            <span className="hidden md:inline text-[#C5A059]">Sector 23A · Sector 81 · IMT Manesar</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919650170897"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Call Registered Office"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+91 9650170897</span>
            </a>
            <span className="text-[#736861]">·</span>
            <a
              href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-[#4ade80] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="font-medium">WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Zone 1: Brand Wordmark & Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Anita's Makeover - Home"
          >
            <img
              src="/images/client/logo.png"
              alt="Anita's Makeover Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col shrink-0">
              <span className="font-serif text-lg xl:text-xl font-bold tracking-tight text-[#201815] group-hover:text-[#A8823B] transition-colors whitespace-nowrap">
                Anita's Makeover
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#736861] font-semibold whitespace-nowrap">
                Salon & Academy
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-medium text-[#736861] shrink-0">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap cursor-pointer transition-colors pb-1 relative focus:outline-none ${
                    isActive
                      ? 'text-[#201815] font-semibold'
                      : 'hover:text-[#201815]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] transition-all rounded shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#201815] hover:bg-[#F3ECE2] rounded-md transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFD5] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F3ECE2] text-[#201815] font-semibold pl-4'
                        : 'text-[#736861] hover:bg-[#F5EFE6] hover:text-[#201815]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#1F513B] bg-[#E8F5E9] hover:bg-[#C8E6C9] rounded transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Concierge (+91 99536 07012)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
