import LocationCardMoon from "./LocationCardMoon";
import LocationCardOutpost from "./LocationCardOutpost";
import LocationCardPlanet from "./LocationCardPlanet";
import LocationCardTitle from "./LocationCardTitle";
import LocationCardLink from "./LocationCardLink";
import LocationCardImage from "./LocationCardImage";

const LocationCard = (props) => {
  return (
    <LocationCardLink location = {props.location}>
      <LocationCardTitle>{props.location.name}</LocationCardTitle>
      <LocationCardImage location={props.location}/>
      <div class="mt-3 flex items-center gap-3 text-xs justify-evenly">
        <LocationCardPlanet location = {props.location}></LocationCardPlanet>
        <LocationCardMoon location = {props.location}></LocationCardMoon>
        <LocationCardOutpost location = {props.location}></LocationCardOutpost>
      </div>
    </LocationCardLink>
  );
};

export default LocationCard;
