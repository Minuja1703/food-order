import { featured } from "../data/foodItems";
import FeaturedCard from "../components/FeaturedCard";
import React, { useState } from "react";

function Menu() {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="bg-[oklch(96.7%_0.067_122.328)] py-6">
      <h2 className="text-2xl font-bold px-5">Menu</h2>
      <div className="flex justify-between p-5">
        <input
          type="text"
          placeholder="Search Category..."
          onChange={handleChange}
          className="bg-white rounded-lg p-1 w-48 focus: outline-none"
        />

        <select name="" id="">
          <option value="">Sort by Price</option>
          <option value="">High to Low</option>
          <option value="">Low to High</option>
        </select>
      </div>

      <div className="flex gap-6 flex-wrap items-center justify-center mt-4">
        {featured
          .filter((item) =>
            item.category.toLowerCase().includes(category.toLowerCase())
          )
          .map((feature) => (
            <FeaturedCard key={feature.featuredId} featuredFood={feature} />
          ))}
      </div>
    </div>
  );
}

export default Menu;
