import React from 'react';
import "./NeededItemsContainer.css";
import ServingSizeCounter from "./ServingSizeCounter";
import NeededIngredientsContainer from "./NeededIngredientsContainer";
import NeededEquipmentContainer from "./NeededEquipmentContainer";

function NeededItemsContainer({servingSize, recipeInfo, recipeEquipment, changeServingSize}) {



    return (
        <div className="neededItemsContainer">
            <h2 className="neededIngredientsTitle">Ingredients/Equipment</h2>

            <h3 className="servingSizeTitle">Servings</h3>

            <ServingSizeCounter servingSize={servingSize} changeServingSize={changeServingSize} />

            <NeededIngredientsContainer recipeInfo={recipeInfo} servingSize={servingSize} />

            <NeededEquipmentContainer recipeEquipment={recipeEquipment} />

        </div>
    );
}

export default NeededItemsContainer;