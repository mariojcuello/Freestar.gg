import "@/styles/globals.css";
import Navbar from "../components/ui/Navbar.js";
import Search from "../components/ui/Search.js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./api/supabase.js";

export default function App({ Component, pageProps }) {
  

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionContextProvider>
  );
}
