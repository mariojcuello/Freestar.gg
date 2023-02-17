import LocationCardDetails from "./LocationCardDetails";

const LocationCardOutpost = (props) => {
  if (props.location.outpostCount >= 0) {
    return (
      <LocationCardDetails>
        <img src="/svg/base.svg" class="h-7 w-7 text-indigo-700" />
        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500 text-sm ">Outposts</p>
          <p class="font-medium">{props.location.outpostCount}</p>
        </div>
      </LocationCardDetails>
    );
  } else return null;
};

export default LocationCardOutpost;
