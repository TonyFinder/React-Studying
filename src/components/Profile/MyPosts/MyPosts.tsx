import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts = (props: MyPostsPropsType) => {
    const addPost = () => props.addPost()
    const onChangeTextareaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChangeTextareaMessage(e.currentTarget.value)

    return <div className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.profilePage.newPost} onChange={onChangeTextareaMessage}/>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={p.posts}>
            {props.profilePage.posts.map(post => <Post key={post.id} message={post.message} likesNumber={post.likesNumber}/>)}
        </div>
    </div>
}

export default MyPosts;