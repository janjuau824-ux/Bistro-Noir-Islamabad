// Local Static Asset Registry for Bistro Noir Islamabad
// Imported directly so Vite bundles and resolves all asset paths permanently for production deployment

import heroBistroNoir from './images/hero_bistro_noir_1786975083797.jpg';
import wagyuSteak from './images/wagyu_steak_1786975097711.jpg';
import chocolateSouffle from './images/chocolate_souffle_1786975113111.jpg';
import salonVipNoir from './images/salon_vip_noir_1786975132259.jpg';
import terraceTwilight from './images/terrace_twilight_1786975150050.jpg';
import frenchChef from './images/french_chef_1786975165390.jpg';
import scallopsDish from './images/scallops_dish_1786975181484.jpg';
import caviarService from './images/caviar_service_1786975197369.jpg';
import cocktailSmoke from './images/cocktail_smoke_1786975217769.jpg';
import duckMagret from './images/duck_magret_1786975244735.jpg';
import pastryChef from './images/pastry_chef_1786975268846.jpg';

export const LOCAL_ASSETS = {
  hero: heroBistroNoir,
  wagyu: wagyuSteak,
  souffle: chocolateSouffle,
  salonNoir: salonVipNoir,
  terrace: terraceTwilight,
  chef: frenchChef,
  scallops: scallopsDish,
  caviar: caviarService,
  cocktail: cocktailSmoke,
  duck: duckMagret,
  pastryChef: pastryChef,
  fallbackFood: wagyuSteak,
  fallbackDining: heroBistroNoir,
  fallbackTerrace: terraceTwilight,
  fallbackChef: frenchChef,
  fallbackBeverage: cocktailSmoke,
  fallbackDessert: chocolateSouffle
};

export default LOCAL_ASSETS;
