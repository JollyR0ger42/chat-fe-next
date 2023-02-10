import { useContext } from 'react'
import UserContext from '../contexts/user.js'
import Router from 'next/router'

export default function Header() {
  const [user, setUser] = useContext(UserContext)

  const onLogout = (e) => {
    fetch(process.env.APP_URL + '/logout', { credentials: 'include' })
    setUser({})
    Router.reload()
  }

  return (
  <header>
    <div>Login: {user.login}</div>
    <button onClick={() => Router.push('/auth')}>Auth</button>
    <button onClick={onLogout}>Logout</button>
    <button onClick={() => Router.push('/')}>Home</button>
  </header>
  )
}
