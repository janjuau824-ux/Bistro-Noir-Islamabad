import React from 'react';
import { 
  Sparkles, 
  Users, 
  ShieldCheck, 
  CalendarCheck, 
  Crown, 
  Eye, 
  Utensils, 
  Music 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { handleImageError } from '../utils/imageFallbacks';
import { LOCAL_ASSETS } from '../assets';

interface PrivateDiningProps {
  onOpenReservation: () => void;
}

export const PrivateDining: React.FC<PrivateDiningProps> = ({ onOpenReservation }) => {
  return (
    <section id="private-dining" className="py-24 bg-[#0b0b0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Exclusivity & Private Events</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Les Salons Privés <span className="gold-gradient-text italic font-normal">& Terraces</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Distinguished private spaces designed for diplomatic delegations, corporate boardrooms, 
            and intimate romantic milestones in Islamabad.
          </p>
        </div>

        {/* Two Flagship Spaces Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-14">
          
          {/* Salon Noir Card */}
          <div className="rounded-3xl bg-[#13131a] border border-[#d4af3740] overflow-hidden shadow-2xl flex flex-col justify-between group">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1a1a24]">
              <img
                src={LOCAL_ASSETS.salonNoir}
                alt="Salon Noir Private VIP Room"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'dining')}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#000000cc] text-[#ffd768] border border-[#d4af3766] backdrop-blur-md flex items-center">
                  <Crown className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  VIP Private Salon
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-cinzel block">
                  Capacity: Up to 14 Distinguished Guests
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Salon Noir VIP Suite
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-xs sm:text-sm text-[#b8b3a5] leading-relaxed">
                An ultra-private, acoustically isolated enclave with bespoke mahogany table, 
                private terrace entrance, and dedicated private butler service. Ideal for high-level diplomatic lunches, 
                confidential business dinners, or grand family celebrations.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#cfcac0]">
                <div className="flex items-center space-x-2">
                  <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Custom Degustation Menus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Dedicated Maître d' & Butler</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Private Margalla Skyline View</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Music className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Independent Acoustic Controls</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#252433] flex items-center justify-between">
                <span className="text-xs text-[#8e8a80]">
                  Advance booking required (24h minimum)
                </span>
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1d1c26] hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af3766] transition-all"
                >
                  Reserve Salon Noir
                </button>
              </div>
            </div>
          </div>

          {/* Le Jardin Terrace Card */}
          <div className="rounded-3xl bg-[#13131a] border border-[#272636] hover:border-[#d4af3766] overflow-hidden shadow-2xl flex flex-col justify-between group transition-colors">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1a1a24]">
              <img
                src={LOCAL_ASSETS.terrace}
                alt="Le Jardin Margalla Terrace"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'terrace')}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-black/30" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#000000cc] text-[#ffd768] border border-[#d4af3766] backdrop-blur-md flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#d4af37]" />
                  Al Fresco Terrace
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-cinzel block">
                  Capacity: Up to 36 Guests
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Le Jardin Margalla Terrace
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-xs sm:text-sm text-[#b8b3a5] leading-relaxed">
                Situated on Level 4 of Beverly Centre, our heated glass-enclosed outdoor terrace offers breathtaking 
                panoramic vistas of the Margalla Hills and Islamabad's twinkling evening skyline, accompanied by candlelit ambiance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#cfcac0]">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Candlelit Evening Ambiance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Climate-Controlled Pergolas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Intimate 2 to 6 Guest Tables</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Prime Sunset & Night Sittings</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#252433] flex items-center justify-between">
                <span className="text-xs text-[#8e8a80]">
                  Perfect for romantic milestones
                </span>
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1d1c26] hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af3766] transition-all"
                >
                  Reserve Terrace Table
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
