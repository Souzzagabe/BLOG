import React from 'react'
import styles from "./CreatePost.module.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Write whatever you want to share, and share your knowledge.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input type="text"
            name='title'
            required
            placeholder='think of a good title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Url:</span>
          <input type="text"
            name='image'
            required
            placeholder='insert an image'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Content:</span>
          <textarea name="body"
            required placeholder='insert content'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>tags:</span>
          <input type="text"
            name='tag'
            required
            placeholder='inser tag'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className='btn'>Finish</button>
        {/* {!loading && <button className='btn'>Finish</button>}
        {loading && <button className='btn' disabled>Loading..</button>}
        {error && <p className='error'>{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost