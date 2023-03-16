const SystemStats = ({ system }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <img
        src={`/img/systems/${system.systemSlug}.png`}
        alt={system.systemSlug}
        className="grid-item flex mb-5 w-[90%] rounded-xl place-self-center"
      ></img>
      <div class="grid-item overflow-x-auto shadow-md  w-[80%] rounded-xl h-fit flex justify-center mt-5 mb-5 place-self-center">
        <table className="text-md text-left text-gray-500 dark:text-gray-400 w-full place-self-center">
          <tbody>
            {[
              ["Class", system.class],
              ["Catalog", system.catalog],
              ["Temperature", system.temperature],
              ["Mass", system.mass],
              ["Radius", system.radius],
              ["Magnitude", system.magnitude],
              ["Planets", system.planetCount],
              ["Moons", system.moonCount],
              ["Outposts", system.outpostCount],
            ].map(([title, value]) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={title}
              >
                <th
                  scope="row"
                  className="px-6 pt-[0.3rem] pb-[0.3rem] font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {title}
                </th>
                <td className="px-6 pt-[0.3rem] pb-[0.3rem]">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemStats;
