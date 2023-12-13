import styles from "./Home.module.css"

// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"

// components


const Home = () => {
  const [query, setQuery] = useState("")

  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home_content}>
      <h3>See our most recent posts.</h3>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Or search by tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div className="post-list">
        {/* {loading && <p>Loading</p>} */}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <Link to="/posts/create" className="btn">
              First Post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home