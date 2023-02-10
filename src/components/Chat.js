
import { useState } from 'react'

export default function Chat(props) {
  
  const [message, setMessage] = useState('')

  const onMessageChange = () => {
  }

  const onSend = () => {
  }

  return (
    <form>
      <h4>{props.userName}</h4>
      <label>
        Message:
        <input type="text" value={message} onChange={onMessageChange} />
      </label>
      <button onClick={onSend}>Send</button>
    </form>
  )
}
