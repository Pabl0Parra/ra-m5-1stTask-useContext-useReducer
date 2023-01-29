/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
// eslint-disable-next-line import/no-useless-path-segments
import { Icon } from '../../../components/atoms'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, sortBy, sortDirection } = state

  const handleSort = (column) => {
    dispatch({
      type: 'SET_SORT_TABLE',
      payload: {
        columnId: column.id,
        sortBy,
        sortDirection,
      },
    })
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
                    <Icon style={{ color: 'black' }} icon="arrow_drop_up" />
                  ) : (
                    <Icon style={{ color: 'black' }} icon="arrow_drop_down" />
                  )}
                </>
              )}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
