import React, {useState} from 'react';
import "./RecipeInfoPage.css";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function RecipeInfoPage(props) {

    let { recipeID } = useParams();

    const [recipeInfo, setRecipeInfo] = useState([]);
    const [recipeEquipment, setRecipeEquipment] = useState([]);
    const[servingSize, setServingSize] = useState(1);
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        const fetchRecipeInfo = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/" + recipeID +
                    "/information?includeNutrition=true&apiKey=19cbc6a6b21d4037815a9a3a15f7d294";
                const response = await axios.get(API);
                setRecipeInfo(response.data);
                setInstructions(response.data.analyzedInstructions[0].steps);
                fetchEquipments(response.data.id);

            } catch {
                console.log("Error")
            }
        }
        fetchRecipeInfo();

    }, []);

    const fetchEquipments = async(recipeID) => {
        const API = "https://api.spoonacular.com/recipes/" + recipeID +
            "/equipmentWidget.json?apiKey=19cbc6a6b21d4037815a9a3a15f7d294";
        const response = await axios.get(API);
        setRecipeEquipment(response.data);

    }

    /*<p className="recipeSummary" dangerouslySetInnerHTML={{__html: recipeInfo?.summary}} />*/

    return (
        <div className="recipeInfoPage">
            <h1 className="recipeTitle">{recipeInfo?.title}</h1>
            <img className="recipeImage" src={recipeInfo?.image} />

            <h2>Ingredients</h2>
            <form>
            <label htmlFor="servingSizeCounter">Servings</label>
            <input value={servingSize} onChange={(e) => setServingSize(e.target.value)} id="servingSizeCounter" type="number" min={1} max={5} />
            </form>
            <div className="neededIngredientsContainer">
                {recipeInfo?.extendedIngredients?.map(ingredient => (
                    <div key={ingredient?.id} className="neededIngredient">
                        <img className="neededIngredient-image" src={"https://spoonacular.com/cdn/ingredients_100x100/" + ingredient?.image} />
                        <span className="neededIngredient-name">{ingredient?.name}</span>
                        <span className="neededIngredient-amount">
                            {ingredient?.measures?.metric?.amount * servingSize} {ingredient?.measures?.metric?.unitShort}
                        </span>
                    </div>
                ))}
            </div>

            <h2>Equipment</h2>
            <div className="neededEquipmentContainer">
                {recipeEquipment?.equipment?.map(equipment => (
                    <div key={equipment?.name}  className="neededEquipment">
                        <img className="neededEquipment-image" src={"https://spoonacular.com/cdn/equipment_100x100/" + equipment?.image} />
                        <span className="neededEquipment-name">{equipment?.name}</span>
                    </div>
                ))}
            </div>

            <h2>Instructions</h2>
            <div className="instructionsContainer">
                {instructions.map(instruction => (
                    <div key={instruction?.number} className="instruction">
                        <div className="instructionOrder">{instruction?.number}</div>
                        <p>{instruction?.step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeInfoPage;