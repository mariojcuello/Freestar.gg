import HomeGrid from "@/components/ui/HomeGrid";
import Heading from "@/components/ui/Heading";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import HomeCardWrapper from "@/components/wrappers/HomeCardWrapper";
import MainWrapper from "@/components/wrappers/MainWrapper"
import HomeCards from "../components/ui/cards/HomeCards"

export default function Home() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <HomeGrid></HomeGrid>
      </ContentWrapper>
    </MainWrapper>
  );
}