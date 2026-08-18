import React, { useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Camera
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';
import { handleImageError } from '../utils/imageFallbacks';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Culinary Art', 'Private Dining', 'Mixology & Cellar'];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handleOpenLightbox = (photoId: string) => {
    const index = filteredPhotos.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setSelectedPhotoIndex(index);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev! + 1) % filteredPhotos.length));
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-[#0e0e13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#181822] border border-[#d4af3733] text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-4">
            <Camera className="w-3 h-3" />
            <span>Visual Splendor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            La Galerie <span className="gold-gradient-text italic font-normal">Visuelle</span>
          </h2>

          <p className="text-sm sm:text-base text-[#b8b3a5] font-light leading-relaxed">
            Glimpse into the opulent interior, exquisite plate aesthetics, and 
            twilight dining moments at Beverly Centre, Islamabad.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b89128] text-black font-semibold shadow-md shadow-[#d4af3733]'
                    : 'bg-[#16161f] text-[#a49f92] hover:text-white border border-[#272636]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with varied aspect heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => handleOpenLightbox(photo.id)}
              className="group relative rounded-2xl overflow-hidden bg-[#15151c] border border-[#282736] hover:border-[#d4af3780] shadow-xl transition-all duration-500 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'dining')}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e30] to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2 rounded-full bg-[#000000a6] text-[#ffd768] border border-[#d4af3766] backdrop-blur-md flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-cinzel block mb-0.5">
                  {photo.category}
                </span>
                <h3 className="text-base font-serif font-bold text-white leading-tight">
                  {photo.title}
                </h3>
                <p className="text-xs text-[#b8b3a8] line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Lightbox */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#181822] text-[#ffd768] hover:text-white hover:bg-[#d4af3740] border border-[#d4af3740] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Photo Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevPhoto();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181822cc] text-[#ffd768] hover:text-white hover:bg-[#d4af37] hover:text-black border border-[#d4af3740] transition-all"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Photo Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextPhoto();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181822cc] text-[#ffd768] hover:text-white hover:bg-[#d4af37] hover:text-black border border-[#d4af3740] transition-all"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image & Caption Card */}
          <div 
            className="max-w-5xl w-full flex flex-col items-center max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af3740] shadow-2xl max-h-[70vh] bg-black">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(e, 'dining')}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>

            {/* Photo Info Card */}
            <div className="mt-4 text-center max-w-2xl px-4 py-3 rounded-xl bg-[#14141cf0] border border-[#272636]">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-cinzel block">
                {currentPhoto.frenchName} • {currentPhoto.category}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                {currentPhoto.title}
              </h3>
              <p className="text-xs text-[#cfcac0] mt-1">
                {currentPhoto.description}
              </p>
              <span className="text-[10px] text-[#8e8a80] block mt-2">
                Photo {selectedPhotoIndex! + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
