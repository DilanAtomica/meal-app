import React, {useEffect, useState} from 'react';
import "./RecipesPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";

function RecipesPage(props) {

    let { apiUrl } = useParams();

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + apiUrl
                    + "&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                const response = await axios.get(API);
                const results = response.data;
                setRecipes(results);

            } catch {
                console.log("Error")
            }
        }
        fetchRecipes();
        console.log(apiUrl);
    }, []);

    return (
        <div className="recipesPage">
            <div className="recipesContainer">

                {recipes?.map(recipe => (
                    <div key={recipe?.id} className="recipe">
                        <img src={recipe?.image} />
                        <div className="recipeInfo">
                            <h2>{recipe?.title}</h2>
                            <p>This recipe includes {recipe?.usedIngredientCount} of your ingredients</p>
                            <p>You're missing {recipe?.missedIngredientCount} ingredients for this recipe</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default RecipesPage;