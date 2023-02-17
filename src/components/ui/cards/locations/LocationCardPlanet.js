import LocationCardDetails from "./LocationCardDetails";

const LocationCardPlanet = (props) => {
  if (props.location.planetCount >= 0) {
    return (
      <LocationCardDetails>
        <img src="/svg/ring_planet.svg" class="h-7 w-7 text-indigo-700" />
        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500 text-sm ">Planets</p>
          <p class="font-medium">{props.location.planetCount}</p>
        </div>
      </LocationCardDetails>
    );
  } else return null;
};

export default LocationCardPlanet;
