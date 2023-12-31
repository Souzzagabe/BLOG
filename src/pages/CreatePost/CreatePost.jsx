import styles from "./CreatePost.module.css"
import { useState } from "react"
import { useInsertDocument } from "../../hooks/useInsertDocument"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const { user } = useAuthValue()
  const navigate = useNavigate()
  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    try {
      new URL(image)
    } catch (error) {
      setFormError("The image must be a URL.")
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    if (!title || !image || !tags || !body) {
      setFormError("Please fill in all fields!")
    }

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })
    navigate("/")
  }

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Use a website like unsplash and free photo sites and copy the photo address and paste it into the image url.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Think of a good title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Image URL:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insert an image that represents your post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Content:</span>
          <textarea
            name="body"
            required
            placeholder="Insert the content of the post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insert tags separated by commas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Create post!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Please wait...
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  )
}

export default CreatePost
