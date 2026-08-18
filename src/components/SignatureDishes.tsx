import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  Wine, 
  ShieldCheck, 
  Info,
  CalendarCheck
} from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { handleImageError } from '../utils/imageFallbacks';

interface SignatureDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
  currency: 'PKR' | 'USD';
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({
  onSelectDish,
  onOpenReservation,
  currency
}) => {
  // Select the top 4 flagship signature creations
  const signatures = MENU_ITEMS.filter(
    (item) => item.dietary.includes("Chef's Signature") && item.isPopular
  ).slice(0, 4);

  const formatPrice = (pkr: number) => {
    if (currency === 'USD') {
      return `$${(pkr / 280).toFixed(0)}`;
    }
    return `PKR ${pkr.toLocaleString('en-US')}`;
  };

  return (
    <section id="signatures" className="py-24 bg-[#0e0e13] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#d4af3710] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#d4af3710] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Chef Jean-Luc’s Masterpieces</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Les Créations <span className="gold-gradient-text italic font-normal">Signatures</span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Four defining pillars of French culinary excellence, prepared with rare foraged ingredients, 
            French butter, and halal Australian Wagyu.
          </p>
        </div>

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {signatures.map((dish) => (
            <div
              key={dish.id}
              className="group rounded-2xl bg-[#14141b] border border-[#272633] hover:border-[#d4af3766] transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)]"
            >
              {/* Dish Visual Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1a1a24]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, 'food')}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141b] via-[#14141b20] to-transparent" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#0b0b0ee6] text-[#ffd768] border border-[#d4af3766] backdrop-blur-sm">
                    Signature Creation
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#000000a6] text-[#84cc16] border border-[#84cc1640] backdrop-blur-sm flex items-center">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Halal
                  </span>
                </div>

                <div className="absolute top-4 right-4 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#000000bf] text-[#ffd768] text-xs font-semibold backdrop-blur-sm border border-[#ffd76833]">
                  <Star className="w-3.5 h-3.5 fill-[#ffd768]" />
                  <span>{dish.rating}</span>
                </div>

                {/* Bottom Floating Price */}
                <div className="absolute bottom-3 right-4">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#ffd768] bg-[#0b0b0ef0] px-4 py-1.5 rounded-xl border border-[#d4af3740] shadow-md">
                    {formatPrice(dish.pricePKR)}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-cinzel block mb-1 font-medium">
                    {dish.frenchName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#ffd768] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8b3a5] mt-2.5 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Pairing Note */}
                {dish.pairing && (
                  <div className="p-3 rounded-lg bg-[#1a1924] border border-[#2d2b3c] flex items-center space-x-2.5 text-xs text-[#cfcac0]">
                    <Wine className="w-4 h-4 text-[#ffd768] shrink-0" />
                    <span className="truncate">
                      <strong className="text-[#ffd768] font-normal">Pairing:</strong> {dish.pairing}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-3 border-t border-[#22212e]">
                  <button
                    onClick={() => onSelectDish(dish)}
                    className="inline-flex items-center text-xs uppercase tracking-wider text-[#d4af37] hover:text-[#ffd768] font-semibold transition-colors py-2"
                  >
                    <Info className="w-3.5 h-3.5 mr-1.5" />
                    <span>View Ingredients & Story</span>
                  </button>

                  <button
                    onClick={() => onSelectDish(dish)}
                    className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1f1e29] hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af3740] transition-all flex items-center space-x-1.5"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Degustation Teaser Banner */}
        <div className="mt-14 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-[#181822] via-[#1f1e2b] to-[#181822] border border-[#d4af374d] relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-cinzel tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-1">
              THE ULTIMATE GASTRONOMIC VOYAGE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Le Menu Prestige Noir — 7-Course Degustation
            </h3>
            <p className="text-xs sm:text-sm text-[#b8b3a5] leading-relaxed">
              Curated by Chef Jean-Luc Bernard featuring Imperial Caviar, Wagyu A5, Atlantic Scallops, 
              Valrhona Grand Cru Soufflé, and non-alcoholic Grand Cru mocktail pairings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Tasting Experience</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
