import Link from "next/link";
import LocationCardDetails from "./LocationCardDetails";
import LocationCardMoon from "./LocationCardMoon";
import LocationCardOutpost from "./LocationCardOutpost";
import LocationCardPlanet from "./LocationCardPlanet";
import LocationCardTitle from "./LocationCardTitle";

const LocationCard = (props) => {
  return (
    <Link
      href={{
        pathname: "locations/[systemID]",
        query: {
          systemID: props.system.systemSlug,
        },
      }}
      class=" rounded-lg p-3 shadow-xl transition bg-gray-800 dark:hover:bg-gray-700"
    >
      <LocationCardTitle>{props.system.name}</LocationCardTitle>
      <img
        alt="Home"
        src="/img/sys_holder.png"
        class="h-50 w-full rounded-md object-cover"
      />
      <div class="mt-3 flex items-center gap-4 text-xs justify-evenly">
        <LocationCardPlanet location = {props.system}></LocationCardPlanet>
        <LocationCardMoon location = {props.system}></LocationCardMoon>
        <LocationCardOutpost location = {props.system}></LocationCardOutpost>
      </div>
    </Link>
  );
};

export default LocationCard;
