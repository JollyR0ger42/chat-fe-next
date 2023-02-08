import { useContext } from 'react'
import UserContext from '../contexts/user.js'

export default function Header() {
  const [user] = useContext(UserContext)

  return <header>Login: {user.login}</header>
}
