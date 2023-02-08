import Home from '../components/Home.js'
import Header from '../components/Header.js'

export default function _Home() {
  console.log('_Home', process.env.APP_URL)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}