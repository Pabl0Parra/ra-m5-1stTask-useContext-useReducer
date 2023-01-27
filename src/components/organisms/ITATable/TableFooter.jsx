import styled from 'styled-components'
import TablePagination from './TablePagination'
import ShowRows from './helpers/ShowRows'

const TableFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

function TableFooter() {
  return (
    <TableFooterStyled>
      <TablePagination />
      <ShowRows />
    </TableFooterStyled>
  )
}

export default styled(TableFooter)``
