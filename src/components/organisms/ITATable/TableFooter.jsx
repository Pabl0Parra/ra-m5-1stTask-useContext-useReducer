import React, { useContext } from 'react'
import { TableContext } from './store/context'
// eslint-disable-next-line import/named
import { Button, Icon, Select, SelectOption } from '../../atoms'
import { StyledTd, SpanStyled } from './styles'

export default function TableFooter() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, rowsPerPage } = state.tablePagination

  const handleSelectChange = (event) => {
    const { value } = event.target
    dispatch({ type: 'SET_ROWSPERPAGE', payload: Number(value) })
  }

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

  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ]

  return (
    <tfoot>
      <tr>
        <StyledTd>
          <Button
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            onClick={() => handlePrev()}
          >
            <Icon style={{ color: 'black' }} icon="arrow_back_ios" />
          </Button>
          <SpanStyled>
            Página {currentPage} de {totalPages}
          </SpanStyled>
          <Button
            style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
            onClick={() => handleNext()}
          >
            <Icon style={{ color: 'black' }} icon="arrow_forward_ios" />
          </Button>
        </StyledTd>
        <td />
        <td />
        <StyledTd>
          <SpanStyled>Mostrar</SpanStyled>
          <Select
            id="select"
            style={{ margin: '0.25rem' }}
            name="select"
            onChange={handleSelectChange}
            value={rowsPerPage}
          >
            {options.map((option) => (
              <SelectOption key={option.value} value={option.value}>
                {option.label}
              </SelectOption>
            ))}
          </Select>
        </StyledTd>
      </tr>
    </tfoot>
  )
}
