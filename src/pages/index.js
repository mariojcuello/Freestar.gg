import HomeGrid from "@/components/ui/HomeGrid";
import MainWrapper from "@/components/wrappers/MainWrapper";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <MainWrapper>
        <HomeGrid></HomeGrid>
    </MainWrapper>
  );
}
