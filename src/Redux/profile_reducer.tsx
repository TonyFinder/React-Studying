import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {profileAPI} from '../api/api';
import {AxiosResponse} from 'axios';

let initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'How are you?', likesNumber: 15},
        {id: 2, message: 'It is my first message!', likesNumber: 20}
    ],
    profile: {
        aboutMe: 'Samurai',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'IT-INCUBATOR',
        fullName: '',
        userId: 11,
        photos: {
            small: 'https://pickaface.net/gallery/avatar/.2108558ad44e8ac1d.png',
            large: 'https://pickaface.net/gallery/avatar/.2108558ad44e8ac1d.png'
        }
    },
    isFetching: false,
    status: ''
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionProfilePropsType): ProfilePagePropsType => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, posts: [...state.posts, {id: state.posts.length + 1, message: action.newPost, likesNumber: 0}]}
        case 'SET-PROFILE':
            return {...state, profile: action.profile}
        case 'CHANGE-LOADER':
            return {...state, isFetching: action.isFetching}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

// actions
export const addPost = (newPost: string) => ({type: 'ADD-POST', newPost} as const)
export const setProfile = (profile: ProfilePropsType) => ({type: 'SET-PROFILE', profile} as const)
export const changeLoader = (isFetching: boolean) => ({type: 'CHANGE-LOADER', isFetching} as const)
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

// thunks
export const setProfileTC = (userID: number) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(changeLoader(true))
    profileAPI.getProfile(userID)
        .then(data => {
            dispatch(changeLoader(false))
            dispatch(setProfile(data))
        })
}
export const getStatusTC = (userID: number) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    profileAPI.getStatus(userID)
        .then((response: AxiosResponse) => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    profileAPI.updateStatus(status)
        .then((response: AxiosResponse) => {
            if (response.data.resultCode === 0) dispatch(setStatus(status))
        })
}

// types
export type ActionProfilePropsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof changeLoader>
    | ReturnType<typeof setStatus>
export type ProfilePropsType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}
export type PostsPropsType = {
    id: number
    message: string
    likesNumber: number
}
export type ProfilePagePropsType = {
    posts: PostsPropsType[]
    profile: ProfilePropsType
    isFetching: boolean
    status: string
}