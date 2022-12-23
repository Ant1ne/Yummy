import React from "react";
import cake from "../assets/cake.avif";
import pizza from "../assets/pizza.webp";
import salad from "../assets/salad.avif";
import chicken from "../assets/chicken.avif";
import shrimp from "../assets/shrimp.avif";

export default function Home() {
  return (
    <div>
      <div className="home">
        <h1 className="title"> HEALTHY DELICIOUS RECIPES </h1>
      </div>
      <div className="sub_home">
        <h1> Popular food</h1>
        <p>
          We provides a variety of food and beverage recipes with height taste
          from famous chefs
        </p>
      </div>
      <div className="food_card">
        <img
          className="food_img"
          height="150px"
          width="150px"
          src={cake}
          alt="cake"
        />

        <img
          className="food_img"
          height="150px"
          width="150px"
          src={shrimp}
          alt="noodle"
        />
        <img
          className="food_img"
          height="150px"
          width="150px"
          src={pizza}
          alt="pizza"
        />
        <img
          className="food_img"
          height="150px"
          width="150px"
          src={salad}
          alt="salad"
        />
        <img
          className="food_img"
          height="150px"
          width="150px"
          src={chicken}
          alt="chicken"
        />
      </div>
    </div>
  );
}