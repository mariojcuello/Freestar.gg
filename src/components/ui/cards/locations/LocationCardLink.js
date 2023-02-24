import Link from "next/link";

const LocationCardLink = (props) => {
  if (props.location.type == "system") {
    return (
      <Link
        href={{
          pathname: "/locations/[systemID]",
          query: {
            systemID: props.location.systemSlug,
          },
        }}
        className=" rounded-lg p-3 shadow-xl transition bg-gray-800 dark:hover:bg-gray-700"
      >
        {props.children}
      </Link>
    );
  }
  if (props.location.type == "planet") {
    return (
      <Link
        href={{
          pathname: "/locations/[systemID]/[planetID]",
          query: {
            systemID: props.location.systemSlug,
            planetID: props.location.planetSlug,
          },
        }}
        className=" rounded-lg p-3 shadow-xl transition bg-gray-800 dark:hover:bg-gray-700"
      >
        {props.children}
      </Link>
    );
  }
  if (props.location.type == "moon") {
    return (
      <Link
        href={{
          pathname: "/locations/[systemID]/[planetID]/[moonID]",
          query: {
            systemID: props.location.systemSlug,
            planetID: props.location.planetSlug,
            moonID: props.location.moonSlug,
          },
        }}
        className=" rounded-lg p-3 shadow-xl transition bg-gray-800 dark:hover:bg-gray-700"
      >
        {props.children}
      </Link>
    );
  }
  if (props.location.type == "outpost") {
    return (
      <Link
        href={{
          pathname: "/locations/[systemID]/[planetID]/[moonID]/[outpostID]",
          query: {
            systemID: props.location.systemSlug,
            planetID: props.location.planetSlug,
            moonID: props.location.moonSlug,
            outpostID: props.location.outpostSlug,
          },
        }}
        className=" rounded-lg p-3 shadow-xl transition bg-gray-800 dark:hover:bg-gray-700"
      >
        {props.children}
      </Link>
    );
  }
};

export default LocationCardLink;
