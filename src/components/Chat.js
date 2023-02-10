
import { useState } from 'react'

export default function Chat(props) {
  
  const [message, setMessage] = useState('Yo')

  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const onSend = () => {
    fetch(process.env.APP_URL + '/messages', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        message,
        receiver: props.userName
       })
    })
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
