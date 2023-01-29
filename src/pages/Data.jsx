/* eslint-disable no-nested-ternary */
import React from 'react'
import { useFetch } from '../hooks'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import { urls } from '../constants'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
    isSortable: true,
  },
  {
    id: 'price',
    label: 'Precio',
    isSortable: true,
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
    isSortable: true,
  },
  {
    id: 'city',
    label: 'Ciudad',
    isSortable: true,
  },
  {
    id: 'type',
    label: 'Tipo',
    isSortable: true,
  },
]

function Data() {
  const { data } = useFetch(urls.houses)
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}
export default Data
