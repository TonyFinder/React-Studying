import {AnyAction} from 'redux';
import {setAuthUserTC} from './auth_reducer';
import {ThunkDispatch} from 'redux-thunk';

let initialState = {
    initialized: false
}

export const appReducer = (state: AppStatePropsType = initialState, action: ActionAuthPropsType): AppStatePropsType => {
    switch (action.type) {
        case 'INITIALIZE-USER':
            return {...state, initialized: true}
        default:
            return state
    }
}

// actions
export const initializeAC = () => ({type: 'INITIALIZE-USER'} as const)

// thunks
export const initializeTC = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    let promise = dispatch(setAuthUserTC())
    Promise.all([promise])
        .then(()=> {
            dispatch(initializeAC())
        })
}

// types
export type AppStatePropsType = typeof initialState
export type ActionAuthPropsType = ReturnType<typeof initializeAC>