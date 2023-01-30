import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, tablePagination } = state
  const { currentPage, rowsPerPage } = tablePagination

  const start = (currentPage - 1) * rowsPerPage
  const end = start + rowsPerPage

  return (
    <tbody>
      {data.slice(start, end).map((d, index) => (
        <tr key={d.id || index}>
          {columns.map((col) => (
            <TableCell key={`${d.id}-${col.id}`}>
              {col.cell ? col.cell(d) : d[col.id]}
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
