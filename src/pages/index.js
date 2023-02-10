import Heading from "@/components/ui/Heading";
import MainWrapper from "@/components/ui/MainWrapper"
import HomeCards from "./HomeCards"
import Search from "./Search"

export default function Home() {
  return (
    <MainWrapper>
      <Heading>Freestar</Heading>
      <HomeCards/>
    </MainWrapper>
  );
}