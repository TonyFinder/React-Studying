import {AppStateType} from './redux-store';

// not grouped
export const getSitebar = (state: AppStateType) => state.sitebar
export const getDialogsPage = (state: AppStateType) => state.dialogsPage
export const isInitialized = (state: AppStateType) => state.app.initialized

// userPage
export const getUsersPage = (state: AppStateType) => state.usersPage
export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const isFetch = (state: AppStateType) => state.usersPage.isFetch
export const getToggledButton = (state: AppStateType) => state.usersPage.toggledButton

// profilePage
export const getProfilePage = (state: AppStateType) => state.profilePage
export const getProfile = (state: AppStateType) => state.profilePage.profile
export const getStatus = (state: AppStateType) => state.profilePage.status
export const isFetching = (state: AppStateType) => state.profilePage.isFetching

// auth
export const getAuth = (state: AppStateType) => state.auth
export const isAuth = (state: AppStateType) => state.auth.isAuth
export const getLogin = (state: AppStateType) => state.auth.login
export const getAuthorizedUserId = (state: AppStateType) => state.auth.id
