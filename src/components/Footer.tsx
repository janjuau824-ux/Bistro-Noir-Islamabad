import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Heart
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1e1d28] text-[#f2ede4] pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative Gold Accent Bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent absolute top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#1c1b26]">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#15151b]">
                <UtensilsCrossed className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-widest text-[#f5efe6] uppercase">
                  BISTRO NOIR
                </span>
                <span className="block text-[9px] tracking-[0.28em] text-[#d4af37] uppercase -mt-0.5 font-cinzel font-semibold">
                  ISLAMABAD • HAUTE GASTRONOMIE
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a09a8e] leading-relaxed max-w-sm">
              Islamabad’s sanctuary of authentic French haute cuisine, Périgord black truffles, 
              halal Wagyu A5, and private salon hospitality overlooking the Margalla Hills.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#15151e] text-[#ffd768] border border-[#d4af3740] flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1 text-[#84cc16]" />
                100% Halal Gourmet
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#15151e] text-[#ffd768] border border-[#d4af3740]">
                Beverly Centre
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#d4af37] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#b8b3a8]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'menu', label: 'Food Menu' },
                { id: 'signatures', label: 'Chef Signatures' },
                { id: 'chef', label: 'Our Story' },
                { id: 'private-dining', label: 'Salon Noir VIP' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'contact', label: 'Location & Map' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#ffd768] hover:translate-x-1 transition-all"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#d4af37] font-bold">
              Service Hours
            </h4>
            <div className="space-y-2 text-xs text-[#b8b3a8]">
              <p>
                <strong className="text-white">Lunch:</strong><br />
                {RESTAURANT_INFO.openingHours.lunch}
              </p>
              <p>
                <strong className="text-white">Dinner:</strong><br />
                {RESTAURANT_INFO.openingHours.dinner}
              </p>
              <p className="text-[11px] text-[#8e8a80]">
                {RESTAURANT_INFO.openingHours.closed}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#ffd768] transition-colors"
                >
                  Book Table Now
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Exclusive Invitations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#d4af37] font-bold">
              Le Cercle Noir
            </h4>
            <p className="text-xs text-[#a09a8e]">
              Subscribe for exclusive seasonal truffle menu previews, French culinary masterclasses, and diplomatic salon invitations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#161f18] border border-[#25d36640] text-xs text-[#84cc16] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                <span>Bienvenue au Cercle Noir. We have noted your email.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-[#282738] text-xs text-white placeholder-[#787368] focus:outline-none focus:border-[#d4af37]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#d4af37] text-black hover:bg-[#ffd768] transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#706c62] block">
                  Strictly confidential. No spam.
                </span>
              </form>
            )}

            {/* Social Channels */}
            <div className="pt-3 flex items-center space-x-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#15151e] border border-[#272635] flex items-center justify-center text-[#d4af37] hover:text-white hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#15151e] border border-[#272635] flex items-center justify-center text-[#d4af37] hover:text-white hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Pin */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#787368] gap-4">
          <p>© {new Date().getFullYear()} Bistro Noir Islamabad. All rights reserved. Registered Gourmet Institution.</p>
          <div className="flex items-center space-x-4">
            <span>Level 4, Beverly Centre, Blue Area, Islamabad</span>
            <span>•</span>
            <span className="text-[#ffd768]">L’Excellence Gastronomique</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
