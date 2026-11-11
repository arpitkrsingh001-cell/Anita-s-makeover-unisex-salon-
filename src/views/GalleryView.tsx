import React, { useState } from 'react';
import { Sparkles, Crown, Image as ImageIcon, Sparkle, Eye, ArrowLeftRight } from 'lucide-react';
import { SALON_GALLERY, GalleryItem } from '../data/salonData.ts';

interface GalleryViewProps {
  onOpenLightbox: (index: number) => void;
  onOpenBooking: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  onOpenLightbox,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'party_makeup' | 'bridal' | 'hair_styling' | 'before_after' | 'interior' | 'services'>('all');

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'party_makeup', label: "Party Makeup by Anita Ma'am" },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'hair_styling', label: 'Hair Couture & Styling' },
    { id: 'before_after', label: 'Before & After' },
    { id: 'interior', label: 'Salon Ambiance' },
    { id: 'services', label: 'Service Photography' },
  ];

  const filteredItems = SALON_GALLERY.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Portfolio</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          The Anita's Makeover Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          Preserved archival photography showcasing authentic party makeovers by Anita Ma'am, bridal transformations, hair couture, and salon interiors.
        </p>

        {/* Tab Selector */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#201815] text-white shadow-sm ring-1 ring-[#201815]'
                    : 'bg-[#EFE7DC] text-[#2C2420] hover:bg-[#E5DACB] border border-[#DDD1C2]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Party Makeup Special Callout */}
      {activeTab === 'party_makeup' && (
        <div className="p-4 bg-[#FDFBF7] border border-[#C5A059]/40 rounded-xl text-xs text-[#5A5049] text-center max-w-2xl mx-auto space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[#A8823B] font-semibold text-sm">
            <Sparkle className="w-4 h-4 text-[#D4AF37]" />
            <span>Party Makeup Artistry by Anita Ma'am</span>
          </div>
          <p>
            Authentic client makeovers for cocktails, sangeet, haldi, receptions, and festive celebrations. Designed with HD finish, sweat-resistant long wear, and complementary hairstyle draping.
          </p>
        </div>
      )}

      {/* Hair Couture Special Callout */}
      {activeTab === 'hair_styling' && (
        <div className="p-4 bg-[#FDFBF7] border border-[#C5A059]/40 rounded-xl text-xs text-[#5A5049] text-center max-w-2xl mx-auto space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[#A8823B] font-semibold text-sm">
            <Sparkle className="w-4 h-4 text-[#D4AF37]" />
            <span>Hair Couture & Master Artistry</span>
          </div>
          <p>
            Artisan textured bridal buns with fresh roses & hydrangeas, intricate waterfall braids, South-Indian long plaits with kundan floral brooches, and romantic red-carpet waves.
          </p>
        </div>
      )}

      {/* Before & After Special Callout when on Before & After Tab */}
      {activeTab === 'before_after' && (
        <div className="p-4 bg-[#FDFBF7] border border-[#E8DFD5] rounded-xl text-xs text-[#736861] text-center max-w-2xl mx-auto">
          <span className="font-semibold text-[#201815]">Client Privacy & Authenticity:</span> All before & after photographs are authorized client transformations captured under studio lighting without artificial digital filters.
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          // Find global index in SALON_GALLERY for lightbox synchronization
          const globalIdx = SALON_GALLERY.findIndex((g) => g.id === item.id);

          return (
            <button
              type="button"
              key={item.id}
              onClick={() => onOpenLightbox(globalIdx)}
              className="group bg-white rounded-xl border border-[#E8DFD5] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-label={`View ${item.title} in full screen`}
            >
              <div className="relative aspect-[3/4] bg-[#201815] overflow-hidden w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-[#201815]/85 text-[#FAF8F5] text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded backdrop-blur-sm pointer-events-none">
                  {item.category === 'party_makeup'
                    ? "Party Makeup by Anita Ma'am"
                    : item.category === 'hair_styling'
                    ? 'Hair Couture'
                    : item.category.replace('_', ' ').toUpperCase()}
                </div>

                {/* Hover Overlay with Eye Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1 w-full">
                <h3 className="font-serif text-sm font-bold text-[#201815] group-hover:text-[#A8823B] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[11px] text-[#736861] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Booking Banner */}
      <div className="bg-[#201815] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold">Inspired by Our Gallery Looks?</h3>
          <p className="text-xs text-[#EADBCE]">
            Bring a screenshot to your appointment or discuss desired styling directly with Anita Yadav.
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#201815] bg-[#D4AF37] hover:bg-[#E5C158] rounded transition-all shrink-0 cursor-pointer"
        >
          Book Consultation Slot
        </button>
      </div>
    </div>
  );
};
