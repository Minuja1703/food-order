import React from "react";

function FeaturedCard(props) {
  return (
    <div className="p-2 flex flex-col">
      <img
        src={props.featuredImg}
        alt="Featured Food Image"
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl"
      />
      <h4 className="text-lg md:text-xl text-center mt-3">
        {props.featuredName}
      </h4>
    </div>
  );
}

export default FeaturedCard;
