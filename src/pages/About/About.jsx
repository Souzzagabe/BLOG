import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className={styles.about_content}>
            <h2>About the <span>Flogão</span></h2>
            <p>This project consists of a blog made with react on the frontend and firebase on the backend.</p>
            <Link to="/posts/create" className="btn">
                Create Post
            </Link>
        </div>
    )
}

export default About