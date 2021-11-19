import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {profilePagePropsType} from '../../../Redux/State';

type MyPostsProps = {
    profilePage: profilePagePropsType
    addPost: (message: string) => void
    onChangeCallback: (message: string) => void
}

const MyPosts = (props: MyPostsProps) => {

    const addPost = () => {
        props.addPost(props.profilePage.newPost)
    }

    const onChangeTextareaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeCallback(e.currentTarget.value)
    }

    return <div className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.profilePage.newPost} onChange={onChangeTextareaMessage}></textarea>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={p.posts}>
            {props.profilePage.posts.map(post => <Post key={post.id} message={post.message} likesNumber={post.likesNumber}/>)}
        </div>
    </div>
}

export default MyPosts;