import LocationCardDetails from "./LocationCardDetails";

const LocationCardOutpost = (props) => {
  if (props.location.outpostCount >= 0) {
    return (
      <LocationCardDetails>
        <img src="/svg/base.svg" className="h-7 w-7 text-indigo-700" />
        <div className="mt-1.5 sm:ml-3 sm:mt-0">
          <p className="text-gray-500 text-sm ">Outposts</p>
          <p className="font-medium">{props.location.outpostCount}</p>
        </div>
      </LocationCardDetails>
    );
  } else return null;
};

export default LocationCardOutpost;
