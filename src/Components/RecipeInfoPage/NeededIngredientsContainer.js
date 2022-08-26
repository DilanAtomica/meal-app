import React from 'react';
import "./NeededIngredientsContainer.css";
import NeededIngredient from "./NeededIngredient";

function NeededIngredientsContainer({recipeInfo, servingSize}) {
    return (
        <section className="neededIngredientsContainer">
            {recipeInfo?.extendedIngredients?.map((ingredient, idx) => (
                <NeededIngredient key={idx} neededAmount={Math.ceil(ingredient?.measures?.metric?.amount * servingSize)}
                                  unit={ingredient?.measures?.metric?.unitShort} ingredientName={ingredient?.name}
                                  ingredientImage={ingredient?.image}/>
            ))}
        </section>
    );
}

export default NeededIngredientsContainer;