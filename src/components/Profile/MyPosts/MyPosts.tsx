import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';
import {PostsPropsType} from '../../../Redux/profile_reducer';

type MyPostsProps = {
    addPost: () => void
    onChangeTextareaMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newPost: string
    posts: PostsPropsType[]
}

const MyPosts = (props: MyPostsProps) => {
    const addPost = () => props.addPost()
    const onChangeTextareaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChangeTextareaMessage(e)

    return <div className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.newPost} onChange={onChangeTextareaMessage}/>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={p.posts}>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesNumber={post.likesNumber}/>)}
        </div>
    </div>
}

export default MyPosts;