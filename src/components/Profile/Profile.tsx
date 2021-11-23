import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionProfilePropsType, ProfilePagePropsType} from '../../Redux/profile_reducer';

type ProfileProps = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionProfilePropsType) => void
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

export default Profile;