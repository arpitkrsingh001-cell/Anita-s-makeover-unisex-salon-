import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { SALON_BRANCHES } from '../data/salonData.ts';
import { SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

interface BranchesViewProps {
  onOpenBooking: (serviceName?: string, branchName?: string) => void;
  onSelectTab: (tab: string) => void;
}

export const BranchesView: React.FC<BranchesViewProps> = ({
  onOpenBooking,
  onSelectTab,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>Gurgaon Network</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          Our Salon Branches
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          Three prime destinations across Gurgaon and NCR engineered with luxury styling stations, private skincare suites, and bridal vanity lounges.
        </p>

        {/* Photography association disclosure as required by prompt */}
        <div className="p-3.5 bg-[#FDFBF7] border border-[#E8DFD5] rounded-lg text-xs text-[#736861] flex items-center justify-center gap-2 max-w-2xl mx-auto">
          <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            <strong>Photo Association Policy:</strong> All branch interior imagery is cataloged in the <button onClick={() => onSelectTab('gallery')} className="text-[#C5A059] underline font-semibold">Common Salon Ambiance Gallery</button> to preserve authentic attribution rather than unverified branch tagging.
          </span>
        </div>
      </div>

      {/* 3 Branch Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SALON_BRANCHES.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Banner / Header */}
              <div className="bg-[#201815] text-white p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D4AF37] text-[#201815]">
                    {b.category}
                  </span>
                  <span className="text-xs text-[#EADBCE] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" /> {b.timings}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white pt-1">
                  {b.locality}
                </h3>
              </div>

              {/* Branch Details */}
              <div className="p-6 space-y-5 text-xs text-[#5A5049]">
                <div className="space-y-1">
                  <span className="font-semibold text-[#201815] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Physical Address</span>
                  </span>
                  <p className="leading-relaxed pl-5 text-[#201815]">
                    {b.address}
                  </p>
                  <p className="pl-5 text-[#736861] font-mono">
                    PIN Code: {b.pincode}
                  </p>
                </div>

                <div className="space-y-1 pt-3 border-t border-[#F3ECE2]">
                  <span className="font-semibold text-[#201815] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Verified Desk Phone</span>
                  </span>
                  <a
                    href={`tel:${b.phone}`}
                    className="pl-5 font-mono text-sm font-bold text-[#201815] hover:text-[#C5A059] block"
                  >
                    {b.formattedPhone}
                  </a>
                </div>

                <div className="space-y-1 pt-3 border-t border-[#F3ECE2]">
                  <span className="font-semibold text-[#201815] block uppercase tracking-wider text-[11px]">
                    Branch Specialty & Atmosphere
                  </span>
                  <p className="leading-relaxed text-[#736861]">
                    {b.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 space-y-2.5">
              <button
                onClick={() => onOpenBooking(undefined, b.name)}
                className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Book at {b.locality.split(' ')[0]}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${b.phone}`}
                  className="py-2 text-xs font-semibold text-center text-[#201815] bg-[#F5EFE6] hover:bg-[#EADBCE] rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3 text-[#A8823B]" />
                  <span>Call Branch</span>
                </a>

                <a
                  href={b.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-xs font-semibold text-center text-[#201815] bg-[#F5EFE6] hover:bg-[#EADBCE] rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3 h-3 text-[#A8823B]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Central Concierge Callout */}
      <div className="bg-[#201815] text-[#FAF8F5] p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-white">
            Need Guidance Choosing the Right Branch?
          </h3>
          <p className="text-xs text-[#EADBCE]">
            Our central appointment concierge at <span className="text-[#D4AF37] font-semibold">+91 99536 07012</span> is happy to coordinate appointments, bridal bookings, or academy inquiries.
          </p>
        </div>

        <a
          href={`https://wa.me/${SALON_WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-colors shrink-0"
        >
          Chat with Central Concierge
        </a>
      </div>
    </div>
  );
};
