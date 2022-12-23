import React from 'react'
import { Recipe } from '../App'
import Recipes from '../components/recipe/Recipes';
import SearchForm from '../components/SearchForm';

export type Prop = {
  recipes: Recipe[];
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFavRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  favRecipes: Recipe[];
}

export default function RecipePage({recipes, setUserInput, setFavRecipes, favRecipes}: Prop) {

  return (
    <div>
      <SearchForm setUserInput = {setUserInput}/>
      <Recipes
        recipes = {recipes}
        setFavRecipes = {setFavRecipes}
        favRecipes = {favRecipes}
      />
    </div>
  );
}
