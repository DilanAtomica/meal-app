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
        <header>
            <nav>
                <img alt="logo" onClick={() => navigate("/")} src={userScreenWidth > 450 ? MealMeLogo : smallMealMeLogo} />
                <form className="navBar-searchBar">
                    <input placeholder="Search for recipe here!" className="searchBar" type="text" />
                    <button type="submit"><AiOutlineSearch className="searchIcon" /></button>
                </form>
                <button onClick={() => navigate("/favorites")} type="button"><FiUser /></button>
            </nav>
        </header>
    );
}

export default NavBar;