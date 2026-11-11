import React from 'react';
import { Sparkles, Crown, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { ABOUT_SALON } from '../data/salonData.ts';

interface AboutViewProps {
  onOpenBooking: () => void;
  onSelectTab: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onSelectTab }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          About Anita's Makeover
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          {ABOUT_SALON.subtitle}
        </p>
      </div>

      {/* Hero Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FDFBF7] p-8 sm:p-12 rounded-2xl border border-[#E8DFD5]">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Transformative Legacy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201815] leading-snug">
            "A makeover not only changes appearance, but restores lost confidence."
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#5A5049] leading-relaxed">
            <p>{ABOUT_SALON.legacyStory[0]}</p>
            <p>{ABOUT_SALON.legacyStory[1]}</p>
            <p>{ABOUT_SALON.legacyStory[2]}</p>
            <p className="italic font-serif text-[#201815] pt-2 border-t border-[#E8DFD5]">
              "{ABOUT_SALON.legacyStory[3]}"
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onSelectTab('services')}
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#F5EFE6] hover:bg-[#EADBCE] rounded transition-all"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Ambiance Mosaic */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg"
                alt="Salon Styling Floor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg"
                alt="Hair Ritual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-6">
            <div className="aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg"
                alt="Skin Therapy Chamber"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg"
                alt="Signature Bridal Artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Founders Section */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Leadership
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#201815]">
            Meet the Founders
          </h2>
          <p className="text-xs text-[#736861]">
            Guiding our salon team and academy students with passion and uncompromising standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ABOUT_SALON.founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8DFD5] p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Subtle top gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#8C6D28]" />

              <div className="space-y-6">
                {/* Header Crest & Monogram */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#201815] to-[#3A2D25] text-[#D4AF37] border-2 border-[#D4AF37]/40 flex items-center justify-center font-serif font-bold text-xl shadow-md">
                      {founder.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#201815]">{founder.name}</h3>
                      <p className="text-xs text-[#C5A059] font-semibold tracking-wide uppercase mt-0.5">
                        {founder.designation}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#F5EFE6] text-[#A8823B] border border-[#E8DFD5] shrink-0">
                    <Crown className="w-3 h-3 text-[#D4AF37]" />
                    <span>{founder.role}</span>
                  </span>
                </div>

                {/* Biography */}
                <p className="text-sm text-[#5A5049] leading-relaxed">
                  {founder.bio}
                </p>

                {/* Leadership Pillars / Credentials */}
                {founder.credentials && (
                  <div className="space-y-2 pt-2 border-t border-[#F0E8DF]">
                    <span className="text-[10px] uppercase tracking-widest text-[#736861] font-semibold">
                      Key Pillars & Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.credentials.map((cred, cIdx) => (
                        <span
                          key={cIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium bg-[#FAF8F5] text-[#201815] border border-[#E8DFD5]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                          <span>{cred}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* International Standards Commitment */}
      <div className="bg-[#201815] text-[#FAF8F5] p-8 sm:p-12 rounded-2xl space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            Quality Assurance
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            International Standards at Every Branch
          </h2>
          <p className="text-xs sm:text-sm text-[#EADBCE]">
            We follow strict sterilization protocols, continuous stylist education, and certified brand formulations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10 text-xs">
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#D4AF37]">Diagnostic Cameras</h4>
            <p className="text-[#C8B8A6] leading-relaxed">
              Before commencing hair rituals or skin treatments, we employ specialized cameras to analyze scalp sebum and epidermal texture.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#D4AF37]">Ammonia-Free Formulations</h4>
            <p className="text-[#C8B8A6] leading-relaxed">
              We prioritize the long-term health of your hair fiber by curating non-toxic, ammonia-free hair colors that deliver brilliant shine.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-base font-bold text-[#D4AF37]">Certified Stylists</h4>
            <p className="text-[#C8B8A6] leading-relaxed">
              Our experts participate regularly in advanced masterclasses with educators from Skeydor, Cuccio, Star Nail, and L'Oreal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
