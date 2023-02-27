"use client";
import { supabase } from "@/pages/api/supabase";
import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import SystemTabMenu from "@/components/ui/tabs/system/SystemTabMenu";

const System = (props) => {
  return (
    <MainWrapper>
      <Heading>{props.name}</Heading>
      <ContentWrapper>
        <SystemTabMenu system={props} />
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticPaths() {
  const { data: systems } = await supabase.from("systems_test").select("*");

  const systemIDs = systems.map((system) => system.slug);

  const validPaths = systemIDs.map((systemID) => ({
    params: { systemID: systemID },
  }));

  return {
    fallback: false,
    paths: validPaths,
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
  const { data: moons } = await supabase
    .from("moons_test")
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
      moons: moons,
      type: system[0].type,
      description: system[0].description,
    },
  };
}

export default System;
