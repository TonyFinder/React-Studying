import React from 'react';
import p from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}

export default MyPosts;