/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default */
import React, { useState, useMemo } from 'react'
import { useFetch } from '../hooks'
// eslint-disable-next-line import/no-named-as-default-member
import DownloadFile from '../components/organisms/ITATable/helpers/DownloadFile'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { colors, Container } from '../styles'
import { urls } from '../constants'
import { Button } from '../components/atoms'

const originalColumns = [
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

const newColumns = [
  {
    id: 'district',
    label: 'District',
    isSortable: true,
  },
  {
    id: 'quantity',
    label: 'Quantity',
    isSortable: true,
  },
  {
    id: 'meanPrice',
    label: 'Mean Price',
    isSortable: true,
  },
  {
    id: 'maxPrice',
    label: 'Max Price',
    isSortable: true,
  },
]

function Data() {
  const { data } = useFetch(urls.houses)
  const [activeButton, setActiveButton] = useState('Viviendas')
  const [showNewTable, setShowNewTable] = useState(false)

  const newData = useMemo(() => {
    const dataMap = new Map()
    data.forEach((cur) => {
      const { district } = cur
      if (!dataMap.has(district)) {
        dataMap.set(district, {
          district,
          quantity: 1,
          meanPrice: cur.price,
          maxPrice: cur.price,
        })
      } else {
        const found = dataMap.get(district)
        found.quantity++
        found.meanPrice =
          (found.meanPrice * (found.quantity - 1) + cur.price) / found.quantity
        found.maxPrice = Math.max(found.maxPrice, cur.price)
      }
    })
    return Array.from(dataMap.values())
  }, [data])

  return (
    <Body>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
          marginRight: '2rem',
          gap: '1rem',
        }}
      >
        <Button
          style={{
            height: '48px',
            backgroundColor:
              activeButton === 'Viviendas' ? '#f7efef' : `${colors.blue}`,
          }}
          onClick={() => {
            setShowNewTable(false)
            setActiveButton('Viviendas')
          }}
        >
          <span
            style={{
              color: activeButton === 'Viviendas' ? 'black' : '#ffffff',
            }}
          >
            Viviendas
          </span>
        </Button>
        <Button
          style={{
            height: '48px',
            backgroundColor:
              activeButton === 'Barrio' ? '#f7efef' : `${colors.blue}`,
          }}
          onClick={() => {
            setShowNewTable(true)
            setActiveButton('Barrio')
          }}
        >
          <span
            style={{ color: activeButton === 'Barrio' ? 'black' : '#ffffff' }}
          >
            Barrio
          </span>
        </Button>
        <DownloadFile
          originalColumns={originalColumns}
          data={data}
          newColumns={newColumns}
          showNewTable={showNewTable}
        />
      </div>
      <Container style={{ marginTop: '2rem' }}>
        {showNewTable ? (
          <ITATable columns={newColumns} data={newData} />
        ) : (
          <ITATable columns={originalColumns} data={data} />
        )}
      </Container>
    </Body>
  )
}

export default React.memo(Data)
