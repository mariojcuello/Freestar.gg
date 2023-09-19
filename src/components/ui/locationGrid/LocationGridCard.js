import Link from "next/link";

const LocationGridCard = (props) => {
  return (
    <Link
      className=" border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 "
      href={props.item.slug}
    >
      <div className="flex">
        <div className="flex mx-auto gap-4">
          <img
            className="h-12 w-12 text-pink-500 flex  my-3 pt-1 align-middle"
            src={`/svg/${props.item.icon}.svg`}
            alt={props.item.title}
          />
          <h2 className="mt-5 text-3xl font-bold text-white grid-item align-middler">
            {props.item.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default LocationGridCard;
