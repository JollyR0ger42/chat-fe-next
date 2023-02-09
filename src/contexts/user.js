import { createContext, useState, useEffect } from 'react'

const UserContext = createContext('user')

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const localUser = localStorage.getItem('user') || '{}'
    if (JSON.stringify(user) !== localUser) {
      setUser(JSON.parse(localUser))
    }
  }, [])

  useEffect(() => {
    const localUser = localStorage.getItem('user') || '{}'
    if (JSON.stringify(user) !== localUser) {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext