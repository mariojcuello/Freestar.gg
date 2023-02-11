"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/ui/MainWrapper";
import Heading from "@/components/ui/Heading";
import PlanetCards from "@/components/ui/PlanetCards";
import ContentWrapper from "@/components/ui/ContentWrapper";
import SystemDetails from '@/components/ui/SystemDetails'

const System = (props) => {
  return (
    <MainWrapper>
      <Heading>{props.name}</Heading>
      <ContentWrapper>
        <SystemDetails system={props} />
        <PlanetCards planets={props.planets} system={props.systemSlug} />
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
