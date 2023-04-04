import React from "react";
// react table
import { useTable } from "react-table";
// functions
import { getSummary } from "../../../../functions/dashboardFunctions";
// data
import messages from "./../../../../data/messages.json";
const MessageTable = () => {
  const data = React.useMemo(() => messages, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Sender",
        accessor: "sender",
        minWidth: 150,
      },
      {
        Header: "Message",
        accessor: "message",
        minWidth: 300,
        Cell: ({ value }) => getSummary(value, 30),
      },
      {
        Header: "Date",
        accessor: "date",
        minWidth: 120,
      },
      //   TODO: make a function to render attaches correctly
      //   {
      //     Header: "Attach",
      //     accessor: "attach",
      //   },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <table {...getTableProps()} className="w-full">
        {/* header */}
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

export default MessageTable;
