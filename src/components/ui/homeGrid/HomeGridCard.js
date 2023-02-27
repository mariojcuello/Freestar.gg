import Link from "next/link";

const HomeGridCard = (props) => {
  return (
    <Link
      className=" border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
      href={props.item.slug}
    >
      <img
        className="h-10 w-10 text-pink-500"
        src={`/svg/${props.item.icon}.svg`}
        alt={props.item.title}
      />
      <div>
        <h2 className="mt-4 text-xl font-bold text-white">{props.item.title}</h2>
        <p className="mt-1 text-sm text-gray-300">{props.item.description}</p>
      </div>
    </Link>
  );
};

export default HomeGridCard;