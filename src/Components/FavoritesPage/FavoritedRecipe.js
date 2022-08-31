import React from 'react';
import "./FavoritedRecipe.css";

function FavoritedRecipe({recipeName, recipeID, recipeImg, navigateToRecipe}) {

    const handleOnClick = () => {
        navigateToRecipe(recipeID);
    }

    return (
        <div onClick={handleOnClick} className="favoritedRecipe">
            <img alt={recipeName} src={recipeImg} />
            <h2>{recipeName}</h2>
        </div>
    );
}

export default FavoritedRecipe;