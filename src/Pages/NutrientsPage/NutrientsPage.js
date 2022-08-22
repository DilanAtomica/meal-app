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
        minFats: 0,
        maxFats: 0,
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
        if(nutrientsValues.minFats !== 0) apiUrl = apiUrl + "&minFats=" + nutrientsValues.minFats;
        if(nutrientsValues.maxFats !== 0) apiUrl = apiUrl + "&maxFats=" + nutrientsValues.maxFats;

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
                               onInput={handleOnInput} type="number" id="minCalories" name="minCalories" />
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
                               onInput={handleOnInput} type="number" id="minProtein" name="minProtein" />
                        <label htmlFor="maxProtein">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxProtein: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minProtein" name="maxProtein" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Carbs</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minCarbs">Min</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, minCarbs: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minCarbs" name="minCarbs" />
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
                            setNutrientsValue({...nutrientsValues, minFats: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="minFats" name="minFats" />
                        <label htmlFor="maxFats">Max</label>
                        <input onChange={(e) =>
                            setNutrientsValue({...nutrientsValues, maxFats: e.currentTarget.value})}
                               onInput={handleOnInput} type="number" id="maxFats" name="maxFats" />
                    </div>
                </div>
                <button className="findRecipeButton" type="submit">Find Recipe</button>
            </form>
        </div>
    );
}

export default NutrientsPage;