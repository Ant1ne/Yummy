import React from "react";
import { Recipe } from "../../App";

type Prop = {
  item: Recipe;
};

export default function FavoriteItem({ item }: Prop) {
  return (
    <div className="favCard">
      <div className="favTitle">
        <h2> {item.strMeal}</h2>
        <p>
          <b>Category:</b> {item.strCategory}
        </p>
      </div>

      <div>
        <img
          src={item.strMealThumb}
          alt={item.strCategory}
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
}