import Link from "next/link";

const CrumbsMoon = (props) => {
  return (
    <div className="max-w-[85rem] flex px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
      <Link
        href={{
          pathname: "/locations/[systemID]",
          query: { systemID: props.systemSlug },
        }}
      >
        <h1 className="md:text-4xl text-3xl  mb-4">{props.system}</h1>
      </Link>
      <h1 className="md:text-4xl text-3xl  mb-4"> &nbsp;-&nbsp;</h1>
      <Link
        href={{
          pathname: "/locations/[systemID]/[planetID]",
          query: { systemID: props.systemSlug, planetID: props.planetSlug },
        }}
      >
        <h1 className="md:text-4xl text-3xl font- mb-4">{props.planet}</h1>
      </Link>
      <h1 className="md:text-4xl text-3xl  mb-4"> &nbsp;-&nbsp;</h1>
      <h1 className="md:text-4xl text-3xl font-extrabold mb-4">{props.moon}</h1>
    </div>
  );
};

export default CrumbsMoon;
