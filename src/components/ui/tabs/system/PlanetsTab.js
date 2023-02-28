import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locationCard/LocationCard";
import PlanetTable from "@/components/data/locationsTable/planetTable";
import Link from "next/link";

const PlanetsTab = (props) => {
  const columns = [
    { accessor: "name", label: "Name" },
    { accessor: "moonCount", label: "Moons" },
    { accessor: "outpostCount", label: "Outposts" },
    {
      accessor: "flora",
      label: "Flora",
      format: (value) => (value ? "✔" : "✘"),
    },
    {
      accessor: "fauna",
      label: "Fauna",
      format: (value) => (value ? "✔" : "✘"),
    },
    { accessor: "faction", label: "Faction" },
    {
      accessor: "planetSlug",
      label: "Link",
      format: (value) => (
        <Link href={`/locations/${props.system.systemSlug}/${value}`}>
          Link
        </Link>
      ),
    },
  ];
  return (
    <div className={props.activeTab == "planets" ? "block" : "hidden"}>
      <div className="hidden md:block">
        <PlanetTable
          columns={columns}
          rows={props.system.planets}
          className="hidden md:block"
        ></PlanetTable>
      </div>
      <div className="block md:hidden">
        <LocationCardWrapper>
          {props.system.planets.map((planet) => (
            <LocationCard location={planet} key={planet.planetSlug} />
          ))}
        </LocationCardWrapper>
      </div>
    </div>
  );
};

export default PlanetsTab;
