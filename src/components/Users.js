import User from './User.js'
import Router from 'next/router'
import { useEffect, useContext, useState } from 'react'
import UserContext from '../contexts/user.js'

export default function Users() {
  const [user, setUser] = useContext(UserContext)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(process.env.APP_URL + '/users', { credentials: 'include' })
      .then(response => {
        if (response.status === 401) {
          Router.push('/auth')
          setUser({})
        }
        else {
          return response.json()
        }
      })
      .then(data => setUsers(data))
      .catch(console.log)
  }, [])

  return (
    <>
      {users.map((item, idx) => <User userName={item.login} key={idx} />)}
    </>
  )
}
