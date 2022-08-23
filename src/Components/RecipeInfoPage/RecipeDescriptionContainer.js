import React from 'react';
import "./RecipeDescription.css";

function RecipeDescriptionContainer({recipeInfo, nutrition}) {
    return (
        <div className="recipeDescriptionContainer">
            <h1 className="recipeName">{recipeInfo?.title}</h1>
            <span className="recipeDescription">Easy <span>•</span> {recipeInfo?.readyInMinutes} min</span>
            <span className="recipeDescription">{Math.ceil(nutrition[0]?.amount)} Calories
                    <span>•</span> {Math.ceil(nutrition[8]?.amount)}g Protein
                    <span>•</span> {Math.ceil(nutrition[3]?.amount)}g Carbs
                    <span>•</span> {Math.ceil(nutrition[1]?.amount)}g Fat</span>
        </div>
    );
}

export default RecipeDescriptionContainer;