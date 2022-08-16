import React from 'react';
import "./RecipesPage.css";
import {useParams} from "react-router-dom";

function RecipesPage(props) {

    let { apiUrl } = useParams();

    return (
        <div className="recipesPage">

        </div>
    );
}

export default RecipesPage;