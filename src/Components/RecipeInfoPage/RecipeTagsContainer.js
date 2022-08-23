import React from 'react';
import "./RecipeTagsContainer.css";

function RecipeTagsContainer({recipeInfo}) {
    return (
        <div className="recipeTagsContainer">
            <div style={{textDecoration: !recipeInfo?.glutenFree && "none"}} className="recipeTag">Gluten</div>
            <div style={{textDecoration: recipeInfo?.vegan && "none"}} className="recipeTag">Vegan</div>
            <div style={{textDecoration: recipeInfo?.vegetarian && "none"}} className="recipeTag">Vegetarian</div>
            <div style={{textDecoration: !recipeInfo?.dairyFree && "none"}} className="recipeTag">Dairy</div>
        </div>
    );
}

export default RecipeTagsContainer;