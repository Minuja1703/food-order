import React from "react";
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
import coverImg from "./assets/images/coverImg.jpeg";

function App() {
  const cuisines = [
    { cuisineImg: indianCuisine, cuisineName: "Indian" },
    { cuisineImg: koreanCuisine, cuisineName: "Korean" },
    { cuisineImg: chineseCuisine, cuisineName: "Chinese" },
    { cuisineImg: italianCuisine, cuisineName: "Italian" },
    { cuisineImg: americanCuisine, cuisineName: "American" },
    { cuisineImg: spanishCuisine, cuisineName: "Spanish" },
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
      <nav className="flex gap-6 p-5 items-center place-content-between flex-wrap">
        <div>
          <h1 className="font-bold text-[oklch(58.8%_0.158_241.966)] text-4xl">
            WorldPlatter
          </h1>
        </div>

        <div>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* <div
        className="relative w-full p-45 bg-cover"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className="absolute inset-0 mask-t-from-50% mask-r-from-30% bg-white/0 pointer-events-none"></div>

        <div className="relative">
          <h3 className=" text-center text-6xl text-[oklch(58.8%_0.158_241.966)] text-bold">
            “Explore Global Cuisine,Effortlessly.”
          </h3>
        </div>
      </div> */}

<div className="relative w-full p-45 bg-cover" style={{ backgroundImage: `url(${coverImg})` }}>
  
  {/* Mask overlay (affects only this layer, not the text) */}
  <div className="absolute inset-0 mask-t-from-50% mask-r-from-50% bg-white/70 pointer-events-none"></div>

  {/* Your Text – stays unaffected */}
  <div className="relative">
    <h3 className="text-center text-6xl text-[oklch(58.8%_0.158_241.966)] font-bold">
      “Explore Global Cuisine, Effortlessly.”
    </h3>
  </div>

</div>


      <div className="bg-[oklch(96.7%_0.067_122.328)]">
        <h2 className="text-2xl font-bold p-3 ml-8">Categories</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center cursor-pointer">
          {cuisines.map((cuisine, index) => (
            <CategoryCard
              key={index}
              cuisineImg={cuisine.cuisineImg}
              cuisineName={cuisine.cuisineName}
            />
          ))}
        </div>
      </div>

      <div className="bg-[oklch(96.7%_0.067_122.328)]">
        <h2 className="text-2xl font-bold p-3 ml-8">Featured</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center cursor-pointer p-3">
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
