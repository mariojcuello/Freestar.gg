import DetailsTableRow from "./DetailsTableRow";
import DetailsTableHead from "./DetailsTableHead";
import DetailsTableData from "./DetailsTableData";

const PlanetStats = (props) => {
    return (
      <div className="flex">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-full md:w-1/5">
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
      <img
        src={`/img/planets/${props.planet.planetSlug}.png`}
        alt={props.planet.planetSlug}
        className="hidden md:flex ml-10 w-2/5 h-full rounded-xl"
      ></img>    </div>
  );
};

export default PlanetStats;
