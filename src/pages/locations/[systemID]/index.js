"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import PlanetMiniCard from "@/components/ui/cards/PlanetMiniCards";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import SystemDetails from "@/components/data/details/SystemDetails";
import MiniCardsWrapper from "@/components/wrappers/MiniCardsWrapper";

const System = (props) => {
  return (
    <MainWrapper>
      <Heading>{props.name}</Heading>
      <ContentWrapper>
        <SystemDetails system={props} />
        <MiniCardsWrapper>
          {props.planets.map((planet) => (
            <PlanetMiniCard planet={planet} />
          ))}
        </MiniCardsWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};

//need to add all valid paths
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { systemID: "sol" } }],
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const systemID = params.systemID;

  const { data: system } = await supabase
    .from("systems_test")
    .select("*")
    .eq("slug", systemID);
  const { data: planets } = await supabase
    .from("planets_test")
    .select("*")
    .eq("systemSlug", systemID);

  return {
    props: {
      name: system[0].name,
      systemSlug: system[0].slug,
      catalog: system[0].catalog,
      level: system[0].level,
      class: system[0].class,
      radius: system[0].radius,
      mass: system[0].mass,
      temperature: system[0].temperature,
      magnitude: system[0].magnitude,
      planetCount: system[0].planetCount,
      moonCount: system[0].moonCount,
      outpostCount: system[0].outpostCount,
      planets: planets,
    },
  };
}

export default System;
