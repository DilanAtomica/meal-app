import React, {useState} from 'react';
import "./RecipeInfoPage.css";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useContext} from "react";
import axios from "axios";
import RecipeTagsContainer from "../../Components/RecipeInfoPage/RecipeTagsContainer";
import RecipeDescriptionContainer from "../../Components/RecipeInfoPage/RecipeDescriptionContainer";
import NeededItemsContainer from "../../Components/RecipeInfoPage/NeededItemsContainer";
import InstructionsContainer from "../../Components/RecipeInfoPage/InstructionsContainer";
import {AppContext} from "../../App";

function RecipeInfoPage(props) {

    const {activateLoader, deActiveLoader} = useContext(AppContext);

    let { recipeID } = useParams();
    let navigate = useNavigate();

    const [recipeInfo, setRecipeInfo] = useState([]);
    const [recipeEquipment, setRecipeEquipment] = useState([]);
    const [servingSize, setServingSize] = useState(1);
    const [instructions, setInstructions] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [favorited, setFavorited] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        activateLoader();
        fetchRecipeInfo();
    }, []);

    useEffect(() => {
        updateFavorited();
        console.log("hey")
    }, [favorited]);

    const updateFavorited = () => {
        let recipes = JSON.parse(localStorage.getItem("recipeID"));

        if(recipes !== null) {
            if(recipes.includes(recipeID)) setFavorited(true);
        }
    }

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
            deActiveLoader();

        } catch {
            console.log("Error");
            navigate("/error");
        }
    }

    const fetchEquipments = async(recipeID) => {
        try {
            const API = "https://api.spoonacular.com/recipes/" + recipeID +
                "/equipmentWidget.json?apiKey=19cbc6a6b21d4037815a9a3a15f7d294";
            const response = await axios.get(API);
            setRecipeEquipment(response.data);
        } catch {
            console.log("Error");
        }


    }

    const changeServingSize = (e) => {
        if(e.currentTarget.classList[0] === "servingSize-increase" && servingSize !== 20) {
            setServingSize((prevState => prevState + 1));
        }

        if(e.currentTarget.classList[0] === "servingSize-reduce" && servingSize !== 1) {
            setServingSize((prevState => prevState - 1));
        }
    }

    const HandleOnFavoriteClick = () => {
        let recipes = JSON.parse(localStorage.getItem("recipeID"));
        if(recipes === null || recipes.length === 0) {
            recipes = [recipeID];
        }
        else if(recipes.includes(recipeID)) {
            recipes = recipes.filter(recipe => recipe !== recipeID);
        } else {
            recipes.push(recipeID);
        }
        localStorage.setItem("recipeID", JSON.stringify(recipes));
        setFavorited(!favorited);
    }

    return (
        <main className="recipeInfoPage">
            <img alt={recipeInfo?.title} className="recipeImage" src={recipeInfo?.image} />

            <button onClick={HandleOnFavoriteClick} className="favoriteButton"
                    type="button">{favorited ? "Remove from Favorites" : "Add to Favorites"}</button>

            <RecipeTagsContainer glutenFree={recipeInfo?.glutenFree} vegan={recipeInfo?.vegan} vegetarian={recipeInfo?.vegetarian}
                                  dairyFree={recipeInfo?.dairyFree}/>

            <RecipeDescriptionContainer recipeTitle={recipeInfo?.title} recipePrepTime={recipeInfo?.readyInMinutes}
                                        calories={nutrition[0]?.amount} protein={Math.ceil(nutrition[8]?.amount)}
                                        carbs={Math.ceil(nutrition[3]?.amount)} fat={Math.ceil(nutrition[1]?.amount)}/>

            <NeededItemsContainer recipeInfo={recipeInfo} recipeEquipment={recipeEquipment}
                                  servingSize={servingSize} changeServingSize={changeServingSize}/>

            <InstructionsContainer instructions={instructions} />
        </main>
    );
}

export default RecipeInfoPage;