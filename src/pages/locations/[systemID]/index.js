"use client";
import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import SystemTabMenu from "@/components/ui/tabs/system/SystemTabMenu";
import { getPlanetsBySystemSlug, getSystemBySlug, getMoonsBySystemSlug, getAllSystems } from "@/pages/api/locations";

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
  const { data: systems } = await getAllSystems();

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

  const { data: system } = await getSystemBySlug(systemID)
  const { data: planets } = await getPlanetsBySystemSlug(systemID)
  const { data: moons } = await getMoonsBySystemSlug(systemID)

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
    revalidate: 3600,
  };
}

export default System;
