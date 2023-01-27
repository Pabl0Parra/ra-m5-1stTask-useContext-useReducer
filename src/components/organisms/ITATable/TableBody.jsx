/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React, { useContext, useCallback } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { data, columns, sortBy, sortDirection } = state

  // Sort the data based on the current sort column and direction
  const sortedData = useCallback(() => {
    if (!sortBy) {
      return data
    }
    return [...data].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === 'asc' ? -1 : 1
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [data, sortBy, sortDirection])

  return (
    <tbody>
      {sortedData().map((d) => (
        <tr key={d.id}>
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
