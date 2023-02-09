// import { useRouter } from 'next/router'
// import { useEffect, useContext } from 'react'

// import UserContext from '../contexts/user.js'
import Chat from '../components/Chat.js'

export default function Home() {
  // const [user, setUser] = useContext(UserContext)
  // const router = useRouter()

  // useEffect(() => {
  //   console.log(user)
  //   if (!user?.login) {
  //     console.log("router.push('/auth')")
  //   }
  // }, [user, router])

  return (
    <>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </>
  )
}
