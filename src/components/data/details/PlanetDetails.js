import DetailsTableRow from "../tables/DetailsTableRow";
import DetailsTableHead from "../tables/DetailsTableHead";
import DetailsTableData from "../tables/DetailsTableData";

const PlanetDetails = (props) => {
    return (
     <div class="relative overflow-x-auto max-w-sm">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <DetailsTableRow>
            <DetailsTableHead>Type</DetailsTableHead>
            <DetailsTableData>{props.planet.type}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Gravity</DetailsTableHead>
            <DetailsTableData>{props.planet.gravity}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Temperature</DetailsTableHead>
            <DetailsTableData>{props.planet.temperature}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Atmosphere</DetailsTableHead>
            <DetailsTableData>{props.planet.atmosphere}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Magnetosphere</DetailsTableHead>
            <DetailsTableData>{props.planet.magnetosphere}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Fauna</DetailsTableHead>
            <DetailsTableData>{props.planet.fauna}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Flora</DetailsTableHead>
            <DetailsTableData>{props.planet.flora}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Water</DetailsTableHead>
            <DetailsTableData>{props.planet.water}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Moons</DetailsTableHead>
            <DetailsTableData>{props.planet.moonCount}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Outposts</DetailsTableHead>
            <DetailsTableData>{props.planet.outpostCount}</DetailsTableData>
          </DetailsTableRow>
        </tbody>
      </table>
    </div>
  );
};

export default PlanetDetails;
