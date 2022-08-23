import React from 'react';
import "./AddedIngredientsContainer.css";
import {TiDelete} from "react-icons/ti";

function AddedIngredientsContainer({addedIngredients, removeIngredient}) {

    const handleOnClick = (e) => {
        removeIngredient(e);
    }

    return (
        <div className="addedIngredientsContainer">
            {addedIngredients.map(ingredient => (
                <div key={ingredient.name} className="ingredient">
                    <img src={ingredient.image} />
                    <div className="ingredientTag">
                        {ingredient.name}<button data-name={ingredient.name} onClick={handleOnClick} type="button" className="deleteIcon"><TiDelete /></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AddedIngredientsContainer;