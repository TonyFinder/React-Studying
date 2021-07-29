import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={p.content}>
        <div>
            <img src='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__480.jpg' alt='picture'/>
        </div>
        <div>
            Ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;