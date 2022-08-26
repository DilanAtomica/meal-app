import React, {useEffect, useState} from 'react';
import "./FavoritesPage.css";
import {useContext} from "react";
import {AppContext} from "../../App";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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

    }

    return (
        <div className="favoritesPage">
            <h1>Favorited Recipes</h1>
            {favoriteRecipes?.map(recipe => (
                <div onClick={() => navigate("/recipe/" + recipe?.id)} key={recipe?.id} className="favoritedRecipe">
                    <img alt={recipe?.title} src={recipe?.image} />
                    <h2>{recipe?.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default FavoritesPage;