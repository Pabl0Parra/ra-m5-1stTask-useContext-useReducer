/* eslint-disable import/named */

import { Button, Icon } from '../../../atoms'
import { SpanStyled } from '../styles'

function DownloadFile({ originalColumns, newColumns, data, showNewTable }) {
  const handleDownload = () => {
    let headers = originalColumns
    if (showNewTable) {
      headers = newColumns
    }
    const headerRow = headers.map((header) => header.label).join(',')

    const rows = data.map((row) =>
      headers.map((header) => row[header.id]).join(','),
    )
    const csvContent = `${headerRow}\n${rows.join('\n')}`
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    if (showNewTable) {
      link.setAttribute('download', 'districtdData.csv')
    } else {
      link.setAttribute('download', 'data.csv')
    }
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  }
  return (
    <Button style={{ backgroundColor: '#20db43' }} onClick={handleDownload}>
      <SpanStyled>
        <Icon color="white" icon="system_update_alt" />
        Descargar
      </SpanStyled>
    </Button>
  )
}
export default DownloadFile
