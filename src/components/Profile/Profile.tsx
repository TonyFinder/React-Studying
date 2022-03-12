import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from '../../Redux/profile_reducer';

type ProfileComponentPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
}

const Profile = (props: ProfileComponentPropsType) => {
    return <div>
        <ProfileInfo profilePage={props.profilePage} isFetching={props.isFetching}/>
        <MyPostsContainer />
    </div>
}

export default Profile;