import React from 'react';
import "./ErrorPage.css";
import {useNavigate} from "react-router-dom";

function ErrorPage(props) {

    let navigate = useNavigate();

    return (
        <div className="errorPage">
            <h1>Whoops! Something went wrong... 😕</h1>
            <button onClick={() => navigate("/")} type="button">Go to Home Page</button>
        </div>
    );
}

export default ErrorPage;