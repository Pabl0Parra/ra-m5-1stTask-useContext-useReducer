import TablePagination from './TablePagination'
import ShowRows from './helpers/ShowRows'

export default function TableFooter() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        height: 40,
      }}
    >
      <TablePagination />
      <ShowRows />
    </div>
  )
}
