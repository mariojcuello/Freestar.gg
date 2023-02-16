import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import SystemMiniCard from "@/components/ui/cards/SystemMiniCard";
import MiniCardsWrapper from "@/components/wrappers/MiniCardsWrapper";

const POPULAR_SYSTEMS = [
  { name: "Sol", systemSlug: "sol" },
  { name: "Alpha Centauri", systemSlug: "alpha-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
];

const POPULAR_PLANETS = [
  { name: "Sol", systemSlug: "sol" },
  { name: "Alpha Centauri", systemSlug: "alpha-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
];

const POPULAR_MOONS = [
  { name: "Sol", systemSlug: "sol" },
  { name: "Alpha Centauri", systemSlug: "alpha-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
  { name: "Narion", systemSlug: "proxima-centauri" },
];

const SystemPage = () => {
  return (
    <MainWrapper>
      <Heading>Popular Systems</Heading>
      <MiniCardsWrapper>
        {POPULAR_SYSTEMS.map((system) => (
          <SystemMiniCard system={system} key={system.name} />
        ))}
      </MiniCardsWrapper>
    </MainWrapper>
  );
};

export default SystemPage;
