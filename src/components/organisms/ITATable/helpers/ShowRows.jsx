/* eslint-disable import/named */
import React, { useContext } from 'react'
import { TableContext } from '../store/context'
import { Select, SelectOption } from '../../../atoms'
import { SpanStyled } from '../styles'

const options = [
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
]

function ShowRows() {
  const { state, dispatch } = useContext(TableContext)
  const { rowsPerPage } = state.tablePagination

  const handleSelectChange = (event) => {
    const { value } = event.target
    dispatch({ type: 'SET_ROWSPERPAGE', payload: Number(value) })
  }

  return (
    <div style={{ display: 'flex' }}>
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
    </div>
  )
}

export default ShowRows
