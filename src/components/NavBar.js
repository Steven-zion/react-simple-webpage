
import React from "react";
import Logo from "../img/logo512.png";

export default function NavBar(){
    return(
        <>
        <nav className="nav-bar">
            <img src={Logo} alt="logo" className="logo"></img>
            <h3>React Facts</h3>
            <h4>React course - project 1</h4>
        </nav>
        </>
    )
}