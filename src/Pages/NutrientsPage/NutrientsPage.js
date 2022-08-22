import React, {useState} from 'react';
import "./NutrientsPage.css";
import {useNavigate} from "react-router-dom";

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

    const handleOnInput = (e) => {
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

    return (
        <div className="nutrientsPage">
            <form onSubmit={handleOnSubmit}>
                <div className="nutrientForm">
                    <h2>Calories</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minCalories">Min</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, minCalories: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minCalories" name="minCalories" max="1200" />
                        <label htmlFor="maxCalories">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxCalories: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="maxCalories" name="maxCalories" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Protein</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minProtein">Min</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, minProtein: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minProtein" name="minProtein" max="105" />
                        <label htmlFor="maxProtein">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxProtein: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="maxProtein" name="maxProtein" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Carbs</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minCarbs">Min</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, minCarbs: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minCarbs" name="minCarbs" max="119" />
                        <label htmlFor="maxCarbs">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxCarbs: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="maxCarbs" name="maxCarbs" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Fats</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minFats">Min</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, minFat: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minFat" name="minFat" max="100" />
                        <label htmlFor="maxFats">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxFat: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="maxFat" name="maxFat" />
                    </div>
                </div>
                <button className="findRecipeButton" type="submit">Find Recipe</button>
            </form>
        </div>
    );
}

export default NutrientsPage;