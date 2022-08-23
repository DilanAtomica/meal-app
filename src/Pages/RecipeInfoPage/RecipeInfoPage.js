import React, {useState} from 'react';
import "./RecipeInfoPage.css";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import noImage from "../../images/noImage.png";

function RecipeInfoPage(props) {

    let { recipeID } = useParams();

    const [recipeInfo, setRecipeInfo] = useState([]);
    const [recipeEquipment, setRecipeEquipment] = useState([]);
    const [servingSize, setServingSize] = useState(1);
    const [instructions, setInstructions] = useState([]);
    const [nutrition, setNutrition] = useState([]);

    useEffect(() => {
        const fetchRecipeInfo = async() => {
            try {
                const API = "https://api.spoonacular.com/recipes/" + recipeID +
                    "/information?includeNutrition=true&apiKey=19cbc6a6b21d4037815a9a3a15f7d294";
                const response = await axios.get(API);
                setRecipeInfo(response.data);
                setInstructions(response.data.analyzedInstructions[0].steps);
                setNutrition(response.data.nutrition.nutrients);
                setServingSize(response.data.servings);
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

    const changeServingSize = (e) => {
        console.log(e.currentTarget.classList[0]);
        if(e.currentTarget.classList[0] === "servingSize-increase" && servingSize !== 5) {
            setServingSize((prevState => prevState + 1));
        }

        if(e.currentTarget.classList[0] === "servingSize-reduce" && servingSize !== 1) {
            setServingSize((prevState => prevState - 1));
        }
    }

    /*<p className="recipeSummary" dangerouslySetInnerHTML={{__html: recipeInfo?.summary}} />*/

    return (
        <div className="recipeInfoPage">
            <img className="recipeImage" src={recipeInfo?.image || noImage} />

                <div className="recipeTagsContainer">
                    <div style={{textDecoration: !recipeInfo?.glutenFree && "none"}} className="recipeTag">Gluten</div>
                    <div style={{textDecoration: recipeInfo?.vegan && "none"}} className="recipeTag">Vegan</div>
                    <div style={{textDecoration: recipeInfo?.vegetarian && "none"}} className="recipeTag">Vegetarian</div>
                    <div style={{textDecoration: !recipeInfo?.dairyFree && "none"}} className="recipeTag">Dairy</div>
                </div>

                <h1 className="recipeName">{recipeInfo?.title}</h1>

                <span className="recipePrepTime">Easy <span>•</span> {recipeInfo?.readyInMinutes} min</span>
                <span className="recipeNutrients">{Math.ceil(nutrition[0].amount)} Calories
                    <span>•</span> {Math.ceil(nutrition[8].amount)}g Protein <span>•</span> {Math.ceil(nutrition[3].amount)}g Carbs
                    <span>•</span> {Math.ceil(nutrition[1].amount)}g Fat</span>


            <h2 className="neededIngredientsTitle">Ingredients/Equipment</h2>

                <h3 className="servingSizeTitle">Servings</h3>
                <div className="servingSizeCounter">
                    <button type="button" onClick={changeServingSize} className="servingSize-reduce"><AiOutlineMinus /></button>
                    <span>{servingSize}</span>
                    <button type="button" onClick={changeServingSize} className="servingSize-increase"><AiOutlinePlus /></button>
                </div>
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
            <div className="neededEquipmentContainer">
                {recipeEquipment?.equipment?.map(equipment => (
                    <div key={equipment?.name}  className="neededEquipment">
                        <span className="neededEquipment-name">{equipment?.name}</span>
                        <img className="neededEquipment-image" src={"https://spoonacular.com/cdn/equipment_100x100/" + equipment?.image} />
                    </div>
                ))}
            </div>

            <h2 className="instructionsTitle">Instructions</h2>
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