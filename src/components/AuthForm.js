import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../contexts/user.js'
import Router from 'next/router'

export default function AuthForm() {
  const [login, setLogin] = useState('user')
  const [password, setPassword] = useState('password')
  const [user, setUser] = useContext(UserContext)

  const onNameChange = (e) => {
    setLogin(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSignup = (e) => {
    e.preventDefault()
    fetch(process.env.APP_URL + '/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    })
  }

  const onLogin = async (e) => {
    e.preventDefault()
    const response = await fetch(process.env.APP_URL + '/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    })
    setUser(await response.json())
    Router.push('/')
  }

  const onLogout = (e) => {
    e.preventDefault()
    fetch(process.env.APP_URL + '/logout', { credentials: 'include' })
    setUser({})
  }

  return (
    <form>
      <label>
        Login:
        <input type="text" value={login} onChange={onNameChange} />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={onPasswordChange} />
      </label>
      <button onClick={onSignup}>Signup</button>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
    </form>
  )
}
