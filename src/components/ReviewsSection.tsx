import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Quote, 
  CheckCircle2, 
  MessageSquarePlus, 
  X, 
  Send 
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/restaurantData';
import { ReviewItem } from '../types';
import { handleImageError } from '../utils/imageFallbacks';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    title: 'Guest of Bistro Noir',
    rating: 5,
    dishLoved: 'Filet de Bœuf Wagyu A5',
    comment: ''
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) {
      alert('Please provide your name and your review comment.');
      return;
    }

    const createdReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      title: newReview.title || 'Diner in Islamabad',
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Just now',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
      dishLoved: newReview.dishLoved,
      verified: true
    };

    setReviews([createdReview, ...reviews]);
    setIsModalOpen(false);
    setNewReview({
      name: '',
      title: 'Guest of Bistro Noir',
      rating: 5,
      dishLoved: 'Filet de Bœuf Wagyu A5',
      comment: ''
    });
  };

  return (
    <section id="reviews" className="py-24 bg-[#0e0e13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Critiques & Témoignages</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Guest <span className="gold-gradient-text italic font-normal">Experiences</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Discover what ambassadors, culinary critics, and dining connoisseurs in Islamabad say about Bistro Noir.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-8 inline-flex items-center space-x-3 px-6 py-2.5 rounded-2xl bg-[#14141c] border border-[#2e2d3e]">
            <div className="flex text-[#ffd768]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ffd768]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 out of 5.0</span>
            <span className="text-xs text-[#8e8a80] pl-2 border-l border-[#333140]">
              Based on 380+ Verified Gourmet Diners
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#13131a] border border-[#272635] hover:border-[#d4af3766] transition-all flex flex-col justify-between space-y-6 shadow-xl relative"
            >
              <Quote className="w-10 h-10 text-[#d4af3720] absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars & Dish Loved */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#ffd768]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffd768]" />
                    ))}
                  </div>

                  <span className="text-[11px] text-[#8e8a80]">
                    {rev.date}
                  </span>
                </div>

                <p className="text-sm text-[#cfcac0] leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {rev.dishLoved && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#1a1924] border border-[#2c2a3b] text-xs text-[#ffd768]">
                    <span className="text-[#8e8a80]">Favorite Dish:</span> {rev.dishLoved}
                  </div>
                )}
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-[#222130] flex items-center space-x-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, 'avatar')}
                  className="w-11 h-11 rounded-full object-cover border border-[#d4af3780] bg-[#1a1a24]"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-sm font-serif font-bold text-white">
                      {rev.name}
                    </h4>
                    {rev.verified && (
                      <span className="inline-flex items-center text-[10px] text-[#84cc16] font-medium" title="Verified Diner">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#84cc16] mr-0.5" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#8e8a80] block">
                    {rev.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#181822] hover:bg-[#222230] text-[#ffd768] border border-[#d4af3766] transition-colors"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Share Your Dining Experience</span>
          </button>
        </div>

      </div>

      {/* Leave Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#14141c] border border-[#d4af3766] rounded-3xl p-6 sm:p-8 shadow-2xl relative text-[#f2ede4]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#8e8a80] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif font-bold text-white mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-[#8e8a80] mb-6">
              Your critique assists our culinary brigade in maintaining exceptional Parisian standards.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                  Your Full Name / Title
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Jean-Luc, Dr. Ayla, Sarah Khan"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                  Designation / City
                </label>
                <input
                  type="text"
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="e.g. Diplomatic Circle / Islamabad Food Critic"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                  Favorite Dish Sampled
                </label>
                <input
                  type="text"
                  value={newReview.dishLoved}
                  onChange={(e) => setNewReview({ ...newReview, dishLoved: e.target.value })}
                  placeholder="e.g. Wagyu A5 Filet, Soufflé au Chocolat"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                  Rating
                </label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 - Exceptional French Gastronomy)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                  <option value={3}>⭐⭐⭐ (3 - Satisfactory)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a396] mb-1.5 font-medium">
                  Review & Comments
                </label>
                <textarea
                  required
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  placeholder="Describe the dishes, service, and atmosphere..."
                  className="w-full px-4 py-2 rounded-xl bg-[#0d0d12] border border-[#2b2a3a] text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Publish Testimonial</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
