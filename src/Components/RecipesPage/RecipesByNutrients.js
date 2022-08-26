import React from 'react';
import "./RecipesByNutrients.css";

function RecipesByNutrients({navigateToRecipe, recipeImage, recipeName, recipeID, carbs, protein, fat, calories}) {

    const handleOnClick = () => {
        navigateToRecipe(recipeID);
    }

    return (
        <li onClick={handleOnClick} className="recipe">
            <img alt={recipeName} src={recipeImage} />
            <div className="recipeInfo">
                <h2>{recipeName}</h2>
                <p>{protein} protein, {carbs} carbs, {fat} fats</p>
                <p>This recipe contains {calories} calories.</p>
            </div>
        </li>
    );
}

export default RecipesByNutrients;