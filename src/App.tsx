import { useState, useEffect } from "react";
import "./App.css";

// Define the Recipe type based on your backend model
interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  createdAt: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3000/recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Recipe Collection</h1>
      </header>
      <main className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <div className="recipe-details">
              <p>
                <strong>Cooking Time:</strong> {recipe.cookingTime} minutes
              </p>
              <p>
                <strong>Servings:</strong> {recipe.servings}
              </p>
            </div>
            <div className="recipe-content">
              <h3>Ingredients:</h3>
              <p>{recipe.ingredients}</p>
              <h3>Instructions:</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
