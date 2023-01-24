import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'pablo',
  surnames: {
    first: 'parra',
    second: 'ramírez',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload
    },
    updateFirstSurname(state, action) {
      state.surnames.first = action.payload
    },
    updateSecondSurname(state, action) {
      state.surnames.second = action.payload
    },
  },
})

export const { updateName, updateFirstSurname, updateSecondSurname } =
  userSlice.actions
export default userSlice.reducer
