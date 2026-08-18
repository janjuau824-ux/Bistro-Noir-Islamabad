import { MenuItem, ReviewItem, GalleryPhoto, Accolade } from '../types';
import { LOCAL_ASSETS } from '../assets';

export const RESTAURANT_INFO = {
  name: 'Bistro Noir Islamabad',
  tagline: 'L’Art de la Haute Gastronomie Française',
  headline: 'Experience Fine French Dining in Islamabad',
  subheadline: 'An intimate sanctuary of Parisian culinary grandeur, bespoke tasting menus, and impeccable service in the capital.',
  address: 'Level 4, Beverly Centre, Jinnah Avenue, Blue Area, F-6/1, Islamabad',
  landmark: 'Overlooking the Margalla Hills Skyline & Jinnah Avenue',
  phone: '+92 51 889 4200',
  mobileWhatsApp: '+92 300 850 4200',
  email: 'concierge@bistronoir-islamabad.com',
  openingHours: {
    lunch: '12:30 PM – 03:30 PM (Tuesday – Sunday)',
    dinner: '07:00 PM – 11:30 PM (Tuesday – Sunday)',
    closed: 'Mondays (Private Culinary Prep & Salon Bookings Only)'
  },
  valetService: 'Complimentary executive valet parking at Beverly Centre North Entrance',
  dressCode: 'Smart Casual / Elegant Evening Wear (Jackets recommended for gentlemen)',
  halalCertified: '100% Certified Halal. All meats, poultry, and artisanal gourmet provisions strictly adhere to halal standards.',
  socials: {
    instagram: 'https://instagram.com/bistronoir.islamabad',
    facebook: 'https://facebook.com/bistronoir.islamabad',
    tripadvisor: 'https://tripadvisor.com',
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-1',
    name: 'Truffled Wild Forest Mushroom Velouté',
    frenchName: 'Velouté de Champignons Sauvages à la Truffe',
    category: 'starters',
    pricePKR: 3450,
    description: 'Silky purée of Périgord black truffles, chanterelles, porcini, crème fraîche normande, and gold leaf croutons.',
    longDescription: 'A velvety soup prepared with hand-foraged wild mushrooms, simmered slowly with French shallots and finished with Normandy cream, fragrant black truffle oil from Provence, and edible 24k gold leaf.',
    ingredients: ['Périgord Black Truffle', 'Porcini Mushrooms', 'French Chanterelles', 'Normandy Crème Fraîche', 'Sourdough Gold Crouton', 'Fresh Thyme'],
    allergens: ['Dairy', 'Gluten'],
    dietary: ['Halal Certified', "Chef's Signature", 'Vegetarian', 'Truffle & Caviar'],
    pairing: 'Sparkling White Muscat & Elderflower Infusion',
    image: LOCAL_ASSETS.hero,
    rating: 4.9,
    preparationTime: '15 mins',
    isPopular: true,
    calories: 320
  },
  {
    id: 'starter-2',
    name: 'Pan-Seared Saint-Jacques Scallops',
    frenchName: 'Coquilles Saint-Jacques Poêlées au Safran',
    category: 'starters',
    pricePKR: 4850,
    description: 'Caramelized jumbo sea scallops, saffron cauliflower silk, crispy bresaola veil, and lemon herb emulsion.',
    longDescription: 'Sustainably sourced jumbo Atlantic sea scallops seared to golden perfection in French salted butter, resting atop a creamy saffron-infused cauliflower mousseline with an air-cured halal bresaola crisp.',
    ingredients: ['Atlantic Scallops', 'Kashmiri Saffron', 'Cauliflower Silk', 'Halal Crispy Bresaola', 'Meyer Lemon Beurre Blanc', 'Micro Greens'],
    allergens: ['Seafood', 'Dairy'],
    dietary: ['Halal Certified', "Chef's Signature", 'Gluten-Free'],
    pairing: 'Chilled Lychee & French Rose Water Spritz',
    image: LOCAL_ASSETS.scallops,
    rating: 4.95,
    preparationTime: '18 mins',
    calories: 280
  },
  {
    id: 'starter-3',
    name: 'Classic French Onion Gratinée',
    frenchName: 'Soupe à l’Oignon Gratinée au Gruyère',
    category: 'starters',
    pricePKR: 2950,
    description: 'Slow-caramelized Roscoff onions in a rich roasted beef broth, crusted with aged melted Gruyère AOP and toasted baguette.',
    longDescription: 'Simmered over 14 hours to extract deep natural sweetness from organic onions, deglazed with grape reduction, layered into ceramic bowls and broiled under a generous blanket of authentic Swiss Gruyère AOP.',
    ingredients: ['Roscoff Sweet Onions', '14-Hour Halal Beef Consommé', 'Aged Gruyère AOP', 'Artisan French Baguette', 'Fresh Thyme'],
    allergens: ['Dairy', 'Gluten'],
    dietary: ['Halal Certified'],
    pairing: 'Smoked Rosemary & Pomegranate Cordial',
    image: LOCAL_ASSETS.wagyu,
    rating: 4.85,
    preparationTime: '20 mins',
    calories: 410
  },
  {
    id: 'starter-4',
    name: 'Imperial Osetra Caviar Service (30g)',
    frenchName: 'Caviar Osetra Impérial & Blinis Maison',
    category: 'caviar',
    pricePKR: 28500,
    description: 'Royal Black Sea Osetra Caviar served over crushed ice, warm buckwheat blinis, organic egg mimosa, crème fraîche, and mother-of-pearl spoons.',
    longDescription: 'A pinnacle of opulence. 30 grams of glistening Imperial Osetra Caviar with delicate nutty nuances and firm pearls, served in custom crystal ice wells accompanied by warm house-made buckwheat blinis and classic garnishes.',
    ingredients: ['Imperial Osetra Caviar 30g', 'Handmade Buckwheat Blinis', 'Organic Egg Mimosa', 'Chive Crème Fraîche', 'Shallot Brunoise'],
    allergens: ['Seafood', 'Dairy', 'Eggs', 'Gluten'],
    dietary: ['Halal Certified', "Chef's Signature", 'Truffle & Caviar'],
    pairing: 'Vintage French Sparkling White Grape Cuvée',
    image: LOCAL_ASSETS.caviar,
    rating: 5.0,
    preparationTime: '10 mins',
    isPopular: true,
    calories: 190
  },

  // MAINS
  {
    id: 'main-1',
    name: 'Filet de Bœuf Wagyu A5 & Truffle Jus',
    frenchName: 'Filet de Bœuf Wagyu A5 au Jus de Truffe Noire',
    category: 'mains',
    pricePKR: 14500,
    description: 'Pan-roasted Australian Halal Wagyu A5 tenderloin, pomme mousseline robuchon-style, glazed baby heirloom carrots, and 48-hour black truffle reduction.',
    longDescription: 'The undisputed jewel of Bistro Noir. Masterfully cooked on our open French plancha to your exact preference, served over legendary silky Robuchon butter potato purée, glazed heirloom roots, and rich glossy marrow jus infused with fresh black winter truffles.',
    ingredients: ['Halal Australian Wagyu A5 (220g)', 'French Butter Pomme Purée', 'Glazed Margalla Baby Carrots', 'Périgord Black Truffle Jus', 'Maldon Smoked Flake Salt'],
    allergens: ['Dairy'],
    dietary: ['Halal Certified', "Chef's Signature", 'Gluten-Free', 'Truffle & Caviar'],
    pairing: 'Aged Oak-Matured Blackberry & Fig Nectar',
    image: LOCAL_ASSETS.wagyu,
    rating: 4.98,
    preparationTime: '25 mins',
    isPopular: true,
    calories: 680
  },
  {
    id: 'main-2',
    name: 'Canard à l’Orange & Spiced Fig Fondant',
    frenchName: 'Magret de Canard Rôti à l’Orange et aux Figues',
    category: 'mains',
    pricePKR: 8200,
    description: 'Crisp skin French duck breast, Seville orange and honey reduction, charred autumn figs, parsnip velvet, and thyme blossom.',
    longDescription: 'Halal duck breast scored and pan-roasted to medium rare with a delicate golden crackling crust, paired with a vibrant sweet-tart Grand Marnier-style orange reduction and caramelized mountain figs.',
    ingredients: ['Halal French Duck Breast', 'Seville Blood Orange Glaze', 'Wild Margalla Honey', 'Caramelized Figs', 'Parsnip Mousseline'],
    allergens: ['Dairy'],
    dietary: ['Halal Certified', "Chef's Signature", 'Gluten-Free'],
    pairing: 'Smoked Blood Orange & Cardamom Cordial',
    image: LOCAL_ASSETS.duck,
    rating: 4.92,
    preparationTime: '22 mins',
    isPopular: true,
    calories: 590
  },
  {
    id: 'main-3',
    name: 'Homard Entier au Beurre Blanc Thermidor',
    frenchName: 'Homard Rôti Thermidor à l’Estragon et Gruyère',
    category: 'mains',
    pricePKR: 16500,
    description: 'Whole Atlantic Maine Lobster baked in classic Thermidor velouté, fragrant French tarragon, Dijon mustard, and gratin of Gruyère with saffron risotto.',
    longDescription: 'Succulent fresh lobster gently extracted, gently poached, returned to its shell in a delicate tarragon and wild mushroom velouté, gratinated with aged Gruyère, and accompanied by a creamy saffron arborio risotto.',
    ingredients: ['Fresh Maine Lobster (650g)', 'French Tarragon', 'Dijon Mustard Cream', 'Aged Gruyère AOP', 'Kashmiri Saffron Risotto'],
    allergens: ['Seafood', 'Dairy', 'Mustard', 'Gluten'],
    dietary: ['Halal Certified', "Chef's Signature"],
    pairing: 'Green Apple, Lemongrass & White Tea Sparkler',
    image: LOCAL_ASSETS.scallops,
    rating: 4.96,
    preparationTime: '25 mins',
    calories: 620
  },
  {
    id: 'main-4',
    name: 'Chilean Sea Bass en Papillote',
    frenchName: 'Loup de Mer Rôti aux Herbes de Provence',
    category: 'mains',
    pricePKR: 9800,
    description: 'Pan-crisped wild Chilean Sea Bass fillet, saffron-infused fennel confit, kalamata emulsion, and baby artichoke barigoule.',
    longDescription: 'Pristine buttery sea bass seared with delicate crisp skin, accompanied by slow-braised Provence baby artichokes, sweet fennel bulbs, sun-ripened cherry vine tomatoes, and extra virgin olive oil emulsion.',
    ingredients: ['Wild Chilean Sea Bass', 'Herbes de Provence', 'Braised Baby Artichokes', 'Saffron Fennel Confit', 'Extra Virgin Olive Oil'],
    allergens: ['Fish', 'Dairy'],
    dietary: ['Halal Certified', 'Gluten-Free'],
    pairing: 'Cucumber, Kaffir Lime & Mint Botanical Blend',
    image: LOCAL_ASSETS.scallops,
    rating: 4.88,
    preparationTime: '20 mins',
    calories: 450
  },
  {
    id: 'main-5',
    name: 'Wild Morel & Truffle Risotto Carnaroli',
    frenchName: 'Risotto Carnaroli aux Morilles et Truffes Noires',
    category: 'mains',
    pricePKR: 6450,
    description: 'Aged Carnaroli rice, foraged northern Pakistan morels, French shallots, aged 24-month Parmigiano-Reggiano, and freshly shaved black truffle.',
    longDescription: 'Slowly stirred with rich roasted vegetable consommé, finished with cultured French butter, foraged Himalayan spring morels, and shaved Italian summer truffles at your table.',
    ingredients: ['Aged Carnaroli Rice', 'Himalayan Wild Morels', 'Parmigiano-Reggiano 24M', 'Normandy French Butter', 'Fresh Shaved Black Truffle'],
    allergens: ['Dairy'],
    dietary: ['Halal Certified', 'Vegetarian', 'Gluten-Free', 'Truffle & Caviar'],
    pairing: 'Wild Pear & Cinnamon Blossom Infusion',
    image: LOCAL_ASSETS.wagyu,
    rating: 4.9,
    preparationTime: '20 mins',
    calories: 510
  },

  // DESSERTS
  {
    id: 'dessert-1',
    name: 'Soufflé Chaud au Chocolat Valrhona Grand Cru',
    frenchName: 'Soufflé Chaud au Chocolat Noir 70% Guanaja',
    category: 'desserts',
    pricePKR: 2850,
    description: 'Warm rising French soufflé with 70% Valrhona Guanaja dark chocolate, poured table-side with Madagascar vanilla bean crème anglaise.',
    longDescription: 'Baked fresh to order for 18 minutes to achieve a towering, ethereal cloud of molten dark chocolate, punctured table-side and crowned with warm fragrant vanilla bean anglaise and gold dusting.',
    ingredients: ['Valrhona 70% Dark Guanaja Chocolate', 'Madagascar Bourbon Vanilla', 'Organic Pasture Eggs', 'Normandy Cream', 'Edible Gold Leaf'],
    allergens: ['Dairy', 'Eggs', 'Gluten'],
    dietary: ['Halal Certified', "Chef's Signature", 'Vegetarian'],
    pairing: 'Single Origin Espresso & Hazelnut Foam',
    image: LOCAL_ASSETS.souffle,
    rating: 4.99,
    preparationTime: '20 mins',
    isPopular: true,
    calories: 440
  },
  {
    id: 'dessert-2',
    name: 'Mille-Feuille Croustillant à la Vanille de Tahiti',
    frenchName: 'Mille-Feuille Caramélisé & Crème Légère Tahitienne',
    category: 'desserts',
    pricePKR: 2650,
    description: 'Caramelized inverted puff pastry sheets, light Tahitian vanilla bean mousseline, salted fleur de sel caramel, and fresh raspberries.',
    longDescription: 'Three whisper-thin layers of caramelized French puff pastry filled with luscious diplomatic cream infused with fragrant Tahitian vanilla, finished with delicate touches of fleur de sel.',
    ingredients: ['Inverted French Puff Pastry', 'Tahitian Vanilla Pods', 'Guerande Fleur de Sel', 'Cultured Butter Caramel', 'Organic Raspberries'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    dietary: ['Halal Certified', 'Vegetarian'],
    pairing: 'White Peach & Jasmine Flower Tea',
    image: LOCAL_ASSETS.souffle,
    rating: 4.91,
    preparationTime: '12 mins',
    calories: 380
  },
  {
    id: 'dessert-3',
    name: 'Crème Brûlée Traditionnelle Flambée',
    frenchName: 'Crème Brûlée à la Gousse de Vanille Bourbon',
    category: 'desserts',
    pricePKR: 2350,
    description: 'Velvety custard infused with Bourbon vanilla, torched table-side for an ultra-crisp caramelized sugar glass shell.',
    longDescription: 'The quintessential French classic. Rich egg yolk and heavy cream infused over 24 hours with Madagascar vanilla pods, topped with golden cane sugar and torched table-side to glass-like perfection.',
    ingredients: ['Bourbon Vanilla Pods', 'Heavy Cream', 'Organic Egg Yolks', 'Cane Sugar Crust', 'Fresh Mint Leaves'],
    allergens: ['Dairy', 'Eggs'],
    dietary: ['Halal Certified', 'Gluten-Free', 'Vegetarian'],
    pairing: 'Iced Rosebud & Cardamom Infused Tea',
    image: LOCAL_ASSETS.souffle,
    rating: 4.87,
    preparationTime: '10 mins',
    calories: 340
  },

  // DEGUSTATION TASTING MENUS
  {
    id: 'degust-1',
    name: 'Le Menu Prestige Noir (7-Course Experience)',
    frenchName: 'Menu Dégustation Prestige du Chef Jean-Luc',
    category: 'degustation',
    pricePKR: 24500,
    description: 'Our premier culinary journey: Amuse-Bouche, Caviar, Scallops, Wagyu A5 Tenderloin, Pre-Dessert Palate Cleanser, Valrhona Soufflé & Mignardises.',
    longDescription: 'An unforgettable 3-hour gastronomic voyage across the finest terroirs of France, reimagined for Islamabad. Includes bespoke table-side service, sommelier mocktail pairings, and personal greeting by Executive Chef Jean-Luc.',
    ingredients: ['Imperial Caviar', 'Saint-Jacques Scallops', 'Morel Truffle Consommé', 'Wagyu A5 Striploin', 'Tahitian Vanilla Sorbet', 'Grand Cru Soufflé', 'Artisanal Macarons'],
    allergens: ['Seafood', 'Dairy', 'Eggs', 'Gluten', 'Nuts'],
    dietary: ['Halal Certified', "Chef's Signature", 'Truffle & Caviar'],
    pairing: 'Complete 7-Course Artisanal Mocktail Flight included',
    image: LOCAL_ASSETS.salonNoir,
    rating: 5.0,
    preparationTime: '180 mins tasting',
    isPopular: true,
    calories: 1250
  },
  {
    id: 'degust-2',
    name: 'Menu Terroir & Mer (5-Course Seafood & Land)',
    frenchName: 'Voyage Gastronomique Terre & Mer',
    category: 'degustation',
    pricePKR: 18500,
    description: 'Velouté de Truffes, Coquilles Saint-Jacques, Chilean Sea Bass, Duck Magret, and Tahitian Mille-Feuille.',
    longDescription: 'A five-course celebration harmonizing pristine oceanic catches with classical French land delicacies, accented with local seasonal produce from the Margalla hills.',
    ingredients: ['Truffle Velouté', 'Atlantic Scallops', 'Chilean Sea Bass', 'Duck Magret', 'Mille-Feuille'],
    allergens: ['Seafood', 'Dairy', 'Gluten', 'Eggs'],
    dietary: ['Halal Certified', "Chef's Signature"],
    pairing: '5-Course Non-Alcoholic Grand Cru Pairings included',
    image: LOCAL_ASSETS.terrace,
    rating: 4.95,
    preparationTime: '120 mins tasting',
    calories: 950
  },

  // BEVERAGES & ARTISANAL MOCKTAILS
  {
    id: 'bev-1',
    name: 'Bistro Noir Smoked Rosemary & Blackberry Elixir',
    frenchName: 'Élixir Fumé de Mûres Sauvages & Romarin',
    category: 'beverages',
    pricePKR: 1650,
    description: 'Wild blackberry purée, pressed tart pomegranate, cold-extracted white grape must, presented in a cloche with fragrant smoked rosemary wood.',
    longDescription: 'A theatrical sensory mocktail created by our head mixologist. Unveiled table-side under a crystal cloche filled with aromatic applewood and French rosemary smoke.',
    ingredients: ['Wild Blackberry Reduction', 'Pomegranate Juice', 'White Grape Must', 'Smoked Organic Rosemary', 'Gold Dust Ice Spheres'],
    allergens: [],
    dietary: ['Halal Certified', "Chef's Signature", 'Gluten-Free', 'Vegetarian'],
    pairing: 'Complements Wagyu A5 & Duck Magret',
    image: LOCAL_ASSETS.cocktail,
    rating: 4.94,
    preparationTime: '6 mins',
    isPopular: true,
    calories: 120
  },
  {
    id: 'bev-2',
    name: 'Sparkling French White Grape & Elderflower Cuvée',
    frenchName: 'Cuvée Pétillante de Raisin Blanc & Fleur de Sureau',
    category: 'beverages',
    pricePKR: 1850,
    description: 'Non-alcoholic sparkling French grape juice, Austrian elderflower liqueur reduction, Meyer lemon essence, and 24k gold leaf flakes in a crystal flute.',
    longDescription: 'Effervescent and crisp with fine persistent bubbles, floral aromas, and refreshing citrus undertones, served in Schott Zwiesel crystal flutes.',
    ingredients: ['French Sparkling White Grape', 'Elderflower Extract', 'Meyer Lemon', '24k Edible Gold Leaf'],
    allergens: [],
    dietary: ['Halal Certified', 'Gluten-Free', 'Vegetarian'],
    pairing: 'Ideal with Caviar, Oysters & Sea Scallops',
    image: LOCAL_ASSETS.cocktail,
    rating: 4.92,
    preparationTime: '5 mins',
    calories: 95
  },
  {
    id: 'bev-3',
    name: 'Velvet Truffle Mochaccino & Gold Foam',
    frenchName: 'Moka Velouté Noir & Émulsion Or',
    category: 'beverages',
    pricePKR: 1450,
    description: 'Ethiopian Yirgacheffe double espresso, melted Valrhona 70% chocolate, steamed almond cream, and cacao-gold dust.',
    longDescription: 'Artisanal specialty coffee crafted with precision, layered with velvety dark chocolate ganache and crowned with silken micro-foam.',
    ingredients: ['Specialty Espresso Beans', 'Valrhona Dark Chocolate', 'Steamed Organic Milk/Oat', 'Gold Cacao Shavings'],
    allergens: ['Dairy'],
    dietary: ['Halal Certified', 'Vegetarian'],
    pairing: 'Pairs perfectly with Soufflé and Mille-Feuille',
    image: LOCAL_ASSETS.cocktail,
    rating: 4.89,
    preparationTime: '6 mins',
    calories: 180
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'The Grand Main Dining Hall',
    frenchName: 'La Grande Salle à Manger',
    category: 'Ambiance',
    imageUrl: LOCAL_ASSETS.hero,
    description: 'Sophisticated onyx marble, hand-blown French crystal chandeliers, and intimate leather booths designed by Parisian interior architects.',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Filet de Bœuf Wagyu A5 Table Service',
    frenchName: 'Le Service du Filet Wagyu A5',
    category: 'Culinary Art',
    imageUrl: LOCAL_ASSETS.wagyu,
    description: 'Our signature A5 Wagyu tenderloin presented with 48-hour black truffle reduction and edible gold leaf.',
    aspectRatio: 'square'
  },
  {
    id: 'gal-3',
    title: 'Salon Noir - Private VIP Dining Suite',
    frenchName: 'Le Salon Noir Privé',
    category: 'Private Dining',
    imageUrl: LOCAL_ASSETS.salonNoir,
    description: 'An exclusive soundproof 14-seat private dining room with dedicated butler service and Margalla Hills vistas for diplomatic and state dinners.',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-4',
    title: 'Artisanal Valrhona Soufflé Cloud',
    frenchName: 'Le Soufflé Éthéré',
    category: 'Culinary Art',
    imageUrl: LOCAL_ASSETS.souffle,
    description: 'Freshly baked 70% Guanaja chocolate soufflé rising above custom French copper ramekins.',
    aspectRatio: 'square'
  },
  {
    id: 'gal-5',
    title: 'Smoked Botanical Mocktail Crafting',
    frenchName: 'La Mixologie Artisanale',
    category: 'Mixology & Cellar',
    imageUrl: LOCAL_ASSETS.cocktail,
    description: 'Our head mixologist infusing handcrafted blackberry nectar with aromatic French rosemary smoke.',
    aspectRatio: 'tall'
  },
  {
    id: 'gal-6',
    title: 'Seared Saint-Jacques Scallop Presentation',
    frenchName: 'L’Art de l’Assiette',
    category: 'Culinary Art',
    imageUrl: LOCAL_ASSETS.scallops,
    description: 'Precision plating featuring Atlantic scallops, saffron silk mousseline, and edible flowers.',
    aspectRatio: 'square'
  },
  {
    id: 'gal-7',
    title: 'Le Jardin Terrace at Twilight',
    frenchName: 'La Terrasse du Jardin aux Chandelles',
    category: 'Ambiance',
    imageUrl: LOCAL_ASSETS.terrace,
    description: 'Al fresco dining overlooking Islamabad’s illuminated skyline under heated marble pergolas.',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-8',
    title: 'Imperial Caviar Crystal Presentation',
    frenchName: 'Le Rituel du Caviar Impérial',
    category: 'Culinary Art',
    imageUrl: LOCAL_ASSETS.caviar,
    description: 'Chilled Osetra caviar served with mother-of-pearl spoons and artisanal warm blinis.',
    aspectRatio: 'square'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'His Excellency Ambassador Jean-Marc Dupont',
    title: 'French Diplomatic Mission, Islamabad',
    rating: 5,
    comment: 'Bistro Noir has achieved the impossible: bringing authentic Parisian three-star culinary precision to Islamabad. The Filet de Bœuf and Duck Magret rival the best tables on Boulevard Saint-Germain. Exceptional!',
    date: 'August 2025',
    avatar: LOCAL_ASSETS.chef,
    dishLoved: 'Filet de Bœuf Wagyu A5 & Truffle Jus',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Ayla Malik',
    title: 'Diplomatic Enclave Dining Connoisseur',
    rating: 5,
    comment: 'The ambience is pure theatrical luxury. From the moment the valet welcomes you at Beverly Centre to the final spoonful of the Valrhona Soufflé, the service is flawless. Islamabad finally has a truly world-class fine dining restaurant.',
    date: 'July 2025',
    avatar: LOCAL_ASSETS.pastryChef,
    dishLoved: 'Soufflé Chaud au Chocolat Valrhona',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Shaharyar Khan',
    title: 'Managing Director, Horizon Capital',
    rating: 5,
    comment: 'We hosted our international boardroom dinner in Salon Noir. The privacy, personalized leather-bound menus, and the 7-Course Prestige Tasting Menu left our European partners completely mesmerized.',
    date: 'June 2025',
    avatar: LOCAL_ASSETS.chef,
    dishLoved: 'Menu Dégustation Prestige (7-Course)',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Farah & Daniyal Qureshi',
    title: 'Anniversary Celebration Guests',
    rating: 5,
    comment: 'The romantic candlelit terrace with views of the Margalla hills made our 10th anniversary unforgettable. The staff prepared custom chocolate calligraphy for us. Truly heartwarming French hospitality.',
    date: 'May 2025',
    avatar: LOCAL_ASSETS.pastryChef,
    dishLoved: 'Homard Entier Thermidor & Saffron Risotto',
    verified: true
  }
];

export const CHEF_INFO = {
  name: 'Chef Jean-Luc Bernard',
  title: 'Executive Chef & Culinary Director',
  origin: 'Lyon, France',
  experience: '22+ Years in Michelin-starred establishments across Paris, Monaco & Dubai',
  quote: 'Gastronomy is the emotion of patience and precision. At Bistro Noir, we honor classical French foundations while celebrating the purest seasonal ingredients.',
  image: LOCAL_ASSETS.chef,
  pastryChef: {
    name: 'Chef Amélie Moreau',
    title: 'Master Pâtissière',
    origin: 'Bordeaux, France',
    image: LOCAL_ASSETS.pastryChef
  }
};

export const ACCOLADES: Accolade[] = [
  {
    id: 'acc-1',
    title: 'Best Fine Dining Restaurant 2025',
    organization: 'Pakistan Culinary Excellence Awards',
    year: '2025',
    description: 'Recognized as the premier gastronomic institution in Pakistan for French haute cuisine.',
    iconName: 'Award'
  },
  {
    id: 'acc-2',
    title: 'Grade A+ Hygiene & Quality Certification',
    organization: 'Islamabad Food Authority (IFA)',
    year: '2025',
    description: 'Certified for highest international food safety, sterile kitchen standards and halal compliance.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'acc-3',
    title: 'World Luxury Restaurant Winner',
    organization: 'Middle East & South Asia Gourmet Guild',
    year: '2024',
    description: 'Awarded for exceptional ambiance, sommelier non-alcoholic pairings and private salon hospitality.',
    iconName: 'Sparkles'
  },
  {
    id: 'acc-4',
    title: 'Excellence in Service & Sommelier Arts',
    organization: 'International Diplomatic Dining Circle',
    year: '2024',
    description: 'Ranked #1 destination for diplomatic functions and state dinners in Islamabad.',
    iconName: 'Star'
  }
];

export const FAQS = [
  {
    question: 'Are all dishes and ingredients 100% Halal certified?',
    answer: 'Absolutely. Every cut of beef (including our imported A5 Australian Wagyu), poultry, duck, and culinary element is 100% Halal certified. All sauces, marinades, and reductions are prepared entirely alcohol-free using slow-simmered artisanal grape musts, roasted bones, and natural botanicals.'
  },
  {
    question: 'What is the recommended dress code for dining?',
    answer: 'We maintain an elegant dining atmosphere. The dress code is Smart Casual to Elegant Evening Wear. We kindly request gentlemen to avoid sportswear, shorts, or open sandals. Evening jackets are appreciated but optional.'
  },
  {
    question: 'How do I reserve the private VIP dining room (Salon Noir)?',
    answer: 'Salon Noir accommodates up to 14 distinguished guests with dedicated butler service and customized tasting menus. You can select "Salon Noir" during the online reservation process or contact our Maître d’ directly via WhatsApp (+92 300 850 4200).'
  },
  {
    question: 'Is valet parking available at Beverly Centre?',
    answer: 'Yes, Bistro Noir offers complimentary VIP valet parking for all guests at the North Entrance of Beverly Centre, Blue Area. Our uniformed valet team provides seamless arrivals and departures.'
  },
  {
    question: 'Can dietary restrictions and allergies be accommodated?',
    answer: 'Our Executive Chef gladly caters to gluten-free, dairy-free, vegetarian, and specific allergen requests. Please indicate your dietary preferences in the reservation notes so our culinary brigade can personalize your menu.'
  }
];
