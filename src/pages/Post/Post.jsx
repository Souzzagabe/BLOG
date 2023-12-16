import React from 'react'
import styles from "./Post.module.css"

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const { id } = useParams()
    const { document: posts, loading } = useFetchDocument("posts", id)

    return (
        <div className={styles.post_container}>
            {loading && <h3>Loading post...</h3>}
            {posts && (
                <>
                    <h1>{posts.title}</h1>
                    <img src={posts.image} alt={posts.title} />
                    <p>{posts.body}</p>
                    <h3>This post is about:</h3>
                    <div className={styles.tags}>
                    {posts.tags.map((tag) => (
                        <p key={tag}>
                            <span>#</span>{tag}</p>
                    ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Post