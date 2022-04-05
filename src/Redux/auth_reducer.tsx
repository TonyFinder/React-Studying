import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {authAPI} from '../api/api';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type AuthLoginStatePropsType = typeof initialState
export type ActionAuthPropsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (data: AuthLoginStatePropsType) => ({type: 'SET-USER-DATA', data} as const)

export const setAuthUserTC = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) dispatch(setAuthUserData(data.data))
        })
    }

export const authReducer = (state: AuthLoginStatePropsType = initialState, action: ActionAuthPropsType): AuthLoginStatePropsType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
