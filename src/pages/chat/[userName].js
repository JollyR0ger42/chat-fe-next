import Router from 'next/router'
import Chat from '../../components/Chat.js'

export default function UserChat() {
  const { userName } = Router.query

  return (
    <>
      <Chat userName={userName} />
    </>
  )
}
