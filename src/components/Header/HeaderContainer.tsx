import React from 'react';
import Header from './Header';
import {AppStateType} from '../../Redux/redux-store';
import {AuthLoginStatePropsType, logoutTC} from '../../Redux/auth_reducer';
import {connect} from 'react-redux';
import {getLogin, isAuth} from '../../Redux/users-selectors';

class HeaderAPI extends React.Component<AuthPropsType, AuthLoginStatePropsType> {
    render = () => <Header {...this.props}/>
}

type MapDispatchToProps = {
    logoutTC: () => void
}
type AuthPropsType = ReturnType<typeof mapStateToProps> & MapDispatchToProps

let mapStateToProps = (state: AppStateType) => ({
  isAuth: isAuth(state),
  login: getLogin(state),
})

export const HeaderContainer = connect(mapStateToProps, {logoutTC})(HeaderAPI)