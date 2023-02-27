import { useState } from "react";
import MoonsTab from "./MoonsTab";
import StatsTab from "../StatsTab";

const PlanetTabMenu = (props) => {
  const [activeTab, setActiveTab] = useState("stats");

  const tabClickHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 mb-5">
        <ul className=" justify-center md:justify-start flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <button
              onClick={() => tabClickHandler("stats")}
              className={
                activeTab == "stats"
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              <svg
                fill="currentcolor"
                viewBox="0 5 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className={
                  activeTab == "stats"
                    ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                    : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }
              >
                <path d="M697.051429 674.157714c-29.622857 0-59.245714 11.922286-83.017143 23.917715L412.013714 542.866286c5.924571-17.92 11.849143-35.84 11.849143-59.757715 0-23.917714-5.851429-41.837714-11.849143-59.757714l194.413715-149.430857c17.773714 17.92 47.469714 29.842286 77.165714 29.842286a147.456 147.456 0 0 0 148.406857-149.430857A147.456 147.456 0 0 0 683.52 4.900571 147.456 147.456 0 0 0 535.259429 154.331429c0 29.915429 11.849143 59.830857 23.698285 83.675428L382.317714 369.517714c-29.696-35.84-65.316571-59.757714-106.788571-65.755428v-65.755429c53.394286-11.922286 89.014857-59.757714 89.014857-113.517714 0-65.828571-53.394286-119.588571-118.710857-119.588572S127.122286 58.733714 127.122286 124.489143c0 53.76 35.547429 101.595429 89.014857 113.517714v65.828572C127.122286 321.682286 61.805714 393.362286 61.805714 483.035429s65.316571 161.426286 148.406857 173.348571v65.755429c-53.394286 11.922286-89.088 59.757714-89.088 113.590857 0 65.755429 53.394286 119.515429 118.710858 119.515428s118.784-53.76 118.784-119.515428c0-53.833143-35.620571-101.668571-89.088-113.590857v-65.755429c41.545143-5.997714 83.090286-29.915429 106.861714-65.755429l196.022857 149.211429c-11.849143 23.917714-23.698286 53.76-23.698286 83.675429 0 83.675429 65.316571 149.430857 148.406857 149.430857a147.456 147.456 0 0 0 148.406858-149.430857 147.456 147.456 0 0 0-148.48-149.430858zM683.666286 64.658286c47.469714 0 89.014857 41.910857 89.014857 89.673143 0 47.835429-41.545143 89.673143-89.014857 89.673142-47.542857 0-89.088-41.837714-89.088-89.673142 0-47.762286 41.545143-89.673143 89.088-89.673143z m-441.782857 300.032c62.244571 0 116.736 54.857143 116.736 117.467428 0 62.683429-54.491429 117.467429-116.662858 117.467429s-116.662857-54.857143-116.662857-117.467429c0-62.610286 54.418286-117.467429 116.662857-117.467428z m-61.293715-240.201143c0-35.84 23.771429-59.830857 59.318857-59.830857 35.620571 0 59.392 23.917714 59.392 59.830857 0 35.84-23.771429 59.757714-59.392 59.757714-35.547429 0-59.318857-23.917714-59.318857-59.757714z m118.710857 717.238857c0 35.84-23.771429 59.830857-59.392 59.830857-35.547429 0-59.318857-23.917714-59.318857-59.830857 0-35.84 23.771429-59.757714 59.318857-59.757714 35.620571 0 59.392 23.917714 59.392 59.757714z m397.897143 71.533714c-47.542857 0-89.014857-41.837714-89.014857-89.673143s41.545143-89.673143 89.014857-89.673142c47.542857 0 89.014857 41.837714 89.014857 89.673142s-41.545143 89.673143-89.014857 89.673143z" />
              </svg>
              <div className="hidden md:block">Statistics</div>
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => tabClickHandler("moons")}
              className={
                activeTab == "moons"
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  activeTab == "moons"
                    ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                    : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }
                fill="currentColor"
                viewBox="0 -2 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,2A5.006,5.006,0,0,1,7,8a4.976,4.976,0,0,1-2.625-.759A8.993,8.993,0,0,1,12,3Zm0,18a8.976,8.976,0,0,1-8.5-11.944A6.968,6.968,0,0,0,7,10a7,7,0,0,0,6.988-6.771A9,9,0,0,1,12,21ZM15,9a4,4,0,1,0,4,4A4,4,0,0,0,15,9Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,15,15Zm-5,2a1,1,0,1,1-1-1A1,1,0,0,1,10,17Z" />
              </svg>
              <div className="hidden md:block">Moons</div>
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => tabClickHandler("outposts")}
              className={
                activeTab == "outposts"
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  activeTab == "outposts"
                    ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                    : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }
                fill="currentColor"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M408.7 31l-15.4 414h45.4L423.3 31zm-51 32l23 23-23 23h30.1l1.7-46zm84.8 0l1.7 46h30.1l-23-23 23-23zm-56.6 95c-19 27-44.3 42.7-74.3 52.1-39.7 12.5-87.8 13.2-137.8 11.4 24.6 1.8 45.6 8.4 63 18.3 28.1-1.2 55.2-4.6 80.2-12.5 25.5-8 48.6-21 67.9-40.5zm-252.7 83.1c-30.9 5-53.17 18.7-69.5 36.9h44.8c6.4-13.6 14.6-26.1 24.7-36.9zm53.6 0c10.1 10.8 18.3 23.3 24.7 36.9h44.8c-16.3-18.2-38.6-31.9-69.5-36.9zm-26.8.1c-12.8 9.7-23.1 22.3-31.1 36.8h62.2c-8-14.5-18.3-27.1-31.1-36.8zM50.2 296c-7.2 11.5-12.64 24.1-16.58 37h58.02c2.23-12.8 5.34-25.2 9.46-37zm70.3 0c-4.5 11.6-8 24-10.5 37h100c-2.5-13-6-25.4-10.5-37zm98.4 0c4.1 11.8 7.2 24.2 9.5 37h58c-3.9-12.9-9.4-25.5-16.6-37zM29.06 351c-2.08 10.3-3.31 20.4-3.77 30h61.83c.23-10 .86-20.1 1.97-30zm78.14 0c-1.1 9.8-1.8 19.9-2.1 30h109.8c-.3-10.1-1-20.2-2.1-30zm123.7 0c1.1 9.9 1.7 20 2 30h61.8c-.5-9.6-1.7-19.7-3.8-30zM25 399v46h103v18H25v30h174v-80h66v80h30v-94zm192 32v62h30v-62zm160 32v30h78v-30z" />
              </svg>
              <div className="hidden md:block">Outposts</div>
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => tabClickHandler("resources")}
              className={
                activeTab == "resources"
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  activeTab == "resources"
                    ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                    : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }
                fill="currentColor"
                viewBox="0 -2 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.022 7.57l-1.085 0.672-0.638 4.16-0.001 0.002 2.392-3.692zM17.176 13.044l-4.91-1.623-1.362 0.841 0.897 1.080zM12.916 4.884c0.199-0.111 0.367-0.269 0.483-0.471 0.404-0.701 0.048-1.664-0.796-2.151s-1.856-0.314-2.26 0.386c-0.117 0.202-0.17 0.426-0.166 0.655-2.892-1.297-6.034-1.598-8.557-0.37 6.565 1.888 12.005 5.305 16.746 9.674-0.665-3.046-2.783-5.805-5.451-7.723zM8.636 6.416l-7.023 12.172c0.521 0.857 1.287 1.552 2.592 1.498l7.023-12.172c-0.798-0.574-1.666-1.068-2.592-1.498zM25.291 12.093l-11.3 3.489-2.641 5.171 13.511 9.812 5.526-15.689z"></path>
              </svg>
              <div className="hidden md:block">Resources</div>
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => tabClickHandler("people")}
              className={
                activeTab == "people"
                  ? "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }
            >
              <svg
                aria-hidden="true"
                className={
                  activeTab == "people"
                    ? "w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                    : "w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }
                fill="currentColor"
                viewBox="5 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />{" "}
              </svg>
              <div className="hidden md:block">People</div>
            </button>
          </li>
        </ul>
      </div>
      <StatsTab location={props.planet} activeTab={activeTab} />
      <MoonsTab planet={props.planet} activeTab={activeTab} />
    </div>
  );
};

export default PlanetTabMenu;
