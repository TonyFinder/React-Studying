import React from 'react';
import Profile from './Profile';
import axios, {AxiosResponse} from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {changeLoader, ProfilePropsType, setProfile} from '../../Redux/profile_reducer';

type MapStateToPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfilePropsType) => void
    changeLoader: (isFetching: boolean) => void
}
export type ProfileMainPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileAPI extends React.Component<ProfileMainPropsType, ProfilePropsType>{
    componentDidMount() {
        this.props.changeLoader(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
            .then((response: AxiosResponse) => {
                this.props.changeLoader(false)
                this.props.setProfile(response.data)
            })
    }

    render() {
        return <Profile profilePage={this.props.profilePage} isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

export const ProfileContainer = connect(mapStateToProps, {setProfile, changeLoader})(ProfileAPI)