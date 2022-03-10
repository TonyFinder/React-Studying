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
    items: [] as UsersPropsType[],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
}

export type UsersPagePropsType = typeof initialUsersState

export const followAC = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const setUsersAC = (items: UsersPagePropsType) => ({type: "SET-USERS", items: items} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", totalUsersCount} as const)
export type ActionUsersPropsType = ReturnType<typeof followAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>

export const usersReducer = (state: UsersPagePropsType = initialUsersState, action: ActionUsersPropsType): UsersPagePropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, items: state.items.map(m => m.id === action.userID ? {...m, followed: !m.followed} : m)}
        case "SET-USERS":
            return {...state, items: action.items.items}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}