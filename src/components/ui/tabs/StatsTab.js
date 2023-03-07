import SystemDesciption from "@/components/data/locationDescription/SystemDescription";
import SystemStats from "@/components/data/locationStats/SystemStats";
import MoonStats from "@/components/data/locationStats/MoonStats";
import PlanetStats from "@/components/data/locationStats/PlanetStats";

const StatsTab = (props) => {
  if (props.location.type == "system") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <div className="grid-cols-1 md:grid-cols-2">
          <SystemStats system={props.location} />
          <SystemDesciption system={props.location} />
        </div>
      </div>
    );
  }

  if (props.location.type == "planet") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <PlanetStats planet={props.location} />
      </div>
    );
  }

  if (props.location.type == "moon") {
    return (
      <div className={props.activeTab == "stats" ? "block" : "hidden"}>
        <MoonStats moon={props.location} />
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
