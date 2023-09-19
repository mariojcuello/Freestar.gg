import HomeGridCard from "./HomeGridCard";

const HomeGrid = () => {
  const HOME_GRID_ITEMS = [
    {
      title: "Locations",
      description:
        "A list of all star systems, planets, moons, and outposts in the Starfield universe..",
      icon: "starsystem",
      slug: "locations",
    },
    {
      title: "Items (Coming Soon!)",
      description:
        "A list of all known items in the Starfield universe. Weapons, armor, modifications and more.",
      icon: "box",
      slug: "items",
    },
    {
      title: "Starship Builder (Coming Soon!)",
      description:
        "A playground for building starships. View resources needed to build and more.",
      icon: "rocket",
      slug: "starship-builder",
    },
    {
      title: "Starbase Builder (Coming Soon!)",
      description:
        "A playground for building starbases/colonies. View resources needed to build and more.",
      icon: "base",
      slug: "starbase-builder",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-5xl font-bold sm:text-4xl">Freestar.gg</h2>
        <p className="mt-4 text-2xl text-gray-300">A mini Starfield wiki.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {HOME_GRID_ITEMS.map((item) => (
          <HomeGridCard item={item} key={item.slug} />
        ))}
      </div>
    </div>
  );
};

export default HomeGrid;
