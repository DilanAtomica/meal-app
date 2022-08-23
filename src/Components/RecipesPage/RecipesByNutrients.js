import React from 'react';
import "./RecipesByNutrients.css";

function RecipesByNutrients({recipe, navigateToRecipe}) {

    const handleOnClick = () => {
        navigateToRecipe(recipe?.id);
    }

    return (
        <div onClick={handleOnClick} key={recipe?.id} className="recipe">
            <img src={recipe?.image} />
            <div className="recipeInfo">
                <h2>{recipe?.title}</h2>
                <p>{recipe?.protein} protein, {recipe?.carbs} carbs, {recipe?.fat} fats</p>
                <p>This recipe contains {recipe?.calories} calories.</p>
            </div>
        </div>
    );
}

export default RecipesByNutrients;