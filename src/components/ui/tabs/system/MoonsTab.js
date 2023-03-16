import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "../../cards/locationCard/LocationCard";
import Link from "next/link";
import SortingLocationTable from "@/components/data/locationsTable/SortingLocationTable";

const MoonsTab = (props) => {
  const columns = [
    {
      accessor: "name",
      label: "Name",
      format: (value) => (
        <div className="text-lg font-bold text-slate-300">{value}</div>
      ),
    },
    { accessor: "planet", label: "Planet" },
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
          <Link className="hover:white" href={`/locations/${value}`}>
            Details
          </Link>
        </button>
      ),
    },
  ];

  // Render a list of planets with their associated moons
  return (
    <div className={props.activeTab == "moons" ? "block" : "hidden"}>
      <div className="hidden md:block">
        <SortingLocationTable
          columns={columns}
          rows={props.system.moons}
          className="hidden md:block"
        ></SortingLocationTable>
      </div>
      <div className="block md:hidden">
        <LocationCardWrapper>
          {props.system.moons.map((moon) => (
            <LocationCard location={moon} key={moon.moonSlug} />
          ))}
        </LocationCardWrapper>
      </div>
    </div>
  );
};

export default MoonsTab;
