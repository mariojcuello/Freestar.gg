import Pagination from "@/components/ui/pagination/Pagination";
import { useState } from "react";
import { sortRows, filterRows, paginateRows } from "./helpers";
import { useMemo } from "react";

const SortingLocationTable = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: "asc", orderBy: "id" });
  const rowsPerPage = 3;

  const filteredRows = useMemo(
    () => filterRows(rows, filters),
    [rows, filters]
  );
  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = (value, accessor) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value,
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor,
    }));
  };

  const clearAll = () => {
    setSort({ order: "asc", orderBy: "id" });
    setActivePage(1);
    setFilters({});
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column, index) => {
              const sortIcon = () => {
                if (column.accessor === sort.orderBy) {
                  if (sort.order === "asc") {
                    return "↑";
                  }
                  return "↓";
                } else {
                  return "️↕";
                }
              };
              const isLastColumn = index === columns.length - 1;
              return (
                <th key={column.accessor} className="px-3 py-3">
                  {column.label}
                  {!isLastColumn && (
                    <button
                      className="ml-2"
                      onClick={() => handleSort(column.accessor)}
                    >
                      {sortIcon()}
                    </button>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {columns.map((column, index) => {
                  if (column.format) {
                    return (
                      <td key={column.accessor} className="px-6 py-3 center">
                        {column.format(row[column.accessor])}
                      </td>
                    );
                  }
                  return (
                    <td className="px-6 py-4" key={column.accessor}>
                      {row[column.accessor]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      ></Pagination>
    </div>
  );
};

export default SortingLocationTable;
