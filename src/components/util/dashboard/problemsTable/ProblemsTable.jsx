import React from "react";
import { useTable } from "react-table";
import ApplicationsProblems from "./../../../../data/ApplicationsProblems.json";
const ProblemsTable = () => {
  const data = React.useMemo(() => ApplicationsProblems, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Application",
        accessor: "applicationName",
      },
      {
        Header: "Version",
        accessor: "version",
      },
      {
        Header: "Problem",
        accessor: "problem",
      },

      {
        Header: "Date",
        accessor: "issuedAt",
      },
      {
        Header: "Office",
        accessor: "office",
      },
      {
        Header: "User",
        accessor: "user",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  console.log(data);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <table {...getTableProps()}>
        {/* table header */}
        <thead {...getTableProps}>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* table data */}
        <tbody {...getTableBodyProps}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td key={index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProblemsTable;
