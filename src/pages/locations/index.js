import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import LocationCardWrapper from "@/components/ui/cards/locations/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locations/LocationCard";

const POPULAR_SYSTEMS = [
  {
    name: "Sol",
    systemSlug: "sol",
    moonCount: 7,
    outpostCount: 5,
  },
  {
    name: "Alpha Centauri",
    systemSlug: "alpha-centauri",
    planetCount: 4,
    moonCount: 8,
    outpostCount: 0,
  },
  {
    name: "Narion",
    systemSlug: "proxima-centauri",
    planetCount: 2,
    moonCount: 0,
    outpostCount: 0,
  },
  {
    name: "Narion",
    systemSlug: "proxima-centauri",
    planetCount: 2,
    moonCount: 0,
    outpostCount: 0,
  },
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
      <LocationCardWrapper>
        {POPULAR_SYSTEMS.map((system) => (
          <LocationCard system={system} key={system.name} />
        ))}
      </LocationCardWrapper>
    </MainWrapper>
  );
};

export default SystemPage;
