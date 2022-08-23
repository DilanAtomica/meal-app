import React from 'react';
import "./InstructionsContainer.css";

function InstructionsContainer({instructions}) {
    return (
        <div className="instructionsContainer">
            <h2 className="instructionsTitle">Instructions</h2>
            <div className="instructions">
                {instructions.map(instruction => (
                    <div key={instruction?.number} className="instruction">
                        <div className="instructionOrder">{instruction?.number}</div>
                        <p>{instruction?.step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InstructionsContainer;