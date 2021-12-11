import React from 'react';
import {followAC, setUsersAC, UsersPagePropsType, usersReducer} from './users_reducer';

test('Change following status', () => {
    let beginUsers: UsersPagePropsType = {
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: false,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    }

    let endUsers = usersReducer(beginUsers, followAC(3))

    expect(endUsers).toEqual({
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: true,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    })
    expect(beginUsers).toEqual({
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: false,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    })
})

test('Set new Users', () => {
    let beginUsers: UsersPagePropsType = {
        users: []
    }
    let addUsers: UsersPagePropsType = {
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: false,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    }

    let combinedUsers = usersReducer(beginUsers, setUsersAC(addUsers))

    expect(beginUsers).toEqual({
        users: []
    })
    expect(addUsers).toEqual({
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: false,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    })
    expect(combinedUsers).toEqual({
        users: [
            {
                id: 1,
                follow: false,
                name: 'Alex',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Russia', city: 'Moscow'},
                status: 'I am fine!'
            },
            {
                id: 2,
                follow: true,
                name: 'Anton',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'Canada', city: 'Calgary'},
                status: 'Everything is ok!'
            },
            {
                id: 3,
                follow: false,
                name: 'Anna',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg',
                location: {country: 'USA', city: 'Dallas'},
                status: 'Life is good!'
            }
        ]
    })
})