import React, {useContext, useEffect, useState} from 'react';
import "./RecipesPage.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import Recipe from "../../Components/RecipesPage/Recipe";

function RecipesPage(props) {

    const {activateLoader, deActiveLoader} = useContext(AppContext);

    let { apiUrl } = useParams();
    let navigate = useNavigate();

    const [recipesByIngredients, setRecipesByIngredients] = useState([]);
    const [recipesByNutrients, setRecipesByNutrients] = useState([]);
    const [recipesBySearch, setRecipesBySearch] = useState([]);

    useEffect(() => {
        activateLoader();
        window.scrollTo(0, 0);
        setRecipesByIngredients([]);
        setRecipesByNutrients([]);
        setRecipesBySearch([]);

        if(apiUrl.includes("Protein") || apiUrl.includes("Carbs") || apiUrl.includes("Calories") ||
            apiUrl.includes("Fat")) {
            fetchRecipesByNutrients();
        } else if(apiUrl.includes("search=")) {
            fetchRecipesBySearch();
        } else {
            fetchRecipesByIngredients();
        }
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
            console.log("Error");
            deActiveLoader();
            navigate("/error");
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
            console.log("Error");
            deActiveLoader();
            navigate("/error");
        }
    }

    const fetchRecipesBySearch = async() => {
        try {
            const searchQuery = apiUrl.slice(7);

            const API = "https://api.spoonacular.com/recipes/complexSearch?query=" + searchQuery
                + "&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
            const response = await axios.get(API);
            const results = response.data.results;
            setRecipesBySearch(results);
            deActiveLoader();

        } catch {
            console.log("Error");
            deActiveLoader();
            navigate("/error");
        }
    }

    const navigateToRecipe = (recipeID) => {
        navigate("/recipe/" + recipeID);
    }

    return (
        <main className="recipesPage">
            <ul className="recipesContainer">

                {recipesByIngredients?.map(recipe => (
                    <Recipe key={recipe?.id} recipeName={recipe?.title} recipeImage={recipe?.image}
                                          recipeID={recipe?.id} usedIngredients={recipe?.usedIngredientCount}
                                          missedIngredients={recipe?.missedIngredientCount} navigateToRecipe={navigateToRecipe} />
                ))}

                {recipesByNutrients?.map(recipe => (
                    <Recipe key={recipe?.id} recipeName={recipe?.title} recipeImage={recipe?.image}
                                        recipeID={recipe?.id} protein={recipe?.protein} carbs={recipe?.carbs}
                                        fat={recipe?.fat} calories={recipe?.calories} navigateToRecipe={navigateToRecipe} />
                ))}


                {recipesBySearch?.map(recipe => (
                    <Recipe key={recipe?.id} recipeID={recipe?.id} recipeName={recipe?.title} recipeImage={recipe?.image}
                            navigateToRecipe={navigateToRecipe} />
                ))}

            </ul>
        </main>
    );
}

export default RecipesPage;