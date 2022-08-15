import React from 'react';
import "./FrontPage.css";

function FrontPage(props) {

    return (
        <div className="frontPage">
          <div className="frontPage-startContainer">
              <h1>Find recipe by...</h1>
              <div className="frontPage-startButtons">
                  <button type="button">Ingridients</button>
                  <button type="button">Nutrients</button>
              </div>
          </div>
        </div>
    );
}

export default FrontPage;