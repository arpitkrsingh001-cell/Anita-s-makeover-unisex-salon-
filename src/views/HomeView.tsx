import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Sparkles,
  ArrowRight,
  MapPin,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  Award,
  Clock,
  ChevronRight,
  ShieldCheck,
  Scissors,
  Crown,
  Heart,
} from 'lucide-react';
import {
  SALON_BRANCHES,
  SALON_SERVICES,
  MEMBERSHIP_PLANS,
  CLIENT_TESTIMONIALS,
  ABOUT_SALON,
  SALON_GALLERY,
} from '../data/salonData.ts';
import { SALON_WHATSAPP_NUMBER } from '../utils/booking.ts';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceName?: string, branchName?: string) => void;
  onOpenLightbox: (index: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenBooking,
  onOpenLightbox,
}) => {
  // Hero slider index
  const heroImages = [
    {
      url: '/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg',
      title: 'Haute Hair Couture & Bespoke Styling',
      subtitle: 'Precision cuts, balayage, and restorative hair rituals in Gurgaon.',
    },
    {
      url: '/assets/aistudio/IMG-20261111-WA0085_ea398949.jpg',
      title: 'Signature Bridal Makeovers by Anita Yadav',
      subtitle: 'Timeless royal bridal artistry, airbrush perfection, and jewellery setting.',
    },
    {
      url: '/assets/aistudio/IMG-20261111-WA0086_3a6f87d2.jpg',
      title: 'Curative Skincare & Luxury Spa Rituals',
      subtitle: 'Advanced therapies featuring Skeydor & Agelock formulations.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const featuredServices = SALON_SERVICES.slice(0, 6);
  const [portfolioTab, setPortfolioTab] = useState<'party' | 'bridal' | 'hair'>('party');
  const partyMakeupPreviewItems = SALON_GALLERY.filter((item) => item.category === 'party_makeup').slice(0, 6);
  const bridalPreviewItems = SALON_GALLERY.filter((item) => item.category === 'bridal').slice(0, 6);
  const hairStylingPreviewItems = SALON_GALLERY.filter((item) => item.category === 'hair_styling').slice(0, 6);
  const activePortfolioItems =
    portfolioTab === 'party'
      ? partyMakeupPreviewItems
      : portfolioTab === 'bridal'
      ? bridalPreviewItems
      : hairStylingPreviewItems;

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative min-h-[580px] lg:min-h-[680px] bg-[#201815] text-[#FAF8F5] overflow-hidden flex items-center">
        {/* Background Image Carousel with Measured Dark Scrim */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === activeSlide ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover object-center filter brightness-95"
              />
            </div>
          ))}
          {/* Gradients to assure AA contrast and luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#201815] via-[#201815]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#201815] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#C5A059]/40 rounded-full text-xs text-[#EADBCE] backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium tracking-wide">
                Gurgaon's Premier Unisex Salon & Certified Academy
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Where Artistry Meets <span className="text-[#D4AF37] italic">Pure Elegance</span>
            </h1>

            {/* Sub-text */}
            <p className="text-sm sm:text-base text-[#EADBCE] leading-relaxed font-light max-w-xl">
              Experience transformative beauty curated by founder & celebrity makeup artist Anita Yadav. From bespoke bridal suites and ammonia-free hair colouring to clinical skincare and international academy diplomas.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => onSelectTab('services')}
                className="flex items-center justify-center gap-2 px-7 py-4 text-xs uppercase tracking-widest font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded backdrop-blur-sm transition-all cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            {/* Branch Locations Quick Pills */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#C8B8A6]">
              <span className="font-semibold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> 3 Locations:
              </span>
              <button onClick={() => onSelectTab('branches')} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                Sector 23A
              </button>
              <span>·</span>
              <button onClick={() => onSelectTab('branches')} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                Sector 81
              </button>
              <span>·</span>
              <button onClick={() => onSelectTab('branches')} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                IMT Manesar
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeSlide ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. VALUE STRIP & TRUST PILLARS                           */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#FDFBF7] p-8 rounded-xl border border-[#E8DFD5] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F5EFE6] rounded-lg text-[#C5A059] shrink-0">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#201815]">Founder Artistry</h4>
              <p className="text-xs text-[#736861] mt-1">
                Personalized bridal makeovers and senior masterclass oversight by Anita Yadav.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F5EFE6] rounded-lg text-[#C5A059] shrink-0">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#201815]">Ammonia-Free Care</h4>
              <p className="text-xs text-[#736861] mt-1">
                Gentle, high-street hair colours and diagnostic scalp cameras for healthy hair.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F5EFE6] rounded-lg text-[#C5A059] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#201815]">Curative Skincare</h4>
              <p className="text-xs text-[#736861] mt-1">
                Luxury skin rituals powered by certified Skeydor (Spain) & Agelock technology.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F5EFE6] rounded-lg text-[#C5A059] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#201815]">Certified Academy</h4>
              <p className="text-xs text-[#736861] mt-1">
                Professional diplomas in Cosmetology, Makeup Artistry, and Nail Technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FEATURED SERVICES PREVIEW                             */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Couture Menu</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#201815]">
              Featured Salon Services
            </h2>
            <p className="text-xs sm:text-sm text-[#736861] mt-2 max-w-xl">
              Every treatment is tailored to your individual aura, skin histology, and personal lifestyle.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#201815] hover:text-[#C5A059] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All 11 Service Categories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((cat) => {
            const primaryItem = cat.items[0];
            return (
              <div
                key={cat.id}
                className="group bg-white rounded-lg border border-[#E8DFD5] overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-[#F3ECE2]">
                    <img
                      src={primaryItem.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#201815]/85 text-[#FAF8F5] text-[11px] px-2.5 py-1 rounded backdrop-blur-sm font-medium">
                      {cat.name}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-bold text-[#201815] group-hover:text-[#A8823B] transition-colors">
                      {primaryItem.name}
                    </h3>
                    <p className="text-xs text-[#736861] leading-relaxed line-clamp-3">
                      {primaryItem.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {primaryItem.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] text-[#5A5049] bg-[#F5EFE6] px-2 py-0.5 rounded"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-[#F3ECE2] mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#A89F91] italic">
                    Consultation included
                  </span>
                  <button
                    onClick={() => onOpenBooking(primaryItem.name)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#201815] hover:text-[#C5A059] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. ABOUT FOUNDER SPOTLIGHT                               */}
      {/* ======================================================== */}
      <section className="bg-[#F3ECE2]/60 py-16 sm:py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Atelier & Leadership Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#201815] group">
                <img
                  src="/assets/aistudio/IMG-20261111-WA0037_62c8c224.jpg"
                  alt="Anita's Makeover Atelier & Salon Suites"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#201815]/80 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Haute Beauty Atelier & Academy</span>
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    The Art of Elevation
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Anita's Makeover</h3>
                  <p className="text-xs text-[#EADBCE] leading-relaxed">
                    Sculpting timeless bridal beauty, couture hair textures, and holistic wellness across Delhi NCR.
                  </p>
                </div>
              </div>

              {/* Leadership Hallmark Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8DFD5] shadow-sm space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#F0E8DF] pb-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A059] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Executive Leadership
                  </span>
                  <span className="text-[11px] text-[#736861]">Est. Gurgaon</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5]/70 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6D28] text-white font-serif font-bold text-xs flex items-center justify-center shadow-sm">
                        AY
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-xs text-[#201815]">Anita Yadav</h4>
                        <p className="text-[10px] text-[#C5A059] font-medium">Founder & Creative Director</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#736861] leading-tight">Celebrity bridal master stylist & academy dean</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5]/70 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#201815] text-[#D4AF37] font-serif font-bold text-xs flex items-center justify-center border border-[#D4AF37]/40 shadow-sm">
                        MY
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-xs text-[#201815]">Manoj Yadav</h4>
                        <p className="text-[10px] text-[#C5A059] font-medium">Co-Founder & MD</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#736861] leading-tight">Strategic operations, expansion & standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage & Vision</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#201815] leading-snug">
                "Getting a makeover not only changes the appearance, but brings back lost confidence."
              </h2>

              <p className="text-sm text-[#5A5049] leading-relaxed">
                {ABOUT_SALON.legacyStory[0]}
              </p>

              <p className="text-sm text-[#5A5049] leading-relaxed">
                {ABOUT_SALON.legacyStory[1]}
              </p>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#E8DFD5]">
                <div>
                  <span className="font-serif text-3xl font-bold text-[#201815]">3+</span>
                  <p className="text-xs text-[#736861] mt-0.5">Gurgaon Locations</p>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-[#201815]">1000s</span>
                  <p className="text-xs text-[#736861] mt-0.5">Radiant Brides</p>
                </div>
                <div>
                  <span className="font-serif text-3xl font-bold text-[#201815]">100%</span>
                  <p className="text-xs text-[#736861] mt-0.5">International Products</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onSelectTab('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all"
                >
                  <span>Read Full Salon Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SIGNATURE ARTISTRY & PORTFOLIO                         */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Artistry</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#201815]">
              Party & Bridal Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-[#736861] mt-2 max-w-xl">
              Authentic client transformations and bridal suites. Click any photograph to view in high definition.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex flex-wrap items-center bg-[#F3ECE2] p-1 rounded-full text-xs">
              <button
                onClick={() => setPortfolioTab('party')}
                className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  portfolioTab === 'party'
                    ? 'bg-[#201815] text-white shadow-sm'
                    : 'text-[#5A5049] hover:text-[#201815]'
                }`}
              >
                Party Makeup by Anita Ma'am
              </button>
              <button
                onClick={() => setPortfolioTab('bridal')}
                className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  portfolioTab === 'bridal'
                    ? 'bg-[#201815] text-white shadow-sm'
                    : 'text-[#5A5049] hover:text-[#201815]'
                }`}
              >
                Bridal Portfolio
              </button>
              <button
                onClick={() => setPortfolioTab('hair')}
                className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                  portfolioTab === 'hair'
                    ? 'bg-[#201815] text-white shadow-sm'
                    : 'text-[#5A5049] hover:text-[#201815]'
                }`}
              >
                Hair Couture
              </button>
            </div>

            <button
              onClick={() => onSelectTab('gallery')}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#201815] hover:text-[#C5A059] transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>Explore All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {activePortfolioItems.map((item) => {
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[#201815]/85 text-[#FAF8F5] text-[9px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-sm pointer-events-none">
                  {item.category === 'party_makeup'
                    ? "Anita Ma'am"
                    : item.category === 'hair_styling'
                    ? 'Hair Couture'
                    : 'Bridal'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 pointer-events-none">
                  <span className="text-[10px] text-white font-medium leading-tight line-clamp-2">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. MEMBERSHIP CARD PREVIEW                               */}
      {/* ======================================================== */}
      <section className="bg-[#201815] text-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Privileged Rewards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Anita's Makeover Membership Cards
            </h2>
            <p className="text-xs sm:text-sm text-[#EADBCE]">
              Enjoy tremendous bonus wallet value and flat year-long discounts across all salon services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#2C211C] border border-[#45362E] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A059] transition-all group"
              >
                <div className="space-y-6">
                  {/* Card Visual */}
                  <div className="relative h-44 rounded-lg overflow-hidden bg-black/40 flex items-center justify-center p-4 border border-white/10">
                    <img
                      src={plan.cardImage}
                      alt={plan.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                    {plan.badge && (
                      <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#D4AF37] text-[#201815]">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white">{plan.title}</h3>
                    <p className="text-xs text-[#D4AF37] font-semibold">{plan.priceText}</p>
                    <p className="text-xs text-[#C8B8A6]">{plan.benefitText}</p>
                  </div>

                  <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#EADBCE]">
                    {plan.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <button
                    onClick={() => onSelectTab('membership')}
                    className="w-full py-3 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-colors text-center"
                  >
                    View Terms & Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. AUTHENTIC CLIENT TESTIMONIALS                         */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            <Heart className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#201815]">
            Loved by Gurgaon & NCR
          </h2>
          <p className="text-xs sm:text-sm text-[#736861]">
            Verified words from esteemed regulars and prominent personalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CLIENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FDFBF7] border border-[#E8DFD5] p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <blockquote className="font-serif text-base sm:text-lg text-[#201815] italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#201815] block">{t.author}</span>
                  <span className="text-[#736861]">{t.role}</span>
                </div>
                <span className="text-[11px] text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded font-medium">
                  Verified Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. BRANCH LOCATIONS CARDS                                */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#201815]">
            Our Salon Locations in Gurgaon
          </h2>
          <p className="text-xs sm:text-sm text-[#736861]">
            Step into any of our sanctuaries for personalized consultation and bespoke care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SALON_BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-white border border-[#E8DFD5] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#F5EFE6] text-[#A8823B]">
                    {b.category}
                  </span>
                  <span className="text-xs text-[#736861] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A059]" /> 10am – 8pm
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#201815]">{b.locality}</h3>
                
                <p className="text-xs text-[#5A5049] leading-relaxed">
                  {b.address} - PIN {b.pincode}
                </p>

                <div className="pt-2 text-xs">
                  <span className="text-[#736861] block">Direct Contact:</span>
                  <a href={`tel:${b.phone}`} className="font-semibold text-[#201815] hover:text-[#C5A059]">
                    {b.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F3ECE2] mt-6 flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking(undefined, b.name)}
                  className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-colors text-center cursor-pointer"
                >
                  Book at {b.locality.includes('Sector 23A') ? 'Sector 23A' : b.locality.includes('Sector 81') ? 'Sector 81' : 'IMT Manesar'}
                </button>
                <a
                  href={b.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[#201815] bg-[#F3ECE2] hover:bg-[#EADBCE] rounded transition-colors"
                  aria-label={`Get directions to ${b.locality}`}
                >
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. ACADEMY CALLOUT                                       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#201815] to-[#382820] text-white rounded-2xl p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          <div className="max-w-xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-[#D4AF37] border border-white/10">
              <Award className="w-3.5 h-3.5" />
              <span>Anita's Makeover Academy · Helpline: 9650170897</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Launch Your Career in the $2.6B Indian Beauty Industry
            </h2>

            <p className="text-xs sm:text-sm text-[#EADBCE] leading-relaxed">
              Professional courses in Cosmetology, Advanced Makeup Artistry, Clinical Skin Care, Hair Dressing, Self Grooming, and Certified Nail Technology. Practical pedagogy, free kit, and placement support.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onSelectTab('academy')}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all text-center"
              >
                Explore Courses & Free Counseling
              </button>
              <a
                href={`https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to inquire about Anita's Makeover Academy Courses.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-all text-center"
              >
                WhatsApp Academy Desk
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 lg:opacity-35 pointer-events-none hidden sm:block">
            <img
              src="/images/client/academy/demo.png"
              alt="Academy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
