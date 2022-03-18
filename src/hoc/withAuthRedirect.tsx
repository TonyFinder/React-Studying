import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {AppStateType} from '../Redux/redux-store';
import {connect} from 'react-redux';

type MapStateToPropsType = {
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
            return {
                isAuth: state.auth.isAuth
            }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = ({...props}) => {
        let {isAuth, ...restProps} = props

        return !isAuth
            ? <Navigate to={'/login'}/>
            : <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}