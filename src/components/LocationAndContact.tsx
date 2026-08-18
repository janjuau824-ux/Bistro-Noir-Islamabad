import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Shirt, 
  Sparkles, 
  Send, 
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationAndContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Private Event',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setFormSubmitted(true);
  };

  const getGoogleMapsDirectionsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=Beverly+Centre+Blue+Area+Islamabad`;
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0b0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <MapPin className="w-3 h-3" />
            <span>Accès & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Location <span className="gold-gradient-text italic font-normal">& Concierge</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Perched atop Beverly Centre in Islamabad's diplomatic business corridor, 
            overlooking the majestic Margalla Hills.
          </p>
        </div>

        {/* 2-Column Grid: Left (Location & Info) + Right (Contact / Inquiry Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Address, Map Card, Timings, Valet */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Map Card Preview */}
            <div className="rounded-3xl overflow-hidden bg-[#14141c] border border-[#272636] shadow-2xl relative group">
              <div className="relative h-64 w-full bg-[#1a1a24] overflow-hidden">
                {/* Visual Map graphic with Islamabad coords */}
                <iframe
                  title="Bistro Noir Islamabad Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.528435882613!2d73.06456077595561!3d33.71452447328453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9dfcfbb801%3A0xe54d805eb3e85e42!2sBeverly%20Center%2C%20Jinnah%20Ave%2C%20F%206%2F1%20Blue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2044000!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-75 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-[#0b0b0ee6] border border-[#d4af3766] backdrop-blur-md">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#ffd768]" />
                    <span className="text-xs font-serif font-bold text-white">
                      Beverly Centre, Level 4
                    </span>
                  </div>
                  <span className="text-[10px] text-[#a49f92] block">
                    Blue Area, F-6/1, Islamabad
                  </span>
                </div>
              </div>

              {/* Map Footer Action */}
              <div className="p-4 bg-[#14141c] border-t border-[#232230] flex items-center justify-between">
                <span className="text-xs text-[#8e8a80]">GPS: 33.7145° N, 73.0645° E</span>
                <a
                  href={getGoogleMapsDirectionsUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#d4af37] hover:text-[#ffd768] font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Practical Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Timings */}
              <div className="p-5 rounded-2xl bg-[#14141c] border border-[#272635]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Service Hours</span>
                </div>
                <div className="space-y-1 text-xs text-[#b8b3a8]">
                  <p><strong>Lunch:</strong> {RESTAURANT_INFO.openingHours.lunch}</p>
                  <p><strong>Dinner:</strong> {RESTAURANT_INFO.openingHours.dinner}</p>
                  <p className="text-[11px] text-[#8e8a80] pt-1">
                    {RESTAURANT_INFO.openingHours.closed}
                  </p>
                </div>
              </div>

              {/* Valet & Arrival */}
              <div className="p-5 rounded-2xl bg-[#14141c] border border-[#272635]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-2">
                  <Car className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Valet Parking</span>
                </div>
                <p className="text-xs text-[#b8b3a8] leading-relaxed">
                  {RESTAURANT_INFO.valetService}
                </p>
              </div>

              {/* Dress Code */}
              <div className="p-5 rounded-2xl bg-[#14141c] border border-[#272635]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-2">
                  <Shirt className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Dress Protocol</span>
                </div>
                <p className="text-xs text-[#b8b3a8] leading-relaxed">
                  {RESTAURANT_INFO.dressCode}
                </p>
              </div>

              {/* Direct Concierge Line */}
              <div className="p-5 rounded-2xl bg-[#14141c] border border-[#272635]">
                <div className="flex items-center space-x-2 text-[#ffd768] mb-2">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Direct Concierge</span>
                </div>
                <div className="space-y-1 text-xs">
                  <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="block text-white hover:text-[#d4af37] font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="block text-[#a8a396] hover:text-white truncate">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form & WhatsApp Booking */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="p-8 rounded-3xl bg-[#14141c] border border-[#282738] shadow-2xl">
              
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-cinzel block">
                  BESPOKE ASSISTANCE
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Send a Message to the Concierge
                </h3>
                <p className="text-xs text-[#8e8a80] mt-1">
                  Inquire regarding diplomatic events, wedding tastings, corporate receptions, or chef collaborations.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#0f0f15] border border-[#d4af3766] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b1b26] border border-[#d4af37] text-[#ffd768] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white">
                    Message Received with Honor
                  </h4>
                  <p className="text-xs text-[#b8b3a8]">
                    Merci, <strong>{formData.name}</strong>. Our Head Concierge will attend to your inquiry within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry / Private Event',
                        message: ''
                      });
                    }}
                    className="text-xs text-[#d4af37] underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                        Mobile Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="General Inquiry">General Dining Inquiry</option>
                      <option value="Private Salon Noir Booking">Private Salon Noir VIP Booking</option>
                      <option value="Diplomatic Function">Diplomatic / State Function</option>
                      <option value="Corporate Boardroom Dinner">Corporate Boardroom Dinner</option>
                      <option value="Press & Media Collaboration">Press & Media Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how our concierge team can assist..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b89128] text-black hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}

            </div>

            {/* Quick WhatsApp Concierge Banner */}
            <div className="mt-6 p-5 rounded-2xl bg-[#121c16] border border-[#25d36640] flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-black flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-white">
                    Need Instant Table Booking?
                  </h4>
                  <p className="text-[11px] text-[#a4baa8]">
                    Connect with our Maître d’ in real-time on WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.mobileWhatsApp.replace(/\D/g, '')}?text=Bonjour%20Bistro%20Noir,%20I%20would%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#1fb855] transition-all whitespace-nowrap shrink-0"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
