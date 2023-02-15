import Link from 'next/link'

export default function User(props) {
  return (
    <div>
      <Link style={{ color: '#fff' }} href={'/chat/' + encodeURIComponent(props.userName)}>{props.userName}</Link>
    </div>
  )
}
