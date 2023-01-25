import React, { useContext } from 'react'
import { TableContext } from './store/context'
import TableFooter from './TableFooter'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, tablePagination } = state
  const { currentPage, rowsPerPage } = tablePagination

  const start = (currentPage - 1) * rowsPerPage
  const end = start + rowsPerPage

  return (
    <>
      <tbody>
        {data.slice(start, end).map((d) => (
          <tr key={d.id}>
            {columns
              .filter((col) => !col.isHidden)
              .map((col) => (
                <TableCell key={`${d.id}-${col.id}`}>
                  {col.cell ? col.cell(d) : d[col.id]}
                </TableCell>
              ))}
          </tr>
        ))}
      </tbody>
      <TableFooter />
    </>
  )
}

export default TableBody
