import React, {useContext, useEffect, useState} from 'react';
import "./RecipesPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import RecipesByIngredients from "../../Components/RecipesPage/RecipesByIngredients";
import RecipesByNutrients from "../../Components/RecipesPage/RecipesByNutrients";
import {AppContext} from "../../App";

function RecipesPage(props) {

    const {activateLoader, deActiveLoader} = useContext(AppContext);

    let { apiUrl } = useParams();
    let navigate = useNavigate();

    const [recipesByIngredients, setRecipesByIngredients] = useState([]);
    const [recipesByNutrients, setRecipesByNutrients] = useState([]);

    useEffect(() => {
        activateLoader();

        if(apiUrl.includes("Protein") || apiUrl.includes("Carbs") || apiUrl.includes("Calories") ||
            apiUrl.includes("Fat")) {
            fetchRecipesByNutrients();
        } else {
            fetchRecipesByIngredients();
        }
        console.log(apiUrl);
    }, []);

    const fetchRecipesByIngredients = async() => {
        try {
            const API = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + apiUrl
                + "&number=20&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
            const response = await axios.get(API);
            const results = response.data;
            setRecipesByIngredients(results);
            deActiveLoader();

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
            deActiveLoader();

        } catch {
            console.log("Error")
        }
    }

    const navigateToRecipe = (recipeID) => {
        navigate("/recipe/" + recipeID);
    }

    return (
        <div className="recipesPage">
            <div className="recipesContainer">

                {recipesByIngredients?.map(recipe => (
                    <RecipesByIngredients recipe={recipe} navigateToRecipe={navigateToRecipe} />
                ))}

                {recipesByNutrients?.map(recipe => (
                    <RecipesByNutrients recipe={recipe} navigateToRecipe={navigateToRecipe} />
                ))}


            </div>
        </div>
    );
}

export default RecipesPage;