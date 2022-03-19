import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from '../../Redux/profile_reducer';

type ProfileComponentPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileComponentPropsType) => {
    return <div>
        <ProfileInfo profilePage={props.profilePage} isFetching={props.isFetching} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;