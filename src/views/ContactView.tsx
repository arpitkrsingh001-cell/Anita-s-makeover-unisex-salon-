import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Navigation, Sparkles } from 'lucide-react';
import { SALON_BRANCHES } from '../data/salonData.ts';
import {
  SALON_WHATSAPP_NUMBER,
  SALON_GENERAL_EMAIL,
  SALON_FRANCHISE_EMAIL,
  SALON_ACADEMY_PHONE,
} from '../utils/booking.ts';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = [
      "📩 *General Inquiry | Anita's Makeover Contact Form*",
      '--------------------------------------',
      `*Name:* ${formData.name}`,
      `*Contact:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.address ? `*Address/City:* ${formData.address}` : '',
      `*Query:* ${formData.query}`,
      '--------------------------------------',
      'Kindly respond at your earliest convenience.',
    ].filter(Boolean).join('\n');

    setTimeout(() => {
      window.open(`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Phone className="w-3.5 h-3.5" />
          <span>Connect With Us</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          Contact & Locations
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          We welcome your questions, service bookings, bridal consultations, and academy inquiries across all three Gurgaon facilities.
        </p>
      </div>

      {/* 3 Branches Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SALON_BRANCHES.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl border border-[#E8DFD5] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37] text-[#201815]">
                  {b.category}
                </span>
                <span className="text-xs text-[#736861] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C5A059]" /> 10am – 8pm
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#201815]">
                {b.locality}
              </h3>

              <div className="space-y-2 text-xs text-[#5A5049] pt-2 border-t border-[#F3ECE2]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{b.address} - PIN {b.pincode}</span>
                </p>

                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href={`tel:${b.phone}`} className="font-semibold text-[#201815] hover:text-[#C5A059]">
                    {b.formattedPhone}
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href={`mailto:${b.email}`} className="text-[#736861] hover:underline">
                    {b.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F3ECE2] mt-6 flex items-center gap-2">
              <a
                href={b.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 text-xs uppercase tracking-wider font-semibold text-center text-[#201815] bg-[#F5EFE6] hover:bg-[#EADBCE] rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Send Query Form & Central Helpline Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[#FDFBF7] p-8 sm:p-12 rounded-2xl border border-[#E8DFD5]">
        
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
              Direct Channels
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#201815]">
              Get in Touch
            </h2>
            <p className="text-xs sm:text-sm text-[#736861] leading-relaxed">
              Have questions about bridal packages, hair color consultations, academy admissions, or franchise partnerships? We are here to help.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E8DFD5] text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-lg border border-[#E8DFD5] text-[#25D366]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-[#201815] block text-sm">Central WhatsApp Concierge</span>
                <span className="text-[#736861] block">+91 99536 07012 (Immediate coordination)</span>
                <a
                  href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline font-medium inline-block mt-1"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-lg border border-[#E8DFD5] text-[#C5A059]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-[#201815] block text-sm">Official Email Channels</span>
                <span className="text-[#736861] block">General: {SALON_GENERAL_EMAIL}</span>
                <span className="text-[#736861] block">Franchise: {SALON_FRANCHISE_EMAIL}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-lg border border-[#E8DFD5] text-[#C5A059]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold text-[#201815] block text-sm">Academy Admissions Helpline</span>
                <span className="text-[#736861] block">{SALON_ACADEMY_PHONE}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column: Send Query (Preserved from contact.html) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#E8DFD5] p-6 sm:p-8 shadow-sm space-y-5">
          <div className="border-b border-[#F3ECE2] pb-3">
            <h3 className="font-serif text-2xl font-bold text-[#201815]">
              Send Query
            </h3>
            <p className="text-xs text-[#736861] mt-0.5">
              Kindly fill up your details and submit your message. All fields are mandatory.
            </p>
          </div>

          {submitted && (
            <div className="p-4 bg-[#E8F5E9] border border-[#A5D6A7] rounded text-xs text-[#1F513B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
              <span>Thank you! Your query has been dispatched to our salon desk on WhatsApp and email.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                  Address / City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Your locality / sector"
                  className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#736861] mb-1">
                Query / Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                placeholder="Write your inquiry regarding services, packages, appointments, or academy..."
                className="w-full px-3 py-2.5 border border-[#E8DFD5] rounded text-sm text-[#201815] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Submit Query to Salon Desk</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
