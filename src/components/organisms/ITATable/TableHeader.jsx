/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useMemo, useCallback } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Icon } from '../../atoms'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, sortBy, sortDirection } = state
  const filteredColumns = useMemo(
    () => columns.filter((col) => !col.isHidden),
    [columns, sortBy],
  )

  const handleSort = useCallback(
    (column) => {
      dispatch({
        type: 'SET_SORT_TABLE',
        payload: {
          columnId: column.id,
          sortBy,
          sortDirection,
        },
      })
    },
    [dispatch, sortBy, sortDirection],
  )

  return (
    <thead>
      <tr>
        {filteredColumns.map((col) => (
          <TableCell as="th" key={col.id} onClick={() => handleSort(col)}>
            {col.label}
            {col.id === sortBy && col.isSortable === true && (
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

export default React.memo(TableHeader)
