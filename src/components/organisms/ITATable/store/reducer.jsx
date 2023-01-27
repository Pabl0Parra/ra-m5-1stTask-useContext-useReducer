import { createNextState } from '@reduxjs/toolkit'

export const initialState = {
  data: [],
  columns: [],
  isLoading: false,
  tablePagination: {
    currentPage: 1,
    rowsPerPage: 10,
  },
  sortBy: null,
  sortDirection: 'asc',
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  SET_SORTBY: 'SET_SORTBY',
  SET_SORTDIRECTION: 'SET_SORTDIRECTION',
  SET_CURRENTPAGE: 'SET_CURRENTPAGE',
  SET_ROWSPERPAGE: 'SET_ROWSPERPAGE',
  SET_LOADING: 'SET_LOADING',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.SET_SORTBY:
      return createNextState(state, (draft) => {
        draft.sortBy = action.payload
      })

    case Actions.SET_SORTDIRECTION:
      return createNextState(state, (draft) => {
        draft.sortDirection = action.payload
      })

    case Actions.SET_CURRENTPAGE:
      return createNextState(state, (draft) => {
        draft.tablePagination.currentPage = action.payload
      })

    case Actions.SET_ROWSPERPAGE:
      return createNextState(state, (draft) => {
        draft.tablePagination.rowsPerPage = action.payload
      })

    case Actions.SET_LOADING:
      return createNextState(state, (draft) => {
        draft.isLoading = action.payload
      })

    default:
      return state
  }
}
