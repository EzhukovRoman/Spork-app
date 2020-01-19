import { createStore, action, Action } from 'easy-peasy'
import { PAGE_SEARCH, PAGE_SELECT_DEPS } from './constants/pageNameConstants'
import { ITheme, white } from './styles/themes'

// const changePage = useStoreActions(actions => actions.page.setPage)

interface IPageModel {
  currentPage: string
  setPage: Action<IPageModel, string>
}
interface IThemeModel {
  currentTheme: ITheme
  setTheme: Action<IPageModel, string>
}
interface IRepoModel {
  repository: string
  setRepo: Action<IPageModel, string>
}

const pageModel: IPageModel = {
  currentPage: PAGE_SELECT_DEPS,
  setPage: action((state, payload) => {
    state.currentPage = payload
  })
}

const repoModel: IRepoModel = {
  repository: '',
  setRepo: action((state, payload) => {
    state.repository = payload
  })
}

const themeModel: IThemeModel = {
  currentTheme: white,
  setTheme: action((state, payload) => {
    state.currentTheme = payload
  })
}

const storeModel = {
  page: pageModel,
  theme: themeModel,
  repo: repoModel,
}

export const store = createStore(storeModel)
