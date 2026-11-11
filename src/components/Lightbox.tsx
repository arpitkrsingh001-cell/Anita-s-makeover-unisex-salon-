import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/salonData.ts';
import { generateGeneralWhatsAppUrl } from '../utils/booking.ts';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handleWhatsAppEnquiry = () => {
    const url = generateGeneralWhatsAppUrl(`Inquiry about Gallery look: "${currentItem.title}"`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-xs text-[#EADBCE]">
          <span className="font-serif text-sm font-semibold text-[#D4AF37]">
            Anita's Makeover
          </span>
          <span>·</span>
          <span>
            {currentIndex + 1} of {items.length}
          </span>
          <span>·</span>
          <span className="capitalize">{currentItem.category.replace('_', ' & ')}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleWhatsAppEnquiry}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          className="absolute left-2 sm:left-6 z-10 p-3 text-white/90 bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="max-h-[75vh] max-w-[85vw] flex flex-col items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[70vh] max-w-full object-contain rounded shadow-2xl animate-in zoom-in-95 duration-200"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          className="absolute right-2 sm:right-6 z-10 p-3 text-white/90 bg-black/40 hover:bg-black/70 rounded-full transition-all focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Metadata Footer */}
      <div className="max-w-2xl mx-auto text-center z-10 pb-2">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FDFBF7] tracking-tight">
          {currentItem.title}
        </h3>
        {currentItem.description && (
          <p className="text-xs sm:text-sm text-[#EADBCE] mt-1 font-light">
            {currentItem.description}
          </p>
        )}
      </div>
    </div>
  );
};
