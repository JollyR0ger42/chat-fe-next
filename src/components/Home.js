import { useState, useEffect } from 'react'

export default function Home() {
  const [state, setState] = useState('')

  useEffect(() => {
    fetch(process.env.APP_URL + '/')
      .then((response) => response.text())
      .then((data) => setState(data))
  }, [])

  useEffect(() => console.log('useEffect2:', state), [state])

  return (
    <div>Home: {state}</div>
  )
}
