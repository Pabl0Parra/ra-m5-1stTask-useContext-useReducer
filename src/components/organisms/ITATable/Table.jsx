/* eslint-disable react/prop-types */
/* eslint-disable import/named */
import { useEffect, useContext } from 'react'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import DownloadFile from './helpers/DownloadFile'

function Table({ columns, data, showHeader = true }) {
  const { state, dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    dispatch({
      type: Actions.SET_TABLEPAGINATION,
      payload: { currentPage: 1, rowsPerPage: 10 },
    })
  }, [data, columns, dispatch])

  return (
    <>
      <DownloadFile />
      {state.isLoading ? (
        '...loadin'
      ) : (
        <TableStyled>
          {showHeader && <TableHeader />}
          <TableBody />
        </TableStyled>
      )}
    </>
  )
}

export default Table
