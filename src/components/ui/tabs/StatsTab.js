import PlanetDetails from "@/components/data/details/PlanetDetails";

const {
  default: SystemDetails,
} = require("@/components/data/details/SystemDetails");

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
        <p>Moon Stats</p>
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
