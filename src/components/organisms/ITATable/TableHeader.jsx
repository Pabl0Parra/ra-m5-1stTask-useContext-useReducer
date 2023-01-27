/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react'
import ResetSort from './helpers/ResetSorting'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, sortBy, sortDirection } = state

  const handleSort = (column) => {
    if (column.id === sortBy) {
      dispatch({ type: 'SET_SORTDIRECTION' })
    } else {
      dispatch({ type: 'SET_SORTBY', payload: column.id })
    }
  }

  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) => (
            <TableCell as="th" key={col.id} onClick={() => handleSort(col)}>
              {col.label}
              {col.id === sortBy && (
                <>
                  {sortDirection === 'asc' ? (
                    <span> &uarr;</span>
                  ) : (
                    <span> &darr;</span>
                  )}
                </>
              )}
              <ResetSort />
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
