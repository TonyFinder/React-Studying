import {combineReducers, createStore } from "redux";
import {dialogReducer} from './dialogs_reducer';
import {profileReducer} from './profile_reducer';
import {sitebarReducer} from './sitebar_reducer';

let reducers = combineReducers ({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sitebar: sitebarReducer
})

export let store = createStore(reducers)