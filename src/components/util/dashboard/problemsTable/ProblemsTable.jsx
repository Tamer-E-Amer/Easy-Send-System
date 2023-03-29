import React from "react";
import { useTable } from "react-table";
import ApplicationsProblems from "./../../../../data/ApplicationsProblems.json";
const ProblemsTable = () => {
  // get summary of the problem subject
  const getSummary = (problem) => {
    if (problem) return `${problem.substr(0, 30)} ...`;
  };

  const data = React.useMemo(() => ApplicationsProblems, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        minWidth: 30,
      },
      {
        Header: "Application",
        accessor: "applicationName",
        minWidth: 120,
      },
      // {
      //   Header: "Version",
      //   accessor: "version",
      //   minWidth: 30,
      // },
      {
        Header: "Problem",
        accessor: "problem",
        minWidth: 280,
        Cell: ({ value }) => getSummary(value),
      },

      {
        Header: "Date",
        accessor: "issuedAt",
        minWidth: 120,
      },
      {
        Header: "Office",
        accessor: "office",
        minWidth: 150,
      },
      {
        Header: "User",
        accessor: "user",
        minWidth: 150,
      },
      {
        Header: "Status",
        accessor: "status",
        minWidth: 90,
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
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              key={index}
              {...headerGroup.getHeaderGroupProps()}
              className="shadow-md"
            >
              {headerGroup.headers.map((column, index) => (
                <th
                  key={index}
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth },
                  })}
                  className="table-hd"
                >
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
              <tr key={index} {...row.getRowProps()} className="table-row">
                {row.cells.map((cell, index) => (
                  <td key={index} {...cell.getCellProps()} className="table-td">
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
