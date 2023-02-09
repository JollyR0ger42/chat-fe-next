import Chat from '../components/Chat.js'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  fetch(process.env.APP_URL + '/chats', {credentials: 'include'})
    .then(response => {
      if (response.status === 401) {
        router.push('/auth')
      }
      else {
        return response.json()
      }
    })
    .then(console.log)
    .catch(console.log)

  return (
    <>
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </>
  )
}
