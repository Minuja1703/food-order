import React from "react";

function FeaturedCard(props) {
  return (
    <div className="p-2">
      <img src={props.featuredImg} alt="" className="w-80 h-50 object-fill" />
      <h4 className="text-xl text-center p-2">{props.featuredName}</h4>
    </div>
  );
}

export default FeaturedCard;
