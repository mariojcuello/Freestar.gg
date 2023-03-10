import Link from "next/link";

const SearchResult = ({ result }) => {
  let href = "";
  let imgSrc = "";

  if (result.type === "system") {
    href = `/locations/system/${result.slug}`;
    imgSrc = `/svg/starsystem.svg`;
  } else if (result.type === "planet") {
    href = `/locations/system/planet/${result.slug}`;
    imgSrc = `/svg/ring_planet.svg`;
  } else if (result.type === "moon") {
    href = `/locations/system/planet/moon/${result.slug}`;
    imgSrc = `/svg/moon.svg`;
  }

  return (
    <Link
      href={href}
      class="flex items-center m-auto my-5 h-auto rounded-lg shadow-2xl flex-row w-[95%] hover:bg-gray-800 bg-gray-700"
    >
      <div className=" p-5">
        <img src={imgSrc} alt="planet" className="h-auto w-10 md:w-14" />
      </div>
      <div class="flex p-2 leading-normal">
        <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-white ">
          {result.name}
        </h5>
      </div>
    </Link>
  );
};

export default SearchResult;
