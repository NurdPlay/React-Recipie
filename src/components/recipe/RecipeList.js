// Import necessary modules
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './RecipeCard';

/**
 * Fetches recipes from the Spoonacular API based on the current search term.
 * Renders a list of recipes fetched from the Spoonacular API and a search bar to filter the results.
 * @returns {JSX.Element} The RecipeList component.
 */
const RecipeList = () => {
  // Declare state variables
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Use the useEffect hook to fetch recipes from the Spoonacular API when the searchTerm changes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/search',
          {
            params: {
              query: searchTerm,
              apiKey: '9b35de4cdab041e58fac481ad4103174',
            },
          }
        );

        // Update the recipes state variable with the fetched recipes
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error.message);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  // Render the RecipeList component
  return (
    <div>
      {/* Featured Recipes heading */}
      <h2
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          textAlign: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >Featured Recipes</h2>
      {/* Search bar */}
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
      >
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Recipe cards */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: 'darkred',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: '5px',
        border: '1px solid black',
      }}>
        {/* Map over the recipes state variable and render a RecipeCard component for each recipe */}
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              cursor: 'pointer',
              margin: '10px',
            }}
          >
            {/* Link to individual recipe page */}
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the RecipeList component as the default export of this module
export default RecipeList;
