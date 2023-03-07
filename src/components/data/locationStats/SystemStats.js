import DetailsTableRow from "./DetailsTableRow";
import DetailsTableHead from "./DetailsTableHead";
import DetailsTableData from "./DetailsTableData";

const SystemStats = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <img
        src={`/img/systems/${props.system.systemSlug}.png`}
        alt={props.system.systemSlug}
        className="grid-item flex mb-5 w-[90%] rounded-xl place-self-center"
      ></img>
      <table className=" text-sm text-left text-gray-500 dark:text-gray-400 w-[90%] place-self-center mb-5 ">
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
      
    </div>
  );
};

export default SystemStats;
