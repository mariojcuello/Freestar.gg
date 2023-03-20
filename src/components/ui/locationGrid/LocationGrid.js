import LocationGridCard from "./LocationGridCard";

const LocationGrid = () => {
  const LOCATION_GRID_ITEMS = [
    {
      title: "Systems",
      icon: "starsystem",
      slug: "/locations/systems",
    },
    {
      title: "Planets",
      icon: "ring_planet",
      slug: "/locations/planets",
    },
    {
      title: "Moons",
      icon: "moon",
      slug: "/locations/moons",
    },
    {
      title: "Outposts",
      icon: "base",
      slug: "/locations/outposts",
    },
  ];
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        {LOCATION_GRID_ITEMS.map((item) => (
          <LocationGridCard item={item} key={item.slug} />
        ))}
      </div>
    </div>
  );
};

export default LocationGrid;
