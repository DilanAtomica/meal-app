import React from 'react';
import "./NutrientsPage.css";

function NutrientsPage(props) {

    const handleOnInput = (e) => {
        if(e.target.value.length > 4) e.target.value = e.target.value.slice(0, -1);
    }


    return (
        <div className="nutrientsPage">
            <form>

                <div className="nutrientForm">
                    <h2>Calories</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minCalories">Min</label>
                        <input onInput={handleOnInput} type="number" id="minCalories" name="minCalories" />
                        <label htmlFor="maxCalories">Max</label>
                        <input type="number" id="maxCalories" name="maxCalories" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Protein</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minProtein">Min</label>
                        <input type="number" id="minProtein" name="minProtein" />
                        <label htmlFor="maxProtein">Max</label>
                        <input type="number" id="maxProtein" name="maxProtein" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Carbs</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minCarbs">Min</label>
                        <input type="number" id="minCarbs" name="minCarbs" />
                        <label htmlFor="maxCarbs">Max</label>
                        <input type="number" id="maxCarbs" name="maxCarbs" />
                    </div>
                </div>

                <div className="nutrientForm">
                    <h2>Fats</h2>
                    <div className="nutrientForm-inputs">
                        <label htmlFor="minFats">Min</label>
                        <input type="number" id="minFats" name="minFats" />
                        <label htmlFor="maxFats">Max</label>
                        <input type="number" id="maxFats" name="maxFats" />
                    </div>
                </div>

            </form>

            <button className="findRecipeButton" type="button">Find Recipe</button>
        </div>
    );
}

export default NutrientsPage;