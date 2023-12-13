import styles from "./Home.module.css"

// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"


// components
import PostDetail from "../../components/PostDetail"


const Home = () => {
  const [query, setQuery] = useState("")
  const {documents: posts, loading} = useFetchDocuments("posts")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      return navigate(`/search?q=${query}`)
    }
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
        {loading && <p>Loading</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}

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