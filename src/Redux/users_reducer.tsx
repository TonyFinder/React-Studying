export type UsersPropsType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

const initialUsersState = {
    items: [] as UsersPropsType[]
}

export type UsersPagePropsType = typeof initialUsersState

export const followAC = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const setUsersAC = (items: UsersPagePropsType) => ({type: "SET-USERS", items: items} as const)
export type ActionUsersPropsType = ReturnType<typeof followAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: UsersPagePropsType = initialUsersState, action: ActionUsersPropsType): UsersPagePropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(m => m.id === action.userID ? {...m, followed: !m.followed} : m)}
        case "SET-USERS":
            return {...state, ...action.items}
        default:
            return state
    }
}