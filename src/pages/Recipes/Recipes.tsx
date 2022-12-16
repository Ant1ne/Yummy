import React from 'react'
import { RecipesTypes, FavoritesRecipesTypes } from '../../App'
import RecipeItem from './RecipeItem';
import "./Recipes.css"

export type RecipesPropTypes = {
  recipes?: RecipesTypes[];
  favorites: FavoritesRecipesTypes[];
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFavorites: React.Dispatch<React.SetStateAction<FavoritesRecipesTypes[]>>;
}

export default function Recipes({recipes, favorites, setUserInput, setFavorites}: RecipesPropTypes) {

  function onChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  return (
    <div className="search-container">
      <h1>Recipes</h1>
      <form>
        <label>Search recipe:
          <input type="text" id="recipeName" name="name" onChange={onChangeHandler}></input>
        </label>
      </form>
      <div className="recipes-container">
      {
        (recipes !== null) ?
        (recipes?.map((recipes) => {
          return <RecipeItem key={recipes.idMeal} recipes={recipes} favorites={favorites} setFavorites={setFavorites}/>
          })) :
        (<div>No recipe</div>)
      }
      </div>
    </div>
  );
}
