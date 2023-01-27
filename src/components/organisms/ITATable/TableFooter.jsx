import TablePagination from './TablePagination'
import ShowRows from './helpers/ShowRows'

export default function TableFooter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TablePagination />
      <ShowRows />
    </div>
  )
}
