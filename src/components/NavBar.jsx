import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuthValue()
    const {logout} = useAuthentication()

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
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Home
                    </NavLink>
                </li>

                {!user && (
                    <>
                        <li>
                            <NavLink to="/Login"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Register"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Register
                            </NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                New Post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}

                <li>
                    <NavLink to="/About"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        About
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logout}>Exit</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar