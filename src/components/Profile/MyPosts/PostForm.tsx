import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type MyPostFormPropsType = {
    postCallback: (value: PostFormType) => void
}
export type PostFormType = {
    newPost: string
}

export const MyPostForm = (props: MyPostFormPropsType) => {
    const onSubmit = (formData: PostFormType) => {
        props.postCallback(formData)
    }

    return <div>
        <h3>My post</h3>
        <PostReduxForm onSubmit={onSubmit}/>
    </div>
}

const PostForm = (props: InjectedFormProps<PostFormType>) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPost'} placeholder={'new post'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    </div>
}
const PostReduxForm = reduxForm<PostFormType>({form: 'newPost'})(PostForm)