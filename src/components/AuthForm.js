import React, { useState } from 'react';

export default function AuthForm(props) {
  const [login, setLogin] = useState('user')
  const [password, setPassword] = useState('password')

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
      body: JSON.stringify({login, password})
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
      body: JSON.stringify({login, password})
    })
    props?.setUser?.(await response.json())
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
    </form>
  )
}
