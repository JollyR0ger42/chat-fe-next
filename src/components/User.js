import Link from 'next/link'

export default function User(props) {
  return <div>
          <Link href={'/chat/' + encodeURIComponent(props.userName)}>{props.userName}</Link>
        </div>
}
