import React, { useState } from 'react';
import { Sparkles, Search, Calendar, Check, Info, ArrowRight, Filter } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData.ts';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
  initialCategory?: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenBooking,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'hair-styling', label: 'Hair Styling' },
    { id: 'hair-colouring', label: 'Hair Colouring' },
    { id: 'bridal-makeup', label: 'Bridal Makeup' },
    { id: 'makeup', label: 'Party Makeup' },
    { id: 'facials-skin', label: 'Facials & Skin Care' },
    { id: 'pre-bridal', label: 'Pre-Bridal Packages' },
    { id: 'body-spa', label: 'Body Spa' },
    { id: 'manicure-pedicure', label: 'Manicure & Pedicure' },
    { id: 'nail-services', label: 'Nail Bar' },
    { id: 'hand-feet', label: 'Hand & Feet' },
    { id: 'mehndi', label: 'Mehndi' },
  ];

  // Filter logic
  const filteredCategories = SALON_SERVICES.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const q = searchQuery.toLowerCase();
    const matchingItems = cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q)
    );
    return {
      ...cat,
      items: matchingItems,
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#E8DFD5] rounded-full text-xs text-[#A8823B] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Salon Repertoire</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#201815]">
          Services & Treatments
        </h1>
        <p className="text-sm sm:text-base text-[#736861] font-light leading-relaxed">
          From signature bridal suites and precision haircuts to clinical Skeydor facials and Swarovski nail enhancements.
        </p>

        {/* Pricing Transparency Banner */}
        <div className="p-3.5 bg-[#FDFBF7] border border-[#E8DFD5] rounded-lg text-xs text-[#736861] flex items-center justify-center gap-2 max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>
            <strong>Pricing Policy:</strong> In strict adherence to authorized website records, prices are finalized after personalized hair/skin diagnostic consultation at our branches.
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#A89F91] absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Search hair cut, facial, bridal, nail art..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8DFD5] rounded-full text-sm text-[#201815] focus:outline-none focus:border-[#C5A059] shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-[#736861] hover:text-[#201815]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Segmented Scroll */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#201815] text-white shadow-sm'
                    : 'bg-[#F3ECE2] text-[#5A5049] hover:bg-[#EADBCE] hover:text-[#201815]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services List by Category */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E8DFD5] space-y-3">
          <p className="text-sm font-semibold text-[#201815]">No services matching "{searchQuery}"</p>
          <p className="text-xs text-[#736861]">Try adjusting your search keywords or choosing "All Services".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 text-xs font-semibold text-[#C5A059] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Heading Banner */}
              <div className="border-b border-[#E8DFD5] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201815]">
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#736861] mt-1 font-light">
                    {category.shortDesc}
                  </p>
                </div>
                <span className="text-xs text-[#A89F91] whitespace-nowrap">
                  {category.items.length} {category.items.length === 1 ? 'treatment' : 'treatments'}
                </span>
              </div>

              {/* Items Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-[#E8DFD5] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all group"
                  >
                    <div>
                      {/* Photo Header */}
                      <div className="relative h-56 bg-[#F3ECE2] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-[#201815]/85 text-[#FAF8F5] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-sm">
                          {item.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-[#201815] group-hover:text-[#A8823B] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#C5A059] italic mt-0.5">
                            {item.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-[#5A5049] leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights List */}
                        <div className="space-y-1.5 pt-2 border-t border-[#F3ECE2]">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#736861]">
                              <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pricing & Booking Footer */}
                    <div className="p-6 pt-0 space-y-3">
                      <div className="p-2.5 bg-[#FAF8F5] rounded border border-[#E8DFD5] text-[11px] text-[#736861]">
                        <span className="font-semibold text-[#201815] block">Consultation note:</span>
                        {item.pricingNote}
                      </div>

                      <button
                        onClick={() => onOpenBooking(item.name)}
                        className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#201815] hover:bg-[#C5A059] rounded transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Book This Treatment</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
