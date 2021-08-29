import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {postsDataProps} from '../../index';

type ProfileProps = {
    post: postsDataProps[]
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.post}/>
    </div>
}

export default Profile;