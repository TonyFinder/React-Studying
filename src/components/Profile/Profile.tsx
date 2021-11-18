import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profilePagePropsType} from '../../Redux/State';

type ProfileProps = {
    profilePage: profilePagePropsType
    addPost: (message: string) => void
    onChangeCallback: (message: string) => void
}

const Profile = (props: ProfileProps) => {
    return <div>
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} onChangeCallback={props.onChangeCallback}/>
    </div>
}

export default Profile;