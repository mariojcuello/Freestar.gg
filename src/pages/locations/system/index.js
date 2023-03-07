import MainWrapper from "@/components/wrappers/MainWrapper";
import Search from "@/components/ui/search/Search";
import Heading from "@/components/ui/Heading";
import { supabase } from "@/pages/api/supabase";
import Link from "next/link";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import SortingLocationTable from "@/components/data/locationsTable/SortingLocationTable";

const SystemHome = (props) => {
  const columns = [
    {
      accessor: "name",
      label: "Name",
      format: (value) => (
        <div className="text-lg font-bold text-slate-300">{value}</div>
      ),
    },
    { accessor: "planetCount", label: "Planets" },
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
      accessor: "slug",
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
      <Search></Search>
      <Heading>Star Systems </Heading>
      <ContentWrapper>
        <SortingLocationTable
          columns={columns}
          rows={props.systems}
        ></SortingLocationTable>
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticProps() {
  const { data: systems } = await supabase.from("systems_test").select("*");

  return {
    props: {
      systems,
    },
  };
}

export default SystemHome;
