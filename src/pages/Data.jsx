import React from 'react'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { Container } from '../styles'

const columns = [
  {
    id: 'name',
    label: 'Nombre',
  },
  {
    id: 'surnames',
    label: 'Apellidos',
  },
  {
    id: 'age',
    label: 'Edad',
    cell: (row) => (
      <span style={{ color: row.age > 50 ? 'green' : 'red' }}>{row.age}</span>
    ),
  },
  {
    id: 'occupation',
    label: 'Ocupación',
  },
]

const data = [
  {
    id: 1,
    name: 'Juan',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 2,
    name: 'Pedro',
    surnames: 'Gomez',
    age: 75,
    occupation: 'Developer',
  },
  {
    id: 3,
    name: 'Maria',
    surnames: 'Gonzalez',
    age: 45,
    occupation: 'Developer',
  },
  {
    id: 4,
    name: 'Luis',
    surnames: 'Garcia',
    age: 35,
    occupation: 'Developer',
  },
  {
    id: 5,
    name: 'Ana',
    surnames: 'Martinez',
    age: 55,
    occupation: 'Developer',
  },
  {
    id: 6,
    name: 'Jose',
    surnames: 'Lopez',
    age: 65,
    occupation: 'Developer',
  },
  {
    id: 7,
    name: 'Luisa',
    surnames: 'Perez',
    age: 25,
    occupation: 'Developer',
  },
  {
    id: 8,
    name: 'Alvaro',
    surnames: 'Ramirez',
    age: 75,
    occupation: 'Developer',
  },
  {
    id: 9,
    name: 'Laura',
    surnames: 'Centellas',
    age: 55,
    occupation: 'Developer',
  },
  {
    id: 10,
    name: 'Rosa',
    surnames: 'Garcia',
    age: 35,
    occupation: 'Developer',
  },
  {
    id: 11,
    name: 'Luis',
    surnames: 'Rivas',
    age: 31,
    occupation: 'Developer',
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
