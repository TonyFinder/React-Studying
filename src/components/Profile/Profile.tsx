import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profilePagePropsType} from '../../Redux/State';

type ProfileProps = {
    post: profilePagePropsType
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.post}/>
    </div>
}

export default Profile;