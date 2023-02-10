import {useRouter} from 'next/router'
import Chat from '../../components/Chat.js'

export default function UserChat() {
  const { userName } = useRouter().query

  return (
    <>
      <Chat userName={userName} />
    </>
  )
}
