const PlanetDescription = ({ planet }) => {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: planet.description }}></p>
    </div>
  );
};

export default PlanetDescription;
