import React from 'react';
import "./NeededIngredientsContainer.css";

function NeededIngredientsContainer({recipeInfo, servingSize}) {
    return (
        <div className="neededIngredientsContainer">
            {recipeInfo?.extendedIngredients?.map(ingredient => (
                <div key={ingredient?.id} className="neededIngredient">
                        <span className="neededIngredient-amount">
                            {Math.ceil(ingredient?.measures?.metric?.amount * servingSize)} {ingredient?.measures?.metric?.unitShort}
                        </span>
                    <span className="neededIngredient-name">{ingredient?.name}</span>
                    <img className="neededIngredient-image" src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient?.image} />
                </div>
            ))}
        </div>
    );
}

export default NeededIngredientsContainer;