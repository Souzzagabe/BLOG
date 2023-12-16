import React from 'react'
import styles from "../components/PostDetail.module.css"
import {Link} from "react-router-dom"

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
        <img src={post.image} alt={post.title}/>
        <h2>{post.title}</h2>
        <p className={styles.createdby}>Author: {post.createdBy}</p>
        <div className={styles.tags}>
            {post.tags.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className='btn btn-outline'>To read</Link>
    </div>
  )
}

export default PostDetail