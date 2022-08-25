import React from 'react';
import "./RecipesByNutrients.css";

function RecipesByNutrients({recipe, navigateToRecipe}) {

    const handleOnClick = () => {
        navigateToRecipe(recipe?.id);
    }

    return (
        <li onClick={handleOnClick} className="recipe">
            <img alt={recipe?.name} src={recipe?.image} />
            <div className="recipeInfo">
                <h2>{recipe?.title}</h2>
                <p>{recipe?.protein} protein, {recipe?.carbs} carbs, {recipe?.fat} fats</p>
                <p>This recipe contains {recipe?.calories} calories.</p>
            </div>
        </li>
    );
}

export default RecipesByNutrients;