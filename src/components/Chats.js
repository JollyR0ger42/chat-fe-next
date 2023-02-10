import Chat from './Chat.js'
import Router from 'next/router'
import { useEffect, useContext } from 'react'
import UserContext from '../contexts/user.js'

export default function Chats() {
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    fetch(process.env.APP_URL + '/chats', { credentials: 'include' })
      .then(response => {
        if (response.status === 401) {
          Router.push('/auth')
          setUser({})
        }
        else {
          return response.json()
        }
      })
      .then(console.log)
      .catch(console.log)
  }, [])

  return (
    <>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </>
  )
}
