import React, {ChangeEvent} from 'react';
import {ActionProfilePropsType, addPostAC, newPostTextAC, ProfilePagePropsType} from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';

type MyPostsContainerProps = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionProfilePropsType) => void
}

const MyPostsContainer = (props: MyPostsContainerProps) => {
    const addPost = () => props.dispatch(addPostAC())
    const onChangeTextareaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(newPostTextAC(e.currentTarget.value))

    return <MyPosts addPost={addPost} onChangeTextareaMessage={onChangeTextareaMessage} posts={props.profilePage.posts} newPost={props.profilePage.newPost}/>
}

export default MyPostsContainer;