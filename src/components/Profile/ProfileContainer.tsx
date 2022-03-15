import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {changeLoader, ProfilePropsType, setProfile} from '../../Redux/profile_reducer';
import {useLocation, useNavigate, useParams,} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type MapStateToPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfilePropsType) => void
    changeLoader: (isFetching: boolean) => void
}
type RouteType = {
    router: {params: {id: number}}
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
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileAPI extends React.Component<ProfileMainPropsType, ProfilePropsType>{
    componentDidMount() {
        let userID = this.props.router.params.id
        if (userID === 1) userID = 2
        this.props.changeLoader(true)
        profileAPI.getProfile(userID)
            .then(data => {
                this.props.changeLoader(false)
                this.props.setProfile(data)
            })
    }

    render() {
        return <Profile profilePage={this.props.profilePage} isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
    }
}

const ProfileWithRouter = withRouter(ProfileAPI)
export const ProfileContainer = connect(mapStateToProps, {setProfile, changeLoader})(ProfileWithRouter)