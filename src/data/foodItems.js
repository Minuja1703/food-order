import biriyani from "../assets/images/biriyani.jpeg";
import tiramisu from "../assets/images/tiramisu.jpeg";
import croissants from "../assets/images/croissants.jpeg";
import dumplings from "../assets/images/dumplings.jpeg";
import pizza from "../assets/images/pizza.jpeg";
import donuts from "../assets/images/donuts.jpeg";
import chowmein from "../assets/images/chowmein.jpeg";

export const featured = [
  {
    featuredId: 1,
    featuredImg: biriyani,
    featuredName: "Biriyani",
    featuredRestrnt: "Ramees Restaurant",
    featuredPrice: 160,
    category: "Indian",
    isFeatured: true,
    stock : 100
  },
  {
    featuredId: 2,
    featuredImg: pizza,
    featuredName: "Pizza",
    featuredRestrnt: "8 Point Art Cafe",
    featuredPrice: 350,
    category: "Italian",
    isFeatured: true,
    stock : 90
  },
  {
    featuredId: 3,
    featuredImg: croissants,
    featuredName: "Croissants",
    featuredRestrnt: "Fayalwan Hotel",
    featuredPrice: 150,
    category: "French",
    isFeatured: true,
    stock : 5
  },
  {
    featuredId: 4,
    featuredImg: dumplings,
    featuredName: "Dumplings",
    featuredRestrnt: "Karimeen Grills",
    featuredPrice: 80,
    category: "Chinese",
    isFeatured: true,
    stock : 10
  },
  {
    featuredId: 5,
    featuredImg: tiramisu,
    featuredName: "Tiramisu",
    featuredRestrnt: "All Spice Restaurant",
    featuredPrice: 240,
    category: "Italian",
    isFeatured: true,
    stock : 25
  },
  {
    featuredId: 6,
    featuredImg: donuts,
    featuredName: "Donuts",
    featuredRestrnt: "Meen By Chef Pillai",
    featuredPrice: 60,
    category: "American",
    isFeatured: false,
    stock : 50
  },
  {
    featuredId: 7,
    featuredImg: chowmein,
    featuredName: "Chow Mein",
    featuredRestrnt: "Haidilao Hot Pot",
    featuredPrice: 180,
    category: "Chinese",
    isFeatured: false,
    stock : 30
  },
];
