import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


/**
 * Renders the details of a recipe, including its title, image, summary, ingredients, and instructions.
 * Uses the Spoonacular API to fetch recipe details based on the ID passed in the URL parameters.
 * @returns {JSX.Element} The JSX element representing the recipe details.
 **/
const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    summary: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const apiKey = "9b35de4cdab041e58fac481ad4103174";

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information`,
            {
              params: {
                apiKey: apiKey,
                includeNutrition: true,
              },
            }
          );
          setRecipe(response.data);
        } catch (error) {
          console.error(`Error fetching recipe details: ${error}`);
        }
      }
    };

    fetchRecipeDetail();
  }, [id, navigate]);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "darkred",
      }}
    >
      <h2
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "lightgray",
        }}
      >
        {recipe.title}
      </h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          maxWidth: "100%",
          height: "auto",
          alignContent: "center",
          margin: "auto",
          borderRadius: "5px",
          scale: "0.9",
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          justifyContent: "center",
          alignContent: "center",
          lineHeight: "1.5",
        }}
      />
  
      <h3
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "5px",
          textShadow: "1px 1px 1px gray",
          fontWeight: "heavy",
          fontSize: "1.5rem",
            backgroundColor: "lightgray",
        }}
      >
        Ingredients
      </h3>
      <ul
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          justifyContent: "center",
          alignContent: "center",
          lineHeight: "1.5",
        }}
      >
        {recipe && recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
  
      <h3
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "5px",
            textShadow: "1px 1px 1px gray",
            fontWeight: "heavy",
            fontSize: "1.5rem",
            backgroundColor: "lightgray",
        }}
      >
        Instructions
      </h3>
      <div 
        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          justifyContent: "center",
          alignContent: "center",
          lineHeight: "1.5",

        }} 
      />
  
      <button
        onClick={() => navigate(-1)}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: "20px",
          marginBottom: "20px",
          backgroundColor: "gray",
          justifyContent: "center",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
            fontWeight: "heavy",
            fontSize: "1.5rem",
            fontFamily: "stencil",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetail;