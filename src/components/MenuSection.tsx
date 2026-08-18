import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Wine, 
  ShieldCheck, 
  Star, 
  Info,
  DollarSign,
  Download,
  CalendarCheck
} from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory, DietaryTag } from '../types';
import { handleImageError } from '../utils/imageFallbacks';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
  currency: 'PKR' | 'USD';
  onToggleCurrency: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onOpenReservation,
  currency,
  onToggleCurrency
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Creations', french: 'Toute La Carte' },
    { id: 'starters', label: 'Hors-d’œuvres', french: 'Entrées' },
    { id: 'mains', label: 'Plats Principaux', french: 'Viandes & Poissons' },
    { id: 'caviar', label: 'Caviar Service', french: 'Caviar & Blinis' },
    { id: 'desserts', label: 'Les Desserts', french: 'Pâtisserie Fine' },
    { id: 'degustation', label: 'Tasting Menus', french: 'Dégustations' },
    { id: 'beverages', label: 'Artisanal Elixirs', french: 'Boissons & Cafés' },
  ];

  const dietaryOptions: { id: string; label: string }[] = [
    { id: 'all', label: 'All Diets' },
    { id: "Chef's Signature", label: "Chef's Signature" },
    { id: 'Gluten-Free', label: 'Gluten-Free' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'Truffle & Caviar', label: 'Truffle & Caviar' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (selectedDietary !== 'all') {
        if (!item.dietary.includes(selectedDietary as DietaryTag)) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesFrench = item.frenchName.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIng = item.ingredients.some(i => i.toLowerCase().includes(query));
        return matchesName || matchesFrench || matchesDesc || matchesIng;
      }
      return true;
    });
  }, [activeCategory, selectedDietary, searchQuery]);

  const formatPrice = (pkr: number) => {
    if (currency === 'USD') {
      return `$${(pkr / 280).toFixed(0)}`;
    }
    return `PKR ${pkr.toLocaleString('en-US')}`;
  };

  const handleDownloadMenu = () => {
    window.print();
  };

  return (
    <section id="menu" className="py-24 bg-[#0b0b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Gastronomie & Terroir</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            La Carte <span className="gold-gradient-text italic font-normal">& Menus</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Every dish is an orchestrated harmony of classical French technique, 
            foraged botanicals, and hand-selected halal ingredients.
          </p>

          {/* Quick Controls Bar: Currency Toggle & Print Menu */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onToggleCurrency}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#1a1a24] text-[#ffd768] border border-[#d4af3740] hover:bg-[#252533] transition-colors"
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>Currency: {currency === 'PKR' ? 'Pakistani Rupee (PKR ₨)' : 'US Dollar (USD $)'}</span>
            </button>

            <button
              onClick={handleDownloadMenu}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#16161f] text-[#cfcac0] border border-[#313040] hover:text-white hover:border-[#d4af37] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Print / Save Carte</span>
            </button>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2.5 no-scrollbar mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as MenuCategory)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all flex flex-col items-center ${
                  isActive
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black font-bold shadow-lg shadow-[#d4af3726]'
                    : 'bg-[#15151d] text-[#b5b0a3] hover:text-white hover:bg-[#20202a] border border-[#2b2a38]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[9px] lowercase italic tracking-normal ${isActive ? 'text-black/80' : 'text-[#858074]'}`}>
                  {cat.french}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="p-4 rounded-2xl bg-[#13131a] border border-[#262534] mb-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8a8579] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient, name, or French title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2a2938] text-xs text-white placeholder-[#787368] focus:outline-none focus:border-[#d4af37] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8e8a80] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <div className="flex items-center text-xs text-[#8e8a80] mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1 text-[#d4af37]" />
              <span>Diet:</span>
            </div>
            {dietaryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDietary(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                  selectedDietary === opt.id
                    ? 'bg-[#d4af3733] text-[#ffd768] border border-[#d4af3780] font-semibold'
                    : 'bg-[#1b1b24] text-[#a49f92] hover:text-white border border-[#2b2a38]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#13131a] rounded-2xl border border-[#262534] p-8">
            <p className="text-base text-[#cfcac0] mb-2">No culinary items match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="text-xs uppercase tracking-wider text-[#d4af37] hover:underline font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#13131a] border border-[#242332] hover:border-[#d4af3766] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_8px_30px_rgba(212,175,55,0.1)] cursor-pointer"
                onClick={() => onSelectDish(item)}
              >
                {/* Item Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-[#1a1a24]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'food')}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-black/30" />

                  {/* Top Tags */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.dietary.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#0b0b0ee0] text-[#ffd768] border border-[#d4af374d] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-0.5 rounded-md bg-[#000000bf] text-[#ffd768] text-xs font-semibold backdrop-blur-sm border border-[#ffd76833]">
                    <Star className="w-3 h-3 fill-[#ffd768]" />
                    <span>{item.rating}</span>
                  </div>

                  {/* Price at bottom right */}
                  <div className="absolute bottom-2.5 right-3">
                    <span className="text-base font-serif font-bold text-[#ffd768] bg-[#0b0b0ef2] px-3 py-1 rounded-lg border border-[#d4af3740]">
                      {formatPrice(item.pricePKR)}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-cinzel block mb-0.5">
                      {item.frenchName}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#ffd768] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#aba597] mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Pairing / Halal Footnote */}
                  {item.pairing && (
                    <div className="pt-2 border-t border-[#201f2c] flex items-center justify-between text-[11px] text-[#b3aea2]">
                      <span className="flex items-center text-[#ffd768] truncate mr-2">
                        <Wine className="w-3 h-3 mr-1 shrink-0" />
                        <span className="truncate">{item.pairing}</span>
                      </span>
                      <span className="text-[#8e8a80] shrink-0">{item.preparationTime}</span>
                    </div>
                  )}

                  {/* Footer Card Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                      <Info className="w-3 h-3 mr-1" />
                      View Tasting Profile
                    </span>
                    <span className="text-[10px] text-[#84cc16] flex items-center font-medium">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Halal
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-[#14141c] border border-[#2a2938] max-w-2xl w-full">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Ready to indulge in French Haute Cuisine?
            </h3>
            <p className="text-xs sm:text-sm text-[#b0aba0] mb-6">
              Our Executive Sommelier and culinary brigade look forward to welcoming you for an unforgettable dining affair.
            </p>
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black shadow-lg shadow-[#d4af3733] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all inline-flex items-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Table for Tonight</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
