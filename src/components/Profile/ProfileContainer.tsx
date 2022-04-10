import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {getStatusTC, ProfilePropsType, setProfileTC, updateStatusTC} from '../../Redux/profile_reducer';
import {useLocation, useNavigate, useParams,} from 'react-router-dom';
import {compose} from 'redux';
import {Loading} from '../common/Loading/Loading';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getAuthorizedUserId, getProfile, getStatus, isFetching, isInitialized} from '../../Redux/users-selectors';

type MapStateToPropsType = {
    profile: ProfilePropsType
    isFetching: boolean
    status: string
    authorizedUserId: any
    initialized: boolean
}
type MapDispatchToPropsType = {
    setProfileTC: (userID: number) => void
    getStatusTC: (userID: number) => void
    updateStatusTC: (status: string) => void
}
type RouteType = {
    router: { params: { id: number } }
}
export type ProfileMainPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteType

// Кастомный withRouter
export function withRouter(Component: any) {
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
        if (!userID) userID = this.props.authorizedUserId
        this.props.setProfileTC(userID)
        this.props.getStatusTC(userID)
    }
    render = () => {
        if (!this.props.initialized) return <Loading/>
        return <Profile profilePage={this.props.profile} isFetching={this.props.isFetching}
                 status={this.props.status} updateStatus={this.props.updateStatusTC}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
        profile: getProfile(state),
        isFetching: isFetching(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        initialized: isInitialized(state)
})

export default compose<ComponentType>(
    connect(mapStateToProps, {setProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileAPI)