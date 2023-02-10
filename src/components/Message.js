import { useContext } from 'react'
import UserContext from '../contexts/user.js'

export default function Message({ message, from }) {
  const [user] = useContext(UserContext)

  return (
    <div>
      <span>{from === user.login ? 'You:' : from + ':'}</span>
      <span>{message}</span>
    </div>
  )
}
