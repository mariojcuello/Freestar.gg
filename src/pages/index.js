import Heading from "@/components/ui/Heading";
import MainWrapper from "@/components/ui/MainWrapper"
import HomeCards from "../components/ui/HomeCards"
import Search from "../components/ui/Search"

export default function Home() {
  return (
    <MainWrapper>
      <Heading>Freestar</Heading>
      <HomeCards/>
    </MainWrapper>
  );
}