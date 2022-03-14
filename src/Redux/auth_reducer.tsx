let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export type AuthLoginStatePropsType = typeof initialState

export const setAuthUserData = (data: AuthLoginStatePropsType) => ({type: 'SET-USER-DATA', data} as const)

export type ActionAuthPropsType = ReturnType<typeof setAuthUserData>

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