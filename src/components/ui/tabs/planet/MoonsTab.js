import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "../../cards/locationCard/LocationCard";

const MoonsTab = (props) => {
  return (
    <div className={props.activeTab == "moons" ? "block" : "hidden"}>
      <LocationCardWrapper>
        {props.planet.moons.map((moon) => (
          <LocationCard location={moon} key={moon.moonSlug} />
        ))}
      </LocationCardWrapper>
    </div>
  );
};

export default MoonsTab;
