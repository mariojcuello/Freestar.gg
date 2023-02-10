"use client";
import { supabase } from "@/pages/api/supabase";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import Link from "next/link";

const DEMO_SYSTEM = {
  name: "Sol",
  urlSlug: "sol",
  mass: "10,000lb",
  temperature: "10,000K",
  magnitude: "10,000",
  planets: [
    { name: "Earth", planetSlug: "earth", systemSlug: "sol" },
    { name: "Mars", planetSlug: "mars", systemSlug: "sol" },
    { name: "Jupiter", planetSlug: "jupiter", systemSlug: "sol" },
  ],
  resources: [
    { name: "Iron", urlSlug: "iron" },
    { name: "Copper", urlSlug: "copper" },
  ],
};

const SystemDetails = (props) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-[85rem] px-8 mt-9 mb-2 lg:px-8 lg:mt-14 mx-auto">
        <h1 className="md:text-4xl text-2xl font-bold">{DEMO_SYSTEM.name}</h1>
        <p>Mass: {DEMO_SYSTEM.mass}</p>
        <p>Temperature: {DEMO_SYSTEM.temperature}</p>
        {DEMO_SYSTEM.planets.map((planet) => (
          <Link
            href={{
              pathname: "/locations/[systemID]/[planetID]",
              query: {
                systemID: planet.systemSlug,
                planetID: planet.planetSlug,
              },
            }}
          >
            {planet.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

// export async function getStaticPaths(){
//     return {
//         fallback: false,
//         paths: [
//             { params: { systemID: 'sol'}},
//         ],
//     }
// }

// export async function getStaticProps(context) {
// //use getServerSideProps if you need access to the req and res objects

//     // const systemID = context.params.systemID
//     // console.log(systemID)

//     let { data } = await supabase.from('systems-test').select('*').eq('id', 1).single();

//     return {
//         props: {
//             systemData: {
//                 name: 'Sol',
//                 mass: '10,000lb',
//                 temperature: '10,000K'
//             }
//         },
//         revalidate: 3600
//     }
// }

export default SystemDetails;
