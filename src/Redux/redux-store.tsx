import {applyMiddleware, combineReducers, createStore} from 'redux';
import {dialogReducer} from './dialogs_reducer';
import {profileReducer} from './profile_reducer';
import {sitebarReducer} from './sitebar_reducer';
import {usersReducer} from './users_reducer';
import {authReducer} from './auth_reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

export const rootReducers = combineReducers ({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

// Типизация стейта автоматическая.
export type AppStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
