import React from 'react';
import Header from './Header';
import {AppStateType} from '../../Redux/redux-store';
import {AuthLoginStatePropsType, setAuthUserTC} from '../../Redux/auth_reducer';
import {connect} from 'react-redux';

class HeaderAPI extends React.Component<AuthPropsType, AuthLoginStatePropsType> {
    componentDidMount() {this.props.setAuthUserTC()}
    render() {
        return <Header {...this.props}/>
    }
}

type MapDispatchToProps = {
    setAuthUserTC: () => void
}
type AuthPropsType = ReturnType<typeof mapStateToProps> & MapDispatchToProps

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserTC})(HeaderAPI)