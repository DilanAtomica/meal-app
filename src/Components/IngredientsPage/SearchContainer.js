import React from 'react';
import "./SearchContainer.css";
import {AiOutlinePlus} from "react-icons/ai";

function SearchContainer({getIngredient, searchInput, searchedIngredients, addIngredient}) {

    const handleOnChange = (e) => {
        getIngredient(e);
    }

    const handleOnClick = (e) => {
        addIngredient(e);
    }

    return (
        <div className="searchContainer">
            <input value={searchInput} onChange={handleOnChange} type="text" placeholder="Add your ingredients..." />
            <div className="autoCompletedIngredients">
                {searchedIngredients?.map(ingredient => (
                    <button data-name={ingredient.name}
                            data-image={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image}
                            onClick={handleOnClick} key={ingredient.name} className="addIngredientButton">
                        <span className="addIngredientIcon"><AiOutlinePlus /></span>{ingredient.name}
                        <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchContainer;