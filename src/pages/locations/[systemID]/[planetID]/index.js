"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/wrappers/MainWrapper";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import PlanetTabMenu from "@/components/ui/tabs/planet/PlanetTabMenu";
import { getMoonByPlanetSlug, getPlanetBySlug } from "@/pages/api/locations";
import LocationCrumbs from "@/components/ui/breadcrumbs/LocationCrumbs";

const Planet = (props) => {
  return (
    <MainWrapper>
      <LocationCrumbs
        system={props.system}
        systemSlug={props.systemSlug}
        planet={props.name}
        planetSlug={props.planetSlug}
      ></LocationCrumbs>
      <ContentWrapper>
        <PlanetTabMenu planet={props}></PlanetTabMenu>
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticPaths() {
  const { data: systems } = await supabase.from("systems_test").select("*");
  const { data: planets } = await supabase.from("planets_test").select("*");

  const paths = planets.reduce((acc, planet) => {
    const system = systems.find((s) => s.slug === planet.systemSlug);
    if (system) {
      acc.push({
        params: { systemID: system.slug, planetID: planet.planetSlug },
      });
    }
    return acc;
  }, []);

  
  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const planetID = params.planetID;
  const { data: planets } = await getPlanetBySlug(planetID)
  const { data: moons } = await getMoonByPlanetSlug(planetID)

  return {
    props: {
      name: planets[0].name,
      planetSlug: planets[0].planetSlug,
      system: planets[0].system,
      systemSlug: planets[0].systemSlug,
      type: planets[0].type,
      gravity: planets[0].gravity,
      temperature: planets[0].temperature,
      atmosphere: planets[0].atmosphere,
      magnetosphere: planets[0].magnetosphere,
      fauna: planets[0].fauna,
      flora: planets[0].flora,
      water: planets[0].water,
      faction: planets[0].faction,
      moonCount: planets[0].moonCount,
      outpostCount: planets[0].outpostCount,
      moons: moons,
    },
    revalidate: 3600,
  };
}

export default Planet;
