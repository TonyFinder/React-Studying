import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return <div  className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            <Post message="How are you?" likesNumber="15"/>
            <Post message="It is my first message!" likesNumber="20"/>
        </div>
    </div>
}

export default MyPosts;