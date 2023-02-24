import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "../api/supabase";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import LoginWrapper from "@/components/wrappers/LoginWrapper";
import Heading from "@/components/ui/Heading";

const Account = () => {
  const session = useSession();

  async function getProfile() {
    try {
      setLoading(true);

      const user = supabase.auth.user();
      const { data, error, status } = await supabase
        .from("profiles")
        .select()
        .eq("id", user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
      return data;
    } finally {
      setLoading(false);
    }
  }

    async function updateUser({ newEmail }) {
      const { data, error } = await supabase.auth.updateUser({
        email: 'mj.cuello@epygi.com'})
      }

  return (
    <div>
      {!session ? (
        <ContentWrapper>
          <LoginWrapper>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
                socialLayout="horizontal"
                socialButtonSize="xlarge"
                socialColors="true"
                socialButtonStyle="outline"
                socail 
            />
          </LoginWrapper>
        </ContentWrapper>
      ) : (
        <ContentWrapper>
          <Heading>My Account</Heading>
          <ContentWrapper>
            <div className="grid-cols-1">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                email
              </label>
              <div className="text-lg mb-8">{session.user.email}</div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pro?
              </label>
            </div>
          </ContentWrapper>
        </ContentWrapper>
      )}
    </div>
  );
};

export default Account;
