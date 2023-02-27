import LocationCardDetails from "./LocationCardDetails";

const LocationCardMoon = (props) => {
  if (props.location.moonCount >= 0) {
    return (
      <LocationCardDetails>
        <img src="/svg/moon.svg" className="h-7 w-7 text-indigo-700" />
        <div className="mt-1.5 sm:ml-3 sm:mt-0">
          <p className="text-gray-500 text-sm ">Moons</p>
          <p className="font-medium">{props.location.moonCount}</p>
        </div>
      </LocationCardDetails>
    );
  } else return null;
};

export default LocationCardMoon;
