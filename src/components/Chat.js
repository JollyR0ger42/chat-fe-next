
import { useState, useEffect } from 'react'
import Message from './Message.js'

export default function Chat(props) {

  const [message, setMessage] = useState('Yo')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (props.userName)
      fetchMessages()
  }, [props.userName])

  const onMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const fetchMessages = () => {
    fetch(process.env.APP_URL + '/messages/' + props.userName, { credentials: 'include' })
        .then(response => response.json())
        .then(data => setMessages(data || []))
  }

  const onSend = async (e) => {
    e.preventDefault()
    await fetch(process.env.APP_URL + '/messages', {
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
    fetchMessages()
  }

  return (
    <>
      <form>
        <h4>{props.userName}</h4>
        <label>
          Message:
          <input type="text" value={message} onChange={onMessageChange} />
        </label>
        <button onClick={onSend}>Send</button>
      </form>
      {messages.map((message, idx) => <Message key={idx} message={message.message} from={message.sender} />)}
    </>
  )
}
