import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {postsDataProps} from '../Profile';

type MyPostsProps = {
    posts: postsDataProps[]
}

const MyPosts = (props: MyPostsProps) => {

    return <div  className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            {props.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber}/>)}
            {/*{props.map(post => <Post message={post.message} likesNumber={post.likesNumber}/>)}*/}
        </div>
    </div>
}

export default MyPosts;