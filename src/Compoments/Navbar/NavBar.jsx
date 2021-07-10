import React from "react";
import navbar from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={navbar.nav}>

            <div className={navbar.item}>
                <div>
                    <NavLink to={"/profile"} activeClassName={navbar.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={"/dialogs"} activeClassName={navbar.activeLink}>Messages</NavLink>
                </div>
                <div>
                    <a className={navbar.item}>News</a>
                </div>
                <div>
                    <a className={navbar.item}>Music</a>
                </div>
                <div>
                    <a className={navbar.item}>Settings</a>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;