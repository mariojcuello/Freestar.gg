import DetailsTableRow from "./DetailsTableRow";
import DetailsTableHead from "./DetailsTableHead";
import DetailsTableData from "./DetailsTableData";

const MoonStats = (props) => {
    return (
      <div className="flex">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-full md:w-1/5">
        <tbody>
          <DetailsTableRow>
            <DetailsTableHead>Type</DetailsTableHead>
            <DetailsTableData>{props.moon.type}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Gravity</DetailsTableHead>
            <DetailsTableData>{props.moon.gravity}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Temperature</DetailsTableHead>
            <DetailsTableData>{props.moon.temperature}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Atmosphere</DetailsTableHead>
            <DetailsTableData>{props.moon.atmosphere}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Magnetosphere</DetailsTableHead>
            <DetailsTableData>{props.moon.magnetosphere}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Fauna</DetailsTableHead>
            <DetailsTableData>{props.moon.fauna}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Flora</DetailsTableHead>
            <DetailsTableData>{props.moon.flora}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Water</DetailsTableHead>
            <DetailsTableData>{props.moon.water}</DetailsTableData>
          </DetailsTableRow>
          <DetailsTableRow>
            <DetailsTableHead>Outposts</DetailsTableHead>
            <DetailsTableData>{props.moon.outpostCount}</DetailsTableData>
          </DetailsTableRow>
        </tbody>
      </table>
      <img src={`/img/moons/${props.moon.moonSlug}.png`}></img>
    </div>
  );
};

export default MoonStats;
