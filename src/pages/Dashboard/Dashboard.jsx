import React from 'react'
import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;
    const { documents: posts } = useFetchDocuments("posts", null, uid); 
    const { deleteDocument } = useDeleteDocument("posts");

    return (
      <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Manage your posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Post not found..</p>
            <Link to="/posts/create" className="btn">
              Create Post
            </Link>
          </div>
        ) : (
          <div className={styles.post_header}>
            <span>Title</span>
            <span>Actions</span>
          </div>
        )}
  
        {posts &&
          posts.map((post) => (
            <div className={styles.post_row} key={post.id}>
              <p>{post.title}</p>
              <div className={styles.actions}>
                <Link to={`/posts/${post.id}`} className="btn btn-outline">
                  To see
                </Link>
                <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                  Edit
                </Link>
                <button
                  onClick={() => deleteDocument(post.id)}
                  className="btn btn-outline btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    )
  }
  
  export default Dashboard;