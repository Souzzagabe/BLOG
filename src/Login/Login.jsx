import React from 'react'
import styles from "./Login.module.css"
import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'

const Login = () => {

  const [email, setEemail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await createUser(user)

    console.log(res)
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Log in to use the system.</p>
      <form onSubmit={handleSubmit}>
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
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Loading..</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login