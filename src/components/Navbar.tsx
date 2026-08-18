import React, { useState, useEffect } from 'react';
import { 
  UtensilsCrossed, 
  CalendarCheck, 
  Phone, 
  Menu, 
  X, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  onNavigate, 
  onOpenReservation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: language === 'EN' ? 'Home' : 'Accueil' },
    { id: 'menu', label: language === 'EN' ? 'Menu' : 'La Carte' },
    { id: 'signatures', label: language === 'EN' ? 'Signatures' : 'Créations' },
    { id: 'chef', label: language === 'EN' ? 'Our Story' : 'L’Histoire' },
    { id: 'private-dining', label: language === 'EN' ? 'Salons' : 'Salons Privés' },
    { id: 'gallery', label: language === 'EN' ? 'Gallery' : 'Galerie' },
    { id: 'reviews', label: language === 'EN' ? 'Reviews' : 'Témoignages' },
    { id: 'contact', label: language === 'EN' ? 'Location' : 'Accès' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification / Status Banner */}
      <div className="bg-[#121216] border-b border-[#28272f] text-xs text-[#b8b3a8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              <span className="font-medium">100% Halal French Haute Cuisine</span>
            </span>
            <span className="hidden md:inline-flex items-center text-[#8e8a80]">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              Beverly Centre, Blue Area, Islamabad
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <span className="hidden sm:inline-flex items-center text-[#8e8a80]">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              Dinner Sittings: 07:00 PM – 11:30 PM
            </span>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} 
              className="inline-flex items-center text-[#e5c158] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              <span className="font-mono tracking-wider">{RESTAURANT_INFO.phone}</span>
            </a>
            <div className="flex items-center space-x-1 pl-2 border-l border-[#33313d]">
              <button 
                onClick={() => setLanguage('EN')}
                className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-semibold transition-colors ${
                  language === 'EN' ? 'bg-[#d4af37] text-black' : 'text-[#8e8a80] hover:text-white'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('FR')}
                className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-semibold transition-colors ${
                  language === 'FR' ? 'bg-[#d4af37] text-black' : 'text-[#8e8a80] hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0b0b0ea6] backdrop-blur-xl border-b border-[#d4af3726] shadow-2xl py-3.5' 
            : 'bg-gradient-to-b from-[#0b0b0ee6] to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Crest */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-3 text-left group focus:outline-none"
              id="brand-logo-button"
            >
              <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#15151b] group-hover:border-[#ffd768] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                <UtensilsCrossed className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#f5efe6] group-hover:text-[#ffd768] transition-colors uppercase">
                  BISTRO NOIR
                </span>
                <span className="block text-[9px] tracking-[0.28em] text-[#d4af37] uppercase -mt-0.5 font-cinzel font-semibold">
                  ISLAMABAD • HAUTE GASTRONOMIE
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    id={`nav-link-${link.id}`}
                    className={`text-xs uppercase tracking-[0.18em] font-medium transition-all relative py-1 focus:outline-none ${
                      isActive 
                        ? 'text-[#d4af37] font-semibold' 
                        : 'text-[#d1ccc0] hover:text-[#ffd768]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Table Reservation Button & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onOpenReservation}
                id="header-reserve-btn"
                className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b89128] text-[#0b0b0e] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="lg:hidden p-2 rounded-lg text-[#d4af37] hover:text-white hover:bg-[#1a1a22] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e0e13] border-b border-[#28272f] px-6 py-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#22212a]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2 rounded-md text-xs font-medium uppercase tracking-wider transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#d4af3726] text-[#ffd768] font-semibold border-l-2 border-[#d4af37]'
                      : 'text-[#cbc6ba] hover:bg-[#191922] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black shadow-lg shadow-[#d4af3733]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reserve a Table Now</span>
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.mobileWhatsApp.replace(/\D/g, '')}?text=Bonjour%20Bistro%20Noir,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-full text-xs font-medium text-[#e5c158] border border-[#d4af3740] hover:bg-[#d4af3715]"
              >
                <span>WhatsApp Concierge Booking</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
