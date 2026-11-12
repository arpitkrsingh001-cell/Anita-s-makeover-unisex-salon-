import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { Lightbox } from './components/Lightbox.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

import { HomeView } from './views/HomeView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { ServicesView } from './views/ServicesView.tsx';
import { BridalView } from './views/BridalView.tsx';
import { MembershipView } from './views/MembershipView.tsx';
import { GalleryView } from './views/GalleryView.tsx';
import { BranchesView } from './views/BranchesView.tsx';
import { AcademyView } from './views/AcademyView.tsx';
import { FranchiseView } from './views/FranchiseView.tsx';
import { ContactView } from './views/ContactView.tsx';

import { SALON_GALLERY } from './data/salonData.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');
  const [bookingBranch, setBookingBranch] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validTabs = [
        'home',
        'about',
        'services',
        'bridal',
        'membership',
        'gallery',
        'branches',
        'academy',
        'franchise',
        'contact',
      ];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    // Always start on Home after a fresh page load or reload.
    // Internal navigation can still use hash changes during the current session.
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
    setCurrentTab('home');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string, branchName?: string) => {
    if (serviceName) setBookingService(serviceName);
    else setBookingService('');

    if (branchName) setBookingBranch(branchName);
    else setBookingBranch('');

    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2420]">
      {/* Top Sticky Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentTab === 'about' && (
          <AboutView
            onOpenBooking={() => handleOpenBooking()}
            onSelectTab={handleSelectTab}
          />
        )}
        {currentTab === 'services' && (
          <ServicesView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'bridal' && (
          <BridalView
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={handleOpenLightbox}
            onSelectTab={handleSelectTab}
          />
        )}
        {currentTab === 'membership' && <MembershipView />}
        {currentTab === 'gallery' && (
          <GalleryView
            onOpenLightbox={handleOpenLightbox}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentTab === 'branches' && (
          <BranchesView
            onOpenBooking={handleOpenBooking}
            onSelectTab={handleSelectTab}
          />
        )}
        {currentTab === 'academy' && <AcademyView />}
        {currentTab === 'franchise' && <FranchiseView />}
        {currentTab === 'contact' && (
          <ContactView onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
        initialBranch={bookingBranch}
      />

      {/* High-Resolution Photo Lightbox */}
      <Lightbox
        items={SALON_GALLERY}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Discreet Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
