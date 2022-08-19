import React from 'react';
import "./NavBar.css";
import MealMeLogo from "../../images/mealMeLogo.PNG"
import {AiOutlineSearch} from "react-icons/ai"
import {FiUser} from "react-icons/fi"

function NavBar(props) {
    return (
        <div className="navBar">
            <div className="innerNavBar">
                <img src={MealMeLogo} />
                <div className="innerNavBar-searchBar">
                    <input placeholder="Search for recipe here!" className="searchBar" type="text" />
                    <button type="button"><AiOutlineSearch className="searchIcon" /></button>
                </div>
                <button type="button"><FiUser /></button>

            </div>
        </div>
    );
}

export default NavBar;