import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCard from "./components/CategoryCard";
import FeaturedCard from "./components/FeaturedCard";
import indianCuisine from "./assets/images/indianCuisine.jpeg";
import koreanCuisine from "./assets/images/koreanCuisine.jpeg";
import chineseCuisine from "./assets/images/chineseCuisine.jpeg";
import italianCuisine from "./assets/images/italianCuisine.jpeg";
import americanCuisine from "./assets/images/americanCuisine.jpeg";
import spanishCuisine from "./assets/images/spanishCuisine.jpeg";
import biriyani from "./assets/images/biriyani.jpeg";
import tiramisu from "./assets/images/tiramisu.jpeg";
import croissants from "./assets/images/croissants.jpeg";
import dumplings from "./assets/images/dumplings.jpeg";
import pizza from "./assets/images/pizza.jpeg";
import donuts from "./assets/images/donuts.jpeg";

function App() {
  const cuisines = [
    { cuisineImg: indianCuisine, cuisineName: "Indian Cuisine" },
    { cuisineImg: koreanCuisine, cuisineName: "Korean Cuisine" },
    { cuisineImg: chineseCuisine, cuisineName: "Chinese Cuisine" },
    { cuisineImg: italianCuisine, cuisineName: "Italian Cuisine" },
    { cuisineImg: americanCuisine, cuisineName: "American Cuisine" },
    { cuisineImg: spanishCuisine, cuisineName: "Spanish Cuisine" },
  ];

  const featured = [
    { featuredImg: biriyani, featuredName: "Biriyani" },
    { featuredImg: pizza, featuredName: "Pizza" },
    { featuredImg: croissants, featuredName: "Croissants" },
    { featuredImg: dumplings, featuredName: "Dumplings" },
    { featuredImg: tiramisu, featuredName: "Tiramisu" },
    { featuredImg: donuts, featuredName: "Donuts" },
  ];

  return (
    <>
      <Navbar />

      <Hero />

      <div className="bg-[oklch(96.7%_0.067_122.328)] py-6">
        <h2 className="text-xl sm:text-2xl font-bold px-5">Categories</h2>

       
        <div className="flex gap-6 flex-wrap items-center justify-center cursor-pointer mt-4">
          {cuisines.map((cuisine, index) => (
            <CategoryCard
              key={index}
              cuisineImg={cuisine.cuisineImg}
              cuisineName={cuisine.cuisineName}
            />
          ))}
        </div>
      </div>

      <div className="bg-[oklch(96.7%_0.067_122.328)] py-6">
        <h2 className="text-2xl font-bold px-5">Featured</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center cursor-pointer mt-4">
          {featured.map((feature, index) => (
            <FeaturedCard
              key={index}
              featuredImg={feature.featuredImg}
              featuredName={feature.featuredName}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
