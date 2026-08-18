import React from 'react';
import { 
  CalendarCheck, 
  BookOpen, 
  Sparkles, 
  Award, 
  Star, 
  ChevronDown,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { handleImageError } from '../utils/imageFallbacks';
import { LOCAL_ASSETS } from '../assets';

interface HeroProps {
  onOpenReservation: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Layered Gradients */}
      <div className="absolute inset-0 z-0 bg-[#0b0b0e]">
        <img
          src={LOCAL_ASSETS.hero}
          alt="Bistro Noir Islamabad Luxury Restaurant Interior"
          referrerPolicy="no-referrer"
          onError={(e) => handleImageError(e, 'dining')}
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          style={{ filter: 'brightness(0.38) contrast(1.1)' }}
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0ea6] to-[#0b0b0e80]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Royal Crest / Top Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#16161db8] backdrop-blur-md border border-[#d4af374d] text-xs uppercase tracking-[0.25em] text-[#e5c158] mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Haute Gastronomie Française • Islamabad</span>
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fdfcf9] max-w-4xl leading-[1.1] mb-6">
          Experience Fine <span className="gold-gradient-text italic font-normal">French Dining</span> in Islamabad
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-[#d4cfc3] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          An intimate sanctuary of Parisian culinary artistry, Périgord black truffles, 
          halal Wagyu A5, and bespoke degustation menus overlooking the Margalla Hills.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenReservation}
            id="hero-reserve-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.15em] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b89128] text-[#0b0b0e] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Reserve a Table</span>
          </button>

          <button
            onClick={() => onNavigate('menu')}
            id="hero-menu-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-medium uppercase tracking-[0.15em] bg-[#1a1a2480] hover:bg-[#252533] text-[#f2ede4] border border-[#d4af3740] hover:border-[#d4af37] backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>View Food Menu</span>
          </button>
        </div>

        {/* Highlights / Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-[#2d2b38] pt-8">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#14141ca6] border border-[#262432]">
            <div className="flex items-center space-x-1 text-[#ffd768] mb-1">
              <Star className="w-4 h-4 fill-[#ffd768]" />
              <span className="font-bold text-base">4.9 / 5.0</span>
            </div>
            <span className="text-[11px] text-[#a6a195] uppercase tracking-wider text-center">
              Diplomatic & Critic Rating
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#14141ca6] border border-[#262432]">
            <div className="flex items-center space-x-1 text-[#ffd768] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="font-bold text-base">100% Halal</span>
            </div>
            <span className="text-[11px] text-[#a6a195] uppercase tracking-wider text-center">
              Certified French Gourmet
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#14141ca6] border border-[#262432]">
            <div className="flex items-center space-x-1 text-[#ffd768] mb-1">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span className="font-bold text-base">Lyon Pedigree</span>
            </div>
            <span className="text-[11px] text-[#a6a195] uppercase tracking-wider text-center">
              Executive Chef Jean-Luc
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#14141ca6] border border-[#262432]">
            <div className="flex items-center space-x-1 text-[#ffd768] mb-1">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span className="font-bold text-base">Beverly Centre</span>
            </div>
            <span className="text-[11px] text-[#a6a195] uppercase tracking-wider text-center">
              VIP Valet & Terrace View
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => onNavigate('signatures')}
          className="mt-12 text-[#b0aba0] hover:text-[#ffd768] flex flex-col items-center text-xs tracking-widest uppercase transition-colors"
          aria-label="Scroll down to signature dishes"
        >
          <span className="mb-1 text-[10px] tracking-[0.2em]">Discover Signatures</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
        </button>

      </div>
    </section>
  );
};
