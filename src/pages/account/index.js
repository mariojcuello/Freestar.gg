import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "../api/supabase";

const Account = () => {

  const session = useSession();
  
  return (
    <div>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <p>Account page will go here.</p>
      )}
    </div>
  );
};

export default Account;
