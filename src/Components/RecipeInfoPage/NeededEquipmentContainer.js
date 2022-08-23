import React from 'react';
import "./NeededEquipmentContainer.css";

function NeededEquipmentContainer({recipeEquipment}) {
    return (
        <div className="neededEquipmentContainer">
            {recipeEquipment?.equipment?.map(equipment => (
                <div key={equipment?.name}  className="neededEquipment">
                    <span className="neededEquipment-name">{equipment?.name}</span>
                    <img className="neededEquipment-image" src={"https://spoonacular.com/cdn/equipment_100x100/" + equipment?.image} />
                </div>
            ))}
        </div>
    );
}

export default NeededEquipmentContainer;