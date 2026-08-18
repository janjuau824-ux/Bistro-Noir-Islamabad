import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { ChefStory } from './components/ChefStory';
import { PrivateDining } from './components/PrivateDining';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndContact } from './components/LocationAndContact';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AmbianceAudio } from './components/AmbianceAudio';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [initialDishForReservation, setInitialDishForReservation] = useState<string | undefined>(undefined);
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'signatures', 'menu', 'chef', 'private-dining', 'gallery', 'reservations', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReservation = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveForDish = (dishName: string) => {
    setInitialDishForReservation(dishName);
    setSelectedDish(null);
    handleOpenReservation();
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'PKR' ? 'USD' : 'PKR'));
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f3eee6] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Header & Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Fullscreen Hero Banner */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onNavigate={handleNavigate}
        />

        {/* Chef Signature Dishes */}
        <SignatureDishes
          onSelectDish={setSelectedDish}
          onOpenReservation={handleOpenReservation}
          currency={currency}
        />

        {/* Interactive Food Menu & Categories */}
        <MenuSection
          onSelectDish={setSelectedDish}
          onOpenReservation={handleOpenReservation}
          currency={currency}
          onToggleCurrency={handleToggleCurrency}
        />

        {/* Story, Culinary Philosophy & Accolades */}
        <ChefStory />

        {/* Private Dining: Salon Noir VIP & Margalla Terrace */}
        <PrivateDining
          onOpenReservation={handleOpenReservation}
        />

        {/* High-Resolution Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Online Table Reservations System */}
        <ReservationSection
          initialDishRequest={initialDishForReservation}
          onClearDishRequest={() => setInitialDishForReservation(undefined)}
        />

        {/* Customer Reviews & Critic Testimonials */}
        <ReviewsSection />

        {/* Location, Google Map, Timings & Contact Concierge */}
        <LocationAndContact />

        {/* FAQs */}
        <FAQSection />
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Floating Concierge & Sound Controls */}
      <WhatsAppButton />
      <AmbianceAudio />

      {/* Dish Detail Inspection Modal */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onReserveForDish={handleReserveForDish}
          currency={currency}
        />
      )}
    </div>
  );
}
