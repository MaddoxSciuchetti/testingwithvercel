import React, {useState} from "react";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Onboarding</NavLink></li>
                <li><NavLink to="/offboarding">Offboarding</NavLink></li>
            </ul>
        </nav>
    )
}