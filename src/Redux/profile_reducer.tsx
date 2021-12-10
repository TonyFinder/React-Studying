export type ProfilePagePropsType = {
    posts: PostsPropsType[]
    newPost: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesNumber: number
}

let initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'How are you?', likesNumber: 15},
        {id: 2, message: 'It is my first message!', likesNumber: 20}
    ],
    newPost: 'It-world is cool'
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const newPostTextAC = (message: string) => ({type: 'NEW-POST-TEXT', message: message} as const)

export type ActionProfilePropsType = ReturnType<typeof addPostAC> | ReturnType<typeof newPostTextAC>

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionProfilePropsType): ProfilePagePropsType => {
    switch (action.type) {
        case 'NEW-POST-TEXT':
            let newState = {...state}
            newState.newPost = action.message
            return newState
        case 'ADD-POST':
            let newPost = {...state}
            newPost.posts = state.posts.map(m => m)
            newPost.posts.push({id: state.posts.length + 1, message: state.newPost, likesNumber: 0})
            newPost.newPost = ""
            return newPost
        default:
            return state
    }
}