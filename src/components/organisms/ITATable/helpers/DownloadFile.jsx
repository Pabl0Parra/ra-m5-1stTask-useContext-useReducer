/* eslint-disable import/named */
import { useContext } from 'react'
import { TableContext } from '../store/context'
import { Button, Icon } from '../../../atoms'
import { ButtonsDivStyled, SpanStyled } from '../styles'

function DownloadFile() {
  const { state } = useContext(TableContext)

  const handleDownload = () => {
    const jsonData = JSON.stringify(state.data)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'data.json'
    link.click()
    link.parentNode.removeChild(link)
  }
  return (
    <ButtonsDivStyled>
      <Button style={{ backgroundColor: '#20db43' }} onClick={handleDownload}>
        <SpanStyled>
          <Icon color="white" icon="system_update_alt" />
          Descargar
        </SpanStyled>
      </Button>
    </ButtonsDivStyled>
  )
}
export default DownloadFile
