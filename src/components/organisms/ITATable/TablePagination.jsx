import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button, Icon } from '../../atoms'
import { SpanStyled } from './styles'

export default function TablePagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, rowsPerPage } = state.tablePagination

  const totalPages = Math.ceil(state.data.length / rowsPerPage)

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <Button
        disabled={currentPage === 1}
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          visibility: currentPage === 1 ? 'hidden' : 'visible',
        }}
        onClick={() => handlePrev()}
      >
        <Icon style={{ color: 'black' }} icon="arrow_back_ios" />
      </Button>
      <SpanStyled>
        Página {currentPage} de {totalPages}
      </SpanStyled>
      <Button
        disabled={currentPage === totalPages}
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          visibility: currentPage === totalPages ? 'hidden' : 'visible',
        }}
        onClick={() => handleNext()}
      >
        <Icon style={{ color: 'black' }} icon="arrow_forward_ios" />
      </Button>
    </div>
  )
}
