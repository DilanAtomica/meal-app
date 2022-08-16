import React from 'react';
import {useNavigate} from "react-router-dom";
import "./FrontPage.css";

function FrontPage(props) {

    let navigate = useNavigate();

    const handleOnClick = (e) => {
        if(e.target.innerHTML === "Ingredients") {
            navigate("/ingredients/");
        } else {
            navigate("/nutrients/");
        }
    }

    return (
        <div className="frontPage">
          <div className="frontPage-startContainer">
              <h1>Find recipe by...</h1>
              <div className="frontPage-startButtons">
                  <button onClick={handleOnClick} type="button">Ingredients</button>
                  <h2>Or</h2>
                  <button onClick={handleOnClick} type="button">Nutrients</button>
              </div>
          </div>
        </div>
    );
}

export default FrontPage;