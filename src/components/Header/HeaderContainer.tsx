import React from 'react';
import Header from './Header';
import axios, {AxiosResponse} from 'axios';
import {AppStateType} from '../../Redux/redux-store';
import {AuthLoginStatePropsType, setAuthUserData} from '../../Redux/auth_reducer';
import {connect} from 'react-redux';

class HeaderAPI extends React.Component<AuthPropsType, AuthLoginStatePropsType> {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me',
                {withCredentials: true})
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }
    render() {
        return <Header {...this.props}/>
    }
}


type MapDispatchToProps = {
    setAuthUserData: (data: AuthLoginStatePropsType) => void
}
type AuthPropsType = ReturnType<typeof mapStateToProps> & MapDispatchToProps

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPI)