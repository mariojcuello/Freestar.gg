import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import LocationCardWrapper from "@/components/ui/cards/locations/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locations/LocationCard";
import Search from "@/components/ui/Search";

const POPULAR_SYSTEMS = [
  {
    name: "Sol",
    systemSlug: "sol",
    planetCount: 4,
    moonCount: 7,
    outpostCount: 5,
    type: "system"
  },
  {
    name: "Earth",
    systemSlug: "sol",
    planetSlug: 'earth',
    planetCount: 4,
    moonCount: 8,
    outpostCount: 0,
    type: "planet"
  },
  {
    name: "Narion",
    systemSlug: "proxima-centauri",
    planetCount: 2,
    moonCount: 0,
    outpostCount: 0,
    type: "system"
  },
  {
    name: "Narion",
    systemSlug: "proxima-centauri",
    planetCount: 2,
    moonCount: 0,
    outpostCount: 0,
    type: "system"
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
      <Search></Search><Heading>Popular Systems </Heading>
      <LocationCardWrapper>
        {POPULAR_SYSTEMS.map((system) => (
          <LocationCard location={system} key={system.name} />
        ))}
      </LocationCardWrapper>
    </MainWrapper>
  );
};

export default SystemPage;
