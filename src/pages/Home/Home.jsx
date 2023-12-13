import styles from "./Home.module.css"

// hooks
import { useNavigate, Link} from "react-router-dom"
import { useState } from "react"

// components


const Home = () => {

  


  return (
    <div className={styles.home_content}>
        <h1>See our most recent posts.</h1>
        <form>
          <input type="text" placeholder="Or search by tags..."/>
          <button className="btn btn-dark">Search</button>
        </form>
    </div>
  )
}

export default Home