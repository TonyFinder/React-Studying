import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {getStatusTC, ProfilePropsType, setProfileTC, updateStatusTC} from '../../Redux/profile_reducer';
import {useLocation, useNavigate, useParams,} from 'react-router-dom';
import {compose} from 'redux';
import {Loading} from '../common/Loading/Loading';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
    profilePage: ProfilePropsType
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
        return <Profile profilePage={this.props.profilePage} isFetching={this.props.isFetching}
                 status={this.props.status} updateStatus={this.props.updateStatusTC}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        initialized: state.app.initialized
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {setProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileAPI)