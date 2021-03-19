import * as React from 'react';
import { useTable, Column } from 'react-table';

interface Props {}

interface TableData {
  thisistheway: string;
  col2: string;
}

export const Table: React.FC<Props> = () => {
  const data = React.useMemo<TableData[]>(
    () => [
      {
        thisistheway: 'Hello',
        col2: 'World',
      },
      {
        thisistheway: 'Row 2',
        col2: 'Row 2 col 2',
      },
      {
        thisistheway: 'Let me',
        col2: 'move you',
      },
    ],
    [],
  );

  const columns = React.useMemo<Column<TableData>[]>(
    () => [
      {
        Header: 'Column 1',
        accessor: 'thisistheway',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
