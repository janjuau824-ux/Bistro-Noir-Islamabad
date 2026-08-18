import React from 'react';
import { LOCAL_ASSETS } from '../assets';

// Global Local Image Fallbacks and Error Handlers for Bistro Noir Islamabad
export const FALLBACK_IMAGES = {
  food: LOCAL_ASSETS.fallbackFood,
  dining: LOCAL_ASSETS.fallbackDining,
  terrace: LOCAL_ASSETS.fallbackTerrace,
  chef: LOCAL_ASSETS.fallbackChef,
  pastry: LOCAL_ASSETS.pastryChef,
  avatar: LOCAL_ASSETS.chef,
  beverage: LOCAL_ASSETS.fallbackBeverage,
  dessert: LOCAL_ASSETS.fallbackDessert
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType: keyof typeof FALLBACK_IMAGES = 'food'
) => {
  const target = e.currentTarget;
  const fallbackUrl = FALLBACK_IMAGES[fallbackType] || FALLBACK_IMAGES.food;
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
};

