"use client";
import { supabase } from "@/pages/api/supabase";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import Link from "next/link";
import MainWrapper from "@/components/wrappers/MainWrapper";
import Heading from "@/components/ui/Heading";
import CrumbsPlanet from "@/components/ui/breadcrumbs/CrumbsPlanet";
import ContentWrapper from "@/components/wrappers/ContentWrapper";
import PlanetDetails from "@/components/data/details/PlanetDetails";

const DEMO_PLANET = {
  name: "Earth",
  system: "Sol",
  planetSlug: "earth",
  systemSlug: "sol",
  mass: "10,000lb",
  temperature: "10,000K",
  magnitude: "10,000",
};

const Planet = (props) => {
  return (
    <MainWrapper>
      <CrumbsPlanet system={props.system} systemSlug={props.systemSlug} planet={props.name} planetSlug={props.planetSlug}></CrumbsPlanet>
      <ContentWrapper>
        <PlanetDetails planet={props} />
      </ContentWrapper>
    </MainWrapper>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          systemID: "sol",
          planetID: "earth",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const planetID = params.planetID;
  const { data: planets } = await supabase
    .from("planets_test")
    .select("*")
    .eq("planetSlug", planetID);

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
    },
    revalidate: 3600,
  };
}

export default Planet;
