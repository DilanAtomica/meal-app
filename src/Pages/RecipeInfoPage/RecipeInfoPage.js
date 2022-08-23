import React, {useState} from 'react';
import "./RecipeInfoPage.css";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import noImage from "../../images/noImage.png";
import RecipeTagsContainer from "../../Components/RecipeInfoPage/RecipeTagsContainer";
import RecipeDescriptionContainer from "../../Components/RecipeInfoPage/RecipeDescriptionContainer";
import NeededItemsContainer from "../../Components/RecipeInfoPage/NeededItemsContainer";
import InstructionsContainer from "../../Components/RecipeInfoPage/InstructionsContainer";

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

    return (
        <div className="recipeInfoPage">
            <img className="recipeImage" src={recipeInfo?.image || noImage} />

            <RecipeTagsContainer recipeInfo={recipeInfo} />

            <RecipeDescriptionContainer recipeInfo={recipeInfo} nutrition={nutrition}/>

            <NeededItemsContainer recipeInfo={recipeInfo} recipeEquipment={recipeEquipment} instructions={instructions}
                                  servingSize={servingSize} changeServingSize={changeServingSize}/>

            <InstructionsContainer instructions={instructions} />
        </div>
    );
}

export default RecipeInfoPage;