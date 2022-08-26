import React from 'react';
import "./NeededIngredient.css";

function NeededIngredient({ingredientImage, ingredientName, neededAmount, unit}) {
    return (
        <div className="neededIngredient">
                        <span className="neededIngredient-amount">
                            {neededAmount} {unit}
                        </span>
            <span className="neededIngredient-name">{ingredientName}</span>
            <img alt={ingredientName} className="neededIngredient-image"
                 src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredientImage} />
        </div>
    );
}

export default NeededIngredient;