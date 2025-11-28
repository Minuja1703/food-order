import biriyani from "../assets/images/biriyani.jpeg";
import tiramisu from "../assets/images/tiramisu.jpeg";
import croissants from "../assets/images/croissants.jpeg";
import dumplings from "../assets/images/dumplings.jpeg";
import pizza from "../assets/images/pizza.jpeg";
import donuts from "../assets/images/donuts.jpeg";

export const featured = [
  {
    featuredId: 1,
    featuredImg: biriyani,
    featuredName: "Biriyani",
    featuredRestrnt: "Ramees Restaurant",
    featuredPrice: 160,
    category: "Indian",
    isFeatured: true,
  },
  {
    featuredId: 2,
    featuredImg: pizza,
    featuredName: "Pizza",
    featuredRestrnt: "8 Point Art Cafe",
    featuredPrice: 350,
    category: "Italian",
    isFeatured: true,
  },
  {
    featuredId: 3,
    featuredImg: croissants,
    featuredName: "Croissants",
    featuredRestrnt: "Fayalwan Hotel",
    featuredPrice: 150,
    category: "French",
    isFeatured: true,
  },
  {
    featuredId: 4,
    featuredImg: dumplings,
    featuredName: "Dumplings",
    featuredRestrnt: "Karimeen Grills",
    featuredPrice: 80,
    category: "Chinese",
    isFeatured: true,
  },
  {
    featuredId: 5,
    featuredImg: tiramisu,
    featuredName: "Tiramisu",
    featuredRestrnt: "All Spice Restaurant",
    featuredPrice: 240,
    category: "Italian",
    isFeatured: true,
  },
  {
    featuredId: 6,
    featuredImg: donuts,
    featuredName: "Donuts",
    featuredRestrnt: "Meen By Chef Pillai",
    featuredPrice: 60,
    category: "American",
    isFeatured: false,
  },
];
