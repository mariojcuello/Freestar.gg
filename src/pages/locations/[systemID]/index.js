"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/ui/MainWrapper";
import Heading from "@/components/ui/Heading";
import PlanetCards from "@/components/ui/PlanetCards";

const SystemDetails = (props) => {
  return (
    <MainWrapper>
      <Heading>{props.name}</Heading>
      <p>Mass: {props.mass}</p>
        <p>Temperature: {props.temperature}</p>
        <p>Magnitude: {props.magnitude}</p>
        <PlanetCards planets={props.planets} system={props.systemSlug} />
    </MainWrapper>
  );
};

//need to add all valid paths
export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            { params: { systemID: 'sol'}},
        ],
    }
}

export async function getStaticProps(context) {

  const { params } = context
  const systemID = params.systemID

  const { data: system } = await supabase.from('systems_test').select('*').eq('slug', systemID)
  const { data: planets } = await supabase.from('planets_test').select('*').eq('systemSlug', systemID)

  return {
      props: {
        name: system[0].name,
        systemSlug: system[0].slug,
        mass: system[0].mass,
        temperature: system[0].temperature,
        magnitude: system[0].magnitude,
        planets: planets
      }
  }
}

export default SystemDetails;
