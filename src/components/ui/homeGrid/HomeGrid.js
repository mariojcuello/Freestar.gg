import HomeGridCard from "./HomeGridCard";
import Search from "../search/Search";

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
      title: "People",
      description:
        "Find out more and/or locate the different NPCs of the Starfield universe.",
      icon: "people",
      slug: "people",
    },
    {
      title: "Items",
      description: "A list of all known items in the Starfield universe. Weapons, armor, modifications and more.",
      icon: "box",
      slug: "items",
    },
    {
      title: "Starship Builder",
      description: "A playground for building starships. View resources needed to build and more.",
      icon: "rocket",
      slug: "starship-builder",
    },
    {
      title: "Starbase Builder",
      description: "A playground for building starbases/colonies. View resources needed to build and more.",
      icon: "base",
      slug: "starbase-builder",
    },
    {
      title: "Quests",
      description: "A list of all known quests in the Starfield universe.",
      icon: "scroll",
      slug: "quests",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-5xl font-bold sm:text-4xl">Freestar.gg</h2>
        <p className="mt-4 text-2xl text-gray-300">
          A mini Starfield wiki.
        </p>
        {''}
        <p className="mt-4 text-gray-300">
          
          I am constantly updating this site with new information as it becomes
          available. If you would like to support the project, please consider
          <a
            href="https://www.patreon.com/freestar"
            className="text-pink-500 hover:text-pink-400"
          >
            {" "}
            becoming a patron
          </a>
          . Otherwise, please enjoy your stay!
        </p>
      </div>
      <Search/>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {HOME_GRID_ITEMS.map((item) => (
          <HomeGridCard item={item} key={item.slug} />
        ))}
      </div>
    </div>
  );
};

export default HomeGrid;
