import React from 'react';
import "./NeededEquipmentContainer.css";

function NeededEquipmentContainer({recipeEquipment}) {
    return (
        <section className="neededEquipmentContainer">
            {recipeEquipment?.equipment?.map(equipment => (
                <div key={equipment?.name}  className="neededEquipment">
                    <span className="neededEquipment-name">{equipment?.name}</span>
                    <img alt={equipment?.name} className="neededEquipment-image" src={"https://spoonacular.com/cdn/equipment_100x100/" + equipment?.image} />
                </div>
            ))}
        </section>
    );
}

export default NeededEquipmentContainer;