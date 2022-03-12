import {combineReducers, createStore} from 'redux';
import {dialogReducer} from './dialogs_reducer';
import {profileReducer} from './profile_reducer';
import {sitebarReducer} from './sitebar_reducer';
import {usersReducer} from './users_reducer';

export const rootReducers = combineReducers ({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer
})

// Типизация стейта автоматическая.
export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)

// @ts-ignore
window.store = store
