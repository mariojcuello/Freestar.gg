"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/wrappers/MainWrapper";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import { getMoonBySlug } from "@/pages/api/locations";
import MoonTabMenu from "@/components/ui/tabs/moon/MoonTabMenu";
import CrumbsMoon from "@/components/ui/breadcrumbs/CrumbsMoon";

const Moon = (props) => {
  return (
    <MainWrapper>
      <CrumbsMoon
        system={props.system}
        systemSlug={props.systemSlug}
        planet={props.planet}
        planetSlug={props.planetSlug}
        moon={props.name}
      />
      <ContentWrapper>
        <MoonTabMenu moon={props}></MoonTabMenu>
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticPaths() {
  // fetch all possible moons
  const { data: moons, error: moonsError } = await supabase
    .from("moons_test")
    .select("*");

  if (moonsError) {
    console.error(moonsError);
    return {
      notFound: true,
    };
  }

  // generate an array of paths for each moon
  const paths = moons.map((moon) => ({
    params: {
      systemID: moon.systemSlug.toString(),
      planetID: moon.planetSlug.toString(),
      moonID: moon.moonSlug.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const moonID = params.moonID;
  const { data: moons } = await getMoonBySlug(moonID);

  return {
    props: {
      name: moons[0].name,
      moonSlug: moons[0].moonSlug,
      planet: moons[0].planet,
      planetSlug: moons[0].planetSlug,
      system: moons[0].system,
      systemSlug: moons[0].systemSlug,
      type: moons[0].type,
      gravity: moons[0].gravity,
      temperature: moons[0].temperature,
      atmosphere: moons[0].atmosphere,
      magnetosphere: moons[0].magnetosphere,
      fauna: moons[0].fauna,
      flora: moons[0].flora,
      water: moons[0].water,
      faction: moons[0].faction,
      outpostCount: moons[0].outpostCount,
    },
    revalidate: 3600,
  };
}

export default Moon;
