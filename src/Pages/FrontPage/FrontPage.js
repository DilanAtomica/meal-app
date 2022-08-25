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
        <main className="frontPage">
          <section className="frontPage-startContainer">
              <h1>Find recipe by...</h1>
              <div className="frontPage-startButtons">
                  <button className="ingredientsButton" onClick={handleOnClick} type="button">Ingredients</button>
                  <span>Or</span>
                  <button className="nutrientsButton" onClick={handleOnClick} type="button">Nutrients</button>
              </div>
          </section>
        </main>
    );
}

export default FrontPage;