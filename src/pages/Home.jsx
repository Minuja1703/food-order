import React, { useState } from "react";
import { featured } from "../data/foodItems";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedCard from "../components/FeaturedCard";
import indianCuisine from "../assets/images/indianCuisine.jpeg";
import koreanCuisine from "../assets/images/koreanCuisine.jpeg";
import chineseCuisine from "../assets/images/chineseCuisine.jpeg";
import italianCuisine from "../assets/images/italianCuisine.jpeg";
import americanCuisine from "../assets/images/americanCuisine.jpeg";
import spanishCuisine from "../assets/images/spanishCuisine.jpeg";

function Home() {
  const cuisines = [
    { cuisineId: 1, cuisineImg: indianCuisine, cuisineName: "Indian Cuisine" },
    { cuisineId: 2, cuisineImg: koreanCuisine, cuisineName: "Korean Cuisine" },
    {
      cuisineId: 3,
      cuisineImg: chineseCuisine,
      cuisineName: "Chinese Cuisine",
    },
    {
      cuisineId: 4,
      cuisineImg: italianCuisine,
      cuisineName: "Italian Cuisine",
    },
    {
      cuisineId: 5,
      cuisineImg: americanCuisine,
      cuisineName: "American Cuisine",
    },
    {
      cuisineId: 6,
      cuisineImg: spanishCuisine,
      cuisineName: "Spanish Cuisine",
    },
  ];

  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Hero />

      <div className="bg-[oklch(96.7%_0.067_122.328)] py-6">
        <div className="flex items-center justify-between p-2">
          <h2 className="text-xl sm:text-2xl font-bold px-5">Categories</h2>
          <input
            type="text"
            placeholder="Search Category..."
            onChange={handleChange}
            className="bg-[oklch(88.2%_0.059_254.128)] rounded-lg p-1 w-48 focus: outline-none"
          />
        </div>

        <div className="flex gap-6 flex-wrap items-center justify-center cursor-pointer mt-4">
          {cuisines
            .filter((cuisine) =>
              cuisine.cuisineName.toLowerCase().includes(category.toLowerCase())
            )
            .map((cuisine) => (
              <CategoryCard
                key={cuisine.cuisineId}
                cuisineImg={cuisine.cuisineImg}
                cuisineName={cuisine.cuisineName}
              />
            ))}
        </div>
      </div>

      <div className="bg-[oklch(96.7%_0.067_122.328)] py-6">
        <h2 className="text-2xl font-bold px-5">Featured</h2>
        <div className="flex gap-6 flex-wrap items-center justify-center mt-4">
          {featured
            .filter((item) => item.isFeatured === "true")
            .map((feature) => (
              <FeaturedCard key={feature.featuredId} featuredFood={feature} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
