import React from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  Flame, 
  Wine, 
  ShieldCheck, 
  Utensils, 
  AlertCircle,
  CalendarCheck
} from 'lucide-react';
import { MenuItem } from '../types';
import { handleImageError } from '../utils/imageFallbacks';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onReserveForDish: (dishName: string) => void;
  currency: 'PKR' | 'USD';
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onReserveForDish,
  currency
}) => {
  if (!dish) return null;

  const formatPrice = (pkr: number) => {
    if (currency === 'USD') {
      return `$${(pkr / 280).toFixed(0)}`;
    }
    return `PKR ${pkr.toLocaleString('en-US')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#000000d9] backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#121217] border border-[#d4af3740] rounded-2xl shadow-2xl overflow-hidden text-[#f2ede4] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#00000099] text-[#e5c158] hover:text-white hover:bg-[#d4af3733] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1a1a24]">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'food')}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/40" />

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {dish.dietary.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0b0b0ee6] text-[#ffd768] border border-[#d4af3766] backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#ffd768] bg-[#0b0b0ef0] px-4 py-1.5 rounded-xl border border-[#d4af3740]">
              {formatPrice(dish.pricePKR)}
            </span>
          </div>
        </div>

        {/* Dish Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-cinzel block mb-1">
              {dish.frenchName}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {dish.name}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#d1ccc0] leading-relaxed">
            {dish.longDescription}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#181822] border border-[#2c2b3a]">
            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <div>
                <span className="text-[10px] text-[#8e8a80] uppercase block">Prep Time</span>
                <span className="text-xs font-semibold text-white">{dish.preparationTime}</span>
              </div>
            </div>

            {dish.calories && (
              <div className="flex items-center space-x-2.5">
                <Flame className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] text-[#8e8a80] uppercase block">Nutritional Value</span>
                  <span className="text-xs font-semibold text-white">{dish.calories} kcal</span>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <div>
                <span className="text-[10px] text-[#8e8a80] uppercase block">Halal Verification</span>
                <span className="text-xs font-semibold text-[#84cc16]">100% Certified Halal</span>
              </div>
            </div>
          </div>

          {/* Sommelier Non-Alcoholic Pairing */}
          {dish.pairing && (
            <div className="p-4 rounded-xl bg-[#1b1924] border border-[#d4af3733] flex items-start space-x-3">
              <Wine className="w-5 h-5 text-[#ffd768] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-cinzel uppercase tracking-wider text-[#ffd768] block">
                  Sommelier Non-Alcoholic Artisanal Pairing
                </span>
                <p className="text-xs text-[#cfcac0] mt-0.5 font-medium">
                  {dish.pairing}
                </p>
              </div>
            </div>
          )}

          {/* Ingredients & Allergens */}
          <div className="space-y-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#a8a396] block mb-2 font-semibold flex items-center">
                <Utensils className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                Key Artisanal Ingredients
              </span>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs bg-[#1f1e29] text-[#e0dad0] border border-[#313040]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {dish.allergens.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#a8a396] block mb-1 font-semibold flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                  Allergen Advisory
                </span>
                <p className="text-xs text-[#9d988d]">
                  Contains: {dish.allergens.join(', ')}. Please notify your waiter of any severe allergies prior to dining.
                </p>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#2a2936] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8e8a80]">
              Available for Lunch and Dinner sittings at Bistro Noir.
            </div>
            <button
              onClick={() => {
                onClose();
                onReserveForDish(dish.name);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reserve Table for this Dish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
