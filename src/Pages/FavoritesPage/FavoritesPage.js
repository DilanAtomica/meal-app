import React, {useEffect, useState} from 'react';
import "./FavoritesPage.css";
import {useContext} from "react";
import {AppContext} from "../../App";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import FavoritedRecipe from "../../Components/FavoritesPage/FavoritedRecipe";

function FavoritesPage(props) {

    let navigate = useNavigate();

    const {activateLoader, deActiveLoader} = useContext(AppContext);

    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        if(favoriteRecipes === undefined) return;
        activateLoader();
        fetchRecipes();

    }, []);

    const fetchRecipes = async() => {
        try {
            const recipes = JSON.parse(localStorage.getItem("recipeID"));

            if(recipes === null) {
                deActiveLoader();
                return
            }

            let recipeIDs = "";

            for(let i = 0; i < recipes.length; i++) {
                recipeIDs = recipeIDs + recipes[i] + ",";
            }

            const API = "https://api.spoonacular.com/recipes/informationBulk?ids=" + recipeIDs +
                "&apiKey=19cbc6a6b21d4037815a9a3a15f7d294";
            const response = await axios.get(API);

            setFavoriteRecipes(response.data);
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
        <div className="favoritesPage">
            <h1>Favorite Recipes</h1>
            {favoriteRecipes?.map(recipe => (
                <FavoritedRecipe key={recipe?.id} recipeID={recipe?.id} recipeImg={recipe?.image} recipeName={recipe?.title}
                                 navigateToRecipe={navigateToRecipe}/>
            ))}
        </div>
    );
}

export default FavoritesPage;