const LocationCardWrapper = (props) => {
  return (
    <div className="max-w-[85rem] mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-auto ">
      {props.children}
    </div>
  );
};

export default LocationCardWrapper;
