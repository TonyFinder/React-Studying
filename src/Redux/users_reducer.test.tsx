import React from 'react';
import {followAC, setUsersAC, UsersPagePropsType, usersReducer} from './users_reducer';

test('Change following status', () => {
    let beginUsers: UsersPagePropsType = {
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    }

    let endUsers = usersReducer(beginUsers, followAC(21305))

    expect(endUsers).toEqual({
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": true
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    })
    expect(beginUsers).toEqual({
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    })
})

test('Set new Users', () => {
    let beginUsers: UsersPagePropsType = {
        items: []
    }
    let addUsers: UsersPagePropsType = {
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    }

    let combinedUsers = usersReducer(beginUsers, setUsersAC(addUsers))

    expect(beginUsers).toEqual({
        items: []
    })
    expect(addUsers).toEqual({
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    })
    expect(combinedUsers).toEqual({
        "items": [
            {
                "name": "merkuriy7",
                "id": 21306,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "darkgoanna",
                "id": 21305,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "ron1888",
                "id": 21304,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "butrik",
                "id": 21303,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ]
    })
})