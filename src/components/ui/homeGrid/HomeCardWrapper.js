const HomeCardWrapper = (props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
      {props.children}
    </div>
  );
};

export default HomeCardWrapper;
