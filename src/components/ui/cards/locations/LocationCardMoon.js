import LocationCardDetails from "./LocationCardDetails";

const LocationCardMoon = (props) => {
  if (props.location.moonCount >= 0) {
    return (
      <LocationCardDetails>
        <img src="/svg/moon.svg" class="h-7 w-7 text-indigo-700" />
        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500 text-sm ">Moons</p>
          <p class="font-medium">{props.location.moonCount}</p>
        </div>
      </LocationCardDetails>
    );
  } else return null;
};

export default LocationCardMoon;
