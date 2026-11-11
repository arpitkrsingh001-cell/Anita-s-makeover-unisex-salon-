import React from 'react';
import { Crown, Sparkles, Heart, Check, Calendar, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { SALON_GALLERY } from '../data/salonData.ts';
import { SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

interface BridalViewProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenLightbox: (index: number) => void;
  onSelectTab: (tab: string) => void;
}

export const BridalView: React.FC<BridalViewProps> = ({
  onOpenBooking,
  onOpenLightbox,
  onSelectTab,
}) => {
  const bridalItems = SALON_GALLERY.filter((item) => item.category === 'bridal');

  const bridalPackages = [
    {
      title: 'Signature Royal Bridal Package',
      artist: 'Anita Yadav (Celebrity Makeup Artist)',
      tagline: 'The ultimate royal bridal transformation with personalized bridal couture.',
      features: [
        'High-Definition (HD) or Luxury Airbrush Base',
        'Custom 3D mink false lashes & eye styling',
        'Traditional / contemporary floral hair couture',
        'Dupatta & Saree draping with safety pinning',
        'Complete bridal jewellery & mathapatti setting',
        'Complimentary touch-up kit for reception',
      ],
      idealFor: 'Main Wedding Day Ceremony',
    },
    {
      title: 'Engagement & Cocktail Night Glam',
      artist: 'Senior Bridal Stylist Team',
      tagline: 'Modern, luminous evening makeup that dazzles under photography lights.',
      features: [
        'Waterproof radiant glass-skin base',
        'Smokey eye / cut-crease shimmer lid artistry',
        'Designer hair styling: Hollywood waves or messy textured bun',
        'Gown / lehenga accessory placement',
        'Contoured cheekbones & long-stay satin lip',
      ],
      idealFor: 'Ring Ceremony, Sangeet, Cocktail, Reception',
    },
    {
      title: 'Complete Pre-Bridal 30-Day Glow',
      artist: 'Clinical Skin & Spa Specialists',
      tagline: 'Holistic wellness rituals designed to prep skin and hair weeks before the big day.',
      features: [
        'Skeydor & Agelock cellular restorative facial rituals',
        'Full body exfoliation scrub & herbal detox wraps',
        'Revitalizing hair rituals with scalp camera diagnostic',
        'Aromatic Spa Manicure & Spa Pedicure',
        'Full body chocolate / rica waxing and skin polishing',
      ],
      idealFor: '30 Days to 7 Days prior to wedding',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Bridal Hero */}
      <div className="relative rounded-2xl overflow-hidden bg-[#201815] text-white p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#382B24] shadow-2xl">
        <div className="max-w-xl space-y-5 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-[#D4AF37] border border-[#D4AF37]/30">
            <Crown className="w-4 h-4" />
            <span>Master Artistry by Founder Anita Yadav</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            The Royal Bridal Experience
          </h1>

          <p className="text-xs sm:text-sm text-[#EADBCE] leading-relaxed">
            Every bride deserves to look like the most radiant version of herself. From intimate morning pheras to opulent evening receptions, we craft timeless bridal looks that harmonize with your lehenga, heirloom jewellery, and individual aura.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onOpenBooking('Signature Bridal Makeover by Anita Yadav')}
              className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all shadow-md text-center"
            >
              Book Bridal Consultation
            </button>
            <a
              href={`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I am planning my wedding and want to inquire about Anita's Makeover Bridal Packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Bridal Desk</span>
            </a>
          </div>
        </div>

        {/* Feature Bridal Portrait */}
        <div className="relative w-full md:w-80 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 z-10 shrink-0">
          <img
            src="/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg"
            alt="Anita's Makeover Signature Royal Bride"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative backdrop glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Bridal Packages Breakdown */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
            Wedding Suites
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#201815]">
            Bridal & Pre-Bridal Curations
          </h2>
          <p className="text-xs sm:text-sm text-[#736861]">
            Comprehensive care from head to toe, designed to relieve wedding stress and impart unforgettable radiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bridalPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E8DFD5] p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A8823B] bg-[#F5EFE6] px-2 py-0.5 rounded inline-block">
                    {pkg.idealFor}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#201815] pt-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#736861] font-medium">
                    Led by: <span className="text-[#201815]">{pkg.artist}</span>
                  </p>
                </div>

                <p className="text-xs text-[#5A5049] italic border-l-2 border-[#C5A059] pl-3 py-1">
                  {pkg.tagline}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#F3ECE2]">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#5A5049]">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F3ECE2] mt-6">
                <button
                  onClick={() => onOpenBooking(pkg.title)}
                  className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors"
                >
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real Brides Gallery Grid */}
      <div className="space-y-6">
        <div className="border-b border-[#E8DFD5] pb-4 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201815]">
              Real Brides of Anita's Makeover
            </h2>
            <p className="text-xs sm:text-sm text-[#736861] mt-1 font-light">
              Tap any photograph to launch the full-screen HD viewer.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('gallery')}
            className="text-xs uppercase tracking-wider font-semibold text-[#C5A059] hover:underline flex items-center gap-1"
          >
            <span>All Galleries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bridalItems.map((item) => {
            const globalIdx = SALON_GALLERY.findIndex((g) => g.id === item.id);
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => onOpenLightbox(globalIdx)}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-[#201815] cursor-pointer shadow-sm hover:shadow-xl transition-all text-left focus:outline-none"
                aria-label={`View ${item.title}`}
              >
                <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                <div>
                  <h4 className="text-xs font-semibold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#EADBCE] mt-0.5 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
