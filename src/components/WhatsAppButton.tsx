import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.mobileWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Bonjour Bistro Noir Concierge, I would like to inquire about a table reservation / private dining event.'
  )}`;

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Floating Tooltip Label */}
      <span className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-[#121217f2] border border-[#25d3664d] text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span className="text-[#25D366] mr-1 font-bold">VIP Concierge</span> • Chat on WhatsApp
      </span>

      {/* Pulsing Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative"
        aria-label="Chat with Bistro Noir Islamabad on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </aside>
  );
};
