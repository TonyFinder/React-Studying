import {addPostAC, newPostTextAC, ProfilePagePropsType} from '../../../Redux/profile_reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../Redux/redux-store';
import {Dispatch} from 'redux';

type MapToStatePropsType = {
    profilePage: ProfilePagePropsType
}
type MapToDispatchPropsType = {
    addPost: () => void
    onChangeTextareaMessage: (message: string) => void
}
export type MyPostsPropsType = MapToStatePropsType & MapToDispatchPropsType

let MapToStateProps = (state: AppStateType): MapToStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let MapToDispatchProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onChangeTextareaMessage: (message: string) => {
            dispatch(newPostTextAC(message))
        }
    }
}

export const MyPostsContainer = connect(MapToStateProps, MapToDispatchProps)(MyPosts)

export default MyPostsContainer;