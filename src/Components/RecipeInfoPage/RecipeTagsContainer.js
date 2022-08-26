import React from 'react';
import "./RecipeTagsContainer.css";

function RecipeTagsContainer({glutenFree, dairyFree, vegan, vegetarian}) {
    return (
        <section>
            <ul className="recipeTagsContainer">
                <li style={{textDecoration: !glutenFree && "none"}} className="recipeTag">Gluten</li>
                <li style={{textDecoration: vegan && "none"}} className="recipeTag">Vegan</li>
                <li style={{textDecoration: vegetarian && "none"}} className="recipeTag">Vegetarian</li>
                <li style={{textDecoration: !dairyFree && "none"}} className="recipeTag">Dairy</li>
            </ul>
        </section>
    );
}

export default RecipeTagsContainer;