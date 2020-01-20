import { createStore, action, Action } from 'easy-peasy'
import { PAGE_SEARCH, PAGE_SELECT_DEPS } from './constants/pageNameConstants'
import { ITheme, white } from './styles/themes'

// const changePage = useStoreActions(actions => actions.page.setPage)

const dummyList: string[] = [
  'test/foo',
  'test/bar',
  'test/baz',
  'test/a',
  'test/b',
  'test/c',
  'test/r',
  '@ass/auth'
]

interface IPageModel {
  currentPage: string
  setPage: Action<IPageModel, string>
}
interface IUserModel {
  token?: string
  setToken: Action<IUserModel, string>
}
interface IThemeModel {
  currentTheme: ITheme
  setTheme: Action<IThemeModel, string>
}
interface IRepoModel {
  repository: string
  dependencies: string[]
  dependenciesSelected: string[]
  setRepo: Action<IRepoModel, string>
  setDependencies: Action<IRepoModel, string>
  addDependency: Action<IRepoModel, string>
  removeDependency: Action<IRepoModel, string>
}

const pageModel: IPageModel = {
  currentPage: PAGE_SELECT_DEPS,
  setPage: action((state, payload) => {
    state.currentPage = payload
  })
}

const userModel: IUserModel = {
  token: undefined,
  setToken: action((state, payload) => {
    state.token = payload
  })
}

const repoModel: IRepoModel = {
  repository: '',
  dependencies: dummyList,
  dependenciesSelected: [],
  setRepo: action((state, payload) => {
    state.repository = payload
  }),
  setDependencies: action((state, payload) => {
    state.dependencies = payload
  }),
  addDependency: action((state, payload) => {
    state.dependenciesSelected.push(payload)
    console.log(state.dependenciesSelected)
  }),
  removeDependency: action((state, payload) => {
    state.dependenciesSelected = state.dependenciesSelected.filter(el => el !== payload)
    console.log(state.dependenciesSelected)
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
  user: userModel
}

export const store = createStore(storeModel)
