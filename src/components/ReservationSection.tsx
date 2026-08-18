import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CalendarCheck, 
  Users, 
  Clock, 
  Calendar as CalendarIcon, 
  Crown, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  FileText, 
  Download, 
  Share2,
  AlertCircle
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData, SeatingArea, OccasionType } from '../types';

interface ReservationSectionProps {
  initialDishRequest?: string;
  onClearDishRequest?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialDishRequest,
  onClearDishRequest
}) => {
  const [formData, setFormData] = useState<ReservationData>({
    fullName: '',
    email: '',
    phone: '',
    guests: 2,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Tomorrow default
    time: '20:00',
    seatingArea: 'Main Dining Hall',
    occasion: 'Romantic Dinner',
    specialRequests: initialDishRequest ? `Special Request: Interested in ${initialDishRequest}` : '',
    dietaryRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    referenceCode: string;
    details: ReservationData;
  } | null>(null);

  const timeSlots = [
    { time: '12:30', period: 'Lunch Sitting' },
    { time: '13:00', period: 'Lunch Sitting' },
    { time: '13:30', period: 'Lunch Sitting' },
    { time: '14:00', period: 'Lunch Sitting' },
    { time: '19:00', period: 'Dinner Sitting' },
    { time: '19:30', period: 'Dinner Sitting' },
    { time: '20:00', period: 'Dinner Sitting' },
    { time: '20:30', period: 'Dinner Sitting' },
    { time: '21:00', period: 'Dinner Sitting' },
    { time: '21:30', period: 'Dinner Sitting' },
    { time: '22:00', period: 'Dinner Sitting' },
  ];

  const seatingOptions: { name: SeatingArea; desc: string; icon: string }[] = [
    {
      name: 'Main Dining Hall',
      desc: 'Crystal chandeliers, live subtle grand piano ambiance & velvet booths',
      icon: 'sparkles'
    },
    {
      name: 'Le Jardin Terrace (Margalla View)',
      desc: 'Al fresco candlelit tables overlooking Islamabad & Margalla Hills',
      icon: 'view'
    },
    {
      name: 'Salon Noir (Private VIP Suite)',
      desc: '14-seat private dining room with dedicated butler (Min 4 guests)',
      icon: 'crown'
    },
  ];

  const occasions: OccasionType[] = [
    'Romantic Dinner',
    'Anniversary',
    'Birthday Celebration',
    'Business Dinner',
    'Diplomatic Reception',
    'Casual Dining'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in your name, email, and mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate reference code
      const randomCode = `BN-ISB-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        referenceCode: randomCode,
        details: { ...formData }
      });
      setIsSubmitting(false);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#ffd768', '#f5efe6', '#ffffff']
        });
      } catch {
        // Safe fallback
      }
    }, 900);
  };

  const handleDownloadICS = () => {
    if (!confirmedBooking) return;
    const { details, referenceCode } = confirmedBooking;
    const startDate = `${details.date.replace(/-/g, '')}T${details.time.replace(':', '')}00`;
    
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Bistro Noir Islamabad//Table Reservation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner Reservation at Bistro Noir Islamabad (${referenceCode})`,
      `DESCRIPTION:Table reserved for ${details.guests} guests at ${details.seatingArea}. Occasion: ${details.occasion}. Ref: ${referenceCode}`,
      `LOCATION:Level 4, Beverly Centre, Blue Area, Islamabad`,
      `DTSTART:${startDate}`,
      'DTEND:20260818T223000',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `BistroNoir-Reservation-${referenceCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getWhatsAppBookingLink = () => {
    if (!confirmedBooking) return '#';
    const text = encodeURIComponent(
      `Bonjour Bistro Noir Concierge,\n\nI have created a table reservation:\n• Booking Ref: ${confirmedBooking.referenceCode}\n• Name: ${confirmedBooking.details.fullName}\n• Date: ${confirmedBooking.details.date} at ${confirmedBooking.details.time}\n• Guests: ${confirmedBooking.details.guests}\n• Seating: ${confirmedBooking.details.seatingArea}\n• Occasion: ${confirmedBooking.details.occasion}\n\nPlease confirm availability.`
    );
    return `https://wa.me/${RESTAURANT_INFO.mobileWhatsApp.replace(/\D/g, '')}?text=${text}`;
  };

  return (
    <section id="reservations" className="py-24 bg-[#0b0b0e] relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af3708] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <CalendarCheck className="w-3 h-3" />
            <span>Table Reservations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Reserve Your <span className="gold-gradient-text italic font-normal">Table</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Secure your presence at Bistro Noir. We recommend reserving at least 24 hours in advance 
            for evening dinner sittings and private VIP salons.
          </p>
        </div>

        {/* Confirmation Card OR Reservation Form */}
        {confirmedBooking ? (
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#14141cf0] border border-[#d4af3780] shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-[#1e1e2b] border border-[#d4af37] text-[#ffd768] mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-cinzel block">
                RESERVATION CONFIRMED
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs sm:text-sm text-[#aba597] mt-2">
                A confirmation has been prepared for <strong>{confirmedBooking.details.fullName}</strong>.
              </p>
            </div>

            {/* Booking Slip Card */}
            <div className="p-5 rounded-2xl bg-[#0e0e13] border border-[#2d2b3c] text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#242332]">
                <span className="text-xs text-[#8e8a80] uppercase tracking-wider">Booking Reference</span>
                <span className="font-mono text-base font-bold text-[#ffd768] tracking-widest">
                  {confirmedBooking.referenceCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#8e8a80] block text-[10px] uppercase">Date & Time</span>
                  <span className="font-semibold text-white">
                    {confirmedBooking.details.date} at {confirmedBooking.details.time}
                  </span>
                </div>
                <div>
                  <span className="text-[#8e8a80] block text-[10px] uppercase">Party Size</span>
                  <span className="font-semibold text-white">
                    {confirmedBooking.details.guests} Guests
                  </span>
                </div>
                <div>
                  <span className="text-[#8e8a80] block text-[10px] uppercase">Seating Area</span>
                  <span className="font-semibold text-[#d4af37]">
                    {confirmedBooking.details.seatingArea}
                  </span>
                </div>
                <div>
                  <span className="text-[#8e8a80] block text-[10px] uppercase">Occasion</span>
                  <span className="font-semibold text-white">
                    {confirmedBooking.details.occasion}
                  </span>
                </div>
              </div>

              {confirmedBooking.details.specialRequests && (
                <div className="pt-2 border-t border-[#22212e] text-xs text-[#cfcac0]">
                  <span className="text-[#8e8a80] text-[10px] block uppercase">Notes / Special Requests</span>
                  <p>{confirmedBooking.details.specialRequests}</p>
                </div>
              )}
            </div>

            {/* Actions for Confirmed Booking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handleDownloadICS}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1f1e29] hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af3766] transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Add to Calendar (.ics)</span>
              </button>
            </div>

            <button
              onClick={() => {
                setConfirmedBooking(null);
                if (onClearDishRequest) onClearDishRequest();
              }}
              className="text-xs text-[#8e8a80] hover:text-[#d4af37] transition-colors block mx-auto underline pt-2"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-[#13131af0] border border-[#282738] shadow-2xl space-y-8"
          >
            {/* Step 1: Guests, Date, and Time */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black font-sans font-bold text-xs flex items-center justify-center mr-2.5">
                  1
                </span>
                Date, Time & Party Size
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Guests count */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'} {num >= 8 ? '(Group / VIP Table)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Dining Date
                  </label>
                  <div className="relative">
                    <CalendarIcon className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                {/* Time slot */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.time} value={slot.time}>
                          {slot.time} ({slot.period})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Seating Area Selection */}
            <div className="space-y-4 pt-4 border-t border-[#222130]">
              <h3 className="text-lg font-serif font-bold text-white flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black font-sans font-bold text-xs flex items-center justify-center mr-2.5">
                  2
                </span>
                Select Desired Seating Atmosphere
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {seatingOptions.map((opt) => {
                  const isSelected = formData.seatingArea === opt.name;
                  return (
                    <div
                      key={opt.name}
                      onClick={() => setFormData({ ...formData, seatingArea: opt.name })}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1c1b26] border-[#d4af37] shadow-lg shadow-[#d4af3726]'
                          : 'bg-[#0e0e13] border-[#272635] hover:border-[#d4af3766]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-serif font-bold ${isSelected ? 'text-[#ffd768]' : 'text-white'}`}>
                            {opt.name}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />}
                        </div>
                        <p className="text-[11px] text-[#9e998d] leading-relaxed">
                          {opt.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Occasion & Special Requests */}
            <div className="space-y-4 pt-4 border-t border-[#222130]">
              <h3 className="text-lg font-serif font-bold text-white flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black font-sans font-bold text-xs flex items-center justify-center mr-2.5">
                  3
                </span>
                Occasion & Personalized Requirements
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Dining Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value as OccasionType })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Dietary Restrictions / Allergies (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.dietaryRequirements || ''}
                    onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                    placeholder="e.g., Gluten-Free, No Shellfish, Vegetarian..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Special Requests & Table Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests || ''}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Window table request, birthday chocolate plaque calligraphy, quiet corner for business discussion..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-4 pt-4 border-t border-[#222130]">
              <h3 className="text-lg font-serif font-bold text-white flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#d4af37] text-black font-sans font-bold text-xs flex items-center justify-center mr-2.5">
                  4
                </span>
                Guest Contact Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Full Name / Title
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ambassador Dupont / Malik"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. guest@embassy.gov or email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-2 font-medium">
                    Mobile / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms & Submit Action */}
            <div className="pt-6 border-t border-[#222130] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-[#8e8a80]">
                <AlertCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>We hold tables for 15 minutes past reservation time. Smart casual dress code applies.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b89128] text-black shadow-lg shadow-[#d4af3733] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center space-x-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{isSubmitting ? 'Confirming Reservation...' : 'Complete Table Reservation'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
