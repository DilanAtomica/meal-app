import React from 'react';
import "./FrontPage.css";

function FrontPage(props) {

    const handleOnClick = (e) => {
        if(e.target.innerHTML === "Ingredients") {

        } else {

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