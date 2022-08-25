import React from 'react';
import "./NeededIngredientsContainer.css";

function NeededIngredientsContainer({recipeInfo, servingSize}) {
    return (
        <section className="neededIngredientsContainer">
            {recipeInfo?.extendedIngredients?.map(ingredient => (
                <div key={ingredient?.id} className="neededIngredient">
                        <span className="neededIngredient-amount">
                            {Math.ceil(ingredient?.measures?.metric?.amount * servingSize)} {ingredient?.measures?.metric?.unitShort}
                        </span>
                    <span className="neededIngredient-name">{ingredient?.name}</span>
                    <img alt={ingredient?.name} className="neededIngredient-image" src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient?.image} />
                </div>
            ))}
        </section>
    );
}

export default NeededIngredientsContainer;