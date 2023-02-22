import LocationCardWrapper from "@/components/ui/cards/locations/LocationCardWrapper";
import LocationCard from "@/components/ui/cards/locations/LocationCard";



const PlanetsTab = (props) => {
  console.log(props.activeTab)
    return (
      <div className={
        props.activeTab == "planets" ? "block" : "hidden"
      }>
        <LocationCardWrapper>
          {props.system.planets.map((planet) => (
            <LocationCard location={planet} />
          ))}
        </LocationCardWrapper>
        </div>
    )
}

export default PlanetsTab