import React from 'react'
import { Recipe } from '../../App'
import RecipeItem from './RecipeItem';

type Prop = {
  recipes: Recipe[];
  setFavRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  favRecipes: Recipe[];
};

export default function Recipes({recipes, setFavRecipes, favRecipes}: Prop) {
  if(recipes.length === 0)
  {return <div>Sorry we have not got this recipe yet!</div>
  }

  return (
    <div className="recipes">
      {recipes.map((item) => (
        <RecipeItem
          recipeItem = {item}
          setFavRecipes = {setFavRecipes}
          favRecipes = {favRecipes}
        />
      ))}
    </div>
  );
}
