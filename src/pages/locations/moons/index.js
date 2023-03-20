import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import SortingLocationTable from "@/components/data/locationsTable/SortingLocationTable";
import { getAllMoons, getAllPlanets, getAllSystems } from "@/pages/api/locations";

const MoonHome = (props) => {
  const columns = [
    {
      accessor: "name",
      label: "Name",
      format: (value) => (
        <div className="text-lg font-bold text-slate-300">{value}</div>
      ),
    },
    { accessor: "planet", label: "Planet" },
    {accessor: "system", label: "System"},
    { accessor: "outpostCount", label: "Outposts" },
    { accessor: "fauna", label: "Fauna" },
    { accessor: "flora", label: "Flora" },
    { accessor: "faction", label: "Faction" },
    {
      accessor: "locationSlug",
      label: "Link",
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
    <MainWrapper>
      <Heading>Moons</Heading>
      <ContentWrapper>
        <SortingLocationTable
          columns={columns}
          rows={props.moons}
        ></SortingLocationTable>
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticProps() {
  const { data: moons } = await getAllMoons();

  return {
    props: {
      moons,
    },
  };
}

export default MoonHome;
