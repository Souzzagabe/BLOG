import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            
            <NavLink to="/" className={styles.brand}>
                <span className={styles.spanm}>Flogão</span>
            </NavLink>
            <div className={styles.menu} 
            onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${styles.links_list} ${menuOpen ? styles.open : ""}`}>
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