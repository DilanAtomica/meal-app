import React from 'react';
import "./Recipe.css";

function Recipe({recipeID, recipeName, recipeImage, fat, calories, carbs, protein, missedIngredients, usedIngredients, navigateToRecipe}) {

    const handleOnClick = () => {
        navigateToRecipe(recipeID);
    }

    return (
        <li onClick={handleOnClick} className="recipe">
            <img alt={recipeName} src={recipeImage} />
            <div className="recipeInfo">
                <h2>{recipeName}</h2>
                {protein && <p>{protein} protein, {carbs} carbs, {fat} fats</p>}
                {calories && <p>This recipe contains {calories} calories.</p>}

                {usedIngredients && <p>This recipe includes {usedIngredients} of your ingredients</p>}
                {missedIngredients && <p>You're missing {missedIngredients} ingredients for this recipe</p>}
            </div>
        </li>
    );
}

export default Recipe;