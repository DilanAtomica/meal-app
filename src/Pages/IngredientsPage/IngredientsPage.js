import React, {useState} from 'react';
import "./IngredientsPage.css";
import { TiDelete } from 'react-icons/ti';
import {AiOutlinePlus} from 'react-icons/ai'
import axios from "axios";

function IngredientsPage(props) {

    const [searchedIngredients, setSearchedIngredients] = useState([]);

    const [addedIngredients, setAddedIngredients] = useState([]);

    const [searchInput, setSearchInput] = useState("");

    const getIngredient = async(e) => {
        setSearchInput(e.target.value);
        if(e.target.value.length > 2) {
            try {
                const API = "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + e.target.value
                    + "&apiKey=19cbc6a6b21d4037815a9a3a15f7d294"
                const response = await axios.get(API);
                const results = response.data;

                let newList = [];

                for(let i = 0; i < results.length - 1; i++) {
                    newList.push(results[i]);
                    for(let j = 0; j <= addedIngredients.length - 1; j++) {
                            newList = newList.filter((ingredient) => {
                                return ingredient.name !== addedIngredients[j].name
                            })
                    }
                }

                setSearchedIngredients(newList);
            } catch {
                console.log("Error")
            }
        } else {
            setSearchedIngredients([]);
        }
    }

    const addIngredient = (e) => {
        setSearchInput("");
        setSearchedIngredients([]);
        const ingredientName = e.target.getAttribute("data-name");
        const ingredientImage = e.target.getAttribute("data-image");
        if(ingredientName === null) return
        console.log(ingredientName);

        setAddedIngredients([...addedIngredients,
             {
                name: ingredientName,
                image: ingredientImage
            }
        ])
    }

    return (
        <div className="ingredientsPage">
            <div className="ingredientsContainer">
                <div className="searchContainer">
                    <input value={searchInput} onChange={getIngredient} type="text" />
                    <div className="autoCompletedIngredients">
                        {searchedIngredients?.map(ingredient => (
                            <button data-name={ingredient.name}
                                    data-image={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image}
                                    onClick={addIngredient} key={ingredient.name} className="addIngredientButton">
                                <span className="addIngredientIcon"><AiOutlinePlus /></span>{ingredient.name}
                                <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image} />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="addedIngredients">
                    {addedIngredients.map(ingredient => (
                        <div key={ingredient.name} className="ingredient">
                            <img src={ingredient.image} />
                            <div className="ingredientTag">
                                {ingredient.name}<button type="button" className="deleteIcon"><TiDelete /></button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default IngredientsPage;