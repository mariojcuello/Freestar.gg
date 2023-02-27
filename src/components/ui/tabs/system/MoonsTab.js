import LocationCardWrapper from "@/components/ui/cards/locationCard/LocationCardWrapper";
import LocationCard from "../../cards/locationCard/LocationCard";

const MoonsTab = (props) => {
  // Create an array of planet objects that have at least one moon
  const planetsWithMoons = props.system.planets.filter((planet) => {
    return props.system.moons.some(
      (moon) => moon.planetSlug === planet.planetSlug
    );
  });

  // Render a list of planets with their associated moons
  return (
    <div className={props.activeTab == "moons" ? "block" : "hidden"}>
      {planetsWithMoons.map((planet) => {
        // Filter the moons array to only include moons that belong to the current planet
        const filteredMoons = props.system.moons.filter(
          (moon) => moon.planetSlug === planet.planetSlug
        );

        return (
          <div key={planet.planetSlug}>
            <div className="mt-5 text-3xl">{planet.name}</div>
            <LocationCardWrapper>
              {filteredMoons.map((moon) => (
                <LocationCard key={moon.name} location={moon} className=" w-[75%]"/>
              ))}
            </LocationCardWrapper>
          </div>
        );
      })}
    </div>
  );
};

// const MoonsTab = (props) => {
//   for (let i = 0; i <= props.system.planets.length; i++) {
//     console.log(props.system.planets[i].planetSlug);
//     console.log(props.system.moons);
//     if (props.system.planets[i].moonCount > 0) {
//       const filteredMoons = props.system.moons.filter(
//         (moon) => moon.planetSlug === props.system.planets[i].planetSlug
//       );
//       console.log(filteredMoons);
//       return (
//         <div className={props.activeTab == "moons" ? "block" : "hidden"}>
//           {props.system.planets.map((planet) => (
//             <div>
//               <div className="mt-5 text-3xl">{planet.name}</div>

//               <LocationCardWrapper>
//                 {filteredMoons.map((moon) => (
//                   <LocationCard location={moon} key={moon.moonSlug} />
//                 ))}
//               </LocationCardWrapper>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }

export default MoonsTab;
