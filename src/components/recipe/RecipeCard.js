import React from 'react';

// The RecipeCard component takes a single prop, 'recipe', which is an object containing information about a recipe.
const RecipeCard = ({ recipe }) => (
    // The component renders a div with some inline styles to display the recipe information.
    <div
        style={{
            display: 'inline-block',
            marginLeft: '10px',
            verticalAlign: 'top',
            padding: '10px',
            margin: '10px',
            border: '1px solid #ccc',
            maxWidth: '200px',
            backgroundColor: 'lightgray',
            boxShadow: '5px 5px 5px #333',
        }}
    >
        {/* The component also renders an image of the recipe, using the Spoonacular API. */}
        <img
            src={`https://spoonacular.com/recipeImages/${recipe.image}`}
            alt={recipe.title}
            style={{ maxWidth: '100%', height: 'auto' }}
        />
        {/* The component renders the recipe title and summary. */}
        <h3>{recipe.title}</h3>
        <p>{recipe.summary}</p>
    </div>
);

// The RecipeCard component is exported as the default export of this module.
export default RecipeCard;
