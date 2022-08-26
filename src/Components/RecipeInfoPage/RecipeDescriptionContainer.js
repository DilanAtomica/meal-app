import React from 'react';
import "./RecipeDescription.css";

function RecipeDescriptionContainer({recipeTitle, recipePrepTime, calories, carbs, fat, protein}) {
    return (
        <section className="recipeDescriptionContainer">
            <h1 className="recipeName">{recipeTitle}</h1>
            <span className="recipeDescription">Easy <span>•</span> {recipePrepTime} min</span>
            <span className="recipeDescription">{calories} Calories
                    <span>•</span> {protein}g Protein
                    <span>•</span> {carbs}g Carbs
                    <span>•</span> {fat}g Fat</span>
        </section>
    );
}

export default RecipeDescriptionContainer;