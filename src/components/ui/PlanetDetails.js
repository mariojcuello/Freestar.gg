import DetailsTableRow from "./tables/DetailsTableRow";
import DetailsTableHead from "./tables/DetailsTableHead";
import DetailsTableData from "./tables/DetailsTableData";

const PlanetDetails = (props) => {
    return (
     <div class="relative overflow-x-auto max-w-sm">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <DetailsTableRow>
            <DetailsTableHead>Spectral Class</DetailsTableHead>
            <DetailsTableData>{props.planet.class}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Catalog ID</DetailsTableHead>
            <DetailsTableData>{props.planet.catalog}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Temperature</DetailsTableHead>
            <DetailsTableData>{props.planet.temperature}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Mass</DetailsTableHead>
            <DetailsTableData>{props.planet.mass}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Radius</DetailsTableHead>
            <DetailsTableData>{props.planet.radius}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Magnitude</DetailsTableHead>
            <DetailsTableData>{props.planet.magnitude}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Number of Moons</DetailsTableHead>
            <DetailsTableData>{props.planet.moonCount}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Number of Outposts</DetailsTableHead>
            <DetailsTableData>{props.planet.outpostCount}</DetailsTableData>
          </DetailsTableRow>
        </tbody>
      </table>
    </div>
  );
};

export default PlanetDetails;
