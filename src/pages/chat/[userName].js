import Router from 'next/router'

export default function Chat() {
  const { userName } = Router.query

  return <div>Chat {userName}</div>
}
