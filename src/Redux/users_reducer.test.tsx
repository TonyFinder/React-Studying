import React from 'react';
import {
    follow,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleDisableButton,
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
    isFetch: false,
    toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: false,
        toggledButton: [5, 7, 13]
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
        isFetch: true,
        toggledButton: [5, 7, 13]
    })
})

test('Disabled button', () => {
    let endStateDisableAdd = usersReducer(beginUsers, toggleDisableButton(true, 34))
    let endStateDisableDelete = usersReducer(beginUsers, toggleDisableButton(false, 7))

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
        isFetch: false,
        toggledButton: [5, 7, 13]
    })
    expect(endStateDisableAdd).toEqual({
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
        isFetch: false,
        toggledButton: [5, 7, 13, 34]
    })
    expect(endStateDisableDelete).toEqual({
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
        isFetch: false,
        toggledButton: [5, 13]
    })
})