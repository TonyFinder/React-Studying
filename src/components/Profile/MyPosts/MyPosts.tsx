import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {MyPostForm, PostFormType} from './PostForm';

const MyPosts = (props: MyPostsPropsType) => {
    const addPost = (value: PostFormType) => props.addPost(value.newPost)

    return <div className={p.description}>
        <MyPostForm postCallback={addPost}/>
        <div className={p.posts}>
            {props.profilePage.posts.map(post => <Post key={post.id} message={post.message} likesNumber={post.likesNumber}/>)}
        </div>
    </div>
}

export default MyPosts;