import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionPropsType, profilePagePropsType} from '../../Redux/Store';

type ProfileProps = {
    profilePage: profilePagePropsType
    dispatch: (action: ActionPropsType) => void
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

export default Profile;