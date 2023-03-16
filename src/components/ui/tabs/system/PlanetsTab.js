import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locationCard/LocationCard";
import Link from "next/link";
import SortingLocationTable from "@/components/data/locationsTable/SortingLocationTable";

const PlanetsTab = (props) => {
  const columns = [
    {
      accessor: "name",
      label: "Name",
      format: (value) => (
        <div className="text-lg font-bold text-slate-300">{value}</div>
      ),
    },
    { accessor: "moonCount", label: "Moons" },
    { accessor: "outpostCount", label: "Outposts" },
    {
      accessor: "water",
      label: "Water",
    },
    {
      accessor: "flora",
      label: "Flora",
    },
    {
      accessor: "fauna",
      label: "Fauna",
    },
    { accessor: "faction", label: "Faction" },
    {
      accessor: "locationSlug",
      label: "",
      format: (value) => (
        <button
          type="button"
          class="text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2 mr-2 bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-blue-800"
        >
          <Link href={`/locations/${value}`}>Details</Link>
        </button>
      ),
    },
  ];
  return (
    <div className={props.activeTab == "planets" ? "block" : "hidden"}>
      <div className="hidden md:block mx-auto">
        <SortingLocationTable
          columns={columns}
          rows={props.system.planets}
          className="hidden md:block"
        ></SortingLocationTable>
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
