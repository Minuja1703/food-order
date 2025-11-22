import React from "react";

function CategoryCard(props) {
  return (
    <div className="p-2">
      <img src={props.cuisineImg} alt="" className="w-80 h-50" />
      <h4 className="text-xl text-center p-2">{props.cuisineName}</h4>
    </div>
  );
}

export default CategoryCard;
