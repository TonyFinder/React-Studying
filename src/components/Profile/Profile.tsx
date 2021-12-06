import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionProfilePropsType, ProfilePagePropsType} from '../../Redux/profile_reducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfileProps = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionProfilePropsType) => void
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
}

export default Profile;