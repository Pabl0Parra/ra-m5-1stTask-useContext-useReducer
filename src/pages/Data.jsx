/* eslint-disable no-nested-ternary */
import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'
import data from '../../data'

const columns = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price > 500000 ? 'red' : null }}>
        {row.price}
      </span>
    ),
  },
  {
    id: 'neighborhood',
    label: 'Barrio',
  },
  {
    id: 'seller',
    label: 'Vendedor',
  },
  {
    id: 'numberOfRooms',
    label: 'N.Habitaciones',
  },
  {
    id: 'hasElevator',
    label: '¿Ascensor?',
  },
  {
    id: 'description',
    label: 'Descripción',
  },
]

function Data() {
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}
export default Data
