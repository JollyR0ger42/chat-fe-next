import { useContext } from 'react'
import UserContext from '../../contexts/user.js'
import Router from 'next/router'
import _s from './header.module.scss'


export default function Header() {
  const [user, setUser] = useContext(UserContext)

  const onLogout = (e) => {
    fetch(process.env.APP_URL + '/logout', { credentials: 'include' })
    setUser({})
    Router.reload()
  }

  return (
    <header className={_s.header}>
      <h1>{user.login}</h1>
      <div className={_s.header__buttons}>
        <button className={_s.header__button} onClick={onLogout}>Logout</button>
        <button className={_s.header__button} onClick={() => Router.push('/')}>Home</button>
      </div>
    </header>
  )
}
