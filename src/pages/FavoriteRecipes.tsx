import React from 'react'
import { Recipe } from '../App'
import FavoriteItem from '../components/favoriteRecipe/FavoriteItem';

type Prop = {
    favRecipes: Recipe[];
}

export default function FavoriteRecipes({favRecipes}: Prop) {
  if (favRecipes.length === 0)
    return <div> You do not have any favorite recipe yet!</div>;

  return (
    <div>
        {favRecipes.map((item) => (
            <FavoriteItem item={item} />
        ))}
    </div>
  );
}
