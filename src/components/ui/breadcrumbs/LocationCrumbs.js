import Link from "next/link";

const LocationCrumbs = ({ systemSlug, system, planetSlug, planet, moonSlug, moon, outpost }) => {
  return (
    <div className="max-w-[85rem] flex px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
      <Link href={{ pathname: "/locations/[systemID]", query: { systemID: systemSlug } }}>
        <h1 className="md:text-4xl text-3xl mb-2">{system}</h1>
      </Link>
      {planet && (
        <>
          <h1 className="md:text-4xl text-3xl mx-2 mb-2">-</h1>
          <Link href={{ pathname: "/locations/[systemID]/[planetID]", query: { systemID: systemSlug, planetID: planetSlug } }}>
            <h1 className="md:text-4xl text-3xl font-extrabold mb-2">{planet}</h1>
          </Link>
        </>
      )}
      {moon && (
        <>
          <h1 className="md:text-4xl text-3xl mx-2 mb-2">-</h1>
          <Link href={{ pathname: "/locations/[systemID]/[planetID]/[moonID]", query: { systemID: systemSlug, planetID: planetSlug, moonID: moonSlug } }}>
            <h1 className="md:text-4xl text-3xl font-extrabold mb-2">{moon}</h1>
          </Link>
        </>
      )}
      {outpost && (
        <>
          <h1 className="md:text-4xl text-3xl mx-2 mb-2">-</h1>
          <h1 className="md:text-4xl text-3xl font-extrabold mb-2">{outpost}</h1>
        </>
      )}
    </div>
  );
};

export default LocationCrumbs;
