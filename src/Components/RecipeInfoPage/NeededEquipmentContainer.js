import React from 'react';
import "./NeededEquipmentContainer.css";
import NeededEquipment from "./NeededEquipment";

function NeededEquipmentContainer({recipeEquipment}) {
    return (
        <section className="neededEquipmentContainer">
            {recipeEquipment?.equipment?.map(equipment => (
                <NeededEquipment key={equipment?.name} equipmentName={equipment?.name} equipmentImage={equipment?.image} />
            ))}
        </section>
    );
}

export default NeededEquipmentContainer;