/* eslint-disable import/named */
import { useContext } from 'react'
import { Button, Icon } from '../../../atoms'
import { TableContext } from '../store/context'
import { Actions } from '../store/reducer'

function ResetSort() {
  const { dispatch } = useContext(TableContext)

  const handleReset = () => {
    dispatch({ type: Actions.SET_SORTBY, payload: null })
    dispatch({ type: Actions.SET_SORTDIRECTION, payload: 'asc' })
  }

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      onClick={handleReset}
    >
      <Icon icon="restart_alt" style={{ color: 'black', marginLeft: '2rem' }} />
    </Button>
  )
}

export default ResetSort
