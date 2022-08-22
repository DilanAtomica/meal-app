import React, {useState} from 'react';
import "./NutrientsPage.css";

function NutrientsPage(props) {

    const [nutrientsValues, setNutrientsValue] = useState({
        minCalories: 0,
        maxCalories: 0,
        minProtein: 0,
        maxProtein: 0,
        minCarb: 0,
        maxCarb: 0,
        minFats: 0,
        maxFats: 0,
    });

    const handleOnInput = (e) => {
        if(e.currentTarget.value.length > 4) e.currentTarget.value = e.currentTarget.value.slice(0, -1);
    }

    return (
        <div className="nutrientsPage">
            <form>

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

            </form>

            <button className="findRecipeButton" type="submit">Find Recipe</button>
        </div>
    );
}

export default NutrientsPage;