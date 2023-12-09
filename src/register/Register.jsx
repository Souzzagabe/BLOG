import React from 'react'
import styles from "./register.module.css"
import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEemail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("Passwords must be the same")
      return
    }

    const res = await createUser(user)

    console.log(res)
  }

  useEffect(() => {

    if(authError) {
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <p>Share your Stories</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text"
            name='displayName'
            required
            placeholder='Name'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email"
            name='email'
            required
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEemail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input type="senha"
            name='senha'
            required
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirm:</span>
          <input type="senha"
            name='confirmPassword'
            required
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Finish</button>}
        {loading && <button className='btn' disabled>Wait..</button>}
        {error && <p className='error'>{error}</p>}
      </form>

    </div>
  )
}

export default Register