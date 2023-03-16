const MoonStats = ({ moon }) => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <img
      src={`/img/moons/${moon.moonSlug}.png`}
      alt={moon.moonSlug}
      className="grid-item flex mb-5 w-[90%] rounded-xl place-self-center"
    />
      <div class="grid-item overflow-x-auto shadow-md rounded-lg h-fit flex justify-center mt-5">
        <table className="text-md text-left text-gray-500 dark:text-gray-400 w-full place-self-center">
      <tbody>
        {[
          ["Type", moon.type],
          ["Gravity", moon.gravity],
          ["Temperature", moon.temperature],
          ["Atmosphere", moon.atmosphere],
          ["Magnetosphere", moon.magnetosphere],
          ["Fauna", moon.fauna],
          ["Flora", moon.flora],
          ["Water", moon.water],
          ["Outposts", moon.outpostCount],
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
    </table></div>
  </div>
);

export default MoonStats;
