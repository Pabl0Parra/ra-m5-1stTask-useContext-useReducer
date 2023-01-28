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
    // Aquí debería de haber un parametro del tipo sort: true, para así indicar que columnas se ordenan
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
