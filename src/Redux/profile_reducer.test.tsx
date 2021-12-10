import React from 'react';
import {addPostAC, newPostTextAC, ProfilePagePropsType, profileReducer} from './profile_reducer';

test("Changing text for new post", () => {
    let beginState: ProfilePagePropsType = {
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool'
    }

    let endState = profileReducer(beginState, newPostTextAC("New post - it is me!"))

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'New post - it is me!'
    })
    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool'
    })
})

test("Adding a new post", () => {
    let beginState: ProfilePagePropsType = {
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool'
    }

    let endState = profileReducer(beginState, addPostAC())

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20},
            {id: 3, message: 'It-world is cool', likesNumber: 0}
        ],
        newPost: ''
    })
    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool'
    })
})