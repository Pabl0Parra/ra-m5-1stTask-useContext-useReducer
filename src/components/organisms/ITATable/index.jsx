/* eslint-disable import/named */
import React from 'react'
import TableProvider from './store/context'
import Table from './Table'
import TableFooter from './TableFooter'

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
      <TableFooter />
    </TableProvider>
  )
}

export default ITATable
