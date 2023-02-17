import HomeGrid from "@/components/ui/HomeGrid";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import MainWrapper from "@/components/wrappers/MainWrapper"

export default function Home() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <HomeGrid></HomeGrid>
      </ContentWrapper>
    </MainWrapper>
  );
}