import React from 'react';
import {addPost, changeLoader, ProfilePagePropsType, profileReducer, setProfile, setStatus} from './profile_reducer';

let beginState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'How are you?', likesNumber: 15},
        {id: 2, message: 'It is my first message!', likesNumber: 20}
    ],
    isFetching: false,
    status: "This status is from initial State from profile",
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

test("Adding a new post", () => {
    let endState = profileReducer(beginState, addPost("Hello"))

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20},
            {id: 3, message: 'Hello', likesNumber: 0}
        ],
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: true,
        status: "This status is from initial State from profile",
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
test("Change status of profile", () => {
    let endState = profileReducer(beginState, setStatus("I was changed! It's your status :)"))

    expect(beginState).toEqual({
        posts: [
            {id: 1, message: 'How are you?', likesNumber: 15},
            {id: 2, message: 'It is my first message!', likesNumber: 20}
        ],
        isFetching: false,
        status: "This status is from initial State from profile",
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
        isFetching: false,
        status: "I was changed! It's your status :)",
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