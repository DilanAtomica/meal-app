import React from 'react';
import "./InstructionsContainer.css";

function InstructionsContainer({instructions}) {
    return (
        <section className="instructionsContainer">
            <h2 className="instructionsTitle">Instructions</h2>
            <ul className="instructions">
                {instructions.map(instruction => (
                    <li key={instruction?.number} className="instruction">
                        <div className="instructionOrder">{instruction?.number}</div>
                        <p>{instruction?.step}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default InstructionsContainer;