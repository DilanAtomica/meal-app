import React from 'react';
import "./NavBar.css";
import MealMeLogo from "../../images/mealMeLogo.PNG"
import smallMealMeLogo from "../../images/smallMealMeLogo.PNG";
import {AiOutlineSearch} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";

function NavBar(props) {

    let navigate = useNavigate();

    const {userScreenWidth} = useContext(AppContext);

    return (
        <div className="navBar">
            <div className="innerNavBar">
                <img onClick={() => navigate("/")} src={userScreenWidth > 450 ? MealMeLogo : smallMealMeLogo} />
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