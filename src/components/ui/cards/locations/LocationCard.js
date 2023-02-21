import LocationCardMoon from "./LocationCardMoon";
import LocationCardOutpost from "./LocationCardOutpost";
import LocationCardPlanet from "./LocationCardPlanet";
import LocationCardTitle from "./LocationCardTitle";
import LocationCardLink from "./LocationCardLink";

const LocationCard = (props) => {
  return (
    <LocationCardLink location = {props.location}>
      <LocationCardTitle>{props.location.name}</LocationCardTitle>
      <img
        alt="Home"
        src="/img/sys_holder.png"
        class="h-50 w-full rounded-md object-cover"
      />
      <div class="mt-3 flex items-center gap-4 text-xs justify-evenly">
        <LocationCardPlanet location = {props.location}></LocationCardPlanet>
        <LocationCardMoon location = {props.location}></LocationCardMoon>
        <LocationCardOutpost location = {props.location}></LocationCardOutpost>
      </div>
    </LocationCardLink>
  );
};

export default LocationCard;
