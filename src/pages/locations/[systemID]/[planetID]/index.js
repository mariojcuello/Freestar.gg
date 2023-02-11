"use client";
import { supabase } from "@/pages/api/supabase";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import Link from "next/link";
import MainWrapper from "@/components/ui/MainWrapper";
import Heading from "@/components/ui/Heading";

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
      <Heading>{DEMO_PLANET.name}</Heading>
      <h2>
        Star System:
        <Link
          href={{
            pathname: "/locations/[systemID]",
            query: { systemID: props.systemSlug },
          }}
        >
          {DEMO_PLANET.system}
        </Link>
      </h2>
      <p>Mass: {DEMO_PLANET.mass}</p>
      <p>Temperature: {DEMO_PLANET.temperature}</p>
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
      mass: planets[0].mass,
    },
    revalidate: 3600,
  };
}

export default Planet;
