import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            
            <NavLink to="/" className={styles.brand}>
                <span className={styles.spanm}>Flogão</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" 
                    className={( {isActive }) => (isActive ? styles.active : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Login" 
                    className={( {isActive }) => (isActive ? styles.active : "")}
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Register" 
                    className={( {isActive }) => (isActive ? styles.active : "")}
                    >
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" 
                    className={( {isActive }) => (isActive ? styles.active : "")}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar