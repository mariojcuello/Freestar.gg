import Link from "next/link";

const SystemMiniCard = (props) => {
  return (
    <Link
      href={{
        pathname: "/locations/[systemID]",
        query: {
          systemID: props.system.systemSlug,
        },
      }}
    >
      <div class="max-w-[10rem] min-w-[10rem] md:max-w-[17rem] md:min-w-[17rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <img
          max-width="100%"
          class="rounded-t-lg"
          src="/img/sys_holder.png"
          alt={props.system.name}
        />

        <div class="p-2">
          <h5 class="mb-2 md:text-2xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {props.system.name}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default SystemMiniCard;
