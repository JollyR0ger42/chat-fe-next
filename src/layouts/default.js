import Header from '../components/Header/Header.js'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  )
}