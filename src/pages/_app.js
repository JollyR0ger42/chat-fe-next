import '@/styles/globals.css'
import { UserProvider } from '../contexts/user.js'
import Layout from '../layouts/default.js'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
