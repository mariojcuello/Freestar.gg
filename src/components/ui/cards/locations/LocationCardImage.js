const LocationCardImage = (props) => {
  if (props.location.type == "system") {
    return (
      <img
        src={`/img/systems/${props.location.systemSlug}.png`}
        alt={props.location.name}
        className="h-50 w-full rounded-md object-cover"
      />
    );
  }
  if (props.location.type == "planet") {
    return (
      <img
        src={`/img/planets/${props.location.planetSlug}.png`}
        alt={props.location.name}
        className="h-50 w-full rounded-md object-cover"
      />
    );
  }
  if (props.location.type == "moon") {
    return (
      <img
        src={`/img/systems/${props.location.moonSlug}.png`}
        alt={props.location.name}
        className="h-50 w-full rounded-md object-cover"
      />
    );
  }
  if (props.location.type == "outpost") {
    return (
      <img
        src={`/img/systems/${props.location.outpostSlug}.png`}
        alt={props.location.name}
        className="h-50 w-full rounded-md object-cover"
      />
    );
  }
};

export default LocationCardImage;
