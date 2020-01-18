import { PAGE_SEARCH } from '../constants/pageNameConstants'

export const initialState = {
  theme: 'white',
  currentPage: PAGE_SEARCH
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'setPageType':
      return {
        ...state,
        сurrentPage: action.newPage
      }

    default:
      return state
  }
}

export default appReducer
