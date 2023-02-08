import '@/styles/globals.css'
import Navbar from './navbar.js'

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />  
    </div>
  
  )
}
