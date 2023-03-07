const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <div className={totalPages <= 1 ? 'hidden' : 'block'}>
    <div className="flex justify-center">
      <div className="flex">
        <button className="flex " disabled={activePage === 1} onClick={() => setActivePage(1)}>
          ⏮️ First
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          ⬅️ Previous
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          Next ➡️
        </button>
        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          Last ⏭️
        </button>
      </div>
      {/* <p className="flex ">
        Page {activePage} of {totalPages}
      </p>
      <p className="flex">
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p> */}
    </div></div>
  );
};

export default Pagination;
