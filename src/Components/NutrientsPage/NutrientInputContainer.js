import React from 'react';
import "./NutrientInputContainer.css";

function NutrientInputContainer({nutrientName, setMinInputValue, setMaxInputValue, minimizeLength, minInputID, maxInputID, maxValue}) {

    const handleOnChange = (e) => {
        if(e.currentTarget.id.includes("min")) {
            setMinInputValue(nutrientName, e.currentTarget.value);
        } else {
            setMaxInputValue(nutrientName, e.currentTarget.value);
        }
    }

    const handleOnInput = (e) => {
        minimizeLength(e);
    }

    return (
        <div className="nutrientInputContainer">
            <h2>{nutrientName}</h2>
            <div className="nutrientInputContainer-input">
                <label htmlFor={minInputID}>Min</label>
                <input onChange={handleOnChange}
                       onInput={handleOnInput} type="number" id={minInputID} name={minInputID} max={maxValue} />
                <label htmlFor={maxInputID}>Max</label>
                <input onChange={handleOnChange}
                       onInput={handleOnInput} type="number" id={maxInputID} name={maxInputID} />
            </div>
        </div>
    );
}

export default NutrientInputContainer;