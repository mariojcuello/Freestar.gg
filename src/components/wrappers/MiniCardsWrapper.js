const MiniCardsWrapper = (props) => {
  return (
    <div className="max-w-[85rem] flex overflow-auto snap-x gap-10 mt-9 mb-2 px-8 lg:mt-8 mx-auto ">
      {props.children}
    </div>
  );
};

export default MiniCardsWrapper;
