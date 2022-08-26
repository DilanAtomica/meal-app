import React from 'react';
import "./NeededEquipment.css";

function NeededEquipment({equipmentName, equipmentImage}) {
    return (
        <div key={equipmentName}  className="neededEquipment">
            <span className="neededEquipment-name">{equipmentName}</span>
            <img alt={equipmentName} className="neededEquipment-image" src={"https://spoonacular.com/cdn/equipment_100x100/" + equipmentImage} />
        </div>
    );
}

export default NeededEquipment;