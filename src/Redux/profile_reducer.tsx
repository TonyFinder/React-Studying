import {ActionPropsType, profilePagePropsType} from './Store';

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const newPostTextAC = (message: string) => ({type: 'NEW-POST-TEXT', message: message} as const)

export const profileReducer = (state: profilePagePropsType, action: ActionPropsType) => {
    switch (action.type) {
        case 'NEW-POST-TEXT':
            state.newPost = action.message
            return state
        case 'ADD-POST':
            state.posts.push({id: state.posts.length + 1, message: state.newPost, likesNumber: 0})
            state.newPost = ""
            return state
        default:
            return state
    }
}