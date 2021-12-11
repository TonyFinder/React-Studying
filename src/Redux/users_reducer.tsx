export type UsersPropsType = {
    id: number
    follow: boolean
    name: string
    image: string
    location: {
        country: string
        city: string
    }
    status: string
}

const initialUsersState = {
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
}

export type UsersPagePropsType = typeof initialUsersState

export const followAC = (userID: number) => ({type: "FOLLOW", userID: userID} as const)
export const setUsersAC = (users: UsersPagePropsType) => ({type: "SET-USERS", users: users} as const)
export type ActionUsersPropsType = ReturnType<typeof followAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: UsersPagePropsType = initialUsersState, action: ActionUsersPropsType): UsersPagePropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, follow: !m.follow} : m)}
        case "SET-USERS":
            return {...state, ...action.users}
        default:
            return state
    }
}