export async function getAllLocations(searchQuery) {
  const { data: systems } = await getAllSystems();
  const { data: planets } = await getAllPlanets();
  const { data: moons } = await getAllMoons();

  const locations = systems.map((system) => ({
    id: system.id,
    name: system.name,
    type: "system",
    slug: system.slug,
  }));

  planets.forEach((planet) => {
    locations.push({
      id: planet.id,
      name: planet.name,
      type: "planet",
      slug: planet.planetSlug,
    });
  });

  moons.forEach((moon) => {
    locations.push({
      id: moon.id,
      name: moon.name,
      type: "moon",
      slug: moon.moonSlug,
    });
  });

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    return {
      data: locations.filter((location) =>
        location.name.toLowerCase().includes(query)
      ),
    };
  }

  return {
    data: locations,
  };
}
