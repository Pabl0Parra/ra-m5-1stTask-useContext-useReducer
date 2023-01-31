/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useContext, useMemo, useCallback } from 'react'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = React.memo(
  ({
    columns,
    data,
    showHeader = true,
    sortBy = '',
    sortDirection = 'asc',
  }) => {
    const { state, dispatch } = useContext(TableContext)

    const dispatchData = useCallback(() => {
      dispatch({ type: Actions.SET_DATA, payload: data })
    }, [data, dispatch])

    const dispatchColumns = useCallback(() => {
      dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    }, [columns, dispatch])

    const dispatchSortBy = useCallback(() => {
      dispatch({ type: Actions.SET_SORTBY, payload: sortBy })
    }, [sortBy, dispatch])

    const dispatchSortDirection = useCallback(() => {
      dispatch({ type: Actions.SET_SORTDIRECTION, payload: sortDirection })
    }, [sortDirection, dispatch])

    const dispatchTablePagination = useCallback(() => {
      dispatch({
        type: Actions.SET_TABLEPAGINATION,
        payload: { currentPage: 1, rowsPerPage: 10 },
      })
    }, [dispatch])

    useEffect(() => {
      dispatchData()
      dispatchColumns()
      dispatchSortBy()
      dispatchSortDirection()
      dispatchTablePagination()
    }, [
      dispatchData,
      dispatchColumns,
      dispatchSortBy,
      dispatchSortDirection,
      dispatchTablePagination,
    ])

    const isLoading = useMemo(() => state.isLoading, [state.isLoading])

    return (
      <>
        {isLoading ? (
          '...loadin'
        ) : (
          <TableStyled>
            {showHeader && <TableHeader />}
            <TableBody />
          </TableStyled>
        )}
      </>
    )
  },
)

export default Table
