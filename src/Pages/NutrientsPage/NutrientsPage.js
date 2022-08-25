import React, {useState} from 'react';
import "./NutrientsPage.css";
import {useNavigate} from "react-router-dom";
import NutrientInputContainer from "../../Components/NutrientsPage/NutrientInputContainer";

function NutrientsPage(props) {

    let navigate = useNavigate();

    const [nutrientsValues, setNutrientsValue] = useState({
        minCalories: 0,
        maxCalories: 0,
        minProtein: 0,
        maxProtein: 0,
        minCarbs: 0,
        maxCarbs: 0,
        minFat: 0,
        maxFat: 0,
    });

    const minimizeLength = (e) => {
        if(e.currentTarget.value.length > 4) e.currentTarget.value = e.currentTarget.value.slice(0, -1);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let apiUrl = "";
        console.log(nutrientsValues.maxProtein)

        if(nutrientsValues.minCalories !== 0) apiUrl = apiUrl + "&minCalories=" + nutrientsValues.minCalories;
        if(nutrientsValues.maxCalories !== 0) apiUrl = apiUrl + "&maxCalories=" + nutrientsValues.maxCalories;
        if(nutrientsValues.minProtein !== 0) apiUrl = apiUrl + "&minProtein=" + nutrientsValues.minProtein;
        if(nutrientsValues.maxProtein !== 0) apiUrl = apiUrl + "&maxProtein=" + nutrientsValues.maxProtein;
        if(nutrientsValues.minCarbs !== 0) apiUrl = apiUrl + "&minCarbs=" + nutrientsValues.minCarbs;
        if(nutrientsValues.maxCarbs !== 0) apiUrl = apiUrl + "&maxCarbs=" + nutrientsValues.maxCarbs;
        if(nutrientsValues.minFat !== 0) apiUrl = apiUrl + "&minFat=" + nutrientsValues.minFat;
        if(nutrientsValues.maxFat !== 0) apiUrl = apiUrl + "&maxFat=" + nutrientsValues.maxFat;

        navigate("/recipes/" + apiUrl);
    }

    const setMinInputValue = (nutrient, nutrientValue, inputID) => {

        if(nutrient === "Calories") setNutrientsValue({...nutrientsValues, minCalories: nutrientValue});
        if(nutrient === "Protein") setNutrientsValue({...nutrientsValues, minProtein: nutrientValue});
        if(nutrient === "Carbs") setNutrientsValue({...nutrientsValues, minCarbs: nutrientValue});
        if(nutrient === "Fat") setNutrientsValue({...nutrientsValues, minFat: nutrientValue});
    }

    const setMaxInputValue = (nutrient, nutrientValue) => {
        if(nutrient === "Calories") setNutrientsValue({...nutrientsValues, maxCalories: nutrientValue});
        if(nutrient === "Protein") setNutrientsValue({...nutrientsValues, maxProtein: nutrientValue});
        if(nutrient === "Carbs") setNutrientsValue({...nutrientsValues, maxCarbs: nutrientValue});
        if(nutrient === "Fat") setNutrientsValue({...nutrientsValues, maxFat: nutrientValue});
    }


    return (
        <main className="nutrientsPage">
            <form onSubmit={handleOnSubmit}>
                <NutrientInputContainer nutrientName="Calories" setMinInputValue={setMinInputValue} setMaxInputValue={setMaxInputValue}
                                        minimizeLength={minimizeLength} minInputID="minCalories" maxInputID="maxCalories" maxValue={1200}/>

                <NutrientInputContainer nutrientName="Protein" setMinInputValue={setMinInputValue} setMaxInputValue={setMaxInputValue}
                                        minimizeLength={minimizeLength} minInputID="minProtein" maxInputID="maxProtein" maxValue={105}/>

                <NutrientInputContainer nutrientName="Carbs" setMinInputValue={setMinInputValue} setMaxInputValue={setMaxInputValue}
                                        minimizeLength={minimizeLength} minInputID="minCarbs" maxInputID="maxCarbs" maxValue={119}/>

                <NutrientInputContainer nutrientName="Fat" setMinInputValue={setMinInputValue} setMaxInputValue={setMaxInputValue}
                                        minimizeLength={minimizeLength} minInputID="minFat" maxInputID="maxFat" maxValue={100}/>

                <button className="findRecipeButton" type="submit">Find Recipe</button>
            </form>
        </main>
    );
}

export default NutrientsPage;