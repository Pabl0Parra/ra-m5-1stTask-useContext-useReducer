import React, { useState, useEffect } from 'react'
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

function Data() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch('db5-1.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((myJson) => {
        console.log(myJson)
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        <ITATable columns={columns} data={data} />
      </Container>
    </Body>
  )
}
export default Data
