import React from 'react';
import {AuthLoginStatePropsType, authReducer, setAuthUserData} from './auth_reducer';

const initialState: AuthLoginStatePropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

test('Authorisation', () => {
    type DataType = {
        id: any
        email: any
        login: any
        isAuth: boolean
    }

    const data: DataType = {
        id: 555,
        email: "Tony",
        login: "It's me",
        isAuth: true
    }
    let endState = authReducer(initialState, setAuthUserData(data))

    expect(initialState).toEqual({
        id: null,
        email: null,
        login: null,
        isAuth: false
    })
    expect(endState).toEqual({
        id: 555,
        email: "Tony",
        login: "It's me",
        isAuth: true
    })
})