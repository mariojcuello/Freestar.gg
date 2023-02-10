const Heading = (props) => {
  return (
    <div className="max-w-[85rem] px-8 mt-9 mb-2 lg:px-8 lg:mt-8 mx-auto">
      <h1 className="md:text-3xl text-2xl font-bold mb-4">
        {props.children}
      </h1>
    </div>
  );
}

export default Heading;