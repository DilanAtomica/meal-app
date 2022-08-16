import React, {useState} from 'react';
import "./IngredientsPage.css";
import { TiDelete } from 'react-icons/ti';
import {AiOutlinePlus} from 'react-icons/ai'
import axios from "axios";

function IngredientsPage(props) {

    const [searchedIngredients, setSearchedIngredients] = useState([]);

    const getIngredient = async(e) => {
        if(e.target.value.length > 2) {
            try {
                const API = "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + e.target.value
                    + "&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                console.log(API);
                const response = await axios.get(API);
                const results = response.data;
                setSearchedIngredients(results);
            } catch {
                console.log("Error")
            }
        } else {
            setSearchedIngredients([]);
        }
    }

    return (
        <div className="ingredientsPage">
            <div className="ingredientsContainer">
                <div className="searchContainer">
                    <input onChange={getIngredient} type="text" />
                    <div className="autoCompletedIngredients">
                        {searchedIngredients?.map(ingredient => (
                            <button className="addIngredientButton">
                                <span className="addIngredientIcon"><AiOutlinePlus /></span>{ingredient.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="addedIngredients">
                    <div className="ingredient">
                        <img src="https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" />
                        <div className="ingredientTag">
                            Apple<button type="button" className="deleteIcon"><TiDelete /></button>
                        </div>
                    </div>

                    <div className="ingredient">
                        <img src="https://spoonacular.com/cdn/ingredients_100x100/apple.jpg" />
                        <div className="ingredientTag">
                            Apple<button type="button" className="deleteIcon"><TiDelete /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default IngredientsPage;