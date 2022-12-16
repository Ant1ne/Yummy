import React, {useEffect, useState} from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Favorites from "./pages/Favorites/Favorites";
import Contact from "./pages/Contact/Contact";


export type RecipesTypes = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: string;
  strMeasure1: string;
  strIngredient2: string;
  strMeasure2: string;
  strIngredient3: string;
  strMeasure3: string;
}

export type FavoritesRecipesTypes = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
}

function App() {
  // declared states
  const [recipes, setRecipes] = useState<RecipesTypes[]>([]);
  const [userInput, setUserInput] = useState("");
  const [favorites, setFavorites] = useState<FavoritesRecipesTypes[]>([]);

    // link to api
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`

  // fetch data
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if(data.meals === null) {
        setRecipes([]);
      }
      setRecipes(data.meals);
    });
  }, [url]);

    // render app
  return (
    // routes and route to different components and pages
    <div className="App">
      <NavBar favorites={favorites} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes
          recipes={recipes}
          favorites={favorites}
          setUserInput={setUserInput}
          setFavorites={setFavorites}/>}>
        </Route>
        <Route path="/favorites" element={<Favorites
          favorites={favorites}/>}>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
export default App;