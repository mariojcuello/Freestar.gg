import DetailsTableRow from "../tables/DetailsTableRow";
import DetailsTableHead from "../tables/DetailsTableHead";
import DetailsTableData from "../tables/DetailsTableData";
import DetailsTableWrapper from "../tables/DetailsTableWrapper";

const SystemDetails = (props) => {
  return (
    <div className="flex">
        <table class="text-sm text-left text-gray-500 dark:text-gray-400 w-full md:w-1/5">
          <tbody>
            <DetailsTableRow>
              <DetailsTableHead>Spectral Class</DetailsTableHead>
              <DetailsTableData>{props.system.class}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Catalog ID</DetailsTableHead>
              <DetailsTableData>{props.system.catalog}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Temperature</DetailsTableHead>
              <DetailsTableData>{props.system.temperature}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Mass</DetailsTableHead>
              <DetailsTableData>{props.system.mass}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Radius</DetailsTableHead>
              <DetailsTableData>{props.system.radius}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Magnitude</DetailsTableHead>
              <DetailsTableData>{props.system.magnitude}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Planets</DetailsTableHead>
              <DetailsTableData>{props.system.planetCount}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Moons</DetailsTableHead>
              <DetailsTableData>{props.system.moonCount}</DetailsTableData>
            </DetailsTableRow>
            <DetailsTableRow>
              <DetailsTableHead>Outposts</DetailsTableHead>
              <DetailsTableData>{props.system.outpostCount}</DetailsTableData>
            </DetailsTableRow>
          </tbody>
        </table>
      <img
        src={`/img/systems/${props.system.systemSlug}.png`}
        alt={props.system.systemSlug}
        className="hidden md:flex ml-10 w-2/5 h-full rounded-xl"
      ></img>
    </div>
  );
};

export default SystemDetails;
