import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container, FlexBox } from '../styles'
import { getAllHouses } from '../store/houses.slice'
import styled from 'styled-components'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span
        style={{
          color:
            row.price > 500000 ? 'red' : row.price < 250000 ? 'green' : null,
        }}
      >
        {row.price}€
      </span>
    ),
  },
  {
    id: 'district',
    label: 'Barrio',
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
]

function Data() {
  // const [mode, setMode] = useState(tableType.LIST_ALL)
  const [currentPage, setCurrentPage] = useState(1)
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { isError, isSuccess, isLoading, hasData } = reqStatus
  const { byId, allIds } = houses
  const dispatch = useDispatch()

  const data = allIds.map((id) => ({ ...byId[id], id }))

  useEffect(() => {
    dispatch(getAllHouses())
  }, [dispatch])

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}
export default Data
