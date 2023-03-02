import Pagination from "@/components/ui/pagination/Pagination";
import { useState } from "react";
import { sortRows, filterRows, paginateRows } from './helpers'

const FullLocationTable = ({ columns, rows }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});

  const rowsPerPage = 1;

  const filteredRows = filterRows(rows, filters);
  
  const calculatedRows = filteredRows.slice(
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );
  
  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.accessor} className="px-6 py-3">
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {columns.map((column, index) => {
                  if (column.format) {
                    return (
                      <td key={column.accessor} className="px-6 py-4 center">
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

export default FullLocationTable;
