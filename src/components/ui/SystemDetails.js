import DetailsTableRow from "./tables/DetailsTableRow";
import DetailsTableHead from "./tables/DetailsTableHead";
import DetailsTableData from "./tables/DetailsTableData";

const SystemDetails = (props) => {
    return (
     <div class="relative overflow-x-auto max-w-sm">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
            <DetailsTableHead>Number of Planets</DetailsTableHead>
            <DetailsTableData>{props.system.planetCount}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Number of Moons</DetailsTableHead>
            <DetailsTableData>{props.system.moonCount}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Number of Outposts</DetailsTableHead>
            <DetailsTableData>{props.system.outpostCount}</DetailsTableData>
          </DetailsTableRow>
        </tbody>
      </table>
    </div>
  );
};

export default SystemDetails;
