import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profilePagePropsType} from '../../Redux/State';

type ProfileProps = {
    post: profilePagePropsType
    addPost: (message: string) => void
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.post} addPost={props.addPost}/>
    </div>
}

export default Profile;