import React from 'react';
import {addPost, changeLoader, newPostText, ProfilePagePropsType, profileReducer, setProfile} from './profile_reducer';

let beginState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'How are you?', likesNumber: 15},
        {id: 2, message: 'It is my first message!', likesNumber: 20}
    ],
    newPost: 'It-world is cool',
    isFetching: false,
    profile: {
        aboutMe: "Samurai",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "IT-INCUBATOR",
        fullName: "",
        userId: 11,
        photos: {
            small: null,
            large: null
        }
    }
}

test("Changing text for new post", () => {
    let endState = profileReducer(beginState, newPostText("New post - it is me!"))

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'New post - it is me!',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
})

test("Adding a new post", () => {
    let endState = profileReducer(beginState, addPost())

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20},
            {id: 3, message: 'It-world is cool', likesNumber: 0}
        ],
        newPost: '',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
})

test('Set a new profile', () => {
    let endState = profileReducer(beginState, setProfile({
        aboutMe: "Tony",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "NEW PROFILE",
        fullName: "",
        userId: 59,
        photos: {
            small: null,
            large: null
        }
    }))

    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: false,
        profile: {
            aboutMe: "Tony",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "NEW PROFILE",
            fullName: "",
            userId: 59,
            photos: {
                small: null,
                large: null
            }
        }
    })
})

test('Setting loading image', () => {
    let endState = profileReducer(beginState, changeLoader(true))

    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: false,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        newPost: 'It-world is cool',
        isFetching: true,
        profile: {
            aboutMe: "Samurai",
            contacts: {
                facebook: "",
                website: null,
                vk: "",
                twitter: "",
                instagram: "",
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "IT-INCUBATOR",
            fullName: "",
            userId: 11,
            photos: {
                small: null,
                large: null
            }
        }
    })
})