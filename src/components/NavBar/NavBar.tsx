import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
import { FavoritesRecipesTypes } from '../../App';
import chef from "../../assets/chef.png"

type FavoritesProp ={
    favorites: FavoritesRecipesTypes[];
}

export default function NavBar({favorites}: FavoritesProp) {
  return (
    <div className="navBar">
      <img src={chef} alt="logo" height="100px" width="100px"></img>
      <div className="subNav">
        <Link className='link' to="">Home</Link>
        <Link className='link' to="/recipes">Recipes</Link>
        <Link className='link' to="/favorites">Favorites({favorites.length})</Link>
        <Link className='link' to="/contact">Contact</Link>
      </div>
    </div>
  );
}
