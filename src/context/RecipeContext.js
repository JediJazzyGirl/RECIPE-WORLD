import React, { createContext, useState, useEffect, useContext } from "react";

const RecipeContext = createContext();
export const useRecipes = () => useContext(RecipeContext);

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) setRecipes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, { ...recipe, id: Date.now().toString(), status: "pending", reviews: [] }]);
  };

  const approveRecipe = (id) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, status: "approved" } : r));
  };

  const rejectRecipe = (id) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const addReview = (id, review) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, reviews: [...r.reviews, review] } : r));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, approveRecipe, rejectRecipe, addReview }}>
      {children}
    </RecipeContext.Provider>
  );
}
