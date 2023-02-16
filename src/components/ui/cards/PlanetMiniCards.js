import Link from "next/link";

const PlanetMiniCard = (props) => {
  return (
    <Link
      href={{
        pathname: "/locations/[systemID]/[planetID]",
        query: {
          systemID: props.planet.systemSlug,
          planetID: props.planet.planetSlug,
        },
      }}
    >
      <div class="max-w-[8rem] min-w-[8rem] sm:max-w-[8rem] sm:min-w-[8rem] md:max-w-[17rem] md:min-w-[17rem] snap-start height-[20rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <img
          max-width="100%"
          class="rounded-t-lg"
          src="/img/sys_holder.png"
          alt={props.planet.name}
        />

        <div class="p-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {props.planet.name}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default PlanetMiniCard;
