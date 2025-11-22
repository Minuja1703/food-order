import React from "react";

function CategoryCard(props) {
  return (
    <div className="p-2">
      <img
        src={props.cuisineImg}
        alt="Cuisine Category Image"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover"
      />

      <h4 className="text-lg md:text-xl text-center p-2">
        {props.cuisineName}
      </h4>
    </div>
  );
}

export default CategoryCard;
