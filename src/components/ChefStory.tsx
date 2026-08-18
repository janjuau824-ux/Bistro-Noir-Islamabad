import React from 'react';
import { 
  Sparkles, 
  Award, 
  Quote, 
  HeartHandshake, 
  CheckCircle2,
  ShieldCheck,
  Star
} from 'lucide-react';
import { CHEF_INFO, ACCOLADES } from '../data/restaurantData';
import { handleImageError } from '../utils/imageFallbacks';

export const ChefStory: React.FC = () => {
  return (
    <section id="chef" className="py-24 bg-[#0e0e13] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af370d] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Heritage & Culinary Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            The Story Behind <span className="gold-gradient-text italic font-normal">Bistro Noir</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Founded with a singular vision: to deliver the authenticity, precision, and romanticism 
            of Parisian Michelin gastronomy to Islamabad.
          </p>
        </div>

        {/* Chef Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Chef Image with Gold Border Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af374d] shadow-2xl bg-[#14141b]">
              <img
                src={CHEF_INFO.image}
                alt={CHEF_INFO.name}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'chef')}
                className="w-full h-[450px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0b0b0ef0] border border-[#d4af3740] backdrop-blur-md">
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-cinzel block">
                  {CHEF_INFO.origin}
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {CHEF_INFO.name}
                </h3>
                <p className="text-xs text-[#a8a396] mt-0.5">
                  {CHEF_INFO.title}
                </p>
              </div>
            </div>

            {/* Pastry Chef Accent Pill */}
            <div className="hidden sm:flex items-center space-x-3 absolute -bottom-6 -right-4 p-3.5 rounded-2xl bg-[#16161fd9] border border-[#d4af3766] backdrop-blur-xl shadow-2xl">
              <img
                src={CHEF_INFO.pastryChef.image}
                alt={CHEF_INFO.pastryChef.name}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'pastry')}
                className="w-12 h-12 rounded-full object-cover border border-[#ffd768] bg-[#1a1a24]"
              />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] block font-cinzel">
                  {CHEF_INFO.pastryChef.title}
                </span>
                <span className="text-xs font-semibold text-white block">
                  {CHEF_INFO.pastryChef.name}
                </span>
                <span className="text-[10px] text-[#8e8a80]">Bordeaux, France</span>
              </div>
            </div>
          </div>

          {/* Philosophy & Culinary Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-[#d4af37]">
              <Quote className="w-8 h-8 text-[#d4af3740] absolute -top-4 -left-3" />
              <p className="font-serif italic text-lg sm:text-xl text-[#f2ede4] leading-relaxed">
                "{CHEF_INFO.quote}"
              </p>
              <span className="text-xs font-cinzel text-[#d4af37] uppercase tracking-widest block mt-2 font-semibold">
                — {CHEF_INFO.name}, Lyon Gastronomic Heritage
              </span>
            </div>

            <p className="text-sm text-[#b8b3a5] leading-relaxed">
              At Bistro Noir Islamabad, our kitchen operates on uncompromising standards. 
              We import authentic French provisions weekly: <strong>Périgord black winter truffles</strong>, 
              <strong>Valrhona 70% Guanaja grand cru chocolate</strong>, <strong>cultured Normandy butter</strong>, 
              and <strong>AOP cheeses</strong>. These are married with fresh organic micro-greens, wild morels, 
              and heirloom baby vegetables grown exclusively for our restaurant in the Margalla Valley foothills.
            </p>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14141c] border border-[#262534]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">100% Halal Gourmet</span>
                </div>
                <p className="text-xs text-[#a09a8e] leading-relaxed">
                  Every reduction, glaze, and stock is alcohol-free and crafted through slow reduction of roasted bones and natural grape musts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14141c] border border-[#262534]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Bespoke Hospitality</span>
                </div>
                <p className="text-xs text-[#a09a8e] leading-relaxed">
                  Personal table-side service, custom leather menus, warm buckwheat blinis, and dietary accommodations for every guest.
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 pt-2">
              {[
                'Over 22 years of Michelin-starred background in Paris and Monaco',
                'Table-side Gueridon trolley service for Caviar, Soufflé, and Mocktail smoking',
                'Private temperature-controlled cellar for vintage non-alcoholic botanical sparkling crus'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-[#cfcac0]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Accolades & Certifications Grid */}
        <div className="pt-12 border-t border-[#252433]">
          <div className="text-center mb-10">
            <span className="text-xs font-cinzel text-[#d4af37] uppercase tracking-[0.25em] font-semibold">
              ACCOLADES & RECOGNITIONS
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              Celebrated by Connoisseurs & Critics
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOLADES.map((acc) => (
              <div
                key={acc.id}
                className="p-6 rounded-2xl bg-[#13131a] border border-[#262536] hover:border-[#d4af3766] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1e1d28] border border-[#d4af3740] flex items-center justify-center text-[#ffd768] mb-4">
                    <Award className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <span className="text-[10px] text-[#d4af37] font-cinzel uppercase tracking-widest block mb-1">
                    {acc.organization} • {acc.year}
                  </span>
                  <h4 className="text-base font-serif font-bold text-white mb-2">
                    {acc.title}
                  </h4>
                  <p className="text-xs text-[#a09a8e] leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
