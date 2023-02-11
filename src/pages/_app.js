import "@/styles/globals.css";
import Navbar from "../components/ui/Navbar.js";
import Search from "../components/ui/Search.js";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Search />
      <Component {...pageProps} />
    </div>
  );
}
