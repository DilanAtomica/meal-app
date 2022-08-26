import React from 'react';
import "./RecipesByIngredients.css";

function RecipesByIngredients({navigateToRecipe, recipeName, recipeID, recipeImage, missedIngredients, usedIngredients}) {

    const handleOnClick = () => {
        navigateToRecipe(recipeID);
    }

    return (
        <li onClick={handleOnClick} className="recipe">
            <img alt={recipeName} src={recipeImage} />
            <div className="recipeInfo">
                <h2>{recipeName}</h2>
                <p>This recipe includes {usedIngredients} of your ingredients</p>
                <p>You're missing {missedIngredients} ingredients for this recipe</p>
            </div>
        </li>
    );
}

export default RecipesByIngredients;