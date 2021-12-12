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

/*const initialUsersState = {
    users: [
        {
            id: 1,
            follow: false,
            name: 'Alex',
            image: 'https://st2.depositphotos.com/19115378/44622/v/450/depositphotos_446224558-stock-illustration-vector-icon-cartoon-character-businessman.jpg',
            location: {country: 'Russia', city: 'Moscow'},
            status: 'I am fine!'
        },
        {
            id: 2,
            follow: true,
            name: 'Anton',
            image: 'https://st2.depositphotos.com/19115378/44622/v/450/depositphotos_446224558-stock-illustration-vector-icon-cartoon-character-businessman.jpg',
            location: {country: 'Canada', city: 'Calgary'},
            status: 'Everything is ok!'
        },
        {
            id: 3,
            follow: false,
            name: 'Anna',
            image: 'https://st2.depositphotos.com/19115378/44622/v/450/depositphotos_446224558-stock-illustration-vector-icon-cartoon-character-businessman.jpg',
            location: {country: 'USA', city: 'Dallas'},
            status: 'Life is good!'
        }
    ] as UsersPropsType[]
}*/
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