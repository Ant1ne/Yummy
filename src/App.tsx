import React, {useEffect, useState} from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import RecipePage from "./pages/RecipePage";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import Footer from "./components/Footer";


export type Recipe = {
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

function App() {
  // declared states
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favRecipes, setFavRecipes] = useState<Recipe[]>([]);

    // link to api
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`

  // fetch data
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setRecipes(data.meals);
    });
  }, [url]);

    // render app
  return (
    // routes and route to different components and pages
    <div className="App">
      <NavBar favRecipes={favRecipes} />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/recipes" element={<RecipePage
          recipes={recipes}
          setUserInput={setUserInput}
          setFavRecipes={setFavRecipes}
          favRecipes={favRecipes}
          />
        }
        ></Route>
        <Route path="/favorites"
          element={<FavoriteRecipes
            favRecipes={favRecipes} />}>
          </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;