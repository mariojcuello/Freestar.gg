const Heading = (props) => {
  return (
    <div className="max-w-[85rem] px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
      <h1 className="md:text-4xl text-3xl font-bold mb-2">{props.children}</h1>
    </div>
  );
};

export default Heading;
