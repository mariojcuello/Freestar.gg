import HomeGrid from "@/components/ui/HomeGrid";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import MainWrapper from "@/components/wrappers/MainWrapper"
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {

  const session = useSession()
  const supabase = useSupabaseClient()
  
  return (
    <MainWrapper>
      <ContentWrapper>
        <HomeGrid></HomeGrid>
      </ContentWrapper>
    </MainWrapper>
  );
}