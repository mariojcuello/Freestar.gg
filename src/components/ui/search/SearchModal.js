import { getAllLocations } from "@/pages/api/locations";
import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

const SearchModal = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllLocations();
      setLocations(data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    const filteredResults = locations.filter((location) =>
      location.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredLocations(inputValue.length > 0 ? filteredResults : []);
  };

  if (!props.show) {
    return null;
  }

  const shouldDisplayResults = searchTerm.length > 0;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-modal w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      onClick={props.onClose}
    >
      <div
        className="flex w-full h-full max-w-xl md:h-auto mx-auto pt-[70px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 min-w-full">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Search
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={props.onClose}
            >
              <img src="/svg/close.svg" alt="Close" className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 space-y-6 w-full">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="relative inset-y-7 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src="/svg/search.svg"
                    className="w-5 h-5 absolute"
                    alt="search"
                  />
                </div>
                <input
                  type="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-800 rounded-lg bg-gray-50 focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
                  placeholder="Looking for something specific?"
                  onChange={handleSearch}
                  value={searchTerm}
                />
              </div>
            </form>
          </div>
          {shouldDisplayResults && (
            <ul>
              {filteredLocations.length === 0 ? (
                <li>No results found</li>
              ) : (
                filteredLocations.map((location) => (
                  <SearchResult result={location} key={location.slug}></SearchResult>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
