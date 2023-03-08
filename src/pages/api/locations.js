import { supabase } from "./supabase";

export async function getAllSystems() {
  const systems = await supabase.from("systems_test").select("*");
  return systems;
}

export async function getAllPlanets() {
    const planets = await supabase.from("planets_test").select("*");
    return planets;
}

export async function getAllMoons() {
    const moons = await supabase.from("moons_test").select("*");
    return moons;
}

export async function getAllLocations(searchQuery) {
    const { data: systems } = await getAllSystems();
    const { data: planets } = await getAllPlanets();
    const { data: moons} = await getAllMoons();

    const locations = systems.map(system => ({
      id: system.id,
      name: system.name,
      type: 'system',
      slug: system.slug,
    }));

    planets.forEach(planet => {
      locations.push({
        id: planet.id,
        name: planet.name,
        type: 'planet',
        slug: planet.planetSlug,
      })
    })

    moons.forEach(moon => {
      locations.push({
        id: moon.id,
        name: moon.name,
        type: 'moon',
        slug: moon.moonSlug,
      })
    })

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return {
        data: locations.filter((location) =>
          location.name.toLowerCase().includes(query)
        ),
      };
    }

    return {
      data: locations
    };
}

export async function getSystemBySlug(slug) {
  const system = await supabase
    .from("systems_test")
    .select("*")
    .eq("slug", slug);

  return system;
}

export async function getPlanetsBySystemSlug(slug) {
  const planets = await supabase
    .from("planets_test")
    .select("*")
    .eq("systemSlug", slug);

  return planets;
}

export async function getMoonsBySystemSlug(slug) {
    const moons = await supabase
        .from("moons_test")
        .select("*")
        .eq("systemSlug", slug);

    return moons;
}

export async function getPlanetBySlug(slug) {
    const planet = await supabase
        .from("planets_test")
        .select("*")
        .eq("planetSlug", slug);
    
    return planet;

}

export async function getMoonBySlug(slug) {
    const moon = await supabase
        .from("moons_test")
        .select("*")
        .eq("moonSlug", slug);

    return moon;
}

export async function getMoonByPlanetSlug(slug) {
    const moon = await supabase
        .from("moons_test")
        .select("*")
        .eq("planetSlug", slug);

    return moon;
}

