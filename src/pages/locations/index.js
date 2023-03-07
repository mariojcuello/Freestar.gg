import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locationCard/LocationCard";
import Search from "@/components/ui/search/Search";
import SearchModal from "@/components/ui/search/SearchModal";

const POPULAR_SYSTEMS = [
  {
    name: "Sol",
    systemSlug: "sol",
    planetCount: 4,
    moonCount: 7,
    outpostCount: 5,
    type: "system",
  },
  {
    name: "Alpha Centauri",
    systemSlug: "alpha-centauri",
    planetCount: 4,
    moonCount: 8,
    outpostCount: 3,
    type: "system",
  },
  {
    name: "Narion",
    systemSlug: "proxima-centauri",
    planetCount: 2,
    moonCount: 0,
    outpostCount: 0,
    type: "system",
  },
  {
    name: "Volii",
    systemSlug: "volii",
    planetCount: 1,
    moonCount: 3,
    outpostCount: 1,
    type: "system",
  },
];

const SystemPage = () => {
  return (
    <MainWrapper>
      <Heading>Popular Systems </Heading>
      <LocationCardWrapper>
        {POPULAR_SYSTEMS.map((system) => (
          <LocationCard location={system} key={system.name} />
        ))}
      </LocationCardWrapper>
    </MainWrapper>
  );
};

export default SystemPage;
