import React from 'react';
import "./RecipesByIngredients.css";

function RecipesByIngredients({recipe, navigateToRecipe}) {

    const handleOnClick = () => {
        navigateToRecipe(recipe?.id);
    }

    return (
        <li onClick={handleOnClick} key={recipe?.id} className="recipe">
            <img alt={recipe?.title} src={recipe?.image} />
            <div className="recipeInfo">
                <h2>{recipe?.title}</h2>
                <p>This recipe includes {recipe?.usedIngredientCount} of your ingredients</p>
                <p>You're missing {recipe?.missedIngredientCount} ingredients for this recipe</p>
            </div>
        </li>
    );
}

export default RecipesByIngredients;