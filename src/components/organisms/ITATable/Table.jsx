/* eslint-disable react/prop-types */
/* eslint-disable import/named */
import { useEffect, useContext } from 'react'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled, ButtonsDivStyled, SpanStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import { Button, Icon } from '../../atoms'

function Table({ columns, data, showHeader = true }) {
  const { state, dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
    dispatch({
      type: Actions.SET_TABLEPAGINATION,
      payload: { currentPage: 1, rowsPerPage: 9 },
    })
  }, [data, columns, dispatch])

  const handleDownload = () => {
    const jsonData = JSON.stringify(state.data)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'data.json'
    link.click()
    link.parentNode.removeChild(link)
  }

  return (
    <>
      <ButtonsDivStyled>
        <Button style={{ backgroundColor: '#20db43' }} onClick={handleDownload}>
          <SpanStyled>
            <Icon color="white" icon="system_update_alt" />
            Descargar
          </SpanStyled>
        </Button>
      </ButtonsDivStyled>
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
