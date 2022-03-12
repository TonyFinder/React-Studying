import React from 'react';
import {
    follow,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    UsersPagePropsType,
    usersReducer
} from './users_reducer';

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
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetch: false
}

test('Change following status', () => {
    let endUsers = usersReducer(beginUsers, follow(21305))

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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
})

test('Set new Users', () => {
    let addUsers: any = {
        "items": [
            {
                "name": "Abou",
                "id": 2812,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Anna",
                "id": 2152,
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

    let combinedUsers = usersReducer(beginUsers, setUsers(addUsers))

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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
    expect(addUsers).toEqual({
        "items": [
            {
                "name": "Abou",
                "id": 2812,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Anna",
                "id": 2152,
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
                "name": "Abou",
                "id": 2812,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Anna",
                "id": 2152,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
})

test('Set current page', () => {
    let endUsers = usersReducer(beginUsers, setCurrentPage(5))

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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 5,
        isFetch: false
    })
})

test('Set total users count', () => {
    let endUsers = usersReducer(beginUsers, setTotalUsersCount(500))

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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
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
        ],
        pageSize: 100,
        totalUsersCount: 500,
        currentPage: 1,
        isFetch: false
    })
})

test('Fetching activation', () => {
    let endUsers = usersReducer(beginUsers, isFetching(true))

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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: false
    })
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
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetch: true
    })
})