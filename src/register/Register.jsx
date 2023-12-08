import React from 'react'
import styles from "./register.module.css"
import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <p>Share your Stories</p>
      <form>
        <label>
          <span>Name:</span>
          <input type="text"
            name='displayName'
            required
            placeholder='Name'
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email"
            name='email'
            required
            placeholder='E-mail'
          />
        </label>
        <label>
          <span>Password:</span>
          <input type="senha"
            name='senha'
            required
            placeholder='Password'
          />
        </label>
        <label>
          <span>Confirm:</span>
          <input type="senha"
            name='confirmPassword'
            required
            placeholder='Confirm Password'
          />
        </label>
        <button className='btn'>Finish</button>
      </form>

    </div>
  )
}

export default Register