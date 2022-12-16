import React from 'react'
import { RecipesTypes, FavoritesRecipesTypes } from '../../App'

type RecipesPropTypes = {
    recipes: RecipesTypes;
    favorites: FavoritesRecipesTypes[];
    setFavorites: React.Dispatch<React.SetStateAction<FavoritesRecipesTypes[]>>;
}

export default function RecipeItem({recipes, favorites, setFavorites }: RecipesPropTypes ) {
  return (
    <div>
        <p>First letter: {recipes.strMeal.charAt(0)} </p>
        <p>Name: {recipes.strMeal}</p>
        <p>Category: {recipes.strCategory}</p>
        <img src={recipes.strMealThumb} alt=""/>
        <span>
        <p>{recipes.strIngredient1}</p>
        <p>{recipes.strMeasure1}</p>
        <p>{recipes.strIngredient2}</p>
        <p>{recipes.strMeasure2}</p>
        <p>{recipes.strIngredient3}</p>
        <p>{recipes.strMeasure3}</p>
        </span>
        <button>Add to favorites</button>
        <p>{recipes.strInstructions}</p>
    </div>
  )
}
