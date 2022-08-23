import React from 'react';
import "./ServingSizeCounter.css";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function ServingSizeCounter({changeServingSize, servingSize}) {

    const handleOnClick = (e) => {
        changeServingSize(e);
    }

    return (
        <div className="servingSizeCounter">
            <button type="button" onClick={handleOnClick} className="servingSize-reduce"><AiOutlineMinus /></button>
            <span>{servingSize}</span>
            <button type="button" onClick={handleOnClick} className="servingSize-increase"><AiOutlinePlus /></button>
        </div>
    );
}

export default ServingSizeCounter;