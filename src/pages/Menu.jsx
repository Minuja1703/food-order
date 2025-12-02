import { featured } from "../data/foodItems";
import FeaturedCard from "../components/FeaturedCard";
import React, { useState } from "react";

function Menu() {
  const [searchByName, setSearchByName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setSearchByName(e.target.value);
  };

  const sortByPrice = (e) => {
    setPrice(e.target.value);
  };

  const searchByCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="bg-[oklch(96.7%_0.067_122.328)] dark:bg-black py-6">
      <div className="flex flex-col md:flex-row justify-between p-3">
        <h2 className="text-lg md:text-3xl font-bold px-5 dark:text-[oklch(74.6%_0.16_232.661)]">Menu</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search Food..."
            onChange={handleChange}
            className="bg-white rounded-lg p-2 w-full md:w-48 focus:outline-none dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)]"
          />

          <div className="flex gap-3">
            <select
              className="bg-white p-2 rounded-lg w-48 md:w-48 dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)]"
              onChange={searchByCategory}
            >
              <option value="">Search by Category</option>
              <option value="indian">Indian</option>
              <option value="italian">Italian</option>
              <option value="french">French</option>
              <option value="chinese">Chinese</option>
              <option value="american">American</option>
            </select>

            <select
              className="bg-white dark:bg-[oklch(26.9%_0_0)] dark:text-[oklch(74.6%_0.16_232.661)] p-2 rounded-lg w-40 md:w-32"
              onChange={sortByPrice}
            >
              <option value="">Sort by Price</option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap items-center justify-center mt-4 dark:text-[oklch(74.6%_0.16_232.661)]">
        {featured
          .filter((item) =>
            category === ""
              ? true
              : item.category.toLowerCase() === category.toLowerCase()
          )
          .filter((item) =>
            item.featuredName.toLowerCase().includes(searchByName.toLowerCase())
          )
          .sort((a, b) => {
            if (price === "highToLow") return b.featuredPrice - a.featuredPrice;
            if (price === "lowToHigh") return a.featuredPrice - b.featuredPrice;
            return 0;
          })
          .map((feature) => (
            <FeaturedCard key={feature.featuredId} featuredFood={feature} />
          ))}
      </div>
    </div>
  );
}

export default Menu;
