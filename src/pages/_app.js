import '@/styles/globals.css'
import Navbar from './Navbar.js'
import Search from './Search.js'
import Navbar2 from './Navbar2.js'

export default function App({ Component, pageProps }) {
  
  return (
    <div>
    <Navbar/>
    <Search/>
    <Component {...pageProps} />  
    </div>
  
  )
}
