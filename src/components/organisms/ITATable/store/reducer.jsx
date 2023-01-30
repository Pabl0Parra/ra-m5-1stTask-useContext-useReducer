/* eslint-disable no-nested-ternary */
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
  SET_SORT_TABLE: 'SET_SORT_TABLE',
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

    case Actions.SET_SORT_TABLE: {
      const { data, columns } = state
      const dataArray = Object.values(data)
      const { columnId, sortBy, sortDirection } = action.payload

      if (!columns.find((column) => column.id === columnId).isSortable) {
        return state
      }
      console.log(state)

      const sortedData = dataArray.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return sortDirection === 'asc' ? -1 : 1
        }
        if (a[sortBy] > b[sortBy]) {
          return sortDirection === 'asc' ? 1 : -1
        }
        return 0
      })

      return createNextState(state, (draft) => {
        draft.data = sortedData
        draft.sortBy = columnId
        draft.sortDirection =
          columnId === sortBy
            ? sortDirection === 'asc'
              ? 'desc'
              : 'asc'
            : 'asc'
      })
    }

    default:
      return state
  }
}
