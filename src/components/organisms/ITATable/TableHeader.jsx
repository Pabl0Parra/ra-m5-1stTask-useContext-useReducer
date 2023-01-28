/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
// eslint-disable-next-line import/no-useless-path-segments
import { Icon } from '../../../components/atoms'

function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, data, sortBy, sortDirection } = state

  //   Toda esta lógica debe estar en el reducer
  const handleSort = (column) => {
    const dataArray = Object.values(data)
    const sortedData = dataArray.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === 'asc' ? -1 : 1
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    })

    if (column.id === sortBy) {
      dispatch({
        type: 'SET_SORTDIRECTION',
        payload: sortDirection === 'asc' ? 'desc' : 'asc',
      })
    } else {
      dispatch({ type: 'SET_SORTBY', payload: column.id })
      dispatch({ type: 'SET_SORTDIRECTION', payload: 'asc' })
    }
    dispatch({ type: 'SET_DATA', payload: sortedData })
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
