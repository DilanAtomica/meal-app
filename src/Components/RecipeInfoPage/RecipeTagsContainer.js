import React from 'react';
import "./RecipeTagsContainer.css";

function RecipeTagsContainer({recipeInfo}) {
    return (
        <section>
            <ul className="recipeTagsContainer">
                <li style={{textDecoration: !recipeInfo?.glutenFree && "none"}} className="recipeTag">Gluten</li>
                <li style={{textDecoration: recipeInfo?.vegan && "none"}} className="recipeTag">Vegan</li>
                <li style={{textDecoration: recipeInfo?.vegetarian && "none"}} className="recipeTag">Vegetarian</li>
                <li style={{textDecoration: !recipeInfo?.dairyFree && "none"}} className="recipeTag">Dairy</li>
            </ul>
        </section>
    );
}

export default RecipeTagsContainer;