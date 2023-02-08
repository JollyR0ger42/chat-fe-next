import '@/styles/globals.css'
import { UserProvider } from '../contexts/user.js'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />)     
    </UserProvider>
  )
}
