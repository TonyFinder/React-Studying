import React from 'react';
import p from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    type postsDataProps = {
        id: number
        message: string
        likesNumber: number
    }

    let postsData: postsDataProps[] = [
        {id: 1, message: "How are you?", likesNumber: 15},
        {id: 2, message: "It is my first message!", likesNumber: 20},
]

    return <div  className={p.description}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={p.posts}>
            <Post message={postsData[0].message} likesNumber={postsData[0].likesNumber}/>
            <Post message={postsData[1].message} likesNumber={postsData[1].likesNumber}/>
        </div>
    </div>
}

export default MyPosts;