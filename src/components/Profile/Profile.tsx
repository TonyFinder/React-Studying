import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type postsDataProps = {
    id: number
    message: string
    likesNumber: number
}

let posts: postsDataProps[] = [
    {id: 1, message: "How are you?", likesNumber: 15},
    {id: 2, message: "It is my first message!", likesNumber: 20},
]

const Profile = (props: postsDataProps[]) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={posts}/>
    </div>
}

export default Profile;