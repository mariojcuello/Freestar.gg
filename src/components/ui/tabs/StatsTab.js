import MoonDetails from "@/components/data/locationStats/MoonStats";
import PlanetDetails from "@/components/data/locationStats/PlanetStats";

const {
  default: SystemDetails,
} = require("@/components/data/locationStats/SystemStats");

const StatsTab = (props) => {
  if (props.location.type == "system") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <SystemDetails system={props.location}/>
      </div>
    );
  }

  if (props.location.type == "planet") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <PlanetDetails planet={props.location}/>
      </div>
    );
  }

  if (props.location.type == "moon") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <MoonDetails moon={props.location}/>
      </div>
    );
  }

  if (props.location.type == "outpost") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <p>Outpost</p>
      </div>
    );
  }
};

export default StatsTab;
