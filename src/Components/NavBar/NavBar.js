import React, {useState, useContext} from 'react';
import "./NavBar.css";
import MealMeLogo from "../../images/mealMeLogo.PNG"
import smallMealMeLogo from "../../images/smallMealMeLogo.PNG";
import {AiOutlineSearch} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

function NavBar(props) {

    let navigate = useNavigate();

    const {userScreenWidth} = useContext(AppContext);
    const [searchInput, setSearchInput] = useState("");

    const searchRecipe = () => {
        navigate("/recipes/" + "search=" + searchInput);
        setSearchInput("");
    }

    return (
        <header>
            <nav>
                <img alt="logo" onClick={() => navigate("/")} src={userScreenWidth > 450 ? MealMeLogo : smallMealMeLogo} />
                <form onSubmit={searchRecipe} className="navBar-searchBar">
                    <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search for recipe here!" className="searchBar" type="text" />
                    <button type="submit"><AiOutlineSearch className="searchIcon" /></button>
                </form>
                <button onClick={() => navigate("/favorites")} type="button"><FiUser /></button>
            </nav>
        </header>
    );
}

export default NavBar;