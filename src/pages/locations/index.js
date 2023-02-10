import Link from "next/link";
import { supabase } from "../api/supabase";
import { useRouter } from "next/router";
import MainWrapper from "@/components/ui/MainWrapper";
import Heading from "@/components/ui/Heading";

const POPULAR_SYSTEMS = [
  { name: "Sol", systemSlug: "sol", planets: 8, moons: 12 },
  { name: "Alpha Centauri",systemSlug: "alpha-centauri",planets: 4,moons: 8 },
  { name: "Narion", systemSlug: "proxima-centauri", planets: 2, moons: 4 },
];

const SystemPage = () => {
  return (
    <MainWrapper>
      <Heading>Popular Systems</Heading>
      <div className="max-w-[85rem] flex flex-nowrap justify-center gap-10 px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
        {POPULAR_SYSTEMS.map((system) => (
          <Link
            href={{
              pathname: "/locations/[systemID]",
              query: {
                systemID: system.systemSlug
              }
            }}
            key={system.name}
            className="flex bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[22rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/img/sys_holder.png"
              alt={system.name}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {system.name}
              </h5>
              <p className=" font-normal text-gray-700 dark:text-gray-400">
                Planets: {system.planets}
                </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Moons: {system.moons}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </MainWrapper>
  );
};

export default SystemPage;
