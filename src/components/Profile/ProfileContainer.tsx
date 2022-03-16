import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {ProfilePropsType, setProfileTC} from '../../Redux/profile_reducer';
import {Navigate, useLocation, useNavigate, useParams,} from 'react-router-dom';

type MapStateToPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setProfileTC: (userID: number) => void
}
type RouteType = {
    router: { params: { id: number } }
}
export type ProfileMainPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteType

// Кастомный withRouter
function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileAPI extends React.Component<ProfileMainPropsType, ProfilePropsType> {
    componentDidMount = () => {
        let userID = this.props.router.params.id
        if (userID === 1) userID = 2
        this.props.setProfileTC(userID)
    }
    render = () => {
        return this.props.isAuth
            ? <Profile profilePage={this.props.profilePage} isFetching={this.props.isFetching}/>
            : <Navigate to={'/login'}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}

const ProfileWithRouter = withRouter(ProfileAPI)
export const ProfileContainer = connect(mapStateToProps, {setProfileTC})(ProfileWithRouter)