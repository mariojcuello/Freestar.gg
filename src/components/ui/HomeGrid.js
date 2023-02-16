import HomeGridCard from "./cards/HomeGridCard";

const HomeGrid = () => {
  const HOME_GRID_ITEMS = [
    {
      title: "Locations",
      description:
        "A list of all star systems, planets, moons, and outposts in the Starfield universe..",
      icon: "map",
      slug: "locations",
    },
    {
      title: "People",
      description:
        "Find out more and/or locate the different NPCs of the Starfield universe.",
      icon: "user",
      slug: "people",
    },
    {
      title: "Items",
      description: "Look up items and their stats",
      icon: "box",
      slug: "items",
    },
    {
      title: "Starship Builder",
      description: "Test and view starship builds.",
      icon: "rocket",
      slug: "starship-builder",
    },
    {
      title: "Starbase Builder",
      description: "Test and view starbase builds.",
      icon: "building",
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
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-3xl font-bold sm:text-4xl">Welcome to Freestar.gg</h2>
        <p class="mt-4 text-gray-300">
          This is my Starfield wiki primiliary for those devoted to supporters
          of the Freestar Collective.
        </p>
        {''}
        <p class="mt-4 text-gray-300">
          
          I am constantly updating this site with new information as it becomes
          available. If you would like to support me, please consider
          <a
            href="https://www.patreon.com/freestar"
            class="text-pink-500 hover:text-pink-400"
          >
            {" "}
            becoming a patron
          </a>
          . Otherwise, please enjoy your stay!
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {HOME_GRID_ITEMS.map((item) => (
          <HomeGridCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeGrid;
