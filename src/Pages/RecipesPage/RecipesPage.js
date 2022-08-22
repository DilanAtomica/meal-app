import React, {useEffect, useState} from 'react';
import "./RecipesPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RecipesPage(props) {

    let { apiUrl } = useParams();
    let navigate = useNavigate();

    const [recipesByIngredients, setRecipesByIngredients] = useState([]);
    const [recipesByNutrients, setRecipesByNutrients] = useState([]);

    useEffect(() => {
        const fetchRecipesByIngredients = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + apiUrl
                        + "&number=20&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                const response = await axios.get(API);
                const results = response.data;
                setRecipesByIngredients(results);

            } catch {
                console.log("Error")
            }
        }

        const fetchRecipesByNutrients = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/findByNutrients?" + apiUrl
                    + "&number=20&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                const response = await axios.get(API);
                const results = response.data;
                setRecipesByNutrients(results);

            } catch {
                console.log("Error")
            }
        }

        if(apiUrl.includes("Protein") || apiUrl.includes("Carbs") || apiUrl.includes("Calories") ||
            apiUrl.includes("Fats")) {
            fetchRecipesByNutrients();
        } else {
            fetchRecipesByIngredients();
        }
        console.log(apiUrl);
    }, []);

    return (
        <div className="recipesPage">
            <div className="recipesContainer">

                {recipesByIngredients?.map(recipe => (
                    <div onClick={() => navigate("/recipe/" + recipe?.id)} key={recipe?.id} className="recipe">
                        <img src={recipe?.image} />
                        <div className="recipeInfo">
                            <h2>{recipe?.title}</h2>
                            <p>This recipe includes {recipe?.usedIngredientCount} of your ingredients</p>
                            <p>You're missing {recipe?.missedIngredientCount} ingredients for this recipe</p>
                        </div>
                    </div>
                ))}

                {recipesByNutrients?.map(recipe => (
                    <div onClick={() => navigate("/recipe/" + recipe?.id)} key={recipe?.id} className="recipe">
                        <img src={recipe?.image} />
                        <div className="recipeInfo">
                            <h2>{recipe?.title}</h2>
                            <p>{recipe?.protein} protein, {recipe?.carbs} carbs, {recipe?.fat} fats</p>
                            <p>This recipe contains {recipe?.calories} calories.</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default RecipesPage;