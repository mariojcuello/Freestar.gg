import Link from "next/link";

const HomeGridCard = (props) => {
  return (
    <Link
      className=" border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 mx-10"
      href={props.item.slug}
    >
      <div className="flex">
        <img
          className="h-10 w-10 text-pink-500 flex mr-5 my-3 align-middle"
          src={`/svg/${props.item.icon}.svg`}
          alt={props.item.title}
        />
        <h2 className="mt-5 text-xl font-bold text-white grid-item align-middler">
          {props.item.title}
        </h2>
      </div>

      <div>
        <p className="mt-1 text-sm text-gray-300">{props.item.description}</p>
      </div>
    </Link>
  );
};

export default HomeGridCard;
