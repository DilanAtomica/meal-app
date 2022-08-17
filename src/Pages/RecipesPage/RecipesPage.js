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
                    + "&number=20&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
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

 /*   useEffect(() => {
        const test = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/640803/information?&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                const response = await axios.get(API);
                console.log(response);
            } catch {
                console.log("Error")
            }
        }
        test();
    }, []);

*/

    return (
        <div className="recipesPage">
            <h1>Matching Recipes</h1>
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