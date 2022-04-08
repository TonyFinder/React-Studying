import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthLoginStatePropsType = initialState, action: ActionAuthPropsType): AuthLoginStatePropsType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

// actions
export const setAuthUserData = ({id, email, login, isAuth}: AuthLoginStatePropsType) => ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const)

// thunks
export const setAuthUserTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(data => {
        if (data.resultCode === 0) dispatch(setAuthUserData({...data.data, isAuth: true}))
    })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserTC())
            } else {
                dispatch(stopSubmit('login', {_error: (res.data.messages.length > 0) ? res.data.messages[0] : "Some error"}))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
        })
}

// types
export type AuthLoginStatePropsType = typeof initialState
export type ActionAuthPropsType = ReturnType<typeof setAuthUserData>